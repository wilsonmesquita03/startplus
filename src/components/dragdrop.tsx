"use client";
import React, { useState, useRef, useEffect, Ref } from "react";
import AddIcon from '@mui/icons-material/Add';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { useDrag, useDrop } from "react-dnd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import AddLessonModal from './dialog/add-lesson';

// Tipagem dos itens
interface LessonType {
  id: string;
  title: string;
}

interface ModuleType {
  id: string;
  title: string;
  lessons: LessonType[];
}

interface MoveLessonProps {
  fromModuleId: string;
  fromIndex: number;
  toModuleId: string;
  toIndex: number;
}

const mockModules: ModuleType[] = [
  {
    id: "module-1",
    title: "Módulo 1",
    lessons: [
      { id: "lesson-1", title: "Aula 1" },
      { id: "lesson-2", title: "Aula 2" },
    ],
  },
  {
    id: "module-2",
    title: "Módulo 2",
    lessons: [
      { id: "lesson-3", title: "Aula 3" },
      { id: "lesson-4", title: "Aula 4" },
    ],
  },
];

const ItemTypes = {
  MODULE: "module",
  LESSON: "lesson",
};

const DragDrop = () => {
  const [modules, setModules] = useState<ModuleType[]>(mockModules);

  const moveModule = (fromIndex: number, toIndex: number) => {
    const newModules = [...modules];
    const [movedModule] = newModules.splice(fromIndex, 1);
    newModules.splice(toIndex, 0, movedModule);
    setModules(newModules);
  };

  const moveLesson = ({
    fromModuleId,
    fromIndex,
    toModuleId,
    toIndex,
  }: MoveLessonProps) => {
    const newModules = [...modules];
    const fromModule = newModules.find((mod) => mod.id === fromModuleId);
    const toModule = newModules.find((mod) => mod.id === toModuleId);

    if (fromModule && toModule) {
      const [movedLesson] = fromModule.lessons.splice(fromIndex, 1);
      toModule.lessons.splice(toIndex, 0, movedLesson);
      setModules(newModules);
    }
  };

  // Atualiza o título do módulo
  const updateModuleTitle = (moduleId: string, newTitle: string) => {
    setModules(modules.map(module =>
      module.id === moduleId ? { ...module, title: newTitle } : module
    ));
  };

  // Adiciona um novo módulo
  const addModule = () => {
    const newModule = {
      id: `module-${modules.length + 1}`,
      title: `Módulo ${modules.length + 1}`,
      lessons: [],
    };
    setModules([...modules, newModule]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-6 space-y-6">
        {modules.map((module, moduleIndex) => (
          <Module
            key={module.id}
            index={moduleIndex}
            module={module}
            moveModule={moveModule}
            moveLesson={moveLesson}
            updateModuleTitle={updateModuleTitle}
          />
        ))}
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
          <button
            onClick={addModule}
            className="flex items-center text-blue-600 font-semibold text-lg hover:text-blue-800 transition-colors"
          >
            <AddIcon className="mr-2" />
            <span>Adicionar Novo Módulo</span>
          </button>
        </div>
      </div>
    </DndProvider>
  );
};

interface ModuleProps {
  module: ModuleType;
  index: number;
  moveModule: (fromIndex: number, toIndex: number) => void;
  moveLesson: (props: MoveLessonProps) => void;
  updateModuleTitle: (moduleId: string, newTitle: string) => void;
}

const Module = ({ module, index, moveModule, moveLesson, updateModuleTitle }: ModuleProps) => {
  // Ref para o drop container e para o drag handle
  const handleRef = useRef<HTMLDivElement>(null);

  // Drop para reordenar módulos
  const [, drop] = useDrop({
    accept: ItemTypes.MODULE,
    hover: (item: { index: number }) => {
      if (item.index !== index) {
        moveModule(item.index, index);
        item.index = index;
      }
    },
  });

  // Drag para o módulo – associamos o drag ao drag handle
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.MODULE,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  useEffect(() => {
    if (handleRef.current) {
      drag(handleRef.current);
    }
  }, [drag]);

  // Estado para edição do título
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(module.title);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleTitleBlur = () => {
    setIsEditing(false);
    updateModuleTitle(module.id, title);
  };

  const handleTitleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsEditing(false);
      updateModuleTitle(module.id, title);
    }
  };

  return (
    <div
      ref={(node) => {
        drop(node);
      }}
      className={`bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all ${isDragging ? "opacity-50" : "opacity-100"}`}
    >
      <div className="flex items-center mb-4">
        {/* Drag handle para o módulo */}
        <div ref={handleRef} className="cursor-move">
          <DragIndicatorIcon />
        </div>
        {isEditing ? (
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            onBlur={handleTitleBlur}
            onKeyDown={handleTitleKeyDown}
            className="ml-2 text-xl font-semibold border-b border-gray-300 focus:outline-none"
            autoFocus
          />
        ) : (
          <h3 onClick={() => setIsEditing(true)} className="ml-2 text-xl font-semibold">
            {module.title}
          </h3>
        )}
      </div>
      <div className="space-y-2">
        {module.lessons.map((lesson, lessonIndex) => (
          <Lesson
            key={lesson.id}
            lesson={lesson}
            moduleId={module.id}
            lessonIndex={lessonIndex}
            moveLesson={moveLesson}
          />
        ))}
        <AddLessonModal />
      </div>
    </div>
  );
};

interface LessonProps {
  lesson: LessonType;
  moduleId: string;
  lessonIndex: number;
  moveLesson: (props: MoveLessonProps) => void;
}

const Lesson = ({ lesson, moduleId, lessonIndex, moveLesson }: LessonProps) => {
  // Refs para o container de drop e para o drag handle da aula
  const handleRef = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: ItemTypes.LESSON,
    hover: (item: { moduleId: string; lessonIndex: number }) => {
      if (item.moduleId !== moduleId || item.lessonIndex !== lessonIndex) {
        moveLesson({
          fromModuleId: item.moduleId,
          fromIndex: item.lessonIndex,
          toModuleId: moduleId,
          toIndex: lessonIndex,
        });
        item.lessonIndex = lessonIndex;
        item.moduleId = moduleId;
      }
    },
  });

  // Drag para a aula – associamos o drag ao drag handle
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.LESSON,
    item: { moduleId, lessonIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  useEffect(() => {
    if (handleRef.current) {
      drag(handleRef.current);
    }
  }, [drag]);

  return (
    <div
      ref={drop as unknown as Ref<HTMLDivElement>}
      className={`bg-gray-100 p-2 rounded-md shadow-sm flex justify-between items-center ${isDragging ? "opacity-50" : "opacity-100"}`}
    >
      <div className="flex items-center">
        {/* Drag handle para a aula */}
        <div ref={handleRef} className="cursor-move mr-2">
          <DragIndicatorIcon fontSize="small" />
        </div>
        <span>{lesson.title}</span>
      </div>
      <div className="ml-2 text-sm text-gray-500">Arraste para outro módulo</div>
    </div>
  );
};

export default DragDrop;
