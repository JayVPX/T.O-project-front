import { z } from "zod";

export const registerSchema = z.object({
  nome: z.string().min(2, "Informe seu nome"),
  sobrenome: z.string().min(2, "Informe seu sobrenome"),
  email: z.email({ error: "Email inválido" }),
  celular: z.string().min(11, "Celular inválido"),
  senha: z.string().min(8, "A senha deve ter pelo menos 8 caracteres"),
});

export const loginSchema = z.object({
  email: z.email({ error: "Email inválido" }),
  senha: z.string().min(1, "Informe sua senha"),
});

export type registerType = z.infer<typeof registerSchema>;
export type loginType = z.infer<typeof loginSchema>;
