"use client";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CarFrontIcon, EuroIcon, HouseIcon, ShieldPlusIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Insurance {
  title: string;
  type: "Zorgverzekering" | "Autoverzekering" | "Woonverzekering";
}

const insuracneIcons = {
  Zorgverzekering: <ShieldPlusIcon width={48} height={48} stroke="green" />,
  Autoverzekering: <CarFrontIcon width={48} height={48} stroke="blue" />,
  Woonverzekering: <HouseIcon width={48} height={48} stroke="orange" />,
};

export default function Savings() {
  const [insurances, setInsurances] = useState<Insurance[]>([]);

  const fetchInsurances = () => {
    const storedInsurances = JSON.parse(localStorage.getItem("insurances") || "[]");
    setInsurances(storedInsurances);
  };

  // Fetch insurances from localStorage
  useEffect(() => {
    // Initial fetch
    fetchInsurances();

    // Listen for updates
    const handleStorageUpdate = () => fetchInsurances();
    window.addEventListener("insuranceUpdated", handleStorageUpdate);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("insuranceUpdated", handleStorageUpdate);
    };
  }, []);

  return (
    <div className="px-6 py-6">
      <h1 className="text-3xl font-bold mb-6">Besparingen</h1>
      <h3 className="text-xl font-semibold mb-2">Verzekeringen</h3>
      <div className="flex flex-col gap-4">
        {insurances.map((insurance, index) => (
          <Card key={index} className="flex justify-between items-center">
            <CardHeader className="flex flex-row gap-4 items-center">
              {/* Change icon based on type of insurance */}
              {insuracneIcons[insurance.type]}
              <div>
                <CardTitle>{insurance.title}</CardTitle>
                <CardDescription>{insurance.type}</CardDescription>
              </div>
            </CardHeader>
            <div className="items-center p-6 flex flex-col">
              <Link href={"https://www.independer.nl/"}>
                <Button>
                  Bespaar <EuroIcon />
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
