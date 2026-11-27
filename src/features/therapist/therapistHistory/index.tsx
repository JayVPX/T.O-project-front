import { EmptyState, Header, List, LoadingState } from "./styled";
import { CalendarDays } from "lucide-react";
import AppointmentCardTherapist from "../../../components/appointmentCardTherapist";
import { CircularProgress } from "@mui/material";
import { useTheme } from "styled-components";
import { useGetTherapistAppointments } from "../../../hooks/appointments/useGetTherapistAppointments";

export default function TherapistHistory() {
  const id = "bcb8ca89-ce32-4c41-933b-179f0acb36e7";
  const theme = useTheme();
  const { data: appointments, isLoading } = useGetTherapistAppointments(id);

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
      {isLoading ? (
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
      ) : appointments?.length === 0 ? (
        <EmptyState>
          <CalendarDays size={54} />
          <h3>Nenhuma consulta próxima</h3>
          <p>As consultas futuras dos seus pacientes aparecerão aqui.</p>
        </EmptyState>
      ) : (
        <List>
          {appointments?.map((appointment) => (
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
