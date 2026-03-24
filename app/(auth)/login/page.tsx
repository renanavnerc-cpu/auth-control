import { LoginForm } from "@/features/auth/components/login-form";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
      <div className="flex justify-center w-full max-w-sm">
        <Image
          src="/logo/Logo.png"
          alt="Logo"
          width={128}
          height={128}
          className="rounded"
          loading="eager"
        />
      </div>

      <div className="w-full max-w-sm text-center mt-10">
        <h2 className="text-2xl/9 font-bold tracking-tight text-white">
          Faça login na sua conta.
        </h2>
      </div>

      <div className="w-full max-w-sm mt-10">
        <LoginForm />
      </div>
    </div>
  );
}
