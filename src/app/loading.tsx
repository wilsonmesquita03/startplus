import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image className="animate-pulse h-12 w-12" src="/assets/default/img/logotipo.svg" width={50} height={50} alt="logotipo"></Image>
    </div>
  )
}