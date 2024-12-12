import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Upstart",
  description: "Upstart is de financiën app voor starters.",
  generator: "Next.js",
  manifest: "/manifest.json",
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon512_rounded.png" },
    { rel: "icon", url: "icons/icon512_maskable.png" },
  ],
};

export const viewport: Viewport = {
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  themeColor: "#080c14",
  width: "device-width",
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Mobile only message */}
        <div className="hidden fixed inset-0 sm:flex justify-center items-center">
          <p className="text-center text-xl p-4">
            Op dit moment is Upstart alleen te gebruiken op mobiele apparaten.
          </p>
        </div>
        <div className="max-h-[calc(100vh-3.5rem)] overflow-y-scroll sm:hidden">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Navbar />
        </div>
      </body>
    </html>
  );
}
