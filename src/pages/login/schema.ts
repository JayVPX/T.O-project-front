import { z } from "zod";
import { isValidCPF } from "../../utils/validCpf";

export const registerSchema = z.object({
  firstName: z.string().min(2, "Informe seu nome"),
  lastName: z.string().min(2, "Informe seu sobrenome"),
  email: z.email({ error: "Email inválido" }),
  phone: z.string().min(11, "Celular inválido"),
  password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres"),
  cpf: z
    .string()
    .transform((value) => value.replace(/\D/g, ""))
    .refine((cpf) => cpf.length === 11, {
      message: "CPF deve conter 11 dígitos",
    })
    .refine(isValidCPF, {
      message: "CPF inválido",
    }),
});

export const loginSchema = z.object({
  email: z.email({ error: "Email inválido" }),
  password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres"),
});

export type registerType = z.infer<typeof registerSchema>;
export type loginType = z.infer<typeof loginSchema>;
