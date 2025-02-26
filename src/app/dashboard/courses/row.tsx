"use client";
import {
  TableRow,
  TableCell,
} from "@/components/ui/table";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { publishCourse, unpublishCourse } from "./actions";
import { useState } from "react";

type RowProps = {
  id: number;
  title: string;
  price: number;
  promotionalPrice?: number | null;
  createdAt: string | Date;
  updatedAt: string | Date;
  draft: boolean;
};

export const Row = ({
  id,
  title,
  price,
  promotionalPrice,
  createdAt,
  updatedAt,
  draft,
}: RowProps) => {
  const [draftState, setDraftState] = useState(draft)

  const handlePublish = async () => {
    if (draftState) {
      await publishCourse(id);
      setDraftState(false)
    } else {
      await unpublishCourse(id);
      setDraftState(true)
    }
  };

  return (
    <TableRow key={id}>
      <TableCell className="font-medium">{id}</TableCell>
      <TableCell className="font-medium">{title}</TableCell>
      <TableCell className="font-medium">Not implemented</TableCell>
      <TableCell className="font-medium">
        <span>
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        {promotionalPrice && (
          <span className="text-sm text-muted-foreground ml-2">
            {promotionalPrice.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        )}
      </TableCell>
      <TableCell className="font-medium">0</TableCell>
      <TableCell className="font-medium">0</TableCell>
      <TableCell className="font-medium">0</TableCell>
      <TableCell className="font-medium">
        {new Date(createdAt).toLocaleDateString("pt-BR")}
      </TableCell>
      <TableCell className="font-medium">
        {new Date(updatedAt).toLocaleDateString("pt-BR")}{" "}
        {new Date(updatedAt).toLocaleTimeString("pt-BR")}
      </TableCell>
      <TableCell
        className={draftState ? "font-medium text-red-500" : "font-medium text-green-500"}
      >
        {draftState ? "Rascunho" : "Publicado"}
      </TableCell>
      <TableCell className="font-medium">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center justify-center gap-2.5">
            <MoreVertIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem
                onClick={handlePublish}
              >
                {draftState ? "Publicar" : "Despublicar"}
              </DropdownMenuItem>
              <DropdownMenuItem>Enviar notificação</DropdownMenuItem>
              <DropdownMenuItem>Estudantes</DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={`/dashboard/courses/${id}/statistics`}>
                  Estatísticas
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Enviar mensagem</DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={`/dashboard/courses/${id}/edit`}>Editar</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-500">Excluir</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
};

