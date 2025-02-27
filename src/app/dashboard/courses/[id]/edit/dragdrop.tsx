"use client"
import React, { useState, useRef, useEffect, Ref } from "react";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { useDrag, useDrop } from "react-dnd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import AddLessonModal from '../../../../../components/dialog/add-lesson';
import { createModuleAction, moveModuleAction } from "./actions";

// Tipagem dos itens
interface CourseData {
  id: number;
  modules: Module[];
}

interface Module {
  id: number;
  title: string | null;
  courseId: number;
  order: number; // Ordem de exibição
  lessons: Lesson[];
}

interface Lesson {
  id: number;
  title: string | null;
  content: string | null;
  vimeoId: string | null;
  courseModuleId: number;
  type: "Lecture" | "Quizz" | "Text";
  order: number; // ordem de exibição
}

interface MoveLessonProps {
  fromModuleId: number;
  fromIndex: number;
  toModuleId: number;
  toIndex: number;
}

const ItemTypes = {
  MODULE: "module",
  LESSON: "lesson",
};

const DragDrop = ({ defaultValue }: { defaultValue: CourseData }) => {
  const [courseData, setCourseData] = useState<CourseData>(defaultValue);

  const moveModule = (fromIndex: number, toIndex: number) => {
    const newModules = [...courseData.modules];
    const [movedModule] = newModules.splice(fromIndex, 1);
    newModules.splice(toIndex, 0, movedModule);
    // Atualiza a ordem dos módulos
    newModules.forEach((module, index) => {
      module.order = index + 1;
    });

    moveModuleAction(movedModule.id, toIndex);
    setCourseData({ ...courseData, modules: newModules });
  };

  const moveLesson = ({
    fromModuleId,
    fromIndex,
    toModuleId,
    toIndex,
  }: MoveLessonProps) => {
    const newModules = [...courseData.modules];
    const fromModule = newModules.find((mod) => mod.id === fromModuleId);
    const toModule = newModules.find((mod) => mod.id === toModuleId);

    if (fromModule && toModule) {
      const [movedLesson] = fromModule.lessons.splice(fromIndex, 1);
      toModule.lessons.splice(toIndex, 0, movedLesson);
      // Atualiza a ordem das aulas
      fromModule.lessons.forEach((lesson, index) => {
        lesson.order = index + 1;
      });
      toModule.lessons.forEach((lesson, index) => {
        lesson.order = index + 1;
      });
      setCourseData({ ...courseData, modules: newModules });
    }
  };

  // Função para deletar um módulo
  const deleteModule = (moduleId: number) => {
    const newModules = courseData.modules.filter((module) => module.id !== moduleId);
    // Atualiza a ordem dos módulos restantes
    newModules.forEach((module, index) => {
      module.order = index + 1;
    });
    setCourseData({ ...courseData, modules: newModules });
  };

  // Função para deletar uma aula
  const deleteLesson = (moduleId: number, lessonId: number) => {
    const newModules = courseData.modules.map((module) => {
      if (module.id === moduleId) {
        const newLessons = module.lessons.filter((lesson) => lesson.id !== lessonId);
        // Atualiza a ordem das aulas restantes
        newLessons.forEach((lesson, index) => {
          lesson.order = index + 1;
        });
        return { ...module, lessons: newLessons };
      }
      return module;
    });
    setCourseData({ ...courseData, modules: newModules });
  };

  // Atualiza o título do módulo
  const updateModuleTitle = (moduleId: number, newTitle: string) => {
    const newModules = courseData.modules.map((module) =>
      module.id === moduleId ? { ...module, title: newTitle } : module
    );
    setCourseData({ ...courseData, modules: newModules });
  };

  // Adiciona um novo módulo
  const addModule = async (e: React.MouseEvent) => {
    e.preventDefault()

    const _module = await createModuleAction(courseData.id);

    setCourseData({ ...courseData, modules: [...courseData.modules, _module] });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-6 space-y-6">
        {courseData.modules.map((module, moduleIndex) => (
          <Module
            key={module.id}
            index={moduleIndex}
            module={module}
            moveModule={moveModule}
            moveLesson={moveLesson}
            updateModuleTitle={updateModuleTitle}
            deleteModule={deleteModule}
            deleteLesson={deleteLesson}
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
  module: Module;
  index: number;
  moveModule: (fromIndex: number, toIndex: number) => void;
  moveLesson: (props: MoveLessonProps) => void;
  updateModuleTitle: (moduleId: number, newTitle: string) => void;
  deleteModule: (moduleId: number) => void;
  deleteLesson: (moduleId: number, lessonId: number) => void;
}

const Module = ({
  module,
  index,
  moveModule,
  moveLesson,
  updateModuleTitle,
  deleteModule,
  deleteLesson,
}: ModuleProps) => {
  const handleRef = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: ItemTypes.MODULE,

    drop: (item: { index: number }) => {
      if (item.index !== index) {
        moveModule(item.index, index);
        item.index = index;
      }
    }
  });

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

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(module.title);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleTitleBlur = () => {
    setIsEditing(false);
    updateModuleTitle(module.id, title || "");
  };

  const handleTitleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsEditing(false);
      updateModuleTitle(module.id, title || "");
    }
  };

  return (
    <div
      ref={(node) => {
        drop(node);
      }}
      className={`bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all ${isDragging ? "opacity-50" : "opacity-100"
        } group`} // Adicionei a classe "group" aqui
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div ref={handleRef} className="cursor-move">
            <DragIndicatorIcon />
          </div>
          {isEditing ? (
            <input
              type="text"
              value={title || ""}
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
        {/* Botão de deletar módulo */}
        <button
          onClick={() => deleteModule(module.id)}
          className="text-red-600 hover:text-red-800 transition-colors opacity-0 group-hover:opacity-100"
        >
          <DeleteIcon />
        </button>
      </div>
      <div className="space-y-2">
        {module.lessons.map((lesson, lessonIndex) => (
          <Lesson
            key={lesson.id}
            lesson={lesson}
            moduleId={module.id}
            lessonIndex={lessonIndex}
            moveLesson={moveLesson}
            deleteLesson={deleteLesson}
          />
        ))}
        <AddLessonModal />
      </div>
    </div>
  );
};

interface LessonProps {
  lesson: Lesson;
  moduleId: number;
  lessonIndex: number;
  moveLesson: (props: MoveLessonProps) => void;
  deleteLesson: (moduleId: number, lessonId: number) => void;
}

const Lesson = ({ lesson, moduleId, lessonIndex, moveLesson, deleteLesson }: LessonProps) => {
  const handleRef = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: ItemTypes.LESSON,
    hover: (item: { moduleId: number; lessonIndex: number }) => {
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
      className={`bg-gray-100 p-2 rounded-md shadow-sm flex justify-between items-center ${isDragging ? "opacity-50" : "opacity-100"
        } group`} // Adicionei a classe "group" aqui
    >
      <div className="flex items-center">
        <div ref={handleRef} className="cursor-move mr-2">
          <DragIndicatorIcon fontSize="small" />
        </div>
        <span>{lesson.title}</span>
      </div>
      {/* Botão de deletar aula */}
      <button
        onClick={() => deleteLesson(moduleId, lesson.id)}
        className="text-red-600 hover:text-red-800 transition-colors opacity-0 group-hover:opacity-100"
      >
        <DeleteIcon fontSize="small" />
      </button>
    </div>
  );
};

export default DragDrop;