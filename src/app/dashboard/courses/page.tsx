import prisma from "@/lib/prisma";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Row } from "./row";
import { protectedRoute } from "@/lib/protect-route";

export const metadata = {
  title: "Cursos | Escola START",
}

export default async function Page() {
  await protectedRoute("access_courses_dashboard")
  
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
              <Row key={course.id} {...course} />
            ))
          }
        </TableBody >
      </Table>
    </div>
  );
}