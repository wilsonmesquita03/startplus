"use client"
import { useActionState } from "react";
import { registerUser } from "../actions";
import Link from "next/link";

export default function Page() {
  const [message, formAction] = useActionState(registerUser, null);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        action={formAction}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Registrar-se</h2>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold" htmlFor="displayName">
            Nome de Exibição
          </label>
          <input
            type="text"
            name="displayName"
            id="displayName"
            className={`w-full p-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ${message?.errors?.displayName ? 'border-red-500' : ''}`}
            placeholder="Digite seu nome de exibição"
          />
          {message?.errors?.displayName && (
            <p className="text-red-500 text-sm">{message.errors.displayName.join(", ")}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className={`w-full p-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ${message?.errors?.email ? 'border-red-500' : ''}`}
            placeholder="Digite seu email"
          />
          {message?.errors?.email && (
            <p className="text-red-500 text-sm">{message.errors.email.join(", ")}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold" htmlFor="password">
            Senha
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className={`w-full p-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ${message?.errors?.password ? 'border-red-500' : ''}`}
            placeholder="Digite sua senha"
          />
          {message?.errors?.password && (
            <p className="text-red-500 text-sm">{message.errors.password.join(", ")}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Cadastrar
        </button>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            <span>Já tem conta? </span>
            <Link
              href="/login" // Altere o link para a página de login, se necessário
              className="text-blue-600 hover:text-blue-700"
            >
              Entrar
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
