export interface UserModelDto {
  id: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  role: UserRole;
  address?: string | undefined;
}

export interface CreateUserModelDto {
  firstName: string;
  lastName: string;
  email: string;
  cpf: string;
  phone: string;
  password: string;
}

export type UserRole = "THERAPIST" | "SA" | "USER";
