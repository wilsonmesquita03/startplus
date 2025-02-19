import './globals.css';
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { SessionProvider } from './session-provider';
import { getSession } from '@/lib/session';

const getMontserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Escola START",
  description: "Bem-vindo à Escola START, sua plataforma de cursos online para capacitação profissional em business, marketing e tecnologia. Com nossa metodologia exclusiva, o Método START, você adquire habilidades práticas e certificações reconhecidas. Inscreva-se hoje e dê um salto na sua carreira!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession()

  return (
    <html lang="en" data-toolpad-color-scheme="dark">
      <body
        className={`${getMontserrat.variable} antialiased`}
      >
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
