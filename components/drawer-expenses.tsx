"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export const DrawerExpenses = () => {
   const [day, setDay] = useState<string>("Maandag");
   const [amount, setAmount] = useState<number>(0);

   const handleAddExpense = () => {
     if (!amount || amount <= 0) {
       alert("Please enter a valid amount.");
       return;
     }

     const newExpense = { day, amount }; // Change month to day
     const existingData = JSON.parse(localStorage.getItem("expenses") || "[]");

     // Update localStorage with the new expense
     const updatedData = [...existingData];
     const dayIndex = updatedData.findIndex((data: { day: string }) => data.day === day);

     if (dayIndex !== -1) {
       // Update the amount for the selected day
       updatedData[dayIndex].amount += amount;
     } else {
       // Add a new entry for the day if not present
       updatedData.push(newExpense);
     }

     localStorage.setItem("expenses", JSON.stringify(updatedData));
     window.dispatchEvent(new Event("storage")); // Notify other components

     // Reset the inputs
     setDay("Maandag");
     setAmount(0);
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
          onChange={(e) => setAmount(Number(e.target.value))}
          className="border rounded p-2"
          placeholder="Enter expense amount"
        />
      </label>

      {/* Add Expense Button */}
      <Button onClick={handleAddExpense}>Voeg uitgave toe</Button>
    </div>
  );
};
