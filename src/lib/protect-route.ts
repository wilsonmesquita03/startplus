"use server"
import { redirect, unauthorized } from "next/navigation";
import { getSession } from "./session";

export const protectedRoute = async (permission: string) => {
  const session = await getSession();

  if (session.status !== "authenticated") {
    redirect("/login");
  }

  if (!session.user.permissions.includes(permission)) {
    unauthorized()
  }
};
