import LandingPageComponents from "@/components/landing-components";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const course = await prisma.course.findUnique({
    where: {
      slug: params.slug
    },
    select: {
      id: true,
      slug: true
    }
  })

  if (!course) redirect('/404')

  // Buscar os dados da página de aterrissagem e seus componentes
  const landingPage = await prisma.courseLandingPage.findUnique({
    where: { id: course.id },
    include: { components: { orderBy: { order: "asc" } } },
  });

  if (!landingPage) {
    // Redirecionar para a página padrão de cursos caso não houver lp

    return <div className="tw-text-center tw-text-red-600 tw-text-xl">Página não encontrada</div>;
  }

  // Passar os componentes para o novo componente de renderização
  return <LandingPageComponents components={landingPage.components} />;
}