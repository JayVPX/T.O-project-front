import type { UserModelDto } from "../user/userDto";

export interface LoginRequestDTO {
  email: string;
  password: string;
}

export interface LoginResponseDTO {
  user: UserModelDto;
  accessToken: string;
}

export interface AuthContextData {
  user: UserModelDto | null;
  accessToken: string | null;
  isAuthenticated: boolean;

  signIn: (data: LoginResponseDTO) => void;
  signOut: () => void;
}
