import { apiClient } from "@/lib/api-client";
import type { LoginDTO, User } from "../types/auth.types";
import axios from "axios";

export async function loginService(data: LoginDTO): Promise<User> {
  try {
    const response = await apiClient.post("/auth/login", data);
    return response.data;
  } catch (error: unknown) {
    let message = "Erro ao realizar login";

    if (axios.isAxiosError(error)) {
      const status = error.response?.status;

      if (status === 404) message = "Usuário não encontrado";
      else if (status === 401) message = "Credenciais inválidas";
      else if (status === 500) message = "Erro interno do servidor";
      else message = error.response?.data?.message || message;
    }

    throw new Error(message);
  }
}
