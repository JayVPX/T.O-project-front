// import { useForm } from "react-hook-form";
import { useState } from "react";
import { attendanceFormSchema, type attendanceFormType } from "./schema";
// import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormButtonContainer,
  FormGridRows,
  FormRow,
  FormRows,
  FormTitle,
  IconButtonForm,
  Input,
  RemoveSessionButton,
  SessionCard,
  SessionRows,
  SubmitBtn,
} from "./styled";
import { FileText, Plus, Stethoscope, X } from "lucide-react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formatDateToBr } from "../../../../utils/formatDateToBr";
import { FormHelperText } from "@mui/material";
import { useTheme } from "styled-components";

interface Props {
  onSubmit: (data: attendanceFormType) => void;
}

export default function AttendanceForm({ onSubmit }: Props) {
  const theme = useTheme();
  const [newSession, setNewSession] = useState({
    date: "",
    startTime: "",
    endTime: "",
  });

  const handleAddSession = () => {
    const { date, startTime, endTime } = newSession;

    if (!date || !startTime || !endTime) {
      return;
    }

    if (endTime <= startTime) {
      return;
    }

    append(newSession);

    setNewSession({
      date: "",
      startTime: "",
      endTime: "",
    });
  };

  const { control, handleSubmit } = useForm<attendanceFormType>({
    resolver: zodResolver(attendanceFormSchema),
    defaultValues: {
      month: "",
      city: "",
      sessions: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "sessions",
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>
        <FileText size={18} />
        Preencha os dados do documento:
      </FormTitle>

      <FormGridRows>
        <FormRow>
          Mês de referência do documento:
          <Controller
            control={control}
            name="month"
            render={({ field, fieldState }) => (
              <>
                <Input errors={!!fieldState.error} type="text" {...field} />
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
            name="city"
            render={({ field, fieldState }) => (
              <>
                <Input errors={!!fieldState.error} type="text" {...field} />
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

      <FormTitle style={{ paddingTop: 12 }}>
        <Stethoscope size={18} />
        Consultas:
      </FormTitle>
      <FormRows>
        <FormRow>
          Dia da consulta:
          <Input
            errors={false}
            type="date"
            value={newSession.date}
            onChange={(e) =>
              setNewSession((prev) => ({
                ...prev,
                date: e.target.value,
              }))
            }
          />
        </FormRow>

        <FormRow>
          Início da consulta:
          <Input
            errors={false}
            type="time"
            value={newSession.startTime}
            onChange={(e) =>
              setNewSession((prev) => ({
                ...prev,
                startTime: e.target.value,
              }))
            }
          />
        </FormRow>

        <FormRow>
          Fim da consulta:
          <Input
            errors={false}
            type="time"
            value={newSession.endTime}
            onChange={(e) =>
              setNewSession((prev) => ({
                ...prev,
                endTime: e.target.value,
              }))
            }
          />
        </FormRow>

        <IconButtonForm type="button" onClick={handleAddSession}>
          <Plus size={24} />
        </IconButtonForm>
      </FormRows>

      <SessionRows>
        {fields.map((session, index) => (
          <SessionCard key={session.id}>
            <div>
              <strong>{formatDateToBr(session.date)}</strong>
              <p>
                {session.startTime} - {session.endTime}
              </p>
            </div>

            <RemoveSessionButton
              type="button"
              onClick={() => remove(index)}
              aria-label="Remover consulta"
            >
              <X size={18} />
            </RemoveSessionButton>
          </SessionCard>
        ))}
      </SessionRows>

      <FormButtonContainer>
        <SubmitBtn type="submit">Enviar</SubmitBtn>
      </FormButtonContainer>
    </Form>
  );
}
