"use client"
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link, { LinkProps } from 'next/link';
import Image from 'next/image';


import { ComponentPropsWithoutRef } from "react";
type LinkStyledProps = LinkProps & ComponentPropsWithoutRef<"a">;

const Footer = () => {
  const LinkStyled = ({ href, children, ...props }: LinkStyledProps) => (
    <Link href={href} {...props} className={`hover:text-[#0297E7] ${props.className || ""}`}>
      {children}
    </Link>
  );
  return (
    <footer className="w-full relative overflow-x-hidden bg-[#101010]">
      <div className="container w-full relative z-10 p-5 box-border">
        <div className="mx-auto text-white px-4">
          {/* Cabeçalho: em telas pequenas, empilha; em telas médias para cima, posiciona em linha */}
          <div className="header flex justify-between items-center gap-4 py-10">
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
                <LinkStyled
                  href="https://api.whatsapp.com/send/?phone=5521997078330&amp;text&amp;type=phone_number&amp;app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-2"
                >
                  +55 (21) 99707-8330
                </LinkStyled>
                <LinkStyled
                  href="mailto:secretariaescolar@escolastart.plus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm"
                >
                  secretariaescolar@escolastart.plus
                </LinkStyled>
                <div className="social flex flex-wrap gap-2">
                  <LinkStyled
                    href="https://www.instagram.com/escola.start/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon />
                  </LinkStyled>
                  <LinkStyled
                    href="https://www.facebook.com/canaisstart"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon />
                  </LinkStyled>
                  <LinkStyled
                    href="https://www.youtube.com/@_escolastart"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <YouTubeIcon />
                  </LinkStyled>
                  <LinkStyled
                    href="https://www.linkedin.com/company/canaisstart?originalSubdomain=br"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon />
                  </LinkStyled>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-bold">Institucional</p>
              <div className="flex flex-col gap-2">
                <LinkStyled href="/about" className="text-sm">
                  Sobre a Escola START
                </LinkStyled>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-bold">Link</p>
              <div className="flex flex-col gap-2">
                <LinkStyled href="/" className="text-sm">
                  Home
                </LinkStyled>
                <LinkStyled href="/courses" className="text-sm">
                  Cursos
                </LinkStyled>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-bold">Informações</p>
              <div className="flex flex-col gap-2">
                <LinkStyled href="/terms/privacy" className="text-sm">
                  Políticas de Privacidade
                </LinkStyled>
                <LinkStyled href="/terms" className="text-sm">
                  Termos de Uso
                </LinkStyled>
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
