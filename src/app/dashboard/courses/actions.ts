"use server";

import prisma from "@/lib/prisma";

export async function publishCourse(id: number) {
  await prisma.course.update({
    where: {
      id,
    },
    data: {
      draft: false,
    },
  });
}

export async function unpublishCourse(id: number) {
  await prisma.course.update({
    where: {
      id,
    },
    data: {
      draft: true,
    },
  });
}

