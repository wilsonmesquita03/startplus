import { Edit } from "@/components/forms/course";
import prisma from "@/lib/prisma";
import { protectedRoute } from "@/lib/protect-route";
import { notFound, redirect } from "next/navigation";
import DragDrop from "./dragdrop";

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
      id: Number(formData.get("id")),
      title: formData.get("title") as string,
      type: formData.get("type") as "online" | "video" | "text",
      seo: formData.get("seo") as string | null,
      description: formData.get("description") as string,
      slug: formData.get("slug") as string,
      defaultSales: Number(formData.get("defaultSales")),
      price: Number(formData.get("price")),
      hasCertificate: Boolean(formData.get("hasCertificate")),
      hasForum: Boolean(formData.get("hasForum")),
      hasSuport: Boolean(formData.get("hasSuport")),
      hasSubscription: Boolean(formData.get("hasSubscription")),
      private: Boolean(formData.get("private")),
    };

    const course = await prisma.course.findUnique({
      where: {
        id: data.id
      },
      select: {
        id: true
      }
    })

    if (!course) {
      throw new Error("Curso não encontrado")
    }

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
      <DragDrop defaultValue={course} />
    </>
  );
}