import { ChevronDown } from "lucide-react";
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

const Panel = styled.div`
  max-width: 880px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.card};
  @media (max-width: 560px) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

const Intro = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: flex-start;
  padding-bottom: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  svg {
    color: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
  }
  h3 {
    margin: 0 0 4px;
    color: ${({ theme }) => theme.colors.primaryDark};
    font-size: 1.05rem;
  }
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.86rem;
    line-height: 1.5;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  position: relative;
  span {
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.85rem;
    font-weight: 600;
  }
`;

const Select = styled.select`
  width: 100%;
  appearance: none;
  padding: ${({ theme }) => theme.spacing.md} 42px
    ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.md};
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;
  outline: none;
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(107, 144, 128, 0.12);
  }
`;

const SelectIcon = styled(ChevronDown)`
  position: absolute;
  right: 14px;
  bottom: 14px;
  pointer-events: none;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Preview = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px dashed ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.accent};
`;

const PreviewTitle = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primaryDark};
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const PreviewRows = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.sm};
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const PreviewRow = styled.div`
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

const FooterNote = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.8rem;
  svg {
    flex-shrink: 0;
  }
`;

const DownloadButtonContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const LoadingState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl};
`;

export {
  Field,
  FooterNote,
  Form,
  Header,
  Intro,
  Panel,
  Preview,
  PreviewRow,
  PreviewRows,
  PreviewTitle,
  Select,
  SelectIcon,
  DownloadButtonContainer,
  LoadingState,
};
