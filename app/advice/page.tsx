import { InstallPWA } from "@/components/install-pwa";
import { ModeToggler } from "@/components/mode-toggle";
import React from "react";

export default function Advice() {
  const ua = navigator.userAgent;

  return (
    <div className="px-6 pt-6">
      Vraag advies aan ons adviseur +31 6 15935435
      <ModeToggler />
      <br /> {ua}
      <InstallPWA />
    </div>
  );
}
