import { Edit } from "@/components/forms/course";
import prisma from "@/lib/prisma";
import { protectedRoute } from "@/lib/protect-route";
import { notFound, redirect } from "next/navigation";

interface Module {
  id: number;
  title: string | null;
  courseId: number;
  order: number; // Ordem de exibição
  lessons: Lesson[];
}

interface Lesson {
  id: number;
  title: string | null;
  content: string | null;
  vimeoId: string | null;
  courseModuleId: number;
  type: "Lecture" | "Quizz" | "Text";
  order: number; // ordem de exibição
}

export const metadata = {
  title: "Cursos | Escola START",
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  await protectedRoute("create_courses")

  const course = await prisma.course.findUnique({
    where: {
      id: Number((await params).id)
    },
    include: {
      modules: {
        include: {
          lessons: true
        }
      }
    }
  })

  if (!course) {
    return notFound();
  }

  const editAction = async (formData: FormData) => {
    "use server";

    await protectedRoute("create_courses")

    const data = {
      title: formData.get("title") as string,
      type: formData.get("type") as "online" | "video" | "text",
      seo: formData.get("seo") as string | null,
      description: formData.get("description") as string,
      slug: formData.get("slug") as string,
      defaultSales: Number(formData.get("defaultSales")),
      price: Number(formData.get("price")),
      courseData: JSON.parse(formData.get("courseData") as string || "[]") as {
        id: number;
        modules: Module[]
      },
      hasCertificate: Boolean(formData.get("hasCertificate")),
      hasForum: Boolean(formData.get("hasForum")),
      hasSuport: Boolean(formData.get("hasSuport")),
      hasSubscription: Boolean(formData.get("hasSubscription")),
      private: Boolean(formData.get("private")),
    };

    const course = await prisma.course.findUnique({
      where: {
        id: data.courseData.id
      },
      include: {
        modules: {
          include: {
            lessons: true
          }
        }
      }
    })

    if (!course) {
      throw new Error("Curso não encontrado")
    }

    const existingModuleIds = new Set(course.modules.map(m => m.id));
    const receivedModules = data.courseData.modules

    // **Atualizar e criar módulos**
    const moduleUpdates = receivedModules.map(async (module) => {
      if (module.id && existingModuleIds.has(module.id)) {
        return prisma.courseModule.update({
          where: { id: module.id },
          data: {
            title: module.title || "",
            order: module.order,
            lessons: {
              upsert: module.lessons.map(lesson => ({
                where: { id: lesson.id ?? 0 },
                update: {
                  title: lesson.title || "",
                  content: lesson.content,
                  vimeoId: lesson.vimeoId,
                  type: lesson.type,
                  order: lesson.order,
                },
                create: {
                  title: lesson.title || "",
                  content: lesson.content || "",
                  vimeoId: lesson.vimeoId,
                  type: lesson.type,
                  order: lesson.order,
                },
              })),
            },
          },
        });
      } else {
        return prisma.courseModule.create({
          data: {
            title: module.title || "",
            order: module.order,
            courseId: course.id,
            lessons: {
              create: module.lessons.map(lesson => ({
                title: lesson.title || "",
                content: lesson.content,
                vimeoId: lesson.vimeoId,
                type: lesson.type,
                order: lesson.order,
              })),
            },
          },
        });
      }
    });

    // **Identificar e remover módulos ausentes**
    const receivedModuleIds = new Set(receivedModules.map(m => m.id));
    const modulesToDelete = course.modules.filter(m => !receivedModuleIds.has(m.id));

    // **Atualizar e criar aulas**
    const lessonUpdates = receivedModules.flatMap(module =>
      module.lessons.map(async (lesson) => {
        if (!lesson.id || lesson.id < 0) {
          return prisma.courseLesson.create({
            data: {
              title: lesson.title || "",
              content: lesson.content,
              vimeoId: lesson.vimeoId,
              type: lesson.type,
              order: lesson.order,
              courseModuleId: module.id,
            },
          });
        } else {
          return prisma.courseLesson.update({
            where: { id: lesson.id },
            data: {
              title: lesson.title || "",
              content: lesson.content,
              vimeoId: lesson.vimeoId,
              type: lesson.type,
              order: lesson.order,
            },
          });
        }
      })
    );

    // **Identificar aulas removidas**
    const receivedLessonIds = new Set(
      receivedModules.flatMap(m => m.lessons.map(l => l.id))
    );
    const lessonsToDelete = course.modules.flatMap(m =>
      m.lessons.filter(l => !receivedLessonIds.has(l.id))
    );

    // **Executar operações no banco**
    await Promise.all(moduleUpdates);
    await Promise.all(lessonUpdates);
    await prisma.courseModule.deleteMany({
      where: { id: { in: modulesToDelete.map(m => m.id) } },
    });
    await prisma.courseLesson.deleteMany({
      where: { id: { in: lessonsToDelete.map(l => l.id) } },
    });

    // **Atualiza o curso**
    await prisma.course.update({
      where: { id: course.id },
      data: {
        title: data.title,
        type: data.type,
        seo: data.seo,
        description: data.description,
        slug: data.slug,
        defaultSales: data.defaultSales,
        price: data.price,
      },
    });

    redirect("/dashboard/courses");
  };

  return (
    <>
      <Edit course={course} action={editAction} />
    </>
  );
}