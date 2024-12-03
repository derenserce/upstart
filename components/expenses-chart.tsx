// "use client";

// import { Bar, BarChart, XAxis } from "recharts";

// import { ChartConfig, ChartContainer } from "@/components/ui/chart";

// const chartData = [
//   { month: "Maandag", desktop: 186 },
//   { month: "Dinsdag", desktop: 305 },
//   { month: "Woensdag", desktop: 237 },
//   { month: "Donderdag", desktop: 73 },
//   { month: "Vrijdag", desktop: 209 },
//   { month: "Zaterdag", desktop: 214 },
//   { month: "Zondag", desktop: 214 },
// ];

// const chartConfig = {
//   blue: {
//     color: "#2563eb",
//   },
//   lightBlue: {
//     color: "#60a5fa",
//   },
// } satisfies ChartConfig;

// export function ExpensesChart() {
//   return (
//     <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
//       <BarChart accessibilityLayer data={chartData}>
//         <Bar dataKey="desktop" fill="var(--color-lightBlue)" radius={4} />
//         <XAxis
//           dataKey="month"
//           tickLine={false}
//           tickMargin={10}
//           axisLine={false}
//           tickFormatter={(value) => value.slice(0, 3)}
//         />
//       </BarChart>
//     </ChartContainer>
//   );
// }

"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
  { month: "Maandag", desktop: 100 },
  { month: "Dinsdag", desktop: 305 },
  { month: "Woensdag", desktop: 237 },
  { month: "Donderdag", desktop: 73 },
  { month: "Vrijdag", desktop: 209 },
  { month: "Zaterdag", desktop: 214 },
  { month: "Zondag", desktop: 214 },
];

const chartConfig = {
  blue: {
    color: "#2563eb",
  },
  lightBlue: {
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export function ExpensesChart() {
  return (
    <Card>
      <CardHeader className="space-y-0">
        <CardTitle className="text-xl">Uitgaven</CardTitle>
        <CardDescription>Van deze week</CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <ChartContainer config={chartConfig} className="-ml-4">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} strokeWidth={2}/>
            <YAxis tickLine={false} axisLine={false} tickMargin={0} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <Bar dataKey="desktop" fill="var(--color-blue)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
