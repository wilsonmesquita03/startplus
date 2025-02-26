import nodemailer from "nodemailer";
import { loadTemplate } from "./email-templates";

const isDev = process.env.NODE_ENV === "development";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "localhost",
  port: Number(process.env.SMTP_PORT) || 1025,
  secure: !isDev,
  tls: { rejectUnauthorized: !isDev },
  auth: isDev
    ? undefined
    : { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});

/**
 * Envia um e-mail formatado usando um template
 * @param to Email do destinatário
 * @param subject Assunto do e-mail
 * @param templateName Nome do template (sem extensão)
 * @param data Dados dinâmicos para o template
 */
export const sendEmail = async (
  to: string,
  subject: string,
  templateName: string,
  data: Record<string, unknown>
) => {
  if (!to) throw new Error("Destinatário não definido");

  const html = loadTemplate(templateName, data);

  await transporter.sendMail({
    from: process.env.SMTP_FROM || "no-reply@exemplo.com",
    to,
    subject,
    html,
  });
};