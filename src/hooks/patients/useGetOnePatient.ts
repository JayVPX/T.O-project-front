import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../lib/tanstackQueryClient";
import { patientService } from "../../services/api/patient/patientService";

export function useGetOnePatient(id: string) {
  return useQuery({
    queryKey: [queryKeys.getOnePatient, id],
    queryFn: async () => {
      await patientService.getOnePatient(id);
    },
    enabled: Boolean(id),
  });
}
