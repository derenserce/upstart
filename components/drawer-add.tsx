import React from 'react'
import {
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { CalendarSyncIcon, HandCoinsIcon, ReceiptCentIcon, ShieldPlusIcon } from 'lucide-react';

export const DrawerAdd = () => {
  return (
    <DrawerContent>
      <div className="mx-auto w-full items-center flex flex-col pb-8 px-8">
        <DrawerHeader>
          <DrawerTitle className="text-xl">Wat wil je toevoegen?</DrawerTitle>
          <DrawerDescription>Kies uit een van de vier mogelijkheden</DrawerDescription>
        </DrawerHeader>
        <div className="grid grid-cols-2 gap-2 w-full">
          <button className="flex flex-col border items-center p-4 rounded-md">
            <HandCoinsIcon className="h-8 w-8" />
            <p className="mt-1">Inkomsten</p>
          </button>
          <button className="flex flex-col border items-center p-4 rounded-md">
            <ReceiptCentIcon className="h-8 w-8" />
            <p className="mt-1">Uitgaven</p>
          </button>
          <button className="flex flex-col border items-center p-4 rounded-md">
            <CalendarSyncIcon className="h-8 w-8" />
            <p className="mt-1">Abonnementen</p>
          </button>
          <button className="flex flex-col border items-center p-4 rounded-md">
            <ShieldPlusIcon className="h-8 w-8" />
            <p className="mt-1">Verzekeringen</p>
          </button>
        </div>
      </div>
    </DrawerContent>
  );
}
