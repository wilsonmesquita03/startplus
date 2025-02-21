"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Mapeamento de traduções para os breadcrumbs
const breadcrumbTranslations: Record<string, string> = {
  dashboard: "Painel de Controle",
  settings: "Configurações",
  users: "Usuários",
  courses: "Cursos",
  learn: "Aprender",
  classroom: "Sala de Aula",
};

// Função para verificar se um segmento é um ID (UUID ou número)
const isId = (segment: string) => /^[0-9a-fA-F-]{8,}$/.test(segment) || /^\d+$/.test(segment);

const DashBreadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  let filteredSegments = pathSegments.filter(segment => !isId(segment));

  if (filteredSegments.length > 1) {
    filteredSegments = filteredSegments.slice(0, -1);
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {filteredSegments.map((segment, index) => {
          const path = `/${filteredSegments.slice(0, index + 1).join("/")}`;
          return (
            <BreadcrumbItem key={index}>
              <BreadcrumbLink asChild>
                <Link href={path}>
                  {breadcrumbTranslations[segment] || decodeURIComponent(segment.replace("-", " "))}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DashBreadcrumb;
