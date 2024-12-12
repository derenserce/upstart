"use client";

import React, { useEffect, useState } from "react";

export const Install = () => {
  const [installPrompt, setInstallPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

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

  return (
    <>
      {isVisible && (
        <>
          <button
            onClick={handleInstallClick}
            className="text-white/70 h-48 mb-6 bg-blue-500 py-2 px-4 hover:bg-blue-600 rounded transition"
          >
            <strong className="text-white text-2xl">Installeer de app</strong> <br />
            (Werkt de knop niet? Lees dan hieronder hoe je de app installeert.)
          </button>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Installatie</h2>
            <p>Het kan zo zijn dat de installatie niet mogelijk is op je browser. Gebruik dan Safari of Chrome</p>
            <ul className="list-disc list-inside mt-2">
              <li>
                <strong>Op iPhone</strong>: Open de website in Safari, klik op het deel-icoon
                (vierkant met pijl) en kies <em>"Zet op beginscherm"</em>.
              </li>
              <li>
                <strong>Op Android</strong>: Klik op het menu (meestal drie stipjes bovenin je
                browser) en kies <em>"Toevoegen aan startscherm"</em>.
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};
