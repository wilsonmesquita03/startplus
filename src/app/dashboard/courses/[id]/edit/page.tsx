import { Edit } from "@/components/forms/course";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Cursos | Escola START",
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const course = await prisma.course.findUnique({
    where: {
      id: Number((await params).id)
    }
  })

  if (!course) {
    return redirect("/404")
  }

  const editAction = async (formData: FormData) => {
    "use server"

    const data = {
      title: formData.get("title") as string,
      type: formData.get("type") as "online" | "video" | "text",
      seo: formData.get("seo") as string | null,
      description: formData.get("description") as string,
      slug: formData.get("slug") as string,
      defaultSales: Number(formData.get("defaultSales")),
      price: Number(formData.get("price")),
    };

    await prisma.course.update({
      where: {
        id: course.id
      },
      data
    })

    redirect("/dashboard/courses")
  }

  return (
    <>
      <Edit course={course} action={editAction} />
    </>
  );
}