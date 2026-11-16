import styled from "styled-components";

const CardBody = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  @media (max-width: 640px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const DateBlock = styled.div`
  min-width: 86px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryDark};
  strong {
    display: block;
    font-size: 1.7rem;
    line-height: 1;
  }
  span {
    display: block;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    margin-top: 5px;
  }
  @media (max-width: 640px) {
    text-align: left;
    display: flex;
    align-items: baseline;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 54px;
  background: ${({ theme }) => theme.colors.border};
  @media (max-width: 640px) {
    display: none;
  }
`;

const MainInfo = styled.div`
  flex: 1;
  min-width: 0;
  h3 {
    color: ${({ theme }) => theme.colors.primaryDark};
    font-size: 1.05rem;
    margin: 0 0 8px;
  }
`;

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.82rem;
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Notes = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.82rem;
  font-style: italic;
  margin: ${({ theme }) => theme.spacing.sm} 0 0;
`;

const StatusSelect = styled.select<{ status: string }>`
  border: 1.5px solid
    ${({ status }) =>
      status === "Concluída"
        ? "#BBF7D0"
        : status === "Cancelada"
          ? "#FECACA"
          : "#CFE2D9"};
  color: ${({ status }) =>
    status === "Concluída"
      ? "#15803D"
      : status === "Cancelada"
        ? "#B91C1C"
        : "#355C50"};
  background: ${({ status }) =>
    status === "Concluída"
      ? "#F0FDF4"
      : status === "Cancelada"
        ? "#FEF2F2"
        : "#F0F7F4"};
  border-radius: 999px;
  padding: 7px 28px 7px 11px;
  font-size: 0.78rem;
  font-weight: 700;
  outline: none;
  cursor: pointer;
`;

const StatusText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
`;

export {
  CardBody,
  DateBlock,
  Divider,
  MainInfo,
  Meta,
  MetaItem,
  Notes,
  StatusSelect,
  StatusText,
};
