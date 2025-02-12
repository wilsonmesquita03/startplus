import VimeoPlayer from "@/components/vimeo-player";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ id: string, slug: string }> }) {
  const { id, slug } = await params

  const data = await prisma.courseLesson.findFirst({
    where: {
      id: Number(id),
      courseModule: {
        course: {
          slug
        }
      }
    }
  })

  if (!data) {
    redirect("/404")
  }

  return (
    <VimeoPlayer src={data?.vimeoId || ""} title={data?.title} />
  )
}