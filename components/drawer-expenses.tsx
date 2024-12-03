"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export const DrawerExpenses = () => {
  const [day, setDay] = useState<string>("Maandag");
  const [amount, setAmount] = useState<string>("");

  const handleAddExpense = () => {
    const parsedAmount = parseFloat(amount); // Ensure the amount is a float

    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      alert("Vul een geldig bedrag in");
      return;
    }

    const newExpense = { day, amount: parsedAmount }; // Ensure amount is a number, not a string
    const existingData = JSON.parse(localStorage.getItem("expenses") || "[]");

    // Update localStorage with the new expense
    const updatedData = [...existingData];
    const dayIndex = updatedData.findIndex((data: { day: string }) => data.day === day);

    if (dayIndex !== -1) {
      // If the day already has an expense, update the amount by adding the new one
      updatedData[dayIndex].amount += parsedAmount;
    } else {
      // If the day doesn't have an expense, add the new entry
      updatedData.push(newExpense);
    }

    localStorage.setItem("expenses", JSON.stringify(updatedData));
    window.dispatchEvent(new Event("storage")); // Notify other components

    // Reset the inputs
    setDay("Maandag");
    setAmount(""); // Reset the amount input field
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Day Selector */}
      <label className="flex flex-col">
        <span className="text-sm font-medium">Selecteer dag</span>
        <select value={day} onChange={(e) => setDay(e.target.value)} className="border rounded p-2">
          {["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"].map(
            (day) => (
              <option key={day} value={day}>
                {day}
              </option>
            )
          )}
        </select>
      </label>

      {/* Amount Input */}
      <label className="flex flex-col">
        <span className="text-sm font-medium">Hoeveelheid</span>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border rounded p-2"
          placeholder="Vul bedrag in"
        />
      </label>

      {/* Add Expense Button */}
      <Button onClick={handleAddExpense}>Voeg uitgave toe</Button>
    </div>
  );
};
