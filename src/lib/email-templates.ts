import fs from "fs";
import path from "path";
import handlebars from "handlebars";

type TemplateData = Record<string, unknown>;

/**
 * Carrega e compila um template de e-mail usando Handlebars.
 * @param templateName Nome do arquivo de template (sem extensão)
 * @param data Dados dinâmicos a serem inseridos no template
 * @returns String contendo o HTML do e-mail processado
 */
export const loadTemplate = (templateName: string, data: TemplateData): string => {
  const filePath = path.resolve("src/templates", `${templateName}.hbs`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Template '${templateName}.hbs' não encontrado em '${filePath}'.`);
  }

  const templateFile = fs.readFileSync(filePath, "utf-8");
  const template = handlebars.compile(templateFile);
  return template(data);
};
