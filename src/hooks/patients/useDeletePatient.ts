import { useMutation } from "@tanstack/react-query";
import { patientService } from "../../services/api/patient/patientService";
import { queryClient, queryKeys } from "../../lib/tanstackQueryClient";

export function useDeletePatient() {
  return useMutation({
    mutationFn: async (patientId: string) => {
      const data = await patientService.deletePatient(patientId);
      return data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.userPatients] });
    },
  });
}
