"use client";

import { useState } from "react";
import { useAuth } from "../../../hooks/auth/use-auth";
import { loginService } from "../services/auth-service";
import type { LoginDTO } from "../types/auth.types";

export function useLogin() {
  const { setUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleLogin(data: LoginDTO) {
    setLoading(true);
    setError(null);

    try {
      const user = await loginService(data);
      setUser(user);
    } catch (err) {
      let message = "Erro ao realizar login";

      if (err instanceof Error) {
        message = err.message;
      }

      setError(message);
    } finally {
      setLoading(false);
    }
  }

  return {
    handleLogin,
    loading,
    error,
  };
}
