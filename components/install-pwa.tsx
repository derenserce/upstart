"use client";

import React, { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => void;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export const InstallPWA: React.FC = () => {
  const [deferredEvent, setDeferredEvent] = useState<BeforeInstallPromptEvent | null>(null);

  const ua = navigator.userAgent;

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      const beforeInstallEvent = e as BeforeInstallPromptEvent;

      // Prevent the browser from showing the default install dialog
      e.preventDefault();
      // Save the event for later use
      setDeferredEvent(beforeInstallEvent);
    };

    // Add event listener for beforeinstallprompt
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredEvent) {
      // Show the install prompt
      deferredEvent.prompt();
      // Optionally, handle the user's response to the prompt
      deferredEvent.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        // Reset the deferred event after handling
        setDeferredEvent(null);
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen sm:hidden">
      {deferredEvent && (
        <>
          <button
            onClick={handleInstallClick}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Installeer Upstart
          </button>
        </>
      )}
    </div>
  );
};
