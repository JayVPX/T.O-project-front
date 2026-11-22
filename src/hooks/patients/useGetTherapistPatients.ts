import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../lib/tanstackQueryClient";
import { patientService } from "../../services/api/patient/patientService";

export function useGetTherapistPatients(id: string) {
  return useQuery({
    queryKey: [queryKeys.therapistPatients],
    queryFn: async () => {
      patientService.getTherapistPatients(id);
    },
    enabled: Boolean(id),
  });
}
