import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../../providers/auth/useAuth";
import { authServices } from "../../services/api/auth/authService";
import type { LoginRequestDTO } from "../../model/auth/authDto";

export function useLogin() {
  const { signIn } = useAuth();

  return useMutation({
    mutationFn: (payload: LoginRequestDTO) => authServices.login(payload),

    onSuccess: (data) => {
      signIn(data);
    },
  });
}
