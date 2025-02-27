"use server";

import prisma from "@/lib/prisma";
import { lectureSchema } from "./forms";

export async function createLectureSchema(formData: FormData) {}

export async function createModuleAction(courseId: number) {
  const moduleCount = await prisma.courseModule.count({
    where: {
      courseId,
    },
  });

  const _module = await prisma.courseModule.create({
    data: {
      title: `Módulo ${moduleCount + 1}`,
      courseId,
      order: moduleCount,
    },
    include: {
      lessons: true,
    },
  });

  return _module;
}

export async function moveModuleAction(moduleId: number, newOrder: number) {
  const _module = await prisma.courseModule.findUnique({
    where: { id: moduleId },
    select: { courseId: true, order: true },
  });

  if (!_module) return;

  const anotherModules = await prisma.courseModule.findMany({
    where: { courseId: _module.courseId },
    orderBy: { order: "asc" },
    select: { id: true, order: true, title: true },
  });

  const newModules = anotherModules.map((module) => {
    if (module.id === moduleId) {
      return { ...module, order: newOrder };
    }

    if (module.order > _module.order && module.order <= newOrder) {
      return { ...module, order: module.order - 1 };
    }

    if (module.order < _module.order && module.order >= newOrder) {
      return { ...module, order: module.order + 1 };
    }

    return module;
  });

  await prisma.$transaction(
    newModules.map((module) =>
      prisma.courseModule.update({
        where: { id: module.id },
        data: { order: module.order, title: module.title },
      })
    )
  )  
}

