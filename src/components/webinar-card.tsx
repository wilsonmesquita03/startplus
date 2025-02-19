import Image from "next/image"
import Link from "next/link"

export const FeaturedCard = () => {
  return (
    <div
      className="custom-border relative shadow-lg bg-[rgb(10,10,10)] transition-all duration-500 ease-in-out"
    >
      <figure>
        <div className="relative w-full h-[250px]">
          <Link href="https://escolastart.plus/marketing/lideranca">
            <Image
              src="https://escolastart.s3.sa-east-1.amazonaws.com/plataforma/1/66785670e6683.png"
              className="object-cover"
              layout="fill"
              alt="Liderança Positiva: Inspirando o crescimento individual e coletivo"
            />
            <div className="flex justify-center items-center gap-[0.5ch] text-white p-2 absolute bottom-0 bg-[rgba(250,250,250,0.2)] backdrop-blur w-full">
              Até <strong>75% Off</strong>
              <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.5 3.81539V1.58789C9.5 1.32267 9.39464 1.06832 9.20711 0.880784C9.01957 0.693247 8.76522 0.587891 8.5 0.587891H1.5C1.23478 0.587891 0.98043 0.693247 0.792893 0.880784C0.605357 1.06832 0.5 1.32267 0.5 1.58789V3.83789C0.500338 3.99308 0.536631 4.14607 0.606032 4.28487C0.675434 4.42368 0.776055 4.54451 0.9 4.63789L4.16687 7.08789L0.9 9.53789C0.776055 9.63127 0.675434 9.7521 0.606032 9.89091C0.536631 10.0297 0.500338 10.1827 0.5 10.3379V12.5879C0.5 12.8531 0.605357 13.1075 0.792893 13.295C0.98043 13.4825 1.23478 13.5879 1.5 13.5879H8.5C8.76522 13.5879 9.01957 13.4825 9.20711 13.295C9.39464 13.1075 9.5 12.8531 9.5 12.5879V10.3604C9.49964 10.2058 9.46365 10.0534 9.39482 9.91495C9.32599 9.77653 9.22617 9.65584 9.10312 9.56226L5.82937 7.08789L9.10312 4.61352C9.22617 4.51994 9.32599 4.39925 9.39482 4.26083C9.46365 4.12241 9.49964 3.96998 9.5 3.81539ZM8.5 1.58789V3.08789H1.5V1.58789H8.5ZM8.5 12.5879H1.5V10.3379L5 7.71289L8.5 10.3598V12.5879Z"
                  fill="#FAFAFA"
                />
              </svg>
            </div>
          </Link>
        </div>

        <figcaption className="webinar-card-body p-[15px_10px_20px_15px]">
          <h3 className="mt-4 font-bold text-lg text-white">
            Liderança Positiva: Inspirando o crescimento individual e coletivo
          </h3>
          <div className="flex gap-4 mt-2.5 mb-5">
            <div className="flex items-center">
              <Image src="/assets/default/img/icons/mic-filled.svg" width="20" height="20" className="webinar-icon" alt="mic" />
              <span className="text-sm ml-5 text-white">13 Horas</span>
            </div>
            <div className="flex items-center">
              <Image src="/assets/default/img/icons/play-filled.svg" width="20" height="20" className="webinar-icon" alt="play" />
              <span className="text-sm ml-5 text-white">Gravado</span>
            </div>
          </div>
          <div className="text-white text-xs font-light"></div>
          <div className="text-sm font-light text-white mt-3">
            <strong className="font-bold text-[#199AFF]">BÔNUS</strong> <strong className="font-bold">- I.A</strong> para Lideranças
          </div>

          <div className="webinar-price-box mt-6 border border-[#0297E7] text-white">
            <div className="p-4 text-center line-through text-base">
              Valor original <strong className="text-sm">R$396,88</strong>
            </div>
            <div className="p-4 bg-[#0297E7]">
              <span className="max-w-52 mx-auto font-light block">
                10x de <strong className="text-4xl font-extrabold">R$12,70</strong>
                <strong className="font-semibold text-sm"> COM DESCONTO</strong> R$127,00
              </span>
            </div>
          </div>

          <Link
            href="/marketing/lideranca"
            className="flex gap-2 items-center justify-center mt-5 bg-[#0297E7] text-white font-semibold py-3 w-full text-center rounded"
          >
            Comprar agora
            <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.320312 2.27287L8.55721 10.5098L14.9637 4.10329V8.30411H16.7941V0.982422L9.47243 0.982422V2.81284H13.6732L8.55721 7.92888L1.61076 0.982422L0.320312 2.27287Z"
                fill="#FAFAFA"
              />
            </svg>
          </Link>
          <Link href="/marketing/lideranca" className="w-full h-full absolute top-0 left-0"></Link>
        </figcaption>
      </figure>
    </div>

  )
}