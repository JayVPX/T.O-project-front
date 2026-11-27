export interface AvailabilityDTO {
  weekday: number;
  therapistId: string;
  slots: AvailabilitySlotsDTO[];
}

export interface AvailabilitySlotsDTO {
  startTime: string;
  endTime: string;
}
