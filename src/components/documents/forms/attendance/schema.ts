import z from "zod";

export const attendanceFormSchema = z.object({
  month: z.string().min(1, "Informe o mês"),
  city: z.string().min(1, "Informe a cidade"),
  sessions: z.array(
    z.object({
      date: z.string(),
      startTime: z.string(),
      endTime: z.string(),
    }),
  ),
});

export type attendanceFormType = z.infer<typeof attendanceFormSchema>;
