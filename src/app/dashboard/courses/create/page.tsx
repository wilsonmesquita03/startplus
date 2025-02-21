import { Create } from "@/components/forms/course"
import prisma from "@/lib/prisma";

export const metadata = {
  title: "Criar Curso | Escola START",
}

export default function Page() {
  async function create(formData: FormData) {
    "use server";

    const data = {
      title: formData.get("title") as string,
      type: formData.get("type") as "online" | "video" | "text",
      seo: formData.get("seo") as string | null,
      description: formData.get("description") as string,
      slug: formData.get("slug") as string,
      defaultSales: Number(formData.get("defaultSales")),
      price: Number(formData.get("price")),
    };

    await prisma.course.create({
      data
    })

  }

  return <Create action={create} />
}
