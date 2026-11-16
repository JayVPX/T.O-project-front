import z from "zod";

export const evolutionFormSchema = z.object({
  city: z.string().min(1, "Cidade é obrigatória"),
  date: z.string().min(1, "Data é obrigatória"),
  startTime: z.string().min(1, "Horário inicial é obrigatório"),
  endTime: z.string().min(1, "Horário final é obrigatório"),

  behavior: z
    .string()
    .min(1, "Comportamento é obrigatório")
    .max(350, "Máximo de 350 caracteres"),

  activities: z
    .string()
    .min(1, "Atividades desenvolvidas é obrigatório")
    .max(350, "Máximo de 350 caracteres"),

  activitiesResponse: z
    .string()
    .min(1, "Resposta às atividades é obrigatória")
    .max(350, "Máximo de 350 caracteres"),

  avdTraining: z
    .string()
    .min(1, "Treino de AVD é obrigatório")
    .max(350, "Máximo de 350 caracteres"),

  foodTraining: z
    .string()
    .min(1, "Treino alimentar é obrigatório")
    .max(350, "Máximo de 350 caracteres"),

  feedback: z
    .string()
    .min(1, "Devolutiva é obrigatória")
    .max(350, "Máximo de 350 caracteres"),
});

export type evolutionFormType = z.infer<typeof evolutionFormSchema>;
