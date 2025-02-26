import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { redirect } from "next/navigation";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const url = new URL(req.url || "");

  const slug = url.pathname.split("/")[2];

  const lesson = await prisma.courseLesson.findFirst();

  if (!lesson) {
    return redirect("/");
  }

  redirect(`/course/${slug}/learn/${lesson.type.toLowerCase()}/${lesson.id}`);
}

