import { useEffect, useState } from "react";
import type { PatientDTO } from "../../../model/patient/patientDto";
import type { AppointmentDTO } from "../../../model/appointment/appointmentDto";
import {
  Users,
  UserRound,
  Cake,
  CalendarClock,
  X,
  Phone,
  Mail,
  MapPin,
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
} from "./styled";
import type { ResponsibleDTO } from "../../../model/responsible/responsibleDto";
import { CircularProgress } from "@mui/material";
import { useTheme } from "styled-components";

export default function TherapistPatients() {
  const [patients, setPatients] = useState<PatientDTO[]>([]);
  const theme = useTheme();
  const [responsible, setResponsible] = useState<ResponsibleDTO | null>();
  const [loading, setLoading] = useState(true);
  const [selectedPatient, setSelectedPatient] = useState<PatientDTO | null>(
    null,
  );
  const [appointments, setAppointments] = useState<AppointmentDTO[]>([]);
  const [modalLoading, setModalLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPatients([
        {
          id: "1",
          name: "Leonardo Costa",
          birth_date: "03/25/2019",
          relationship: "Filho",
          responsible: {
            id: "112211",
            name: "Guilherme Costa",
            email: "guilhermecosta@gmail.com",
            phone: "81998877665",
          },
          therapist: { id: "44584", name: "Betriz Praxedes" },
          created_at: "26/10/2026",
        },
        {
          id: "2",
          name: "Eduardo Costa",
          birth_date: "09/02/2022",
          relationship: "Filho",
          responsible: {
            id: "112211",
            name: "Guilherme Costa",
            email: "guilhermecosta@gmail.com",
            phone: "81998877665",
          },
          therapist: { id: "44584", name: "Betriz Praxedes" },
          created_at: "26/10/2026",
        },
      ]);

      setResponsible({
        id: "11238548",
        name: "Guilherme Costa",
        email: "guilhermecosta@gmail.com",
        phone: "81996839028",
      });

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
  }, []);

  const openPatient = async (patient: PatientDTO) => {
    setSelectedPatient(patient);
    setModalLoading(true);
  };

  return (
    <div>
      <Header>
        <h2>Meus Pacientes</h2>
        <p>
          Selecione um paciente para consultar seu histórico de atendimento.
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
            Carregando pacientes...
          </p>
        </LoadingState>
      ) : patients.length === 0 ? (
        <EmptyState>
          <Users size={56} />
          <h3>Nenhum paciente conectado</h3>
          <p>Os pacientes vinculados ao seu atendimento aparecerão aqui.</p>
        </EmptyState>
      ) : (
        <Grid>
          {patients.map((patient) => (
            <PatientCard key={patient.id} onClick={() => openPatient(patient)}>
              <CardTop>
                <Avatar>
                  <UserRound size={24} />
                </Avatar>
                <div>
                  <PatientName>{patient.name}</PatientName>
                  <Relationship>
                    {patient.relationship || "Relação não informada"}
                  </Relationship>
                </div>
              </CardTop>
              <CardMeta>
                {patient.birth_date && (
                  <MetaRow>
                    <Cake size={16} />
                    Nascimento: {patient.birth_date}
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
                      ? selectedPatient.birth_date
                      : "Não informado"}
                  </strong>
                </Detail>
                <Detail>
                  <span>Relação com o responsável</span>
                  <strong>
                    {selectedPatient.relationship || "Não informado"}
                  </strong>
                </Detail>
                <Detail>
                  <span>Cadastro realizado em</span>
                  <strong>{selectedPatient.created_at}</strong>
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
                  <strong>{responsible?.name || "Não informado"}</strong>
                </Detail>
                <Detail>
                  <span>
                    <Phone size={13} /> Telefone
                  </span>
                  <strong>
                    {(responsible?.phone ?? null) || "Não informado"}
                  </strong>
                </Detail>
                <Detail>
                  <span>
                    <Mail size={13} /> E-mail
                  </span>
                  <strong>{responsible?.email || "Não informado"}</strong>
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
              {modalLoading ? (
                <StatusText>Carregando consultas...</StatusText>
              ) : appointments.length === 0 ? (
                <Note>Nenhuma consulta registrada para este paciente.</Note>
              ) : (
                <AppointmentList>
                  {appointments.map((appointment) => (
                    <AppointmentRow key={appointment.id}>
                      {/* <AppointmentInfo>
                        <Clock3 size={16} />
                        {appointment.scheduleAt} às {appointment.scheduleAt} ·{" "}
                        {appointment.modality}
                      </AppointmentInfo> */}
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
