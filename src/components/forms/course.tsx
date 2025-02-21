/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
const Editor = dynamic(() => import("../editor"), {
  ssr: false
});
import dynamic from "next/dynamic";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Block } from "@blocknote/core";
import { Separator } from "../ui/separator";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import DragDrop from "../dragdrop";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Create = ({ action }: { action: (data: FormData) => any }) => {
  return (
    <form action={action} className="w-full">
      <h2 className="text-xl font-semibold mb-4">Criar Novo Curso</h2>
      <div className="mb-4">
        <label className="block mb-2">Título:</label>
        <Input
          name="title"
          required
          className="w-full"
          placeholder="Digite o título do curso"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Tipo:</label>
        <Select name="type">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione o tipo de curso" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="online">Online</SelectItem>
            <SelectItem value="video">Vídeo</SelectItem>
            <SelectItem value="text">Texto</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">SEO:</label>
        <Input
          type="text"
          name="seo"
          className="w-full"
          placeholder="Digite as palavras-chave para SEO"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Descrição:</label>
        <Editor defaultBlocks={null} />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Slug:</label>
        <Input
          type="text"
          name="slug"
          required
          className="w-full"
          placeholder="Digite o slug do curso"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Preço:</label>
        <Input
          type="number"
          name="price"
          required
          className="w-full"
          placeholder="Digite o preço do curso"
          step="0.01"
        />
      </div>

      <Button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600">
        Criar Curso
      </Button>
    </form>
  );
}

// Tipagem de dados para o curso, você pode adaptá-la conforme necessário
interface CourseData {
  title: string | null;
  type: "online" | "video" | "text";
  seo: string | null;
  description: string | null;
  slug: string;
  defaultSales: number;
  price: number;
}

interface EditFormProps {
  course: CourseData;
  action: (data: FormData) => any;
}

export const Edit = ({ course, action }: EditFormProps) => {
  return (
    <form action={action} className="w-full">
      <h2 className="text-xl font-semibold mb-4">Editar Curso</h2>
      <div className="mb-4">
        <label className="block mb-2">Título:</label>
        <Input
          name="title"
          required
          defaultValue={course.title || ""}
          className="w-full"
          placeholder="Digite o título do curso"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Tipo:</label>
        <Select name="type" defaultValue={course.type}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione o tipo de curso" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="online">Online</SelectItem>
            <SelectItem value="video">Vídeo</SelectItem>
            <SelectItem value="text">Texto</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">SEO:</label>
        <Input
          type="text"
          name="seo"
          defaultValue={course.seo || ""}
          className="w-full"
          placeholder="Digite as palavras-chave para SEO"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Descrição:</label>
        <Editor defaultBlocks={course.description ? JSON.parse(course.description) as Block[] : null} />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Slug:</label>
        <Input
          type="text"
          name="slug"
          required
          defaultValue={course.slug}
          className="w-full"
          placeholder="Digite o slug do curso"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Vendas Padrão:</label>
        <Input
          type="number"
          name="defaultSales"
          defaultValue={course.defaultSales}
          className="w-full"
          placeholder="Digite o número de vendas padrão"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Preço:</label>
        <Input
          type="number"
          name="price"
          defaultValue={course.price}
          className="w-full"
          placeholder="Digite o preço do curso"
          step="0.01"
        />
      </div>

      <Separator />
      <div className="flex flex-col gap-2 my-4">
        <div className="flex items-center space-x-2">
          <Switch id="hasSuport" />
          <Label htmlFor="hasSuport">Suporte (Não implementado)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="hasCertificate" />
          <Label htmlFor="hasCertificate">Certificado de Conclusão (Não implementado)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="hasForum" />
          <Label htmlFor="hasForum">Forum (Não implementado)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="hasSubscription" />
          <Label htmlFor="hasSubscription">Inscrever-se (Não implementado)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="private" />
          <Label htmlFor="private">Privado (Não implementado)</Label>
        </div>
      </div>
      <Separator />

      { /* Implementar módulos e aulas aqui, quero que seja dragglable tanto as aulas quanto os módulos */}
      <div className="p-4 my-6 bg-slate-50">
        <h3 className="text-2xl font-semibold my-2">Módulos</h3>
        <DragDrop />
      </div>

      <Button type="submit" className="mt-4">Salvar Alterações</Button>
    </form>
  );
};
