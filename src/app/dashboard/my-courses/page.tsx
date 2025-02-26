import prisma from "@/lib/prisma";
import { getSession } from "@/lib/session";
import Image from "next/image";
import Link from "next/link";
import { unauthorized } from "next/navigation";

export default async function Page() {
  const session = await getSession();

  if (!session.user) {
    return unauthorized();
  }

  const purchases = await prisma.purchase.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      course: {
        include: {
          modules: true,
        },
      },
    },
  });

  return (
    <div className="p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Meus Cursos</h1>
        {
          purchases.length > 0 && (
            <>
              <p className="text-lg">Você possui {purchases.length} curso(s) adquirido(s).</p>
              <p className="text-lg">Horas assistidas: Indisponível no momento</p>
            </>
          )
        }
      </div>
      {
        purchases.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {purchases.map((purchase) => (
              <Link href={`/course/${purchase.course.slug}`} key={purchase.id} className="p-4 border rounded-lg shadow-md">
                {/* Placeholder para imagem do curso */}
                <div className="relative mb-4 h-48 rounded-lg">
                  <Image
                    src="/assets/default/img/placeholder-image.jpg"
                    alt="Imagem do Curso"
                    className="w-full h-full object-cover absolute rounded-lg"
                    fill
                  />
                </div>
                <h2 className="text-xl font-semibold">{purchase.course.title}</h2>
                {/* Placeholder para progresso do curso */}
                <p className="text-sm text-gray-600"><strong>Progresso:</strong> Indisponível no momento</p>
                {/* Placeholder para carga horária */}
                <p className="text-sm text-gray-600"><strong>Carga Horária:</strong> Indisponível no momento</p>
                <div className="mt-4">
                  <h3 className="font-semibold">Módulos:</h3>
                  {purchase.course.modules.length > 0 ? (
                    <ul className="list-disc pl-5">
                      {purchase.course.modules.map((module) => (
                        <li key={module.id} className="text-sm">{module.title}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500">Este curso não tem módulos.</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center flex-col mt-12">
            <div className="mb-6">
              <Image
                src="/assets/default/img/no-results/student.png"
                alt="Sem Cursos"
                width={250}
                height={250}
                className="object-contain"
              />
            </div>
            <div className="text-center mt-6">
              <h2 className="text-2xl font-bold text-gray-800">Nenhum curso adquirido!</h2>
              <p className="mt-2 text-lg text-gray-500">Comece a aprender com os melhores instrutores e aproveite...</p>
              <Link
                href="/courses?sort=newest"
                className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition duration-300"
              >
                Comece a aprender
              </Link>
            </div>
          </div>
        )
      }
    </div>
  );
}
