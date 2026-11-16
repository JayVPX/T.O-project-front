import { z } from "zod";

const textAreaSchema = z
  .string()
  .min(1, "Campo obrigatório")
  .max(350, "Máximo de 350 caracteres");

export const schoolVisitFormSchema = z.object({
  generalInformation: z.object({
    institution: z.string().min(1, "Instituição é obrigatória"),
    date: z.string().min(1, "Data é obrigatória"),
    startTime: z.string().min(1, "Horário de início é obrigatório"),
    endTime: z.string().min(1, "Horário final é obrigatório"),
    city: z.string().min(1, "Cidade é obrigatória"),
  }),

  therapeuticObservation: z.object({
    teacherInteraction: textAreaSchema,
    peerInteraction: textAreaSchema,
    reactionToPresence: textAreaSchema,
  }),

  schoolContext: z.object({
    teacherCommunication: textAreaSchema,
    peerCommunication: textAreaSchema,
    peerPlay: textAreaSchema,
    rulesAndRoutines: textAreaSchema,
    playground: textAreaSchema,
    snackTime: textAreaSchema,
    classroomActivity: textAreaSchema,
    externalActivity: textAreaSchema,
    necessaryAdaptations: textAreaSchema,
  }),

  teacherNotes: textAreaSchema,
  psychologistNotes: textAreaSchema,
  conclusion: z
    .string()
    .min(1, "Campo obrigatório")
    .max(500, "Máximo de 500 caracteres"),
});

export type schoolVisitFormType = z.infer<typeof schoolVisitFormSchema>;
