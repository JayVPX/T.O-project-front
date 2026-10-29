import { MapPin, Video, CalendarClock } from "lucide-react";
import { useEffect, useState } from "react";

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
  TextArea,
  SubmitBtn,
  Form,
  LoadingState,
} from "./styled";
import type { PatientDTO } from "../../model/patient/patientDto";
import { CircularProgress, FormHelperText } from "@mui/material";
import { useTheme } from "styled-components";
import { Controller, useForm } from "react-hook-form";
import { createAppointmentSchema, type createAppointmentType } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function UserSchedule() {
  const theme = useTheme();
  const [patients, setPatients] = useState<PatientDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);
  const [modality, setModality] = useState<string>("PRESENCIAL");

  const { control, handleSubmit, reset } = useForm<createAppointmentType>({
    defaultValues: {
      date: "",
      hour: "",
      notes: "",
      patient: "",
    },
    resolver: zodResolver(createAppointmentSchema),
  });

  const onSubmit = async (data: createAppointmentType) => {
    setSaving(true);
    console.log(data);
    setTimeout(() => {
      setSaving(false);
      reset({ date: "", hour: "", notes: "", patient: "" });
    }, 2000);
  };

  useEffect(() => {
    const fetchPatients = async () => {
      setTimeout(() => {
        setPatients([
          {
            id: "1",
            name: "Leonardo Costa",
            birth_date: "03/25/2019",
            relationship: "Filho",
            responsible: { id: "112211", name: "Guilherme Costa" },
            therapist: { id: "44584", name: "Betriz Praxedes" },
            created_at: "26/10/2026",
          },
          {
            id: "2",
            name: "Eduardo Costa",
            birth_date: "09/02/2022",
            relationship: "Filho",
            responsible: { id: "112211", name: "Guilherme Costa" },
            therapist: { id: "44584", name: "Betriz Praxedes" },
            created_at: "26/10/2026",
          },
        ]);

        setLoading(false);
      }, 2000);
    };

    fetchPatients();
  }, []);

  if (loading) {
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

      {patients.length === 0 ? (
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
                    {patients.map((p) => (
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
                    <Input
                      errors={!!fieldState.error?.message}
                      type="time"
                      {...field}
                    />
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

          <FieldGroup>
            <Label>Observações</Label>
            <Controller
              name="notes"
              control={control}
              render={({ field }) => (
                <TextArea
                  {...field}
                  placeholder="Algo importante para a consulta?"
                />
              )}
            />
          </FieldGroup>

          <SubmitBtn type="submit" disabled={saving}>
            {!saving && <CalendarClock size={20} />}

            {saving ? (
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
