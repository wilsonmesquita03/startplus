import Footer from "@/components/footer";
import Header from "@/components/header";
import { renderContent } from "@/hooks/render-content";
import prisma from "@/lib/prisma";

export default async function CoursePage({ slug }: { slug: string }) {
  const course = await prisma.course.findUnique({
    where: {
      slug
    },
    include: {
      modules: {
        include: {
          lessons: {
            orderBy: {
              order: "asc"
            }
          }
        },
        orderBy: {
          order: "asc"
        }
      }
    }
  });

  if (!course) {
    return <p className="text-red-500">Curso não encontrado</p>;
  }

  // Definindo o preço final (considerando o preço promocional, se houver)
  const finalPrice = course.promotionalPrice ?? course.price;

  return (
    <div className="bg-white">
      <Header />
      <div className="container py-28">
        <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-2">Módulos do Curso</h2>
          {course.modules.map((module) => (
            <div key={module.id} className="mb-4 border-b pb-2">
              <h3 className="text-lg font-medium">{module.title}</h3>
              <ul className="list-disc pl-5">
                {module.lessons.map((lesson) => (
                  <li key={lesson.id} className="text-gray-600">
                    {lesson.title} ({lesson.type})
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-gray-700 mb-4">
          {renderContent(JSON.parse(course.description as string))}
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-2">Preço</h2>
          <p className="text-lg text-gray-800">
            {course.promotionalPrice ? (
              <>
                <span className="line-through text-red-500 mr-2">
                  R${course.price.toFixed(2)}
                </span>
                <span className="text-green-500">R${finalPrice.toFixed(2)}</span>
              </>
            ) : (
              `R$${course.price.toFixed(2)}`
            )}
          </p>
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Comprar Agora
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
