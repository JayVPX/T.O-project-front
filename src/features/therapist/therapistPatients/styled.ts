import styled from "styled-components";

const Header = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  h2 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primaryDark};
    margin: 0 0 4px;
  }
  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin: 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const PatientCard = styled.button`
  text-align: left;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  transition: all 0.2s ease;
  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: ${({ theme }) => theme.shadows.card};
    transform: translateY(-2px);
  }
`;

const CardTop = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primaryDark};
  flex-shrink: 0;
`;

const PatientName = styled.h3`
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 1.05rem;
  margin: 0 0 4px;
`;

const Relationship = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.82rem;
  margin: 0;
`;

const CardMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.84rem;
  svg {
    color: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
  }
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const EmptyState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl};
  color: ${({ theme }) => theme.colors.textSecondary};
  svg {
    opacity: 0.3;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  h3 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.1rem;
    margin: 0 0 ${({ theme }) => theme.spacing.sm};
  }
  p {
    margin: 0;
    font-size: 0.9rem;
  }
`;

const StatusText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(41, 51, 47, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const Modal = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.lg};
  width: 100%;
  max-width: 760px;
  max-height: 90vh;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  h2 {
    color: ${({ theme }) => theme.colors.primaryDark};
    font-size: 1.4rem;
    margin: 0 0 4px;
  }
  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    margin: 0;
    font-size: 0.88rem;
  }
`;

const CloseButton = styled.button`
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 4px;
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Section = styled.section`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding-top: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.lg};
  h3 {
    color: ${({ theme }) => theme.colors.primaryDark};
    font-size: 1rem;
    margin: 0 0 ${({ theme }) => theme.spacing.md};
  }
`;

const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const Detail = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radius.sm};
  padding: ${({ theme }) => theme.spacing.md};
  span {
    display: block;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.76rem;
    margin-bottom: 4px;
  }
  strong {
    display: block;
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.9rem;
    font-weight: 600;
  }
`;

const AppointmentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const AppointmentRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  @media (max-width: 560px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const AppointmentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.85rem;
  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Status = styled.span<{ status: string }>`
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 0.74rem;
  font-weight: 700;
  background: ${({ status }) =>
    status === "Concluída"
      ? "#F0FDF4"
      : status === "Cancelada"
        ? "#FEF2F2"
        : "#F0F7F4"};
  color: ${({ status }) =>
    status === "Concluída"
      ? "#15803D"
      : status === "Cancelada"
        ? "#B91C1C"
        : "#355C50"};
`;

const Note = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.84rem;
  margin: ${({ theme }) => theme.spacing.md} 0 0;
  line-height: 1.5;
`;

const LoadingState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl};
`;

export {
  AppointmentInfo,
  AppointmentList,
  AppointmentRow,
  Avatar,
  CardMeta,
  CardTop,
  CloseButton,
  Detail,
  DetailGrid,
  EmptyState,
  Grid,
  Header,
  MetaRow,
  Modal,
  ModalHeader,
  Note,
  Overlay,
  PatientCard,
  PatientName,
  Relationship,
  Section,
  Status,
  StatusText,
  LoadingState,
};
