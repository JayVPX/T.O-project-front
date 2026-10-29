import styled from "styled-components";

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl}
    ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.accent};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.xxl}
      ${({ theme }) => theme.spacing.lg};
  }
`;

const Header = styled.div`
  max-width: 700px;
  margin: 0 auto ${({ theme }) => theme.spacing.xxl};
  text-align: center;
`;

const SectionLabel = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Title = styled.h2`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.primaryDark};

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Wrap = styled.div`
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Item = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Question = styled.button<{ open: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.lg};
  font-size: 1.05rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryDark};
  text-align: left;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    transition: transform 0.3s ease;
    transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0)")};
    flex-shrink: 0;
  }
`;

const Answer = styled.div<{ open: boolean }>`
  max-height: ${({ open }) => (open ? "300px" : "0")};
  overflow: hidden;
  transition:
    max-height 0.3s ease,
    padding 0.3s ease;
  padding: ${({ open, theme }) =>
    open ? `0 ${theme.spacing.lg} ${theme.spacing.lg}` : "0"};
`;

const AnswerText = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
`;

export {
  Answer,
  AnswerText,
  Header,
  Item,
  Question,
  Section,
  SectionLabel,
  Title,
  Wrap,
};
