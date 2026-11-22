import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../lib/tanstackQueryClient";
import { patientService } from "../../services/api/patient/patientService";

export function useGetAllPatients() {
  return useQuery({
    queryKey: [queryKeys.allPatients],
    queryFn: async () => {
      patientService.getAllPatients();
    },
  });
}
