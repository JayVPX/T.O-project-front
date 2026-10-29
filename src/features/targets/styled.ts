import styled from "styled-components";

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl}
    ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.background};

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
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Desc = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Grid = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: all 0.3s ease;
  border: 0.5px solid ${({ theme }) => theme.colors.border};

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 32px rgba(41, 51, 47, 0.12);
  }
`;

const CardImage = styled.div<{ img: string }>`
  height: 180px;
  background: url(${({ img }) => img}) center/cover no-repeat;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      transparent 40%,
      rgba(53, 92, 80, 0.5) 100%
    );
  }
`;

const CardBody = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};

  svg {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;

const CardTitle = styled.h3`
  font-size: 1.15rem;
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const CardDesc = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export {
  Card,
  CardBody,
  CardDesc,
  CardImage,
  CardTitle,
  Desc,
  Grid,
  Header,
  Section,
  SectionLabel,
  Title,
};
