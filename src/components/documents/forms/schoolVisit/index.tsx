import { FileText, NotebookPen, Stethoscope, University } from "lucide-react";
import type { SchoolVisitBodyProps } from "../../../../types/documents";
import {
  Form,
  FormButtonContainer,
  FormGridRows,
  FormRow,
  FormTitle,
  Input,
  SubmitBtn,
  TextArea,
} from "./styled";
import { useTheme } from "styled-components";
import { Controller, useForm } from "react-hook-form";
import { schoolVisitFormSchema, type schoolVisitFormType } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormHelperText } from "@mui/material";

interface Props {
  onSubmit: (data: SchoolVisitBodyProps) => void;
}

export default function SchoolVisitForm({ onSubmit }: Props) {
  const defaultValues: SchoolVisitBodyProps = {
    generalInformation: {
      institution: "",
      date: "",
      city: "",
      endTime: "",
      startTime: "",
    },

    therapeuticObservation: {
      teacherInteraction: "",
      peerInteraction: "",
      reactionToPresence: "",
    },

    schoolContext: {
      teacherCommunication: "",
      peerCommunication: "",
      peerPlay: "",
      rulesAndRoutines: "",
      playground: "",
      snackTime: "",
      classroomActivity: "",
      externalActivity: "",
      necessaryAdaptations: "",
    },

    teacherNotes: "",
    psychologistNotes: "",
    conclusion: "",
  };

  const theme = useTheme();
  const { control, handleSubmit } = useForm<schoolVisitFormType>({
    resolver: zodResolver(schoolVisitFormSchema),
    defaultValues: defaultValues,
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>
        <FileText size={18} />
        Preencha os dados do documento:
      </FormTitle>

      <FormGridRows>
        <FormRow>
          Instituição:
          <Controller
            control={control}
            name="generalInformation.institution"
            render={({ field, fieldState }) => (
              <>
                <Input type="text" errors={!!fieldState.error} {...field} />
                {fieldState.error && (
                  <FormHelperText sx={{ color: theme.colors.error }}>
                    {fieldState.error.message}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormRow>

        <FormRow>
          Data:
          <Controller
            control={control}
            name="generalInformation.date"
            render={({ field, fieldState }) => (
              <>
                <Input type="date" errors={!!fieldState.error} {...field} />
                {fieldState.error && (
                  <FormHelperText sx={{ color: theme.colors.error }}>
                    {fieldState.error.message}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormRow>

        <FormRow>
          Início:
          <Controller
            control={control}
            name="generalInformation.startTime"
            render={({ field, fieldState }) => (
              <>
                <Input type="time" errors={!!fieldState.error} {...field} />
                {fieldState.error && (
                  <FormHelperText sx={{ color: theme.colors.error }}>
                    {fieldState.error.message}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormRow>
        <FormRow>
          Fim:
          <Controller
            control={control}
            name="generalInformation.endTime"
            render={({ field, fieldState }) => (
              <>
                <Input type="time" errors={!!fieldState.error} {...field} />
                {fieldState.error && (
                  <FormHelperText sx={{ color: theme.colors.error }}>
                    {fieldState.error.message}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormRow>

        <FormRow>
          Cidade:
          <Controller
            control={control}
            name="generalInformation.city"
            render={({ field, fieldState }) => (
              <>
                <Input type="text" errors={!!fieldState.error} {...field} />
                {fieldState.error && (
                  <FormHelperText sx={{ color: theme.colors.error }}>
                    {fieldState.error.message}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormRow>
      </FormGridRows>

      <FormTitle style={{ marginTop: 18 }}>
        <Stethoscope size={18} /> Observação terapêutica sem percepção da
        criança
      </FormTitle>

      <FormGridRows>
        <FormRow>
          Interação com a professor(a):
          <Controller
            control={control}
            name="therapeuticObservation.teacherInteraction"
            render={({ field, fieldState }) => (
              <>
                <TextArea errors={!!fieldState.error} {...field} />
                {fieldState.error && (
                  <FormHelperText sx={{ color: theme.colors.error }}>
                    {fieldState.error.message}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormRow>

        <FormRow>
          Interação com os colegas:
          <Controller
            control={control}
            name="therapeuticObservation.peerInteraction"
            render={({ field, fieldState }) => (
              <>
                <TextArea errors={!!fieldState.error} {...field} />
                {fieldState.error && (
                  <FormHelperText sx={{ color: theme.colors.error }}>
                    {fieldState.error.message}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormRow>

        <FormRow>
          Comportamento da criança ao notar a presença:
          <Controller
            control={control}
            name="therapeuticObservation.reactionToPresence"
            render={({ field, fieldState }) => (
              <>
                <TextArea errors={!!fieldState.error} {...field} />
                {fieldState.error && (
                  <FormHelperText sx={{ color: theme.colors.error }}>
                    {fieldState.error.message}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormRow>
      </FormGridRows>

      <FormTitle style={{ marginTop: 18 }}>
        <University size={18} /> Aspectos no contexto escolar
      </FormTitle>

      <FormGridRows>
        <FormRow>
          Comunicação/Interação com professor(a):
          <Controller
            control={control}
            name="schoolContext.teacherCommunication"
            render={({ field, fieldState }) => (
              <>
                <TextArea errors={!!fieldState.error} {...field} />
                {fieldState.error && (
                  <FormHelperText sx={{ color: theme.colors.error }}>
                    {fieldState.error.message}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormRow>

        <FormRow>
          Brincar com os pares:
          <Controller
            control={control}
            name="schoolContext.peerPlay"
            render={({ field, fieldState }) => (
              <>
                <TextArea errors={!!fieldState.error} {...field} />
                {fieldState.error && (
                  <FormHelperText sx={{ color: theme.colors.error }}>
                    {fieldState.error.message}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormRow>

        <FormRow>
          Seguimento de regras e rotinas escolares:
          <Controller
            control={control}
            name="schoolContext.rulesAndRoutines"
            render={({ field, fieldState }) => (
              <>
                <TextArea errors={!!fieldState.error} {...field} />
                {fieldState.error && (
                  <FormHelperText sx={{ color: theme.colors.error }}>
                    {fieldState.error.message}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormRow>

        <FormRow>
          Momento do parque:
          <Controller
            control={control}
            name="schoolContext.playground"
            render={({ field, fieldState }) => (
              <>
                <TextArea errors={!!fieldState.error} {...field} />
                {fieldState.error && (
                  <FormHelperText sx={{ color: theme.colors.error }}>
                    {fieldState.error.message}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormRow>

        <FormRow>
          Momento do lanche:
          <Controller
            control={control}
            name="schoolContext.snackTime"
            render={({ field, fieldState }) => (
              <>
                <TextArea errors={!!fieldState.error} {...field} />
                {fieldState.error && (
                  <FormHelperText sx={{ color: theme.colors.error }}>
                    {fieldState.error.message}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormRow>

        <FormRow>
          Atividade em sala de aula:
          <Controller
            control={control}
            name="schoolContext.classroomActivity"
            render={({ field, fieldState }) => (
              <>
                <TextArea errors={!!fieldState.error} {...field} />
                {fieldState.error && (
                  <FormHelperText sx={{ color: theme.colors.error }}>
                    {fieldState.error.message}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormRow>

        <FormRow>
          Atividade externa:
          <Controller
            control={control}
            name="schoolContext.externalActivity"
            render={({ field, fieldState }) => (
              <>
                <TextArea errors={!!fieldState.error} {...field} />
                {fieldState.error && (
                  <FormHelperText sx={{ color: theme.colors.error }}>
                    {fieldState.error.message}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormRow>

        <FormRow>
          Adaptações necessárias:
          <Controller
            control={control}
            name="schoolContext.necessaryAdaptations"
            render={({ field, fieldState }) => (
              <>
                <TextArea errors={!!fieldState.error} {...field} />
                {fieldState.error && (
                  <FormHelperText sx={{ color: theme.colors.error }}>
                    {fieldState.error.message}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormRow>
      </FormGridRows>

      <FormTitle style={{ marginTop: 18 }}>
        <NotebookPen size={18} /> Pontuações e conclusão
      </FormTitle>
      <FormGridRows>
        <FormRow>
          Pontuações do professor(a):
          <Controller
            control={control}
            name="teacherNotes"
            render={({ field, fieldState }) => (
              <>
                <TextArea errors={!!fieldState.error} {...field} />
                {fieldState.error && (
                  <FormHelperText sx={{ color: theme.colors.error }}>
                    {fieldState.error.message}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormRow>

        <FormRow>
          Pontuações do psicólogo(a) escolar:
          <Controller
            control={control}
            name="psychologistNotes"
            render={({ field, fieldState }) => (
              <>
                <TextArea errors={!!fieldState.error} {...field} />
                {fieldState.error && (
                  <FormHelperText sx={{ color: theme.colors.error }}>
                    {fieldState.error.message}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormRow>

        <FormRow>
          Conclusão:
          <Controller
            control={control}
            name="conclusion"
            render={({ field, fieldState }) => (
              <>
                <TextArea errors={!!fieldState.error} {...field} />
                {fieldState.error && (
                  <FormHelperText sx={{ color: theme.colors.error }}>
                    {fieldState.error.message}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormRow>
      </FormGridRows>

      <FormButtonContainer>
        <SubmitBtn type="submit">Enviar</SubmitBtn>
      </FormButtonContainer>
    </Form>
  );
}
