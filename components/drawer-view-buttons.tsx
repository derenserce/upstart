"use client"

import { Button } from "@/components/ui/button";
import { HandCoinsIcon, ReceiptCentIcon, CalendarSyncIcon, ShieldPlusIcon } from "lucide-react";

interface DrawerViewButtonsProps {
  setSelectedView: (view: "INCOME" | "EXPENSES" | "SUBSCRIPTIONS" | "INSURANCES") => void;
}


export const DrawerViewButtons = ({ setSelectedView }: DrawerViewButtonsProps) => {
   return (
     <div className="grid grid-cols-2 gap-2 w-full">
       <button
         disabled
         className="contrast-0 flex flex-col border items-center p-4 rounded-md"
         onClick={() => setSelectedView("INCOME")}
       >
         <HandCoinsIcon className="h-8 w-8" />
         <p className="mt-1">Inkomsten</p>
       </button>
       <button
         className="flex flex-col border items-center p-4 rounded-md"
         onClick={() => setSelectedView("EXPENSES")}
       >
         <ReceiptCentIcon className="h-8 w-8" />
         <p className="mt-1">Uitgaven</p>
       </button>
       <button
         disabled
         className="contrast-0 flex flex-col border items-center p-4 rounded-md"
         onClick={() => setSelectedView("SUBSCRIPTIONS")}
       >
         <CalendarSyncIcon className="h-8 w-8" />
         <p className="mt-1">Abonnementen</p>
       </button>
       <button
         className="flex flex-col border items-center p-4 rounded-md"
         onClick={() => setSelectedView("INSURANCES")}
       >
         <ShieldPlusIcon className="h-8 w-8" />
         <p className="mt-1">Verzekeringen</p>
       </button>
     </div>
   );
};
