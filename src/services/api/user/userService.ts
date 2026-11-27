import type { UserDto } from "../../../model/user/userDto";
import { privateApi } from "../../http/httpClient";

export const userService = {
  async updateAddress(address: string): Promise<UserDto> {
    const { data } = await privateApi.put<UserDto>(`/user/address`, address);
    return data;
  },
};
