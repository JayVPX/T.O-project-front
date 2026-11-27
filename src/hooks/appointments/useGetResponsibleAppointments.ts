import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../lib/tanstackQueryClient";
import { appointmentService } from "../../services/api/appointment/appointmentService";

export function useGetResponsibleAppointments(id: string) {
  return useQuery({
    queryKey: [queryKeys.responsibleAppointments],
    queryFn: async () => {
      const data = await appointmentService.getResponsibleAppointments(id);
      return data;
    },
    enabled: Boolean(id),
  });
}
