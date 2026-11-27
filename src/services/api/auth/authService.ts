import type {
  LoginRequestDTO,
  LoginResponseDTO,
} from "../../../model/auth/authDto";
import type {
  CreateUserModelDto,
  UserModelDto,
} from "../../../model/user/userDto";
import { publicApi } from "../../http/httpClient";

export const authServices = {
  async login(payload: LoginRequestDTO): Promise<LoginResponseDTO> {
    const { data } = await publicApi.post<LoginResponseDTO>(
      "auth/login",
      payload,
    );
    return data;
  },
  async register(payload: CreateUserModelDto): Promise<UserModelDto> {
    const { data } = await publicApi.post<UserModelDto>(
      "auth/register",
      payload,
    );
    return data;
  },
};
