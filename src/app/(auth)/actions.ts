"use server";
import { ZodError } from "zod";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { z } from "zod";
import { redirect } from "next/navigation";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function loginUser(prevState: any, formData: FormData) {
  const rawFormData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const validated = loginSchema.safeParse(rawFormData);

  if (!validated.success) {
    const formattedErrors = validated.error.errors.reduce((acc, err) => {
      const field = err.path[0]; // Pega o nome do campo
      if (!acc[field]) {
        acc[field] = [];
      }
      acc[field].push(err.message);
      return acc;
    }, {} as Record<string, string[]>);

    return { errors: formattedErrors };
  }

  const { email, password } = validated.data;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return { errors: { email: ["Email ou senha incorretos"] } };
  }

  try {
    const passwordOk = bcrypt.compareSync(password, user.password);

    if (!passwordOk) {
      return { errors: { password: ["Email ou senha incorretos"] } };
    }

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.SECRET_KEY!,
      {
        expiresIn: "1d",
      }
    );

    const cookieStore = await cookies();

    cookieStore.set("session_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      const fieldErrors: Record<string, string[]> = {};

      // Agrupar os erros por campo
      error.errors.forEach((err) => {
        const field = err.path[0];
        if (!fieldErrors[field]) {
          fieldErrors[field] = [];
        }
        fieldErrors[field].push(err.message);
      });

      // Retornar os erros formatados
      return { errors: fieldErrors };
    }

    return { errors: { general: ["Ocorreu um erro inesperado"] } };
  } finally {
    redirect("/dashboard");
  }
}

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  displayName: z.string(),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function registerUser(prevState: any, formData: FormData) {
  const rawFormData = {
    email: formData.get("email"),
    password: formData.get("password"),
    displayName: formData.get("displayName"),
  };

  try {
    const validated = await registerSchema.safeParseAsync(rawFormData);

    if (!validated.success) {
      const formattedErrors = validated.error.errors.reduce((acc, err) => {
        const field = err.path[0]; // Pega o nome do campo
        if (!acc[field]) {
          acc[field] = [];
        }
        acc[field].push(err.message);
        return acc;
      }, {} as Record<string, string[]>);
  
      return { errors: formattedErrors };
    }

    const { email, password, displayName } = validated.data;

    const config = await prisma.config.findFirst();

    if (!config) {
      return { success: false, error: "Nenhuma configuração encontrada" };
    }

    await prisma.user.create({
      data: {
        email,
        username: email,
        password: bcrypt.hashSync(password, 10),
        displayName,
        roleId: config.defaultRoleId,
      },
    });
  } catch (error) {
    if (error instanceof ZodError) {
      const fieldErrors: Record<string, string[]> = {};

      // Agrupar os erros por campo
      error.errors.forEach((err) => {
        const field = err.path[0];
        if (!fieldErrors[field]) {
          fieldErrors[field] = [];
        }
        fieldErrors[field].push(err.message);
      });

      // Retornar os erros formatados
      return { success: false, errors: fieldErrors };
    }

    // Caso não seja erro do Zod, retorna erro genérico
    return { success: false, error: "Ocorreu um erro inesperado" };
  } finally {
    await loginUser({}, formData);
  }
}
