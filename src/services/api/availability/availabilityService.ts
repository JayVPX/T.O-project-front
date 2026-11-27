import type { AvailabilityDTO } from "../../../model/availability/availabilityDto";
import { privateApi } from "../../http/httpClient";

export const availabilityService = {
  async getTherapistAvailabilityDate(
    therapistId: string,
    params?: {
      date?: string;
    },
  ): Promise<AvailabilityDTO> {
    const { data } = await privateApi.get(
      `/availability/therapist/${therapistId}`,
      { params },
    );

    return data;
  },
};
