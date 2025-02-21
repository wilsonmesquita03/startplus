import prisma from "@/lib/prisma";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Link from "next/link";

export const metadata = {
  title: "Cursos | Escola START",
}

export default async function Page() {
  const courses = await prisma.course.findMany();

  return (
    <div>
      <Table className="p-6">
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Curso</TableHead>
            <TableHead>Instructor</TableHead>
            <TableHead>Preço</TableHead>
            <TableCell>Vendas</TableCell>
            <TableCell>Renda</TableCell>
            <TableCell>Estudantes</TableCell>
            <TableCell>Data de Criação</TableCell>
            <TableCell>Data de Atualização</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            courses.map((course) => (
              <TableRow key={course.id}>
                <TableCell className="font-medium">{course.id}</TableCell>
                <TableCell className="font-medium">{course.title}</TableCell>
                <TableCell className="font-medium">Not implemented</TableCell>
                <TableCell className="font-medium">
                  <span>{course.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>
                  {
                    course.promotionalPrice
                    && (
                      <span className="text-sm text-muted-foreground ml-2">
                        {course.promotionalPrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                      </span>
                    )
                  }
                </TableCell>
                <TableCell className="font-medium">0</TableCell>
                <TableCell className="font-medium">0</TableCell>
                <TableCell className="font-medium">0</TableCell>
                <TableCell className="font-medium">{course.createdAt.toLocaleDateString("pt-BR")}</TableCell>
                <TableCell className="font-medium">{course.updatedAt.toLocaleDateString("pt-BR")} {course.updatedAt.toLocaleTimeString("pt-BR")}</TableCell>
                <TableCell className={course.draft ? "font-medium text-red-500" : "font-medium text-green-500"}>{course.draft ? "Rascunho" : "Publicado"}</TableCell>
                <TableCell className="font-medium">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center justify-center gap-2.5">
                      <MoreVertIcon />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          {course.draft ? "Publicar" : "Despublicar"}
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          Enviar notificação
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          Estudantes
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          Estatísticas
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          Enviar mensagem
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href={`/dashboard/courses/${course.id}/edit`}>
                            Editar
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-500">
                        Excluir
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody >
      </Table>
    </div>
  );
}