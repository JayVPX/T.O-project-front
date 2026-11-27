import { useMutation } from "@tanstack/react-query";
import { authServices } from "../../services/api/auth/authService";
import type { CreateUserModelDto } from "../../model/user/userDto";

export function useRegister() {
  return useMutation({
    mutationFn: async (payload: CreateUserModelDto) => {
      const data = await authServices.register(payload);
      return data;
    },
  });
}
