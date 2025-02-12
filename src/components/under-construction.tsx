import Link from "next/link"

export const UnderConstruction = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
      <div className="text-center p-8 shadow-lg w-full h-full flex flex-col items-center justify-center bg-gray-900">
        <div className="text-yellow-500 text-6xl">🚧</div>
        <h1 className="text-3xl font-bold mt-4 text-white">Página em Construção</h1>
        <p className="text-gray-300 mt-2">
          Estamos trabalhando para trazer algo incrível para você. Volte em breve!
        </p>
        <Link href="/" className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Voltar para a Home
        </Link>
      </div>
    </div>
  )
}