import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../lib/tanstackQueryClient";
import { availabilityService } from "../../services/api/availability/availabilityService";

export function useGetTherapistAvailabilityDate(
  therapistId: string,
  params: { date: string },
) {
  return useQuery({
    queryKey: [queryKeys.therapistAvailability, therapistId, params],
    queryFn: async () => {
      const data = await availabilityService.getTherapistAvailabilityDate(
        therapistId,
        params,
      );
      return data;
    },
    enabled: Boolean(therapistId) && Boolean(params.date),
  });
}
