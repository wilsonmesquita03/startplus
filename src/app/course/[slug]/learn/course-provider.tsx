"use client"
import { createContext, ReactNode, useContext } from 'react';

interface CourseContextProps {
  slug: string;
  title: string;
  modules: {
    id: number;
    title: string;
    lessons: {
      id: number;
      title: string;
      type: "Lecture" | "Quizz" | "Text"
    }[];
  }[];
}

const CourseContext = createContext<CourseContextProps | undefined>(undefined);

interface CourseProviderProps {
  children: ReactNode;
  initialProps: CourseContextProps;
}

export const CourseProvider = ({ children, initialProps }: CourseProviderProps) => {
  return (
    <CourseContext.Provider value={initialProps}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = (): CourseContextProps => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error('useCourse must be used within a CourseProvider');
  }
  return context;
};
