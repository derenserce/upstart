"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { type: "Boodschappen", amount: 275, fill: "var(--color-chrome)" },
  { type: "Entertainment", amount: 200, fill: "var(--color-safari)" },
  { type: "Huur", amount: 287, fill: "var(--color-firefox)" },
  { type: "Verzekeringen", amount: 173, fill: "var(--color-edge)" },
  { type: "Auto", amount: 190, fill: "var(--color-other)" },
];

const chartConfig = {
  amount: {
    label: "amount",
  },
  chrome: {
    label: "Boodschappen",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Entertainment",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Huur",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Verzekeringen",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Auto",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export const ExpensesPieChart = () => {
  const totalamount = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.amount, 0);
  }, []);

  return (
    <Card>
      <CardHeader className="space-y-0">
        <CardTitle className="text-xl">Voorbeeld taartdiagram</CardTitle>
        <CardDescription>Deze week</CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel indicator="line"/>} />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="type"
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
                          {totalamount.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Hoeveelheid
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
