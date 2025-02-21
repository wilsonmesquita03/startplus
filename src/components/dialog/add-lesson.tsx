import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

const AddLessonModal = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [vimeoId, setVimeoId] = useState("");
  const [type, setType] = useState("Lecture"); // Default to Lecture type

  const handleSubmit = () => {
    // Aqui você pode fazer a lógica de enviar os dados para a API ou salvar no banco de dados
    console.log("New lesson added:", { title, content, vimeoId, type });
    // Limpar os campos após o envio
    setTitle("");
    setContent("");
    setVimeoId("");
    setType("Lecture");
  };

  return (
    <Dialog>
      <DialogTrigger className="flex items-center">
        <AddIcon className="mr-2" />
        Adicionar Nova Aula
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Nova Aula</DialogTitle>
          <DialogDescription>
            Preencha os detalhes abaixo para adicionar uma nova aula ao módulo.
          </DialogDescription>
        </DialogHeader>

        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Título
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">
            Conteúdo
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="vimeoId" className="block text-sm font-medium text-gray-700">
            ID do Vimeo (Opcional)
          </label>
          <input
            id="vimeoId"
            type="text"
            value={vimeoId}
            onChange={(e) => setVimeoId(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">
            Tipo de Aula
          </label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="Lecture">Aula</option>
            <option value="Quizz">Quiz</option>
            <option value="Text">Texto</option>
          </select>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Adicionar Aula
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddLessonModal;
