import { Clock3, MapPin, Video } from "lucide-react";
import {
  CardBody,
  DateBlock,
  Divider,
  MainInfo,
  Meta,
  MetaItem,
  Notes,
  StatusSelect,
} from "./styled";
import type { AppointmentDTO } from "../../model/appointment/appointmentDto";

interface Props {
  appointment: AppointmentDTO;
  handleStatusChange: (id: string, status: string) => void;
}

export default function AppointmentCardTherapist({
  appointment: a,
  handleStatusChange,
}: Props) {
  const months = [
    "JAN",
    "FEV",
    "MAR",
    "ABR",
    "MAI",
    "JUN",
    "JUL",
    "AGO",
    "SET",
    "OUT",
    "NOV",
    "DEZ",
  ];
  const date = new Date(a.scheduleAt);

  const day = date.getDate();
  const month = months[date.getMonth()];

  const time = date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <CardBody>
      <DateBlock>
        <strong>{day}</strong>
        <span>{month}</span>
      </DateBlock>
      <Divider />
      <MainInfo>
        <h3>{a.patient.name || "Paciente"}</h3>
        <Meta>
          <MetaItem>
            <Clock3 size={14} />
            {time}
          </MetaItem>
          <MetaItem>
            {a.modality === "ONLINE" ? (
              <Video size={14} />
            ) : (
              <MapPin size={14} />
            )}
            {a.modality}
          </MetaItem>
        </Meta>
        {a.notes && <Notes>{a.notes}</Notes>}
      </MainInfo>
      <StatusSelect
        aria-label={`Status de ${a.patient.name || "consulta"}`}
        status={a.status}
        value={a.status}
        disabled={a.status === "COMPLETED"}
        onChange={(e) => handleStatusChange(a.id, e.target.value)}
      >
        <option value="SCHEDULED">Agendada</option>
        <option value="COMPLETED">Concluída</option>
        <option value="CANCELLED">Cancelada</option>
      </StatusSelect>
    </CardBody>
  );
}
