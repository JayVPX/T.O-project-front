import z from "zod";

export const createAppointmentSchema = z.object({
  patient: z
    .string({ error: "Selecione o paciente" })
    .min(1, "Selecione o paciente"),
  date: z
    .string()
    .min(1, "Selecione a data")
    .refine(
      (date) => date >= new Date().toLocaleDateString("en-CA"),
      "Não é permitido selecionar uma data antiga",
    ),
  hour: z.string().min(1, "Selecione o horário"),
  notes: z.string().max(200, "Máximo de 200 de caracteres").optional(),
});

export type createAppointmentType = z.infer<typeof createAppointmentSchema>;
