import { Clock, Video, MapPin, Contact } from "lucide-react";
import type { AppointmentDTO } from "../../model/appointment/appointmentDto";
import {
  ActionBtn,
  Actions,
  Card,
  DateBlock,
  DateDay,
  DateMonth,
  Divider,
  Info,
  InfoItem,
  InfoRow,
  Notes,
  PatientName,
  StatusBadge,
} from "./styled";

interface Props {
  appointment: AppointmentDTO;
  handleCancel: (id: string) => void;
}

export default function AppointmentCard({
  appointment: a,
  handleCancel,
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
    <Card key={a.id}>
      <DateBlock>
        <DateDay>{day}</DateDay>
        <DateMonth>{month}</DateMonth>
      </DateBlock>

      <Divider />

      <Info>
        <PatientName>{a.patient.name || "Paciente"}</PatientName>

        <InfoRow>
          <InfoItem>
            <Clock size={14} />
            {time}
          </InfoItem>

          <InfoItem>
            {a.modality === "ONLINE" ? (
              <Video size={14} />
            ) : (
              <MapPin size={14} />
            )}
            {a.modality}
          </InfoItem>

          <StatusBadge status={a.status}>
            {a.status === "SCHEDULED"
              ? "Agendada"
              : a.status === "CANCELLED"
                ? "Cancelada"
                : "Concluída"}
          </StatusBadge>
        </InfoRow>
        <InfoRow>
          <InfoItem>
            <Contact size={16} />
            {a.therapist.name}
          </InfoItem>
        </InfoRow>
        {a.notes && <Notes>{a.notes}</Notes>}
      </Info>

      <Actions>
        {a.status === "SCHEDULED" && (
          <>
            <ActionBtn variant="cancel" onClick={() => handleCancel(a.id)}>
              Cancelar
            </ActionBtn>
          </>
        )}
      </Actions>
    </Card>
  );
}
