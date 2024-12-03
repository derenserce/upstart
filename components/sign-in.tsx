import { signIn } from "@/auth";
import Image from "next/image";

export default function SignIn() {
  const SignIn = async () => {
    "use server";
    await signIn("github");
  };

  return (
    <form action={SignIn}>
      <button
        type="submit"
        className="bg-slate-800 px-6 py-4 rounded-lg text-lg text-semibold flex items-center w-full gap-4"
      >
        <Image src="/github.svg" width={24} height={24} alt="Github logo" />
        <p> Inloggen met Github</p>
      </button>
    </form>
  );
}
