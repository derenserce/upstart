"use client";

import {
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { DrawerViewButtons } from "@/components/drawer-view-buttons";
import { useState } from "react";
import { ArrowLeftCircleIcon } from "lucide-react";
import { DrawerIncome } from "@/components/drawer-income";
import { DrawerExpenses } from "@/components/drawer-expenses";
import { DrawerSubscriptions } from "@/components/drawer-subscriptions";
import { DrawerInsurances } from "@/components/drawer-insurances";

type ViewType = "INCOME" | "EXPENSES" | "SUBSCRIPTIONS" | "INSURANCES" | null;

export const DrawerView = () => {
  const [selectedView, setSelectedView] = useState<ViewType>(null);
  const resetView = () => setSelectedView(null);

  const renderDrawerView = () => {
    switch (selectedView) {
      case "INCOME":
        return <DrawerIncome />;
      case "EXPENSES":
        return <DrawerExpenses />;
      case "SUBSCRIPTIONS":
        return <DrawerSubscriptions />
      case "INSURANCES":
        return <DrawerInsurances />
      default:
        return <DrawerViewButtons setSelectedView={setSelectedView} />;
    }
  };

  return (
    <DrawerContent onCloseAutoFocus={resetView}>
      <div className="mx-auto w-full items-center pb-8 px-8">
        <DrawerHeader className="relative w-full">
          {/* Dynamic Header */}
          {selectedView ? (
            <>
              <DrawerTitle className="text-xl">{selectedView}</DrawerTitle>
              <button className="absolute top-0 left-0  my-4" onClick={resetView}>
                <ArrowLeftCircleIcon />
              </button>
            </>
          ) : (
            <>
              <DrawerTitle className="text-xl">Wat wil je toevoegen?</DrawerTitle>
              <DrawerDescription>
                Kies uit een van de <span className="line-through text-gray-600">vier</span> twee mogelijkheden
              </DrawerDescription>
            </>
          )}
        </DrawerHeader>

        {/* Render dynamic content based on selectedView */}
        {selectedView ? (
          <div className="mt-4">{renderDrawerView()}</div>
        ) : (
          // Default buttons view when no option is selected
          <DrawerViewButtons setSelectedView={setSelectedView} />
        )}
      </div>
    </DrawerContent>
  );
};
