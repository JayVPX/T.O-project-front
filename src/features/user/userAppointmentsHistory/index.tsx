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
import { useState } from "react";

import { CircularProgress } from "@mui/material";
import { useTheme } from "styled-components";
import AppointmentCard from "../../../components/appointmentCard";
import { useGetResponsibleAppointments } from "../../../hooks/appointments/useGetResponsibleAppointments";
import { useAuth } from "../../../providers/auth/useAuth";

export default function UserAppointmentsHistory() {
  const theme = useTheme();
  const { user } = useAuth();
  const id = user?.id;

  const [filter, setFilter] = useState<
    "all" | "Agendada" | "Concluída" | "Cancelada"
  >("all");

  const { data: appointments, isLoading } = useGetResponsibleAppointments(
    id ?? "",
  );

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
            Carregando consultas...
          </p>
        </LoadingState>
      ) : appointments?.length === 0 ? (
        <EmptyState>
          <History size={56} />
          <h3>Nenhuma consulta encontrada</h3>
          <p>As consultas agendadas aparecerão aqui.</p>
        </EmptyState>
      ) : (
        <List>
          {appointments?.map((a) => (
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
