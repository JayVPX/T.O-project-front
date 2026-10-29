import styled from "styled-components";

const Wrap = styled.div`
  max-width: 600px;

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const Header = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};

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

const Form = styled.form`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
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
  background: ${({ theme }) => theme.colors.surface};
  transition: border-color 0.2s ease;

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
  resize: vertical;
  min-height: 80px;
  font-family: inherit;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(107, 144, 128, 0.12);
  }
`;

const ModalityOptions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const ModalityCard = styled.label<{ selected: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.lg};
  border: 2px solid
    ${({ selected, theme }) =>
      selected ? theme.colors.primary : theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${({ selected, theme }) =>
    selected ? theme.colors.accent : "transparent"};

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
  }

  span {
    font-size: 0.9rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }

  svg {
    color: ${({ selected, theme }) =>
      selected ? theme.colors.primary : theme.colors.textSecondary};
  }
`;

const HiddenRadio = styled.input`
  display: none;
`;

const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(53, 92, 80, 0.25);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ErrorBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  background: #fef2f2;
  color: #dc2626;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 0.85rem;
  border: 1px solid #fecaca;
`;

const SuccessBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  background: #f0fdf4;
  color: #16a34a;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 0.85rem;
  border: 1px solid #bbf7d0;
`;

const EmptyNote = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.radius.sm};
`;

const LoadingState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl};
`;

export {
  EmptyNote,
  ErrorBox,
  FieldGroup,
  Form,
  Header,
  HiddenRadio,
  Input,
  Label,
  ModalityCard,
  ModalityOptions,
  Select,
  SubmitBtn,
  SuccessBox,
  TextArea,
  Wrap,
  LoadingState,
};
