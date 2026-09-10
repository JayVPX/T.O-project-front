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
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${({ theme }) => theme.colors.primary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(41, 51, 47, 0.12);

    &::before {
      transform: scaleX(1);
    }
  }
`;

const IconWrap = styled.div`
  width: 56px;
  height: 56px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  transition: all 0.3s ease;

  ${Card}:hover & {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.surface};
    transform: scale(1.1);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const CardDesc = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export {
  Card,
  CardDesc,
  CardTitle,
  Desc,
  Grid,
  Header,
  IconWrap,
  Section,
  SectionLabel,
  Title,
};
