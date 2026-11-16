import styled from "styled-components";

export const SubmitBtn = styled.a<{ loading?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.lg};

  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.surface};

  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};

  border-radius: ${({ theme }) => theme.radius.sm};

  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;

  cursor: ${({ loading }) => (loading ? "wait" : "pointer")};
  opacity: ${({ loading }) => (loading ? 0.7 : 1)};

  transition: all 0.3s ease;

  &:hover:not([aria-disabled="true"]) {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(53, 92, 80, 0.25);
  }

  &[aria-disabled="true"] {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }
`;
