"use server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import prisma from "./prisma";

type User = {
  username: string;
  displayName: string | null;
  email: string;
  roleId: number;
};

type SessionContextType =
  | { status: "loading" | "unauthenticated"; user: null }
  | { status: "authenticated"; user: User };

export const getSession = async (): Promise<SessionContextType> => {
  const cookieStore = await cookies();
  const auth = cookieStore.get("session_token");

  if (!auth) {
    return { status: "unauthenticated", user: null };
  }

  try {
    const decoded = jwt.verify(auth.value, process.env.SECRET_KEY || "");

    if (typeof decoded === "object" && decoded !== null && "id" in decoded) {
      const user = await prisma.user.findUnique({
        where: { id: Number(decoded.id) },
        select: {
          username: true,
          displayName: true,
          email: true,
          roleId: true,
        },
      });

      if (!user) {
        return { status: "unauthenticated", user: null };
      }

      return { status: "authenticated", user };
    }

    return { status: "unauthenticated", user: null };
  } catch {
    return { status: "unauthenticated", user: null };
  }
};

export const isAuthenticated = async () => {
  const session = await getSession();

  return session.status === "authenticated";
};
