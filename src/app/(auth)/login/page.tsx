"use client"
import { useActionState } from "react";
import { loginUser } from "../actions";
import Link from "next/link";

export default function Page() {
  const [message, formAction, pending] = useActionState(loginUser, null);

  // Função para renderizar erros de forma dinâmica
  const renderError = (field: string) => {
    if (message?.errors && message.errors[field]) {
      return (
        <div className="text-red-500 text-sm mt-2">
          {message.errors[field].map((error: string, index: number) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        action={formAction}
        className="bg-white shadow-lg rounded-lg p-8 m-4 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite seu email"
          />
          {renderError("email")}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold" htmlFor="password">
            Senha
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite sua senha"
          />
          {renderError("password")}
        </div>

        {message?.errors?.general && (
          <div className="text-red-500 text-sm mb-4">
            {message.errors.general.map((error: string, index: number) => (
              <div key={index}>{error}</div>
            ))}
          </div>
        )}

        {
          !pending && (
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Entrar
            </button>
          )
        }

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            <span>Não tem uma conta? </span>
            <Link
              href="/register" // Altere o link para a página de registro
              className="text-blue-600 hover:text-blue-700"
            >
              Cadastrar-se
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
