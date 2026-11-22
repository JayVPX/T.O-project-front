import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../lib/tanstackQueryClient";
import { patientService } from "../../services/api/patient/patientService";

export function useGetTherapistPatients(id: string) {
  return useQuery({
    queryKey: [queryKeys.therapistPatients],
    queryFn: async () => {
      const data = await patientService.getTherapistPatients(id);
      return data;
    },
    enabled: Boolean(id),
  });
}
