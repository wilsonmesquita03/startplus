"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const data: Aluno[] = [
  {
    id: "1",
    aluno: { nome: "João Silva", email: "joao.silva@example.com" },
    progresso: 75,
    quizzesAprovados: 3,
    tarefasNaoEnviadas: 1,
    tarefasPendentes: 2,
    dataCompra: "2023-10-01",
  },
  {
    id: "2",
    aluno: { nome: "Maria Oliveira", email: "maria.oliveira@example.com" },
    progresso: 90,
    quizzesAprovados: 5,
    tarefasNaoEnviadas: 0,
    tarefasPendentes: 1,
    dataCompra: "2023-09-15",
  },
  {
    id: "3",
    aluno: { nome: "Carlos Souza", email: "carlos.souza@example.com" },
    progresso: 60,
    quizzesAprovados: 2,
    tarefasNaoEnviadas: 2,
    tarefasPendentes: 3,
    dataCompra: "2023-08-20",
  },
]

export type Aluno = {
  id: string
  aluno: {
    nome: string
    email: string
  }
  progresso: number
  quizzesAprovados: number
  tarefasNaoEnviadas: number
  tarefasPendentes: number
  dataCompra: string
}

export const columns: ColumnDef<Aluno>[] = [
  {
    accessorKey: "aluno",
    header: "Aluno",
    cell: ({ row }) => {
      const aluno = row.getValue("aluno") as { nome: string; email: string }
      return (
        <div>
          <div className="font-medium">{aluno.nome}</div>
          <div className="text-sm text-muted-foreground">{aluno.email}</div>
        </div>
      )
    },
  },
  {
    accessorKey: "progresso",
    header: "Progresso",
    cell: ({ row }) => {
      const progresso = parseFloat(row.getValue("progresso"))
      return <div>{progresso}%</div>
    },
  },
  {
    accessorKey: "quizzesAprovados",
    header: "Quizzes Aprovados",
  },
  {
    accessorKey: "tarefasNaoEnviadas",
    header: "Tarefas Não Enviadas",
  },
  {
    accessorKey: "tarefasPendentes",
    header: "Tarefas Pendentes",
  },
  {
    accessorKey: "dataCompra",
    header: "Data da Compra",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const aluno = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(aluno.id)}
            >
              Copy aluno ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View aluno details</DropdownMenuItem>
            <DropdownMenuItem>View progress details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export default function OwnersTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full my-4">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("aluno")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("aluno")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}