import z from "zod";

export const createPatientSchema = z.object({
  name: z.string().min(15, "Insira o nome completo"),
  birth_date: z
    .string()
    .min(1, "A data de nascimento é obrigatória")
    .refine((date) => {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
        return false;
      }

      const parsedDate = new Date(`${date}T00:00:00`);

      return (
        !Number.isNaN(parsedDate.getTime()) &&
        parsedDate.toISOString().slice(0, 10) === date &&
        date <= new Date().toLocaleDateString("en-CA")
      );
    }, "Informe uma data válida, que não seja futura"),

  relationship: z
    .number({
      error: "Selecione seu parentesco com o paciente",
    })
    .min(1, "Selecione seu parentesco com o paciente"),
  notes: z.string().max(200, "Máximo de 200 caracteres").optional(),
});

export type createPatientType = z.infer<typeof createPatientSchema>;
