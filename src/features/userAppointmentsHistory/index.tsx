import { Filter, History } from "lucide-react";
import {
  EmptyState,
  FilterBar,
  FilterLabel,
  FilterSelect,
  Header,
  List,
  LoadingState,
} from "./styled";
import { useEffect, useState } from "react";
import { type AppointmentDTO } from "../../model/appointment/appointmentDto";
import { CircularProgress } from "@mui/material";
import { useTheme } from "styled-components";
import AppointmentCard from "../../components/appointmentCard";

export default function UserAppointmentsHistory() {
  const theme = useTheme();
  const [appointments, setAppointments] = useState<AppointmentDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<
    "all" | "Agendada" | "Concluída" | "Cancelada"
  >("all");

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
      }, 2000);
    };

    fetchAppointments();
  }, []);

  const cancelAppointment = (id: string) => {
    console.log(`Consulta do ID ${id} foi cancelada`);
  };

  return (
    <div>
      <Header>
        <h2>Histórico de Consultas</h2>
        <p>Veja consultas passadas, futuras e seu status</p>
      </Header>

      <FilterBar>
        <FilterLabel>
          <Filter size={16} />
          Filtrar:
        </FilterLabel>
        <FilterSelect
          value={filter}
          onChange={(e) => setFilter(e.target.value as typeof filter)}
        >
          <option value="all">Todas</option>
          <option value="Agendada">Agendadas</option>
          <option value="Concluída">Concluídas</option>
          <option value="Cancelada">Canceladas</option>
        </FilterSelect>
      </FilterBar>

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
            Carregando consultas...
          </p>
        </LoadingState>
      ) : appointments.length === 0 ? (
        <EmptyState>
          <History size={56} />
          <h3>Nenhuma consulta encontrada</h3>
          <p>As consultas agendadas aparecerão aqui.</p>
        </EmptyState>
      ) : (
        <List>
          {appointments.map((a) => (
            <AppointmentCard
              key={a.id}
              appointment={a}
              handleCancel={cancelAppointment}
            />
          ))}
        </List>
      )}
    </div>
  );
}
