"use client";

import { Bar, BarChart, CartesianGrid, Label, Pie, PieChart, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";

const chartConfig = {
  blue: {
    color: "#2563eb",
  },
} satisfies ChartConfig;

export function ExpensesChart() {
  const normalizeExpenses = (data: { day: string; amount: number }[]) => {
    const days = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];

    const normalized: { day: string; amount: number }[] = days.map((day) => {
      const existing = data.find((entry) => entry.day === day);
      return existing ? existing : { day, amount: 0 }; // Default amount to 0 if no expense exists for the day
    });

    return normalized;
  };

  const [expenses, setExpenses] = useState(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses") || "[]");
    return normalizeExpenses(storedExpenses);
  });

  useEffect(() => {
    const syncExpenses = () => {
      const storedExpenses = JSON.parse(localStorage.getItem("expenses") || "[]");
      setExpenses(normalizeExpenses(storedExpenses));
    };

    window.addEventListener("storage", syncExpenses);
    return () => window.removeEventListener("storage", syncExpenses);
  }, []);

  return (
    <Card>
      <CardHeader className="space-y-0">
        <CardTitle className="text-xl">Uitgaven staafdiagram</CardTitle>
        <CardDescription>Deze week</CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <ChartContainer config={chartConfig} className="-ml-4">
          <BarChart accessibilityLayer data={expenses}>
            <CartesianGrid vertical={false} strokeWidth={2} />
            <YAxis tickLine={false} axisLine={false} tickMargin={0} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel indicator="line" />} />
            <Bar dataKey="amount" fill="var(--color-blue)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
