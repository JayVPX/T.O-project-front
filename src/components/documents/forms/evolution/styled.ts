import styled from "styled-components";

const Form = styled.form`
  padding-top: ${({ theme }) => theme.spacing.lg};
`;

const FormGridRows = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.sm};
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const FormRows = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  @media (max-width: 560px) {
  }
`;

const SessionRows = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  @media (max-width: 560px) {
  }
`;

const FormRow = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.8rem;
  strong {
    color: ${({ theme }) => theme.colors.text};
    display: block;
    margin-top: 3px;
    font-size: 0.86rem;
  }
`;

const FormTitle = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primaryDark};
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
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

const TextArea = styled.textarea<{ errors: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 1.5px solid
    ${({ errors, theme }) =>
      errors ? theme.colors.error : theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  resize: vertical;
  min-height: 80px;
  font-family: inherit;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: ${({ errors, theme }) =>
      errors ? theme.colors.error : theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(107, 144, 128, 0.12);
  }
`;

const FormButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: ${({ theme }) => theme.spacing.lg};
  @media (max-width: 560px) {
  }
`;

const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.xl};
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

export {
  Input,
  Select,
  TextArea,
  FormRows,
  FormRow,
  FormGridRows,
  FormTitle,
  Form,
  SessionRows,
  SubmitBtn,
  FormButtonContainer,
};
