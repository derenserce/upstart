"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export const DrawerInsurances = () => {
  const [title, setTitle] = useState<string>("");
  const [type, setType] = useState<string>("");

  const handleAddInsurance = () => {
    if (!title || !type) {
      alert("Vul zowel de titel als het type in");
      return;
    }

    const newInsurance = { title, type };
    const existingData = JSON.parse(localStorage.getItem("insurances") || "[]");

    const updatedData = [...existingData, newInsurance];
    localStorage.setItem("insurances", JSON.stringify(updatedData));

    // Dispatch a custom event
    window.dispatchEvent(new Event("insuranceUpdated"));

    // Reset form fields
    setTitle("");
    setType("");
  };

  return (
    <div className="flex flex-col gap-4">
      <label className="flex flex-col">
        <span className="text-sm font-medium">Type</span>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border rounded p-2"
        >
          <option value="" disabled>
            Type
          </option>
          {["Zorgverzekering", "Autoverzekering", "Woonverzekering"].map((insuranceType) => (
            <option key={insuranceType} value={insuranceType}>
              {insuranceType}
            </option>
          ))}
        </select>
      </label>
      <label className="flex flex-col">
        <span className="text-sm font-medium">Titel</span>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded p-2"
          placeholder="Naam"
        />
      </label>
      <Button onClick={handleAddInsurance}>Voeg verzekering toe</Button>
    </div>
  );
};
