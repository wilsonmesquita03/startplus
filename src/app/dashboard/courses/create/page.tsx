import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import prisma from "@/lib/prisma";

export const metadata = {
  title: "Criar Curso | Escola START",
}

export default function Page() {
  async function create(formData: FormData) {
    "use server";

    const data = {
      title: formData.get("title") as string,
      type: formData.get("type") as "online" | "video" | "text",
      seo: formData.get("seo") as string | null,
      slug: formData.get("slug") as string,
      defaultSales: Number(formData.get("defaultSales")),
    };

    await prisma.course.create({
      data,
    });
  }

  return (
    <form action={create} className="w-full">
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
        <label className="block mb-2">Vendas Padrão:</label>
        <Input
          type="number"
          name="defaultSales"
          defaultValue={0}
          className="w-full"
          placeholder="Digite o número de vendas padrão"
        />
      </div>

      <Button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600">
        Criar Curso
      </Button>
    </form>
  );
}
