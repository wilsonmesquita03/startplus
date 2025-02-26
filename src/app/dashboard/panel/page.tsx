import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle, Calendar, Clock, User } from "lucide-react";

export default function Page() {
  // Dados fictícios para exemplificar
  const cursosEmAndamento = [
    {
      id: "1",
      titulo: "Curso de React Avançado",
      progresso: 65,
      ultimaAula: "Componentes Controlados",
    },
    {
      id: "2",
      titulo: "Curso de Node.js",
      progresso: 40,
      ultimaAula: "Criando APIs RESTful",
    },
  ];

  const proximasAulasAoVivo = [
    {
      id: "1",
      titulo: "Aula de TypeScript Avançado",
      data: "05/11/2025",
      horario: "19:00",
      instrutor: "Carlos Souza",
      link: "#",
      emBreve: true, // Destacar que a aula está próxima
    },
    {
      id: "2",
      titulo: "Aula de Práticas de Clean Code",
      data: "05/11/2025",
      horario: "20:00",
      instrutor: "Maria Oliveira",
      link: "#",
      emBreve: false,
    },
  ];

  return (
    <div>
      {/* Mensagem de Boas-Vindas */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Bem-vindo de volta, João!</h1>
        <p className="text-muted-foreground">
          Continue de onde parou ou explore novos cursos.
        </p>
      </div>

      {/* Seção: Próximas Aulas Ao Vivo */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Próximas Aulas Ao Vivo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {proximasAulasAoVivo.map((aula) => (
            <Card
              key={aula.id}
              className={`relative ${aula.emBreve ? "border-2 border-blue-500 animate-pulse" : ""
                }`}
            >
              {/* Destaque para aulas próximas */}
              {aula.emBreve && (
                <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                  Em breve
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-lg">{aula.titulo}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{aula.data}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>{aula.horario}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="mr-2 h-4 w-4" />
                    <span>{aula.instrutor}</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="default">
                  <PlayCircle className="mr-2 h-4 w-4" />
                  Acessar Sala de Aula
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Seção: Continuar Assistindo */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Continuar Assistindo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cursosEmAndamento.map((curso) => (
            <Card key={curso.id}>
              <CardHeader>
                <CardTitle className="text-lg">{curso.titulo}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${curso.progresso}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {curso.progresso}% concluído
                  </p>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Última aula: {curso.ultimaAula}
                </p>
                <Button className="w-full" variant="default">
                  <PlayCircle className="mr-2 h-4 w-4" />
                  Continuar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Seção: Cursos Recomendados */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Cursos Recomendados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Exemplo de card de curso recomendado */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Curso de TypeScript</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Aprenda TypeScript do básico ao avançado.
              </p>
              <Button className="w-full" variant="outline">
                <PlayCircle className="mr-2 h-4 w-4" />
                Começar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}