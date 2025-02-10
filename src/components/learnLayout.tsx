"use client";
import React, { useState, useEffect } from "react";
import CourseGroup from '@/components/courseGroup';
import CloseIcon from '@mui/icons-material/Close';
import Footer from "@/components/footer";
import { useSidebar } from "@/app/course/[slug]/learn/sidebar-provider";
import SearchIcon from '@mui/icons-material/Search';
import Image from "next/image";
import Link from "next/link";
import { useCourse } from "@/app/course/[slug]/learn/course-provider";

type Data = {
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


const Learnlayout = ({ children, data }: { children: React.ReactNode, data: Data }) => {
  const [sidebarTop, setSidebarTop] = useState(56);
  const [sidebarHeight, setSidebarHeight] = useState(0);
  const { isOpen, toggleSidebar, closeSidebar } = useSidebar()
  const { slug } = useCourse()

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const newTop = Math.max(56 - currentScroll, 0);
      const newHeight = window.innerHeight - newTop;
      setSidebarTop(newTop);
      setSidebarHeight(newHeight);
    };

    const handleResize = () => {
      console.log(window.innerWidth)
      if (window.innerWidth > 1159 && !isOpen) toggleSidebar()
      if (window.innerWidth < 1159) closeSidebar()
    };

    handleScroll();
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-[#1d1e27] w-full h-[56px] flex items-center gap-4 px-4 flex-shrink-0 border-b border-b-[#595c73]">
        <Image
          src="/assets/default/img/home/logo.svg" // Substitua pelo caminho correto da logo
          alt="Logo"
          width={84}
          height={16}
        />
        <Link href={`/course/${slug}`} className="text-white text-lg">{data.title}</Link>
      </div>

      <div className="flex-1 flex">
        <main className={`flex-1 bg-black ${isOpen ? "mr-[415px]" : ""}`}>
          <div className="w-full">
            {children}
          </div>
          <div className="p-4 bg-white">
            <div className="flex gap-4 text-[#595c73] font-bold">
              <button><SearchIcon /></button>
              {!isOpen && <button>Conteúdo</button>}
              <button>Perguntas & Respostas</button>
              <button>Notas</button>
            </div>
          </div>
          <Footer />
        </main>
        {isOpen && (
          <div
            className="w-[415px] fixed right-0 bg-white z-250 text-black border-l border-[#d1d2e0]"
            style={{
              top: `${sidebarTop}px`,
              height: `${sidebarHeight}px`,
            }}
          >
            <div className="sidebar--header flex justify-between w-full p-4 h-fit border-b border-b-[#d1d2e0]">
              <h2 className="font-bold">Conteúdo do curso</h2>
              <button onClick={closeSidebar}>
                <CloseIcon />
              </button>
            </div>
            <div
              className="sidebar--content overflow-y-auto"
              style={{ maxHeight: `${sidebarHeight - 56}px` }}
            >
              {
                data.modules.map((module) => (
                  <CourseGroup key={module.id} data={module} />
                ))
              }
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Learnlayout;
