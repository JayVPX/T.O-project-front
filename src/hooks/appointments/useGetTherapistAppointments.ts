import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../lib/tanstackQueryClient";
import { appointmentService } from "../../services/api/appointment/appointmentService";

export function useGetTherapistAppointments(id: string) {
  return useQuery({
    queryKey: [queryKeys.therapistAppointments],
    queryFn: async () => {
      const data = await appointmentService.getTherapistAppointments(id);
      return data;
    },
    enabled: Boolean(id),
  });
}
