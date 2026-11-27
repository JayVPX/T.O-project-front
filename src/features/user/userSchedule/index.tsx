import { MapPin, Video, CalendarClock } from "lucide-react";
import { useState } from "react";

import {
  Wrap,
  Header,
  EmptyNote,
  FieldGroup,
  Label,
  Select,
  Input,
  ModalityOptions,
  ModalityCard,
  HiddenRadio,
  SubmitBtn,
  Form,
  LoadingState,
} from "./styled";

import { CircularProgress, FormHelperText } from "@mui/material";
import { useTheme } from "styled-components";
import { Controller, useForm } from "react-hook-form";
import { createAppointmentSchema, type createAppointmentType } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGetUserPatients } from "../../../hooks/patients/useGetUserPatients";
import { useGetTherapistAvailabilityDate } from "../../../hooks/availability/useGetTherapistAvailabilityDate";
import { useCreateAppointment } from "../../../hooks/appointments/useCreateAppointment";
import { useAuth } from "../../../providers/auth/useAuth";

export default function UserSchedule() {
  const theme = useTheme();
  const { user } = useAuth();
  const id = user?.id;
  const therapistId = "bcb8ca89-ce32-4c41-933b-179f0acb36e7";

  const [modality, setModality] = useState<string>("PRESENCIAL");

  const { control, handleSubmit, reset, watch } =
    useForm<createAppointmentType>({
      defaultValues: {
        date: "",
        hour: "",
        notes: "",
        patient: "",
      },
      resolver: zodResolver(createAppointmentSchema),
    });

  const selectedDate = watch("date");

  const { data: patients, isLoading } = useGetUserPatients(id ?? "");
  const { mutateAsync: appointmentMutate, isPending } = useCreateAppointment();

  const { data: availability, isLoading: availabilityLoading } =
    useGetTherapistAvailabilityDate(therapistId, { date: selectedDate });

  const onSubmit = async (data: createAppointmentType) => {
    try {
      const [startAt, endAt] = data.hour.split(" - ");
      await appointmentMutate(
        {
          therapistId,
          modality,
          patientId: data.patient,
          startAt,
          endAt,
          date: data.date,
        },
        {
          onSuccess: () => {
            reset({
              date: "",
              hour: "",
              notes: "",
              patient: "",
            });
          },
        },
      );
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return (
      <div>
        <Header>
          <h2>Agendar Consulta</h2>
          <p>Escolha o paciente, data e modalidade de atendimento</p>
        </Header>
        <LoadingState>
          <CircularProgress
            size={48}
            sx={{ color: theme.colors.textSecondary }}
          />
          <p
            style={{
              color: theme.colors.textSecondary,
              textAlign: "center",
              margin: "12px 0 0",
              fontSize: "14px",
            }}
          >
            Carregando pacientes...
          </p>
        </LoadingState>
      </div>
    );
  }

  return (
    <Wrap>
      <Header>
        <h2>Agendar Consulta</h2>
        <p>Escolha o paciente, data e modalidade de atendimento</p>
      </Header>

      {patients?.length === 0 ? (
        <EmptyNote>
          Você precisa cadastrar pelo menos um paciente antes de agendar uma
          consulta. Vá em "Pacientes" para adicionar.
        </EmptyNote>
      ) : (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <Label>Paciente *</Label>
            <Controller
              name="patient"
              control={control}
              render={({ field, fieldState }) => (
                <>
                  <Select errors={!!fieldState.error} {...field}>
                    <option value="">Selecione o paciente...</option>
                    {patients?.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </Select>
                  {fieldState.error && (
                    <FormHelperText sx={{ color: theme.colors.error }}>
                      {fieldState.error.message}
                    </FormHelperText>
                  )}
                </>
              )}
            />
          </FieldGroup>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <FieldGroup style={{ flex: 1, minWidth: "180px" }}>
              <Label>Data *</Label>
              <Controller
                name="date"
                control={control}
                render={({ field, fieldState }) => (
                  <>
                    <Input errors={!!fieldState.error} type="date" {...field} />
                    {fieldState.error && (
                      <FormHelperText sx={{ color: theme.colors.error }}>
                        {fieldState.error.message}
                      </FormHelperText>
                    )}
                  </>
                )}
              />
            </FieldGroup>

            <FieldGroup style={{ flex: 1, minWidth: "180px" }}>
              <Label>Hora *</Label>
              <Controller
                name="hour"
                control={control}
                render={({ field, fieldState }) => (
                  <>
                    <Select
                      errors={!!fieldState.error}
                      {...field}
                      disabled={availabilityLoading}
                    >
                      <option value="">Selecione o horário...</option>
                      {availability?.slots.map((a, i) => (
                        <option key={i} value={`${a.startTime} - ${a.endTime}`}>
                          {a.startTime} - {a.endTime}
                        </option>
                      ))}
                    </Select>
                    {fieldState.error && (
                      <FormHelperText sx={{ color: theme.colors.error }}>
                        {fieldState.error.message}
                      </FormHelperText>
                    )}
                  </>
                )}
              />
            </FieldGroup>
          </div>

          <FieldGroup>
            <Label>Modalidade *</Label>
            <ModalityOptions>
              <ModalityCard selected={modality === "PRESENCIAL"}>
                <HiddenRadio
                  type="radio"
                  name="modality"
                  value="PRESENCIAL"
                  checked={modality === "PRESENCIAL"}
                  onChange={(e) => setModality(e.target.value)}
                />
                <MapPin size={24} />
                <span>Presencial</span>
              </ModalityCard>
              <ModalityCard selected={modality === "ONLINE"}>
                <HiddenRadio
                  type="radio"
                  name="modality"
                  value="ONLINE"
                  checked={modality === "ONLINE"}
                  onChange={(e) => setModality(e.target.value)}
                />
                <Video size={24} />
                <span>Online</span>
              </ModalityCard>
            </ModalityOptions>
          </FieldGroup>

          <SubmitBtn type="submit" disabled={isPending}>
            {!isPending && <CalendarClock size={20} />}

            {isPending ? (
              <CircularProgress sx={{ color: theme.colors.accent }} size={20} />
            ) : (
              "Confirmar Agendamento"
            )}
          </SubmitBtn>
        </Form>
      )}
    </Wrap>
  );
}
