import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
`;

const HeaderText = styled.div`
  h2 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primaryDark};
    margin: 0 0 4px 0;
  }

  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin: 0;
  }
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(53, 92, 80, 0.2);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const LoadingState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl};
`;

const EmptyState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl};
  color: ${({ theme }) => theme.colors.textSecondary};

  svg {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    opacity: 0.3;
  }

  h3 {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.text};
    margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
  }

  p {
    font-size: 0.9rem;
    margin: 0;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(41, 51, 47, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const Modal = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  max-width: 480px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ModalTitle = styled.h2`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.primaryDark};
  margin: 0;
`;

const CloseBtn = styled.button`
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 4px;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Label = styled.label`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const Input = styled.input<{ errors: boolean }>`
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

const Select = styled.select<{ errors: boolean }>`
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
  background: ${({ theme }) => theme.colors.surface};

  &:focus {
    border-color: ${({ errors, theme }) =>
      errors ? theme.colors.error : theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(107, 144, 128, 0.12);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  transition: border-color 0.2s ease;
  margin-top: ${({ theme }) => theme.spacing.xs};
  resize: vertical;
  min-height: 80px;
  font-family: inherit;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(107, 144, 128, 0.12);
  }
`;

const SaveBtn = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-weight: 600;
  font-size: 1rem;
  margin-top: ${({ theme }) => theme.spacing.sm};
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.primaryDark};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export {
  AddButton,
  CloseBtn,
  EmptyState,
  Form,
  Grid,
  Header,
  HeaderText,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
  SaveBtn,
  Select,
  TextArea,
  LoadingState,
};
