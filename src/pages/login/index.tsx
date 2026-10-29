import { useState } from "react";
import {
  LoginContainer,
  FormContainer,
  Form,
  Title,
  Input,
  ForgotPassword,
  ActionButton,
  ToggleContainer,
  Toggle,
  TogglePanel,
  HiddenButton,
} from "./styled";
import { Controller, useForm } from "react-hook-form";
import { applyTelMask } from "../../utils/cellphoneMask";
import {
  loginSchema,
  registerSchema,
  type loginType,
  type registerType,
} from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormHelperText } from "@mui/material";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isActive, setIsActive] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  // Formulário de cadastro
  const { control: registerControl, handleSubmit: handleSignupSubmit } =
    useForm<registerType>({
      resolver: zodResolver(registerSchema),
      defaultValues: {
        celular: "",
        email: "",
        nome: "",
        senha: "",
        sobrenome: "",
      },
    });

  // Formulário de login
  const { control: loginControl, handleSubmit: handleSigninSubmit } =
    useForm<loginType>({
      resolver: zodResolver(loginSchema),
      defaultValues: { email: "", senha: "" },
    });

  const onRegister = (data: registerType) => {
    console.log("Dados do cadastro:", data);
    navigate("/user");
  };

  const onLogin = (data: loginType) => {
    console.log("Dados do login:", data);
    navigate("/user");
  };

  return (
    <LoginContainer>
      {/* CADASTRO */}
      <FormContainer type="signup" active={isActive}>
        <Form onSubmit={handleSignupSubmit(onRegister)}>
          <Title>Crie uma conta</Title>

          <Controller
            name="nome"
            control={registerControl}
            render={({ field, fieldState }) => (
              <div style={{ width: "100%" }}>
                <Input
                  type="text"
                  placeholder="Nome"
                  errors={!!fieldState.error}
                  {...field}
                />
                {fieldState.error && (
                  <FormHelperText
                    sx={{ color: theme.colors.error, textAlign: "left" }}
                  >
                    {fieldState.error.message}
                  </FormHelperText>
                )}
              </div>
            )}
          />

          <Controller
            name="sobrenome"
            control={registerControl}
            render={({ field, fieldState }) => (
              <div style={{ width: "100%" }}>
                <Input
                  type="text"
                  placeholder="Sobrenome"
                  errors={!!fieldState.error}
                  {...field}
                />
                {fieldState.error && (
                  <FormHelperText
                    sx={{ color: theme.colors.error, textAlign: "left" }}
                  >
                    {fieldState.error.message}
                  </FormHelperText>
                )}
              </div>
            )}
          />

          <Controller
            name="celular"
            control={registerControl}
            render={({ field, fieldState }) => (
              <div style={{ width: "100%" }}>
                <Input
                  type="tel"
                  placeholder="Celular"
                  errors={!!fieldState.error}
                  {...field}
                  onChange={(e) => applyTelMask(e.target.value)}
                  value={applyTelMask(field.value)}
                />
                {fieldState.error && (
                  <FormHelperText
                    sx={{ color: theme.colors.error, textAlign: "left" }}
                  >
                    {fieldState.error.message}
                  </FormHelperText>
                )}
              </div>
            )}
          />

          <Controller
            name="email"
            control={registerControl}
            render={({ field, fieldState }) => (
              <div style={{ width: "100%" }}>
                <Input
                  type="email"
                  placeholder="Email"
                  errors={!!fieldState.error}
                  {...field}
                />
                {fieldState.error && (
                  <FormHelperText
                    sx={{ color: theme.colors.error, textAlign: "left" }}
                  >
                    {fieldState.error.message}
                  </FormHelperText>
                )}
              </div>
            )}
          />

          <Controller
            name="senha"
            control={registerControl}
            render={({ field, fieldState }) => (
              <div style={{ width: "100%" }}>
                <Input
                  type="password"
                  placeholder="Senha"
                  errors={!!fieldState.error}
                  {...field}
                />
                {fieldState.error && (
                  <FormHelperText
                    sx={{ color: theme.colors.error, textAlign: "left" }}
                  >
                    {fieldState.error.message}
                  </FormHelperText>
                )}
              </div>
            )}
          />

          <ActionButton type="submit">Cadastre-se</ActionButton>
        </Form>
      </FormContainer>

      {/* LOGIN */}
      <FormContainer type="signin" active={isActive}>
        <Form onSubmit={handleSigninSubmit(onLogin)}>
          <Title>Faça seu Login</Title>

          <Controller
            name="email"
            control={loginControl}
            render={({ field, fieldState }) => (
              <div style={{ width: "100%" }}>
                <Input
                  type="email"
                  placeholder="Email"
                  errors={!!fieldState.error}
                  {...field}
                />
                {fieldState.error && (
                  <FormHelperText
                    sx={{ color: theme.colors.error, textAlign: "left" }}
                  >
                    {fieldState.error.message}
                  </FormHelperText>
                )}
              </div>
            )}
          />

          <Controller
            name="senha"
            control={loginControl}
            render={({ field, fieldState }) => (
              <div style={{ width: "100%" }}>
                <Input
                  type="password"
                  placeholder="Senha"
                  errors={!!fieldState.error}
                  {...field}
                />
                {fieldState.error && (
                  <FormHelperText
                    sx={{ color: theme.colors.error, textAlign: "left" }}
                  >
                    {fieldState.error.message}
                  </FormHelperText>
                )}
              </div>
            )}
          />

          <ForgotPassword href="#">Esqueceu sua senha?</ForgotPassword>

          <ActionButton type="submit">Entrar</ActionButton>
        </Form>
      </FormContainer>

      {/* PAINEL LATERAL */}
      <ToggleContainer active={isActive}>
        <Toggle active={isActive}>
          <TogglePanel side="left" active={isActive}>
            <h1>Bem vindo de Volta!</h1>

            <p>
              Insira seus dados pessoais para usar todos os recursos do site
            </p>

            <HiddenButton type="button" onClick={() => setIsActive(false)}>
              Entrar
            </HiddenButton>
          </TogglePanel>

          <TogglePanel side="right" active={isActive}>
            <h1>Olá, Seja Bem Vindo!</h1>

            <p>
              Registre-se com seus dados pessoais para usar todos os recursos do
              site
            </p>

            <HiddenButton type="button" onClick={() => setIsActive(true)}>
              Cadastre-se
            </HiddenButton>
          </TogglePanel>
        </Toggle>
      </ToggleContainer>
    </LoginContainer>
  );
}
