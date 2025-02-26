"use server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import prisma from "./prisma";

type User = {
  id: number;
  username: string;
  displayName: string | null;
  email: string;
  roleId: number;
  permissions: string[];
};

type SessionContextType =
  | { status: "loading" | "unauthenticated"; user: null }
  | { status: "authenticated"; user: User };

export const getSession = async (): Promise<SessionContextType> => {
  const cookieStore = await cookies();
  const auth = cookieStore.get("session_token");

  return await retrieveFromCookie(auth?.value);
};

export const isAuthenticated = async () => {
  const session = await getSession();

  return session.status === "authenticated";
};

export const retrieveFromCookie = async (
  token?: string
): Promise<SessionContextType> => {
  if (!token) {
    return { status: "unauthenticated", user: null };
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY || "");

    if (typeof decoded === "object" && decoded !== null && "id" in decoded) {
      const user = await prisma.user.findUnique({
        where: { id: Number(decoded.id) },
        select: {
          id: true,
          username: true,
          displayName: true,
          email: true,
          roleId: true,
          permissions: {
            select: {
              permission: {
                select: {
                  name: true,
                },
              },
            },
          },
          role: {
            select: {
              permissions: {
                select: {
                  permission: {
                    select: {
                      name: true,
                    },
                  },
                },
              },
            },
          },
        },
      });

      if (!user) {
        return { status: "unauthenticated", user: null };
      }

      const permissions = [
        ...user.permissions.map((permission) => permission.permission.name),
        ...user.role?.permissions.map(
          (permission) => permission.permission.name
        ),
      ];

      return { status: "authenticated", user: { ...user, permissions } };
    }
    return { status: "unauthenticated", user: null };
  } catch {
    return { status: "unauthenticated", user: null };
  }
};

