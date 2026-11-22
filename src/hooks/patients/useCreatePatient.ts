import { useMutation } from "@tanstack/react-query";
import { patientService } from "../../services/api/patient/patientService";
import type { CreatePatientDTO } from "../../model/patient/patientDto";
import { queryClient, queryKeys } from "../../lib/tanstackQueryClient";

export function useCreatePatient() {
  return useMutation({
    mutationFn: async (payload: CreatePatientDTO) => {
      const data = await patientService.createPatient(payload);
      return data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.userPatients] });
    },
  });
}
