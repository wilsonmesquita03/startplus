"use client"
import { z } from "zod"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"

export const lectureSchema = z.object({
  title: z.string(),
  content: z.string(),
  duration: z.string(),
  vimeoId: z.string()
})

export const LectureForm = () => {
  const form = useForm<z.output<typeof lectureSchema>>({
    resolver: zodResolver(lectureSchema),
    defaultValues: {
      title: "",
      content: "",
      duration: "",
      vimeoId: ""
    }
  })

  async function onSubmit(data: z.output<typeof lectureSchema>) {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("duration", data.duration);
    formData.append("vimeoId", data.vimeoId);

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Titulo</FormLabel>
              <FormControl>
                <Input placeholder="Digite o nome da aula" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Conteudo</FormLabel>
              <FormControl>
                <Input placeholder="Digite o conteudo da aula" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Duracao</FormLabel>
              <FormControl>
                <Input placeholder="Digite a duracao da aula" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="vimeoId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Link do video</FormLabel>
              <FormControl>
                <Input placeholder="Digite o link do video" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Criar</Button>
      </form>
    </Form>
  )
}

const Editor = dynamic(() => import("@/components/editor"), {
  ssr: false
});
import dynamic from "next/dynamic";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Block } from "@blocknote/core";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import DragDrop from "./dragdrop";

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
  id: number;
  title: string | null;
  type: "online" | "video" | "text";
  seo: string | null;
  description: string | null;
  slug: string;
  defaultSales: number;
  price: number;
  modules: Module[]
}

interface Module {
  id: number
  title: string
  courseId: number
  order: number
  lessons: Lesson[]
}

interface Lesson {
  id: number
  title: string | null
  content: string | null
  vimeoId: string | null
  courseModuleId: number
  type: "Lecture" | "Quizz" | "Text"
  order: number
}

interface EditFormProps {
  course: CourseData;
  action: (data: FormData) => any;
}

export const Edit = ({ course, action }: EditFormProps) => {
  return (
    <form action={action} className="w-full">
      <h2 className="text-xl font-semibold mb-4">Editar Curso</h2>
      <input type="text" className="hidden" name="id" value={course.id} readOnly />
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
          <Switch id="hasSuport" name="hasSuport" />
          <Label htmlFor="hasSuport">Suporte (Não implementado)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="hasCertificate" name="hasCertificate" />
          <Label htmlFor="hasCertificate">Certificado de Conclusão (Não implementado)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="hasForum" name="hasForum" />
          <Label htmlFor="hasForum">Forum (Não implementado)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="hasSubscription" name="hasSubscription" />
          <Label htmlFor="hasSubscription">Inscrever-se (Não implementado)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="private" name="private" />
          <Label htmlFor="private">Privado (Não implementado)</Label>
        </div>
      </div>
      <Separator />

      { /* Implementar módulos e aulas aqui, quero que seja dragglable tanto as aulas quanto os módulos */}
      <div className="p-4 my-6 bg-slate-50">
        <h3 className="text-2xl font-semibold my-2">Seções</h3>
        <DragDrop defaultValue={course} />
      </div>

      <Button type="submit" className="mt-4">Salvar Alterações</Button>
    </form>
  );
};
