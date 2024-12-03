import { ExpensesChart } from "@/components/expenses-chart";
import { ExpensesPieChart } from "@/components/test";
import React from "react";

export default function Overview() {
  return (
    <div className="px-6 py-6">
      <h1 className="text-3xl font-bold mb-6">Overzichten</h1>
      <div className="flex flex-col gap-4">
        <ExpensesChart />
        <ExpensesPieChart />
      </div>
    </div>
  );
}
