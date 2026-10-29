import styled, { css } from "styled-components";

export const LoginContainer = styled.div`
  margin: 20vh auto 0;

  background-color: ${({ theme }) => theme.colors.surface};

  border-radius: ${({ theme }) => theme.radius.lg};

  box-shadow: ${({ theme }) => theme.shadows.card};

  position: relative;
  overflow: hidden;

  width: 768px;
  max-width: 100%;
  min-height: 600px;
`;

export const FormContainer = styled.div<{
  active: boolean;
  type: string;
}>`
  position: absolute;

  top: 0;
  height: 100%;

  transition: all 0.6s ease-in-out;

  ${({ type, active }) =>
    type === "signin" &&
    css`
      left: 0;
      width: 50%;
      z-index: 2;

      ${active &&
      css`
        transform: translateX(100%);
      `}
    `}

  ${({ type, active }) =>
    type === "signup" &&
    css`
      left: 0;
      width: 50%;
      opacity: 0;
      z-index: 1;

      ${active &&
      css`
        transform: translateX(100%);
        opacity: 1;
        z-index: 5;
        animation: move 0.6s;
      `}
    `}

  @keyframes move {
    0%,
    49.99% {
      opacity: 0;
      z-index: 1;
    }

    50%,
    100% {
      opacity: 1;
      z-index: 5;
    }
  }
`;

export const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.surface};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 6px;

  padding: 0 ${({ theme }) => theme.spacing.xl};

  height: 100%;

  box-sizing: border-box;
`;

export const Title = styled.h1`
  margin: 0;

  color: ${({ theme }) => theme.colors.text};

  font-size: 28px;
  font-weight: 700;
`;

export const Description = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 12px;
  text-align: center;
`;

export const Input = styled.input<{ errors: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 1.5px solid
    ${({ errors, theme }) =>
      errors ? theme.colors.error : theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  transition: border-color 0.2s ease;
  margin-top: ${({ theme }) => theme.spacing.xs};

  &:focus {
    border-color: ${({ errors, theme }) =>
      errors ? theme.colors.error : theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(107, 144, 128, 0.12);
  }
`;

export const SocialsLogin = styled.div`
  margin: ${({ theme }) => theme.spacing.lg} 0;

  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const SocialIcon = styled.a`
  border: 1px solid ${({ theme }) => theme.colors.border};

  border-radius: ${({ theme }) => theme.radius.sm};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  color: ${({ theme }) => theme.colors.text};

  text-decoration: none;

  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};

    color: ${({ theme }) => theme.colors.surface};

    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ForgotPassword = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 13px;

  text-decoration: none;

  margin: ${({ theme }) => theme.spacing.md} 0
    ${({ theme }) => theme.spacing.sm};

  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const AdmLink = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 13px;

  text-decoration: none;

  margin-top: ${({ theme }) => theme.spacing.md};

  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const ActionButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};

  color: ${({ theme }) => theme.colors.surface};

  font-size: 12px;

  padding: 10px 45px;

  border: 1px solid transparent;

  border-radius: ${({ theme }) => theme.radius.sm};

  font-weight: 600;

  letter-spacing: 0.5px;

  text-transform: uppercase;

  margin-top: ${({ theme }) => theme.spacing.sm};

  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const HiddenButton = styled.button`
  background-color: transparent;

  color: ${({ theme }) => theme.colors.surface};

  font-size: 12px;

  padding: 10px 45px;

  border: 1px solid ${({ theme }) => theme.colors.surface};

  border-radius: ${({ theme }) => theme.radius.sm};

  font-weight: 600;

  letter-spacing: 0.5px;

  text-transform: uppercase;

  margin-top: ${({ theme }) => theme.spacing.sm};

  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.surface};

    color: ${({ theme }) => theme.colors.primaryDark};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ToggleContainer = styled.div<{
  active: boolean;
}>`
  position: absolute;

  top: 0;
  left: 50%;

  width: 50%;
  height: 100%;

  overflow: hidden;

  transition: all 0.6s ease-in-out;

  border-radius: 150px 0 0 100px;

  z-index: 1000;

  ${({ active }) =>
    active &&
    css`
      transform: translateX(-100%);

      border-radius: 0 150px 100px 0;
    `}
`;

export const Toggle = styled.div<{
  active: boolean;
}>`
  height: 100%;

  width: 200%;

  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.primaryDark}
  );

  color: ${({ theme }) => theme.colors.surface};

  position: relative;

  left: -100%;

  transform: translateX(0);

  transition: all 0.6s ease-in-out;

  ${({ active }) =>
    active &&
    css`
      transform: translateX(50%);
    `}
`;

export const TogglePanel = styled.div<{
  side: string;
  active: boolean;
}>`
  position: absolute;

  top: 0;

  width: 50%;
  height: 100%;

  display: flex;

  align-items: center;
  justify-content: center;

  flex-direction: column;

  padding: 0 ${({ theme }) => theme.spacing.lg};

  box-sizing: border-box;

  text-align: center;

  color: ${({ theme }) => theme.colors.surface};

  transition: all 0.6s ease-in-out;

  h1 {
    color: ${({ theme }) => theme.colors.surface};

    font-size: 26px;

    margin: 0;
  }

  p {
    color: ${({ theme }) => theme.colors.surface};

    font-size: 14px;

    line-height: 20px;

    letter-spacing: 0.3px;

    margin: ${({ theme }) => theme.spacing.lg} 0;
  }

  ${({ side, active }) => {
    if (side === "left") {
      return css`
        left: 0;

        transform: translateX(-200%);

        ${active &&
        css`
          transform: translateX(0);
        `}
      `;
    }

    return css`
      left: 50%;

      transform: translateX(0);

      ${active &&
      css`
        transform: translateX(200%);
      `}
    `;
  }}
`;
