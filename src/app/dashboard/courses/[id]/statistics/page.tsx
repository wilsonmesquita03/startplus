"use client"
import { AreaChart, Area, XAxis, CartesianGrid, PieChart, Pie, BarChart, Bar } from 'recharts';

import * as React from "react"
import { Label } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import OwnersTable from './owners-table';

const progressConfig = {
  concluited: {
    label: "Concluído",
    color: "#6777ef",
  },
  in_progress: {
    label: "Em andamento",
    color: "#cdd3d8",
  },
  not_started: {
    label: "Não iniciado",
    color: "#ffa426",
  },
} satisfies ChartConfig

const progressData = [
  { status: "concluited", value: 30, fill: "#6777ef" },
  { status: "in_progress", value: 10, fill: "#cdd3d8" },
  { status: "not_started", value: 20, fill: "#ffa426" },
]

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

const progressOverviewData = [
  { percentage: "0-10", student: 100 },
  { percentage: "10-20", student: 0 },
  { percentage: "20-30", student: 0 },
  { percentage: "30-40", student: 0 },
  { percentage: "40-50", student: 0 },
  { percentage: "50-60", student: 0 },
  { percentage: "60-70", student: 0 },
  { percentage: "70-80", student: 0 },
  { percentage: "80-90", student: 0 },
  { percentage: "90-100", student: 0 },

]
const progressOverviewConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export default function Page() {
  return (
    <div className="p-6">
      {/* Estatísticas principais */}
      <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 border rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Total de Alunos</h3>
          <p className="text-xl font-bold">150</p>
        </div>
        <div className="p-4 border rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Número de Vendas</h3>
          <p className="text-xl font-bold">200</p>
        </div>
        <div className="p-4 border rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Total Recebido</h3>
          <p className="text-xl font-bold">R$10.000,00</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <Card>
          <CardHeader className="items-center pb-0">
            <CardTitle>Progresso do curso</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={progressConfig}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={progressData}
                  dataKey="value"
                  nameKey="status"
                  innerRadius={60}
                  strokeWidth={5}
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-3xl font-bold"
                            >
                              {progressData.reduce((acc, cur) => acc + cur.value, 0).toLocaleString()}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                              Alunos
                            </tspan>
                          </text>
                        )
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 text-sm">
            <div className="flex flex-col">
              {
                Object.values(progressConfig).map(({ label, color }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2"
                  >
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                    <span>{label}</span>
                  </div>
                ))
              }
            </div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="items-center pb-0">
            <CardTitle>Progresso do curso</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={progressConfig}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={progressData}
                  dataKey="value"
                  nameKey="status"
                  innerRadius={60}
                  strokeWidth={5}
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-3xl font-bold"
                            >
                              {progressData.reduce((acc, cur) => acc + cur.value, 0).toLocaleString()}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                              Alunos
                            </tspan>
                          </text>
                        )
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 text-sm">
            <div className="flex flex-col">
              {
                Object.values(progressConfig).map(({ label, color }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2"
                  >
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                    <span>{label}</span>
                  </div>
                ))
              }
            </div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="items-center pb-0">
            <CardTitle>Progresso do curso</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={progressConfig}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={progressData}
                  dataKey="value"
                  nameKey="status"
                  innerRadius={60}
                  strokeWidth={5}
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-3xl font-bold"
                            >
                              {progressData.reduce((acc, cur) => acc + cur.value, 0).toLocaleString()}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                              Alunos
                            </tspan>
                          </text>
                        )
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 text-sm">
            <div className="flex flex-col">
              {
                Object.values(progressConfig).map(({ label, color }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2"
                  >
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                    <span>{label}</span>
                  </div>
                ))
              }
            </div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="items-center pb-0">
            <CardTitle>Progresso do curso</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={progressConfig}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={progressData}
                  dataKey="value"
                  nameKey="status"
                  innerRadius={60}
                  strokeWidth={5}
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-3xl font-bold"
                            >
                              {progressData.reduce((acc, cur) => acc + cur.value, 0).toLocaleString()}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                              Alunos
                            </tspan>
                          </text>
                        )
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 text-sm">
            <div className="flex flex-col">
              {
                Object.values(progressConfig).map(({ label, color }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2"
                  >
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                    <span>{label}</span>
                  </div>
                ))
              }
            </div>
          </CardFooter>
        </Card>
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Vendas mensais</CardTitle>
            <CardDescription>
              Mostrando o total de vendas nos últimos 12 meses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="line" />}
                />
                <Area
                  dataKey="desktop"
                  type="natural"
                  fill="var(--color-desktop)"
                  fillOpacity={0.4}
                  stroke="var(--color-desktop)"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Progresso do Curso (%)</CardTitle>
            <CardDescription>Exibe onde os alunos estão no curso</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={progressOverviewConfig}>
              <BarChart accessibilityLayer data={progressOverviewData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="percentage"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar dataKey="student" fill="var(--color-desktop)" radius={8} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
      <OwnersTable />
    </div>
  );
}
