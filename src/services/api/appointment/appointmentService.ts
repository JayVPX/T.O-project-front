import type {
  AppointmentDTO,
  CreateAppointmentDTO,
} from "../../../model/appointment/appointmentDto";
import { privateApi } from "../../http/httpClient";

export const appointmentService = {
  // Criar consulta
  async createAppointment(
    payload: CreateAppointmentDTO,
  ): Promise<AppointmentDTO> {
    const { data } = await privateApi.post<AppointmentDTO>(
      `appointments/create`,
      payload,
    );

    return data;
  },

  //   Pegar todas as consultas
  async getAllAppointments(): Promise<AppointmentDTO[]> {
    const { data } = await privateApi.get<AppointmentDTO[]>(`appointments`);

    return data;
  },

  //   Consultas de um paciente
  async getPatientAppointments(patientId: string): Promise<AppointmentDTO[]> {
    const { data } = await privateApi.get<AppointmentDTO[]>(
      `appointments/patient/${patientId}`,
    );

    return data;
  },

  //   Consultas de todos os pacientes registrados em um usuário
  async getResponsibleAppointments(userId: string): Promise<AppointmentDTO[]> {
    const { data } = await privateApi.get<AppointmentDTO[]>(
      `appointments/user/${userId}`,
    );

    return data;
  },

  //   Consultas registrados a um terapeuta
  async getTherapistAppointments(
    therapistId: string,
  ): Promise<AppointmentDTO[]> {
    const { data } = await privateApi.get<AppointmentDTO[]>(
      `appointments/therapist/${therapistId}`,
    );

    return data;
  },

  // Atualizar o status da consulta
  async updateAppointment(): Promise<AppointmentDTO> {
    const { data } =
      await privateApi.put<AppointmentDTO>(`appointments/update`);

    return data;
  },
};
