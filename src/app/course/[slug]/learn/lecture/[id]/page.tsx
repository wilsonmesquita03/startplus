import VimeoPlayer from "@/components/vimeo-player";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

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
    return notFound();
  }

  return data.vimeoId ? (
    <VimeoPlayer src={data.vimeoId} title={data.title} />
  ) : (
    <div className="relative w-full pb-[56.25%] bg-black text-white">
      <p className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-2xl font-bold text-center">Tivemos um problema ao carregar o vídeo. Por favor, entre em contato com nosso suporte</p>
    </div>
  )
}