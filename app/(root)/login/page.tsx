import SignIn from "@/components/sign-in";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-between p-8 text-center">
      <div className="flex flex-col items-center justify-center flex-grow">
        {/* Logo */}
        <Image src="/icons/icon512_rounded.png" width={150} height={150} alt="Logo" />

        <div>
          {/* Title */}
          <h1 className="text-4xl font-bold mb-2">Upstart</h1>
          {/* Subtitle */}
          <p className="text mb-12">Fix je financiën</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="pb-12">
        <SignIn />
      </div>
    </main>
  );
}
