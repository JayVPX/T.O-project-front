export interface AppointmentDTO {
  id: string;
  startAt: string;
  endAt: string;
  address?: string;
  status: AppointmentStatus;
  modality: AppointmentModality;
  notes?: string;
  responsible: {
    id: string;
    name: string;
  };
  patient: {
    id: string;
    name: string;
  };
  therapist: {
    id: string;
    name: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface CreateAppointmentDTO {
  patientId: string;
  therapistId: string;
  startAt: string;
  endAt: string;
  date: string;
  modality: string;
  address?: string;
}

export type AppointmentModality = "ONLINE" | "PRESENCIAL";
export type AppointmentStatus =
  | "CREATED"
  | "SCHEDULED"
  | "COMPLETED"
  | "CANCELLED";
