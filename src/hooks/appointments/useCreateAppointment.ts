import { useMutation } from "@tanstack/react-query";
import { queryClient, queryKeys } from "../../lib/tanstackQueryClient";
import { appointmentService } from "../../services/api/appointment/appointmentService";
import type { CreateAppointmentDTO } from "../../model/appointment/appointmentDto";

export function useCreateAppointment() {
  return useMutation({
    mutationFn: async (payload: CreateAppointmentDTO) => {
      const data = await appointmentService.createAppointment(payload);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.responsibleAppointments],
      });
    },
  });
}
