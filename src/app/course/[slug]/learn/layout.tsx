import React from "react";
import LearnLayout from "@/components/learnLayout";
import { SidebarProvider } from "./sidebar-provider";
import prisma from "@/lib/prisma";
import { CourseProvider } from "./course-provider";

export default async function Layout({ children, params }: { children: React.ReactNode, params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const courseContent = await prisma.course.findFirst({
    where: {
      slug
    },
    select: {
      title: true,
      slug: true,
      modules: {
        orderBy: {
          order: "asc"
        },
        select: {
          id: true,
          title: true,
          lessons: {
            orderBy: {
              order: "asc"
            },
            select: {
              id: true,
              title: true,
              type: true,
            }
          }
        }
      }
    }
  })

  if (!courseContent) {
    return null
  }

  return (
    <CourseProvider initialProps={courseContent}>
      <SidebarProvider>
        <LearnLayout data={courseContent}>
          {children}
        </LearnLayout>
      </SidebarProvider>
    </CourseProvider>
  )
}