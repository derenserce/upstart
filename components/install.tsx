"use client";

import React, { useEffect, useState } from "react";

export const Install = () => {
  const [installPrompt, setInstallPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: any) => {
      event.preventDefault();
      setInstallPrompt(event);
      setIsVisible(true); // Show the button
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!installPrompt) return;

    //@ts-ignore
    const result = await installPrompt.prompt();
    console.log(`Install prompt was: ${result.outcome}`);
    disableInAppInstallPrompt();
  };

  const disableInAppInstallPrompt = () => {
    setInstallPrompt(null);
    setIsVisible(false); // Hide the button
  };

  return <>{isVisible && <button onClick={handleInstallClick}>Install</button>}</>;
};
