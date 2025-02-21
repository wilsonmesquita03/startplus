import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata = {
  title: "Página não encontrada | Escola START",
}

export default async function NotFound() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center text-gray-800">
        <div className="text-center my-32">
          <Image width={264} height={264} src="/store/1/default_images/404.svg" alt="404 Not Found" className="mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-red-600">Página não encontrada</h2>
          <p className="mt-2 text-lg text-gray-600">Desculpa, essa página não está disponível.</p>
          <p className="mt-4">
            <Link href="/blog" className="text-blue-500 hover:underline">View all posts</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
