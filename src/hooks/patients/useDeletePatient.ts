import { useMutation } from "@tanstack/react-query";
import { patientService } from "../../services/api/patient/patientService";
import { queryClient, queryKeys } from "../../lib/tanstackQueryClient";

export function useDeletePatient() {
  return useMutation({
    mutationFn: async (patientId: string) => {
      await patientService.deletePatient(patientId);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.userPatients] });
    },
  });
}
