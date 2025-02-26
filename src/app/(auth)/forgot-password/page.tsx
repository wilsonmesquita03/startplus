import { sendEmail } from "@/lib/mailer";

export default async function Page() {
  async function sendResetPasswordEmail(formData: FormData) {
    "use server";

    const data = {
      email: formData.get("email") as string,
    };

    const resetLink = `${process.env.APP_URL}/reset-password?token=${123}`;
    const expiration = 30; // O link expira em 30 minutos

    await sendEmail(data.email, "Redefinição de Senha", "password-reset", {
      name: "John Doe",
      resetLink,
      expiration,
    });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 m-4 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Esqueceu sua senha?</h2>
        <p className="text-gray-600 mb-4">Insira seu email para receber um link para redefinir sua senha.</p>

        <form action={sendResetPasswordEmail}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <button
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}