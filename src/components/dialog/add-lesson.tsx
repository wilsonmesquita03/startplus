import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Video, ListChecks, FileText, PlusIcon } from "lucide-react"; // Ícones da Lucide
import { LectureForm } from "@/app/dashboard/courses/[id]/edit/forms";

const AddLessonModal = () => {
  const [step, setStep] = useState(1); // Step 1: Choose type, Step 2: Add details
  const [selectedType, setSelectedType] = useState(""); // Tipo de aula selecionado

  // Função para selecionar o tipo de aula
  const handleTypeSelection = (type: string) => {
    setSelectedType(type);
    setStep(2); // Avança para a etapa 2
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <PlusIcon className="h-4 w-4" /> {/* Ícone de adicionar */}
          Adicionar Nova Aula
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Nova Aula</DialogTitle>
          <DialogDescription>
            {step === 1
              ? "Escolha o tipo de aula que deseja adicionar."
              : `Preencha os detalhes para adicionar uma nova aula do tipo ${selectedType}.`}
          </DialogDescription>
        </DialogHeader>

        {/* Primeiro passo: Escolha do tipo de aula */}
        {step === 1 && (
          <div className="mt-4 grid grid-cols-3 gap-4">
            {/* Card para Aula (Lecture) */}
            <Card
              onClick={() => handleTypeSelection("Lecture")}
              className="flex flex-col items-center justify-center p-6 cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <Video className="h-8 w-8 text-indigo-600" />
              <span className="mt-2 text-sm font-medium text-gray-700">Aula</span>
            </Card>

            {/* Card para Quiz */}
            <Card
              onClick={() => handleTypeSelection("Quizz")}
              className="flex flex-col items-center justify-center p-6 cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <ListChecks className="h-8 w-8 text-indigo-600" />
              <span className="mt-2 text-sm font-medium text-gray-700">Quiz</span>
            </Card>

            {/* Card para Texto */}
            <Card
              onClick={() => handleTypeSelection("Text")}
              className="flex flex-col items-center justify-center p-6 cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <FileText className="h-8 w-8 text-indigo-600" />
              <span className="mt-2 text-sm font-medium text-gray-700">Texto</span>
            </Card>
          </div>
        )}

        {/* Segundo passo: Renderização do formulário específico */}
        {step === 2 && (
          <div>
            {/* Aqui você pode renderizar o formulário específico com base no `selectedType` */}
            {selectedType === "Lecture" && <LectureForm />}
            {selectedType === "Quizz" && <QuizzForm />}
            {selectedType === "Text" && <TextForm />}

            {/* Botão para voltar ao primeiro passo */}
            <Button
              variant="outline"
              onClick={() => setStep(1)}
              className="mt-4"
            >
              Voltar
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

const QuizzForm = () => <div>Formulário de Quiz</div>;
const TextForm = () => <div>Formulário de Texto</div>;

export default AddLessonModal;