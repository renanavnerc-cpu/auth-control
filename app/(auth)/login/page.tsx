import { LoginForm } from "@/features/auth/components/login-form";
import Image from "next/image";
import { useTheme } from "@/hooks/useTheme";

export default function LoginPage() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm flex justify-center">
        <Image
          src="/logo/Logo.png"
          alt="Logo"
          width={128}
          height={128}
          className="rounded"
          loading="eager"
        />
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
          Faça login na sua conta.
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
