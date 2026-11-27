import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../lib/tanstackQueryClient";
import { appointmentService } from "../../services/api/appointment/appointmentService";

export function useGetPatientAppointments(id?: string) {
  return useQuery({
    queryKey: [queryKeys.patientAppointments, id],
    queryFn: async () => {
      if (!id) {
        throw new Error("O ID do paciente é obrigatório");
      }
      const data = await appointmentService.getPatientAppointments(id);
      return data;
    },
    enabled: Boolean(id),
  });
}
