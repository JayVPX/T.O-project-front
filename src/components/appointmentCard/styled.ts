import styled from "styled-components";
import { theme } from "../../styles/theme";

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: ${({ theme }) => theme.shadows.card};
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const DateBlock = styled.div`
  text-align: center;
  flex-shrink: 0;
  min-width: 72px;

  @media (max-width: 600px) {
    display: flex;
    gap: ${({ theme }) => theme.spacing.md};
    text-align: left;
    min-width: 0;
    width: 100%;
  }
`;

const DateDay = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryDark};
  line-height: 1;
`;

const DateMonth = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Divider = styled.div`
  width: 1px;
  height: 48px;
  background: ${({ theme }) => theme.colors.border};
  flex-shrink: 0;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Info = styled.div`
  flex: 1;
  min-width: 0;
`;

const PatientName = styled.h3`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.primaryDark};
  margin: 0 0 6px 0;
`;

const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
`;

const InfoItem = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Notes = styled.p`
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: ${({ theme }) => theme.spacing.sm};
  font-style: italic;
`;

const StatusBadge = styled.span<{ status: string }>`
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
  white-space: nowrap;
  background: ${({ status }) =>
    status === "SCHEDULED"
      ? "rgba(107, 144, 128, 0.12)"
      : status === "COMPLETED"
        ? "rgba(34, 197, 94, 0.12)"
        : "rgba(220, 38, 38, 0.12)"};
  color: ${({ status }) =>
    status === "SCHEDULED"
      ? theme.colors.primaryDark
      : status === "COMPLETED"
        ? "#16A34A"
        : theme.colors.error};
`;

const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-shrink: 0;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const ActionBtn = styled.button<{ variant: "cancel" | "complete" | "delete" }>`
  padding: 6px 12px;
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 0.8rem;
  font-weight: 600;
  transition: all 0.2s ease;
  border: 1.5px solid;

  @media (max-width: 600px) {
    flex: 1;
    text-align: center;
  }

  ${({ variant, theme }) =>
    variant === "cancel" &&
    `border-color: ${theme.colors.border}; color: ${theme.colors.textSecondary};
     &:hover { border-color: ${theme.colors.error}; color: ${theme.colors.error}; background: #FEF2F2; }`}

  ${({ variant }) =>
    variant === "complete" &&
    `border-color: transparent; color: #FFFFFF; background: #16A34A;
     &:hover { background: #15803D; }`}

  ${({ variant }) =>
    variant === "delete" &&
    `border-color: transparent; color: ${theme.colors.error}; background: transparent;
     &:hover { background: #FEF2F2; }`}
`;

export {
  ActionBtn,
  Actions,
  Card,
  DateBlock,
  DateDay,
  DateMonth,
  Divider,
  Info,
  InfoItem,
  InfoRow,
  Notes,
  PatientName,
  StatusBadge,
};
