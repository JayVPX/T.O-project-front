import { useTheme } from "styled-components";
import type { EvolutionBodyProps } from "../../../../types/documents";
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
import { Controller, useForm } from "react-hook-form";
import { evolutionFormSchema, type evolutionFormType } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileText } from "lucide-react";
import { FormHelperText } from "@mui/material";

interface Props {
  onSubmit: (data: EvolutionBodyProps) => void;
}

export default function EvolutionForm({ onSubmit }: Props) {
  const theme = useTheme();

  const { control, handleSubmit } = useForm<evolutionFormType>({
    resolver: zodResolver(evolutionFormSchema),
    defaultValues: {
      activities: "",
      activitiesResponse: "",
      avdTraining: "",
      behavior: "",
      city: "",
      date: "",
      endTime: "",
      feedback: "",
      foodTraining: "",
      startTime: "",
    },
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>
        <FileText size={18} />
        Preencha os dados do documento:
      </FormTitle>

      <FormGridRows>
        <FormRow>
          Cidade:
          <Controller
            control={control}
            name="city"
            render={({ field, fieldState }) => (
              <>
                <Input type="text" {...field} errors={!!fieldState.error} />
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
            name="date"
            render={({ field, fieldState }) => (
              <>
                <Input type="date" {...field} errors={!!fieldState.error} />
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
            name="startTime"
            render={({ field, fieldState }) => (
              <>
                <Input type="time" {...field} errors={!!fieldState.error} />
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
            name="endTime"
            render={({ field, fieldState }) => (
              <>
                <Input type="time" {...field} errors={!!fieldState.error} />
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
          Comportamento apresentado:
          <Controller
            control={control}
            name="behavior"
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
          Atividades desenvolvidas:
          <Controller
            control={control}
            name="activities"
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
          Como respondeu as atividades:
          <Controller
            control={control}
            name="activitiesResponse"
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
          Treino de AVD:
          <Controller
            control={control}
            name="avdTraining"
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
          Treino alimentar:
          <Controller
            control={control}
            name="foodTraining"
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
          Devolutiva:
          <Controller
            control={control}
            name="feedback"
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
