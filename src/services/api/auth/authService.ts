import type { CreateUserDto, UserDto } from "../../../model/user/userDto";
import { privateApi } from "../../http/httpClient";

export const authServices = {
  async login(): Promise<UserDto> {
    const { data } = await privateApi.post("auth/login");
    return data;
  },
  async register(payload: CreateUserDto): Promise<UserDto> {
    const { data } = await privateApi.post("auth/register", payload);
    return data;
  },
};
