export interface CreateUserDto {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  password: string;
}

export interface UserDto {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  accessToken: string;
}
