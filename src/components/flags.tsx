import Image from "next/image";
import Script from "next/script";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Discount = () => (
  <section className="container px-8 md:px-16 lg:px-32">
    <div className="flex flex-col justify-center items-center w-full bg-[#122534] p-8 border-2 border-[#FAFAFA] shadow-custom-shadow rounded">
      <svg width="24" height="24" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 3.81539V1.58789C9.5 1.32267 9.39464 1.06832 9.20711 0.880784C9.01957 0.693247 8.76522 0.587891 8.5 0.587891H1.5C1.23478 0.587891 0.98043 0.693247 0.792893 0.880784C0.605357 1.06832 0.5 1.32267 0.5 1.58789V3.83789C0.500338 3.99308 0.536631 4.14607 0.606032 4.28487C0.675434 4.42368 0.776055 4.54451 0.9 4.63789L4.16687 7.08789L0.9 9.53789C0.776055 9.63127 0.675434 9.7521 0.606032 9.89091C0.536631 10.0297 0.500338 10.1827 0.5 10.3379V12.5879C0.5 12.8531 0.605357 13.1075 0.792893 13.295C0.98043 13.4825 1.23478 13.5879 1.5 13.5879H8.5C8.76522 13.5879 9.01957 13.4825 9.20711 13.295C9.39464 13.1075 9.5 12.8531 9.5 12.5879V10.3604C9.49964 10.2058 9.46365 10.0534 9.39482 9.91495C9.32599 9.77653 9.22617 9.65584 9.10312 9.56226L5.82937 7.08789L9.10312 4.61352C9.22617 4.51994 9.32599 4.39925 9.39482 4.26083C9.46365 4.12241 9.49964 3.96998 9.5 3.81539ZM8.5 1.58789V3.08789H1.5V1.58789H8.5ZM8.5 12.5879H1.5V10.3379L5 7.71289L8.5 10.3598V12.5879Z" fill="#FAFAFA"></path>
      </svg>
      <h2 className="text-xl text-center font-light mt-2.5 text-[#FAFAFA]"><strong className="font-semibold">TEMPO É DINHEIRO: 75%</strong> de desconto em todos os cursos por tempo <strong className="font-semibold">LIMITADO.</strong></h2>
    </div>
  </section>
)

