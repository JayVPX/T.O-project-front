import { useQuery } from "@tanstack/react-query";
import { appointmentService } from "../../services/api/appointment/appointmentService";
import { queryKeys } from "../../lib/tanstackQueryClient";

export function useGetAllAppointments() {
  return useQuery({
    queryKey: [queryKeys.allAppointments],
    queryFn: async () => {
      const data = await appointmentService.getAllAppointments();
      return data;
    },
  });
}
