import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../lib/tanstackQueryClient";
import { patientService } from "../../services/api/patient/patientService";

export function useGetUserPatients(id: string) {
  return useQuery({
    queryKey: [queryKeys.userPatients],
    queryFn: async () => {
      await patientService.getUserPatients(id);
    },
  });
}
