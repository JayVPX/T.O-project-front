export interface AppointmentDTO {
  id: string;
  scheduleAt: Date | string;
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
}

export interface CreateAppointmentDTO {
  patientId: string;
  therapistId: string;
  scheduledAt: Date;
}

export type AppointmentModality = "ONLINE" | "PRESENCIAL";
export type AppointmentStatus =
  | "CREATED"
  | "SCHEDULED"
  | "COMPLETED"
  | "CANCELLED";
