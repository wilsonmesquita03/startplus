import { UserPayment } from "@/components/forms/payment";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Image from "next/image";


export default function Page() {
  return (
    <main>
      <div>
        <Image src="/assets/default/img/logotipo.svg" width={50} height={50}></Image>
      </div>
      <Breadcrumb className="my-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-white">Informações</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/checkout/payment" className="text-[hsl(0, 0%, 44%)]">Pagamento</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <UserPayment />
    </main>
  )
}