export const About: React.FC = () => (
  <section
    className="my-48"
    style={{
      backgroundImage: "url('https://escolastart.plus/assets/default/img/home/bg-section-home.png')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  >
    <div className="max-w-[1336px] m-auto px-7 py-32 md:py-16 relative grid grid-cols-1 md:[grid-template-columns:2fr_1fr] gap-10">
      <div className="py-7">
        <h2 className="lg:w-3/4 text-2xl md:text-5xl font-light text-[#ffffff] text-center md:text-left mb-6">
          Transformando vidas <strong className="font-semibold">Mudando histórias</strong>
        </h2>
        <span className="text-[#ffffff] font-light text-base text-center">
          Com quase 10 anos de trajetória, a <strong className="font-bold">Escola START</strong> já conta com mais de <strong className="font-bold">520 mil usuários cadastrados</strong> que se beneficiam de uma <strong className="font-bold">metodologia inovadora e acessível</strong>, combinando habilidades essenciais com as competências técnicas mais demandadas pelo mercado de trabalho em <strong className="font-bold">cursos para quem não pode perder tempo.</strong> Somos uma escola disruptiva, reconhecida por nossa cultura e valores com o prêmio Great Places to Work 2024 e também pelo prêmio Exame Negócios em Expansão 2023, reforçando nosso compromisso com o crescimento profissional de nossos alunos.
          <br />
          Aqui, você encontra mais do que cursos: encontra a qualificação profissional que vai <strong className="font-bold">transformar sua história</strong> e trazer uma verdadeira mudança na sua vida.
        </span>
      </div>
      <div className="relative m-auto w-full h-full object-contain max-w-[320px] md:max-w-none">
        <Image
          src="/assets/default/img/home/institucional.png"
          className="absolute left-0 top-0 w-full h-full object-contain"
          alt="institucional"
          fill
        />
      </div>
      <Image
        src="/assets/default/img/home/gptw-certificate.png"
        className="absolute bottom-0 translate-y-1/2 right-7 xl:left-1/2 xl:top-0"
        alt="gp certificate"
        width={180}
        height={100}
      />
    </div>
  </section>
);

export const Clients: React.FC = () => (
  <section className="my-10">
    <div className="col-12 text-center">
      <h2 className="text-2xl font-semibold text-white mb-10">
        ELES CONFIAM NA NOSSA METODOLOGIA
      </h2>
    </div>
    <div className="bg-white overflow-x-hidden">
      <div className="container flex">
        <div className="w-full inline-flex flex-nowrap">
          {[...Array(2)].map((_, index) => (
            <ul
              key={index}
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            >
              {[
                { src: "https://escolastart.s3.sa-east-1.amazonaws.com/plataforma/1/clientes/66c64322a5feb.png", alt: "Sebrae SP" },
                { src: "https://escolastart.s3.sa-east-1.amazonaws.com/plataforma/1/clientes/66c6432098e9f.png", alt: "Sesc" },
                { src: "https://escolastart.s3.sa-east-1.amazonaws.com/plataforma/1/clientes/66c64d8bce9ea.png", alt: "Embrapa" },
                { src: "https://escolastart.s3.sa-east-1.amazonaws.com/plataforma/1/clientes/66c64d8c07882.png", alt: "Prefeitura RJ" },
                { src: "https://escolastart.s3.sa-east-1.amazonaws.com/plataforma/1/clientes/66c7844a58b14.png", alt: "Governo SP" },
                { src: "https://escolastart.s3.sa-east-1.amazonaws.com/plataforma/1/clientes/66c63e8d40ed7.png", alt: "Marinha" },
                { src: "https://escolastart.s3.sa-east-1.amazonaws.com/plataforma/1/clientes/66c6432151fd8.png", alt: "Exercito" },
                { src: "https://escolastart.s3.sa-east-1.amazonaws.com/plataforma/1/clientes/66c64322379f3.png", alt: "Aeronautica" },
                { src: "https://escolastart.s3.sa-east-1.amazonaws.com/plataforma/1/clientes/66c643262e44a.png", alt: "Unifal" },
                { src: "https://escolastart.s3.sa-east-1.amazonaws.com/plataforma/1/clientes/66c782ce3df99.png", alt: "Fieb" }
              ].map((client, idx) => (
                <li key={idx} className="w-[200px] h-[200px] relative">
                  <img
                    src={client.src}
                    alt={client.alt}
                    className="absolute h-full w-full object-contain"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const InstitutionalArea: React.FC = () => (
  <section className="home-sections py-20 md:py-60 px-4 md:px-16" style={{ backgroundImage: 'url(/assets/default/img/home/bg-institucional.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
    <div className="mb-12 md:mb-24">
      <p className="text-white max-w-[32rem] text-2xl md:text-4xl text-center m-auto">
        VEJA COMO É POSSÍVEL <strong>REALIZAR SEUS SONHOS!</strong>
      </p>
      <p className="text-white px-3.5 text-center mt-4">
        Assista ao nosso vídeo e inspire-se com as histórias de alunos que concluíram seus estudos e celebram suas conquistas com alegria!
      </p>
    </div>
    <div className="container">
      <div className="overflow-hidden rounded-lg" style={{ paddingTop: '56.25%', position: 'relative' }}>
        <iframe
          src="https://player.vimeo.com/video/1019906343?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          title="[START] Site Home"
          data-ready="true"
        ></iframe>
      </div>
      <Script src="https://player.vimeo.com/api/player.js"></Script>
    </div>
  </section>
)

interface StatItemProps {
  imageSrc: string;
  altText: string;
  number: string;
  title: string;
}

const StatItem: React.FC<StatItemProps> = ({ imageSrc, altText, number, title }) => {
  return (
    <div>
      <div className="flex flex-col items-center text-center py-6 px-5 bg-white rounded-lg shadow-lg">
        <div className="bg-[#0297e7] p-4 rounded-full">
          <img src={imageSrc} alt={altText} className="img-fluid" />
        </div>
        <strong className="text-3xl mt-4">{number}</strong>
        <h4 className="text-xl mt-2">{title}</h4>
      </div>
    </div>
  );
};

export const StatsSection: React.FC = () => {
  const statsData = [
    {
      imageSrc: "https://escolastart.s3.sa-east-1.amazonaws.com/plataforma/1/66a25b9fb92a4.png",
      altText: "alunos cadastrados",
      number: "+520k",
      title: "alunos cadastrados",
    },
    {
      imageSrc: "https://escolastart.s3.sa-east-1.amazonaws.com/plataforma/1/66a25b9fb92cc.png",
      altText: "alunos empregados",
      number: "+8k",
      title: "alunos empregados",
    },
    {
      imageSrc: "https://escolastart.s3.sa-east-1.amazonaws.com/plataforma/1/66a25b9fb8fa4.png",
      altText: "aprovam",
      number: "+80%",
      title: "aprovam",
    },
    {
      imageSrc: "https://escolastart.s3.sa-east-1.amazonaws.com/plataforma/1/66a25b9ff3d48.png",
      altText: "colaboradores",
      number: "+200",
      title: "colaboradores",
    },
  ];

  return (
    <section className="container py-20">
      <div className="lg:mx-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="">
              <h2 className="text-2xl text-white md:text-4xl font-bold">Tudo começa na <strong>START</strong></h2>
              <h3 className="text-5xl text-[#0297e7] font-semibold mt-4">NOSSOS NÚMEROS <br />E REALIZAÇÕES</h3>
              <p className="text-lg text-white mt-5">Obtenha melhores opções de cursos e aulas ao vivo com melhores instrutores do mercado.</p>
            </div>
            <div className="">
              <div className="grid grid-cols-2 gap-6">
                {statsData.map((stat, index) => (
                  <StatItem
                    key={index}
                    imageSrc={stat.imageSrc}
                    altText={stat.altText}
                    number={stat.number}
                    title={stat.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const CourseInfo: React.FC = () => {
  return (
    <section className="container my-20">
      <div className="grid gap-2.5 grid-cols-1 lg:grid-cols-3 text-white">
        <div className="grid lg:col-span-1">
          <div className="custom-border p-4 h-fit">
            <div className="flex gap-4 flex-col p-2.5 border-b border-b-white">
              <p className="text-3xl">Aulas diretas ao ponto!</p>
              <div>
                <p className="font-light">Ministradas por</p>
                <p className="font-semibold text-2xl">Matheus Medeiros</p>
              </div>
            </div>
            <ul className="flex flex-col gap-5 text-2xl my-10">
              <li className="flex items-center gap-5">
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29.4991 12.0003C29.4991 11.6295 29.6091 11.267 29.8151 10.9586C30.0212 10.6503 30.314 10.41 30.6566 10.2681C30.9992 10.1262 31.3762 10.089 31.7399 10.1614C32.1036 10.2337 32.4377 10.4123 32.7 10.6745C32.9622 10.9367 33.1408 11.2708 33.2131 11.6345C33.2855 11.9983 33.2483 12.3753 33.1064 12.7179C32.9645 13.0605 32.7242 13.3533 32.4158 13.5593C32.1075 13.7654 31.745 13.8753 31.3741 13.8753C30.8769 13.8753 30.3999 13.6778 30.0483 13.3262C29.6967 12.9745 29.4991 12.4976 29.4991 12.0003ZM27.6241 8.25034C27.995 8.25034 28.3575 8.14038 28.6658 7.93435C28.9742 7.72832 29.2145 7.43548 29.3564 7.09287C29.4983 6.75026 29.5355 6.37326 29.4631 6.00955C29.3908 5.64583 29.2122 5.31174 28.95 5.04952C28.6877 4.78729 28.3536 4.60872 27.9899 4.53637C27.6262 4.46402 27.2492 4.50115 26.9066 4.64307C26.564 4.78498 26.2712 5.0253 26.0651 5.33365C25.8591 5.64199 25.7491 6.0045 25.7491 6.37534C25.7491 6.87262 25.9467 7.34954 26.2983 7.70117C26.6499 8.0528 27.1269 8.25034 27.6241 8.25034ZM32.1023 17.0003C31.772 16.9731 31.4445 17.0781 31.1916 17.2923C30.9387 17.5065 30.7813 17.8123 30.7538 18.1425C30.5301 20.7557 29.5647 23.2507 27.9711 25.3339C26.3776 27.417 24.2222 29.0017 21.7586 29.9014C19.295 30.8012 16.6256 30.9785 14.0646 30.4126C11.5036 29.8468 9.1575 28.5612 7.30233 26.7072C5.44717 24.8532 4.16013 22.5079 3.59265 19.9473C3.02517 17.3866 3.20085 14.7172 4.09904 12.253C4.99722 9.7888 6.58053 7.63241 8.66268 6.03755C10.7448 4.44268 13.2392 3.47568 15.8523 3.25034C16.0164 3.2368 16.1763 3.19106 16.3228 3.11573C16.4692 3.0404 16.5994 2.93695 16.7059 2.8113C16.8124 2.68565 16.8931 2.54026 16.9434 2.38342C16.9938 2.22658 17.0127 2.06137 16.9991 1.89722C16.9856 1.73306 16.9398 1.57319 16.8645 1.42671C16.7892 1.28024 16.6857 1.15003 16.5601 1.04354C16.4344 0.93704 16.2891 0.856333 16.1322 0.806027C15.9754 0.75572 15.8102 0.736798 15.646 0.750341C12.5585 1.01591 9.61116 2.15775 7.1506 4.04152C4.69005 5.92529 2.81868 8.47263 1.75668 11.3838C0.694683 14.295 0.486226 17.449 1.15584 20.4746C1.82545 23.5003 3.34527 26.2718 5.53649 28.463C7.72772 30.6542 10.4992 32.174 13.5248 32.8436C16.5505 33.5133 19.7044 33.3048 22.6156 32.2428C25.5268 31.1808 28.0742 29.3094 29.958 26.8489C31.8417 24.3883 32.9836 21.4409 33.2491 18.3535C33.2632 18.1892 33.2447 18.0238 33.1946 17.8667C33.1446 17.7096 33.0639 17.564 32.9573 17.4382C32.8507 17.3125 32.7203 17.209 32.5735 17.1339C32.4268 17.0587 32.2666 17.0133 32.1023 17.0003ZM16.9991 5.75034C19.2242 5.75034 21.3992 6.41014 23.2493 7.64631C25.0994 8.88247 26.5413 10.6395 27.3928 12.6952C28.2443 14.7508 28.4671 17.0128 28.033 19.1951C27.5989 21.3774 26.5274 23.382 24.9541 24.9553C23.3807 26.5286 21.3762 27.6001 19.1939 28.0342C17.0116 28.4683 14.7496 28.2455 12.6939 27.394C10.6383 26.5425 8.88127 25.1006 7.6451 23.2505C6.40894 21.4005 5.74914 19.2254 5.74914 17.0003C5.75244 14.0177 6.93877 11.1581 9.04784 9.04904C11.1569 6.93998 14.0165 5.75365 16.9991 5.75034ZM15.7491 17.0003C15.7491 17.3319 15.8808 17.6498 16.1153 17.8842C16.3497 18.1186 16.6676 18.2503 16.9991 18.2503H24.4991C24.8307 18.2503 25.1486 18.1186 25.383 17.8842C25.6174 17.6498 25.7491 17.3319 25.7491 17.0003C25.7491 16.6688 25.6174 16.3509 25.383 16.1165C25.1486 15.882 24.8307 15.7503 24.4991 15.7503H18.2491V9.50034C18.2491 9.16882 18.1174 8.85088 17.883 8.61646C17.6486 8.38204 17.3307 8.25034 16.9991 8.25034C16.6676 8.25034 16.3497 8.38204 16.1153 8.61646C15.8808 8.85088 15.7491 9.16882 15.7491 9.50034V17.0003ZM21.9991 4.50034C22.37 4.50034 22.7325 4.39037 23.0408 4.18435C23.3492 3.97832 23.5895 3.68548 23.7314 3.34287C23.8733 3.00026 23.9105 2.62326 23.8381 2.25955C23.7658 1.89583 23.5872 1.56174 23.325 1.29952C23.0627 1.03729 22.7286 0.858716 22.3649 0.786368C22.0012 0.714021 21.6242 0.751152 21.2816 0.893067C20.939 1.03498 20.6462 1.2753 20.4401 1.58365C20.2341 1.89199 20.1241 2.2545 20.1241 2.62534C20.1241 3.12262 20.3217 3.59954 20.6733 3.95117C21.0249 4.3028 21.5019 4.50034 21.9991 4.50034Z" fill="#76993D"></path>
                </svg>
                <span><strong>13h</strong> de conteúdo gravados</span>
              </li>
              <li className="flex items-center gap-5">
                <svg width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.25 29C23.25 29.3315 23.1183 29.6495 22.8839 29.8839C22.6495 30.1183 22.3315 30.25 22 30.25H12C11.6685 30.25 11.3505 30.1183 11.1161 29.8839C10.8817 29.6495 10.75 29.3315 10.75 29C10.75 28.6685 10.8817 28.3505 11.1161 28.1161C11.3505 27.8817 11.6685 27.75 12 27.75H22C22.3315 27.75 22.6495 27.8817 22.8839 28.1161C23.1183 28.3505 23.25 28.6685 23.25 29ZM33.25 4V21.5C33.25 22.4946 32.8549 23.4484 32.1517 24.1517C31.4484 24.8549 30.4946 25.25 29.5 25.25H4.5C3.50544 25.25 2.55161 24.8549 1.84835 24.1517C1.14509 23.4484 0.75 22.4946 0.75 21.5V4C0.75 3.00544 1.14509 2.05161 1.84835 1.34835C2.55161 0.645088 3.50544 0.25 4.5 0.25H29.5C30.4946 0.25 31.4484 0.645088 32.1517 1.34835C32.8549 2.05161 33.25 3.00544 33.25 4ZM22.625 12.75C22.6249 12.5492 22.5765 12.3513 22.4837 12.1731C22.391 11.995 22.2567 11.8418 22.0922 11.7266L15.8422 7.35156C15.6549 7.22036 15.4352 7.14305 15.207 7.12805C14.9789 7.11304 14.7509 7.16091 14.5481 7.26645C14.3452 7.37198 14.1752 7.53114 14.0565 7.7266C13.9379 7.92206 13.8751 8.14633 13.875 8.375V17.125C13.8751 17.3537 13.9379 17.5779 14.0565 17.7734C14.1752 17.9689 14.3452 18.128 14.5481 18.2336C14.7509 18.3391 14.9789 18.387 15.207 18.372C15.4352 18.3569 15.6549 18.2796 15.8422 18.1484L22.0922 13.7734C22.2567 13.6582 22.391 13.505 22.4837 13.3269C22.5765 13.1487 22.6249 12.9508 22.625 12.75Z" fill="#76993D"></path>
                </svg>
                <span>Mais de <strong>35 aulas</strong></span>
              </li>
              <li className="flex items-center gap-5">
                <svg width="36" height="27" viewBox="0 0 36 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M34.25 19.25H33V4.25C33 3.25544 32.6049 2.30161 31.9017 1.59835C31.1984 0.895088 30.2446 0.5 29.25 0.5H6.75C5.75544 0.5 4.80161 0.895088 4.09835 1.59835C3.39509 2.30161 3 3.25544 3 4.25V19.25H1.75C1.41848 19.25 1.10054 19.3817 0.866116 19.6161C0.631696 19.8505 0.5 20.1685 0.5 20.5V23C0.5 23.9946 0.895088 24.9484 1.59835 25.6517C2.30161 26.3549 3.25544 26.75 4.25 26.75H31.75C32.7446 26.75 33.6984 26.3549 34.4016 25.6517C35.1049 24.9484 35.5 23.9946 35.5 23V20.5C35.5 20.1685 35.3683 19.8505 35.1339 19.6161C34.8995 19.3817 34.5815 19.25 34.25 19.25ZM15.5 4.25H20.5C20.8315 4.25 21.1495 4.3817 21.3839 4.61612C21.6183 4.85054 21.75 5.16848 21.75 5.5C21.75 5.83152 21.6183 6.14946 21.3839 6.38388C21.1495 6.6183 20.8315 6.75 20.5 6.75H15.5C15.1685 6.75 14.8505 6.6183 14.6161 6.38388C14.3817 6.14946 14.25 5.83152 14.25 5.5C14.25 5.16848 14.3817 4.85054 14.6161 4.61612C14.8505 4.3817 15.1685 4.25 15.5 4.25ZM33 23C33 23.3315 32.8683 23.6495 32.6339 23.8839C32.3995 24.1183 32.0815 24.25 31.75 24.25H4.25C3.91848 24.25 3.60054 24.1183 3.36612 23.8839C3.1317 23.6495 3 23.3315 3 23V21.75H33V23Z" fill="#76993D"></path>
                </svg>
                <span className="font-weight-400">Assista quando e onde quiser</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid md:col-span-2">
          <Accordion type="single" collapsible className="flex flex-col gap-4 w-full">
            <AccordionItem value="item-1" className="custom-border px-4">
              <AccordionTrigger>Introdução</AccordionTrigger>
              <AccordionContent>
                Prepare-se para fazer parte de um seleto grupo de profissionais que dominam o Excel, a ferramenta essencial para o mercado de trabalho moderno. No curso Expert em Excel, você vai além das funções básicas, aprendendo a automatizar tarefas, analisar dados e otimizar processos com segurança e precisão, tanto em ambientes corporativos quanto em projetos pessoais.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="custom-border px-4">
              <AccordionTrigger>Para quem é esse curso</AccordionTrigger>
              <AccordionContent>
                Este curso é ideal para profissionais de todas as áreas que desejam se destacar em suas carreiras, como analistas, gestores, empreendedores e qualquer pessoa que precise dominar o Excel para maximizar sua eficiência. Se você busca ir além de criar planilhas e deseja utilizar o Excel para automatizar tarefas, extrair insights de dados e tomar decisões estratégicas, este curso é para você!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="custom-border px-4">
              <AccordionTrigger>Metodologia para conquistas verdadeiras</AccordionTrigger>
              <AccordionContent>
                No mercado de trabalho atual, habilidades técnicas NÃO SÃO suficientes. As empresas buscam profissionais que utilizem o Excel de forma estratégica, aliando automação de processos, análise avançada de dados e habilidades comportamentais como Tomada de Decisão Estratégica e Resolução de Problema. Nossa metodologia inicia com o fortalecimento dessas competências, essenciais para que você se destaque e avance na sua carreira.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="custom-border px-4">
              <AccordionTrigger>O que você vai aprender</AccordionTrigger>
              <AccordionContent>
                • Fundamentos Essenciais para o Sucesso: Aprenda a navegar pelo Excel com facilidade, manipulando células, linhas e colunas com precisão, além de formatar planilhas de forma profissional. Dominar essas ferramentas básicas é o primeiro passo para garantir que seus processos sejam sempre eficientes e livres de erros.
                <br />
                <br />
                • Fórmulas e Funções como um Expert: Domine desde as funções básicas até as fórmulas avançadas, utilizando cálculos precisos e funções de texto e estatísticas. Com isso, você será capaz de automatizar tarefas, economizar tempo e garantir resultados impecáveis em qualquer demanda de trabalho.
                <br />
                <br />
                • Manipulação Avançada de Dados: Desenvolva habilidades para classificar, filtrar e analisar grandes volumes de informações de forma eficiente com tabelas dinâmicas. Transforme dados complexos em insights estratégicos que facilitam a tomada de decisões e aumentam sua produtividade.
                <br />
                <br />
                • Gráficos e Visualizações Impactantes: Crie gráficos dinâmicos e personalizados que tornam seus relatórios visuais claros e convincentes. Com essas habilidades, você será capaz de impressionar gestores e colegas, usando dados para contar histórias de impacto.
                <br />
                <br />
                • Colaboração e Segurança no Ambiente Corporativo: Aprenda a trabalhar de forma colaborativa em tempo real, garantindo a segurança das suas planilhas e o compartilhamento de arquivos de forma protegida. Isso te tornará um profissional ainda mais confiável em ambientes corporativos dinâmicos.
                Este curso te dará as ferramentas para dominar o Excel em seu nível mais avançado, tornando-se um expert capaz de transformar suas tarefas diárias em processos eficientes e à prova de erros.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export const BonusIA: React.FC = () => {
  return (
    <section className="container my-20">
      <div className="flex flex-col lg:flex-row-reverse text-white custom-border">
        <div className="relative w-full pb-[56.65%] lg:p-0 lg:w-2/6">
          <Image src="/assets/default/img/bonus.png" alt="" fill className="absolute w-full h-full top-0 left-0 object-cover" />
        </div>
        <div className="flex flex-col gap-4 px-6 py-12">
          <div>
            <p className="text-sm md:text-base font-medium">BÔNUS EXCLUSIVO</p>
            <h2 className="text-3xl font-bold">Excel com Inteligência Artificial e Dashboards Integrados</h2>
          </div>
          <span className="text-lg font-light">
            Domine Excel, IA e Dashboards, amplie sua capacidade de transformar dados em decisões estratégicas, garantindo muito mais destaque no mercado.
          </span>
        </div>
      </div>
    </section>
  )
}

export const Certificate: React.FC = () => {
  return (
    <section className="container my-20 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 p-4 bg-[rgba(16, 16, 16, 1)]">
        <div className="md:col-span-2 flex flex-col gap-4 p-4">
          <h2 className="text-3xl font-bold">CERTIFICAÇÃO A NÍVEL NACIONAL</h2>
          <p className="text-xl font-light">
            Ter uma certificação reconhecida nacionalmente é fundamental para comprovar sua competência e
            profissionalismo. Empresas buscam profissionais qualificados que possam entregar resultados
            consistentes, e uma certificação não apenas valida suas habilidades, mas também coloca você à frente
            da concorrência.
          </p>
        </div>
        <div className="relative md:col-span-1 pb-[56.65%] p-4">
          <Image src="/assets/default/img/certificate.svg" alt="" fill className="absolute w-full h-full" />
        </div>
      </div>
    </section>
  )
}

export const Instructor: React.FC = () => {
  return (
    <section className="container text-white">
      
    </section>
  )
}