import Image from "next/image"

export const HomeHeroArea = () => {
  return (
    <section className="h-screen min-h-screen bg-main.hero-area bg-no-repeat bg-cover bg-center">
      <div className="w-full h-full bg-black/85">
        <div className="container flex flex-col items-center justify-center w-full h-full">
          <div className="flex flex-col justify-center items-center gap-6 max-w-[800px] text-white mt-[103px] text-center">
            <Image
              className="object-contain max-w-full"
              src="/assets/default/img/logo.svg"
              alt="Logo Escola Start"
              width={250}
              height={60}
            />
            <h2 className="text-2xl no-">Transforme sua Carreira com a <strong className="text-[#0297E7]">Nossa Metodologia</strong></h2>
            <p>
              O diferencial da nossa metodologia está na integração de etapas fundamentais que guiam o aluno desde a descoberta de suas aptidões até a obtenção de certificações reconhecidas e aplicáveis. Cada fase do <strong>nosso processo é cuidadosamente estruturada</strong> para fornecer o suporte necessário para que nossos alunos cresçam como profissionais completos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}