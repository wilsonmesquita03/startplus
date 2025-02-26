import LandingPageComponents from "@/components/landing-components";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import DefaultPage from "./default-page";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const course = await prisma.course.findUnique({
    where: {
      slug: slug
    },
    select: {
      id: true,
      slug: true
    }
  })

  if (!course) {
    return notFound();
  }

  // Buscar os dados da página de aterrissagem e seus componentes
  const landingPage = await prisma.courseLandingPage.findUnique({
    where: { id: course.id },
    include: { components: { orderBy: { order: "asc" } } },
  });

  if (!landingPage) {
    // Redirecionar para a página padrão de cursos caso não houver lp

    return <DefaultPage slug={slug} />
  }

  // Passar os componentes para o novo componente de renderização
  return <LandingPageComponents components={landingPage.components} />;
}