import type {
  CreatePatientDTO,
  PatientDTO,
} from "../../../model/patient/patientDto";
import { privateApi } from "../../http/httpClient";

export const patientService = {
  //Criar paciente
  async createPatient(payload: CreatePatientDTO): Promise<PatientDTO> {
    const { data } = await privateApi.post<PatientDTO>(`patient`, payload);

    return data;
  },

  // Consulta todos os pacientes
  async getAllPatients(): Promise<PatientDTO[]> {
    const { data } = await privateApi.get<PatientDTO[]>("patients");

    return data;
  },

  //Consulta os pacientes de um usuário
  async getUserPatients(userId: string): Promise<PatientDTO[]> {
    const { data } = await privateApi.get<PatientDTO[]>(
      `patient/user/${userId}}`,
    );
    return data;
  },

  //Consulta os pacientes de um terapeuta
  async getTherapistPatients(therapistId: string): Promise<PatientDTO[]> {
    const { data } = await privateApi.get<PatientDTO[]>(
      `patient/therapist/${therapistId}}`,
    );
    return data;
  },

  //   Consulta um paciente em específico
  async getOnePatient(patientId: string): Promise<PatientDTO> {
    const { data } = await privateApi.get<PatientDTO>(`patient/${patientId}`);

    return data;
  },

  //   Deleta paciente
  async deletePatient(patientId: string): Promise<PatientDTO> {
    const { data } = await privateApi.delete(`patient/${patientId}`);
    return data;
  },
};
