import { useState } from "react";
import {
  RelationshipLabel,
  type PatientDTO,
} from "../../../model/patient/patientDto";

import {
  Users,
  UserRound,
  Cake,
  CalendarClock,
  X,
  Phone,
  Mail,
  MapPin,
  Clock3,
} from "lucide-react";

import {
  StatusText,
  Header,
  EmptyState,
  PatientCard,
  CardTop,
  PatientName,
  Relationship,
  CardMeta,
  MetaRow,
  Overlay,
  ModalHeader,
  CloseButton,
  DetailGrid,
  Detail,
  Note,
  AppointmentList,
  AppointmentRow,
  Status,
  Avatar,
  Modal,
  Grid,
  Section,
  LoadingState,
  AppointmentInfo,
} from "./styled";
import { CircularProgress } from "@mui/material";
import { useTheme } from "styled-components";
import { useGetTherapistPatients } from "../../../hooks/patients/useGetTherapistPatients";
import { useGetPatientAppointments } from "../../../hooks/appointments/useGetPatientAppointments";
import { formatDate, formatTime } from "../../../utils/formatDateToBr";
import { applyTelMask } from "../../../utils/cellphoneMask";

export default function TherapistPatients() {
  const theme = useTheme();
  const id = "bcb8ca89-ce32-4c41-933b-179f0acb36e7";
  const [selectedPatient, setSelectedPatient] = useState<PatientDTO | null>(
    null,
  );

  const { data: patients, isLoading } = useGetTherapistPatients(id);
  const { data: appointments, isLoading: appointmentsLoading } =
    useGetPatientAppointments(selectedPatient?.id);
  const openPatient = async (patient: PatientDTO) => {
    setSelectedPatient(patient);
  };

  return (
    <div>
      <Header>
        <h2>Meus Pacientes</h2>
        <p>
          Selecione um paciente para consultar seu histórico de atendimento.
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
            Carregando pacientes...
          </p>
        </LoadingState>
      ) : patients?.length === 0 ? (
        <EmptyState>
          <Users size={56} />
          <h3>Nenhum paciente conectado</h3>
          <p>Os pacientes vinculados ao seu atendimento aparecerão aqui.</p>
        </EmptyState>
      ) : (
        <Grid>
          {patients?.map((patient) => (
            <PatientCard key={patient.id} onClick={() => openPatient(patient)}>
              <CardTop>
                <Avatar>
                  <UserRound size={24} />
                </Avatar>
                <div>
                  <PatientName>{patient.name}</PatientName>
                  <Relationship>
                    {RelationshipLabel[patient.relationship] ||
                      "Relação não informada"}
                  </Relationship>
                </div>
              </CardTop>
              <CardMeta>
                {patient.birth_date && (
                  <MetaRow>
                    <Cake size={16} />
                    Nascimento: {formatDate(patient.birth_date)}
                  </MetaRow>
                )}
                <MetaRow>
                  <CalendarClock size={16} />
                  Ver detalhes e consultas
                </MetaRow>
              </CardMeta>
            </PatientCard>
          ))}
        </Grid>
      )}

      {selectedPatient && (
        <Overlay onClick={() => setSelectedPatient(null)}>
          <Modal onClick={(event) => event.stopPropagation()}>
            <ModalHeader>
              <div>
                <h2>{selectedPatient.name}</h2>
                <p>Informações completas do paciente</p>
              </div>
              <CloseButton onClick={() => setSelectedPatient(null)}>
                <X size={22} />
              </CloseButton>
            </ModalHeader>
            <Section>
              <h3>Dados do paciente</h3>
              <DetailGrid>
                <Detail>
                  <span>Nome completo</span>
                  <strong>{selectedPatient.name}</strong>
                </Detail>
                <Detail>
                  <span>Data de nascimento</span>
                  <strong>
                    {selectedPatient.birth_date
                      ? formatDate(selectedPatient.birth_date)
                      : "Não informado"}
                  </strong>
                </Detail>
                <Detail>
                  <span>Relação com o responsável</span>
                  <strong>
                    {RelationshipLabel[selectedPatient.relationship] ||
                      "Não informado"}
                  </strong>
                </Detail>
                <Detail>
                  <span>Cadastro realizado em</span>
                  <strong>{formatDate(selectedPatient.created_at)}</strong>
                </Detail>
              </DetailGrid>
              {selectedPatient.notes && (
                <Note>Observações: {selectedPatient.notes}</Note>
              )}
            </Section>
            <Section>
              <h3>Dados do responsável</h3>
              <DetailGrid>
                <Detail>
                  <span>
                    <UserRound size={13} /> Nome
                  </span>
                  <strong>
                    {selectedPatient.responsible.name || "Não informado"}
                  </strong>
                </Detail>
                <Detail>
                  <span>
                    <Phone size={13} /> Telefone
                  </span>
                  <strong>
                    {(applyTelMask(selectedPatient.responsible.phone) ??
                      null) ||
                      "Não informado"}
                  </strong>
                </Detail>
                <Detail>
                  <span>
                    <Mail size={13} /> E-mail
                  </span>
                  <strong>
                    {selectedPatient.responsible.email || "Não informado"}
                  </strong>
                </Detail>
                <Detail>
                  <span>
                    <MapPin size={13} /> Endereço
                  </span>
                  <strong>Disponível na área do responsável</strong>
                </Detail>
              </DetailGrid>
            </Section>
            <Section>
              <h3>Consultas com o terapeuta</h3>
              {appointmentsLoading ? (
                <StatusText>Carregando consultas...</StatusText>
              ) : appointments?.length === 0 ? (
                <Note>Nenhuma consulta registrada para este paciente.</Note>
              ) : (
                <AppointmentList>
                  {appointments?.map((appointment) => (
                    <AppointmentRow key={appointment.id}>
                      <AppointmentInfo>
                        <Clock3 size={16} />
                        {formatDate(appointment.startAt)} ·{" "}
                        {formatTime(appointment.startAt)}-
                        {formatTime(appointment.endAt)} · {appointment.modality}
                      </AppointmentInfo>
                      <Status status={appointment.status}>
                        {appointment.status}
                      </Status>
                    </AppointmentRow>
                  ))}
                </AppointmentList>
              )}
            </Section>
          </Modal>
        </Overlay>
      )}
    </div>
  );
}
