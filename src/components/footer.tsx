"use client"
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full relative overflow-x-hidden">
      <div className="bg-[#101010] w-full relative z-10 p-5 box-border">
        <div className="mx-auto text-white px-4">
          {/* Cabeçalho: em telas pequenas, empilha; em telas médias para cima, posiciona em linha */}
          <div className="header flex flex-col md:flex-row md:justify-between items-center gap-4 py-10">
            <Image
              width={100}
              height={150}
              className="w-[150px] h-[50px] object-contain max-w-full"
              src="/assets/default/img/home/logo.svg"
              alt="Logo Escola Start"
            />
            <Image
              width={100}
              height={150}
              className="w-[100px] h-[25px] md:w-[150px] md:h-[50px] object-contain max-w-full"
              src="/assets/default/img/home/microsoft.svg"
              alt="Microsoft"
            />
          </div>
          {/* Grid de links: 1 coluna em telas pequenas, 2 colunas em md e 4 em lg */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-bold">Contate-nos</p>
              <div className="flex flex-col gap-2">
                <p className="text-sm">Rua Sacadura Cabral, 379</p>
                <p className="text-sm">Rio de Janeiro CEP 23455-000</p>
                <a
                  href="https://api.whatsapp.com/send/?phone=5521997078330&amp;text&amp;type=phone_number&amp;app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-2"
                >
                  +55 (21) 99707-8330
                </a>
                <a
                  href="mailto:secretariaescolar@escolastart.plus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm"
                >
                  secretariaescolar@escolastart.plus
                </a>
                <div className="social flex flex-wrap gap-2">
                  <a
                    href="https://www.instagram.com/escola.start/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href="https://www.facebook.com/canaisstart"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href="https://www.youtube.com/@_escolastart"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <YouTubeIcon />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/canaisstart?originalSubdomain=br"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-bold">Institucional</p>
              <div className="flex flex-col gap-2">
                <a href="/about" className="text-sm">
                  Sobre a Escola START
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-bold">Link</p>
              <div className="flex flex-col gap-2">
                <Link href="/" className="text-sm">
                  Home
                </Link>
                <Link href="/classes" className="text-sm">
                  Cursos
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-bold">Informações</p>
              <div className="flex flex-col gap-2">
                <Link href="/pages/policy" className="text-sm">
                  Políticas de Privacidade
                </Link>
                <Link href="/pages/terms" className="text-sm">
                  Termos de Uso
                </Link>
              </div>
            </div>
          </div>
          {/* Rodapé */}
          <div className="footer w-full p-4">
            <p className="text-center text-sm text-white">
              Powered By <strong>Escola Start</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
