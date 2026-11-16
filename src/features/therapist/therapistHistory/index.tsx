import { useEffect, useState } from "react";
import type { AppointmentDTO } from "../../../model/appointment/appointmentDto";
import { EmptyState, Header, List, LoadingState } from "./styled";
import { CalendarDays } from "lucide-react";
import AppointmentCardTherapist from "../../../components/appointmentCardTherapist";
import { CircularProgress } from "@mui/material";
import { useTheme } from "styled-components";

export default function TherapistHistory() {
  const [appointments, setAppointments] = useState<AppointmentDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    const fetchAppointments = async () => {
      setTimeout(() => {
        setAppointments([
          {
            id: "1",
            modality: "PRESENCIAL",
            patient: { id: "1", name: "Leonardo Costa" },
            responsible: { id: "1", name: "Guilherme Costa" },
            status: "SCHEDULED",
            scheduleAt: "2026-11-30T20:00:00",
            therapist: { id: "12", name: "Beatriz Praxedes" },
            notes: "A criança tem sensibilidade auditiva",
          },
          {
            id: "2",
            modality: "ONLINE",
            patient: { id: "1", name: "Eduardo Costa" },
            responsible: { id: "1", name: "Guilherme Costa" },
            status: "SCHEDULED",
            scheduleAt: "2026-12-05T08:30:00",
            therapist: { id: "12", name: "Beatriz Praxedes" },
            notes: "Hiperfoco em cor azul",
          },
        ]);

        setLoading(false);
      }, 1500);
    };

    fetchAppointments();
  }, []);

  const handleChange = (id: string, status: string) => {
    console.log(`O status da consulta ${id} foi alterada para ${status}`);
  };

  return (
    <div>
      <Header>
        <h2>Cronograma</h2>
        <p>
          Acompanhe suas próximas consultas e atualize o status de cada
          atendimento.
        </p>
      </Header>
      {loading ? (
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
            Carregando seu cronograma...
          </p>
        </LoadingState>
      ) : appointments.length === 0 ? (
        <EmptyState>
          <CalendarDays size={54} />
          <h3>Nenhuma consulta próxima</h3>
          <p>As consultas futuras dos seus pacientes aparecerão aqui.</p>
        </EmptyState>
      ) : (
        <List>
          {appointments.map((appointment) => (
            <AppointmentCardTherapist
              appointment={appointment}
              handleStatusChange={handleChange}
              key={appointment.id}
            />
          ))}
        </List>
      )}
    </div>
  );
}
