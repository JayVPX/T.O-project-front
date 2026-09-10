import styled from "styled-components";

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl}
    ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.surface};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.xxl}
      ${({ theme }) => theme.spacing.lg};
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ImageWrap = styled.div`
  position: relative;

  @media (max-width: 900px) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

const MainImage = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

const ImageBadge = styled.div`
  position: absolute;
  bottom: -24px;
  right: -24px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: 0 8px 24px rgba(53, 92, 80, 0.25);
  text-align: center;

  h3 {
    font-size: 2rem;
    margin: 0;
  }

  p {
    font-size: 0.85rem;
    margin: 0;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    right: 10px;
    bottom: -16px;
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

const Content = styled.div`
  @media (max-width: 900px) {
    text-align: center;
  }
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
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Desc = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};

  svg {
    color: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
    margin-top: 2px;
  }

  h4 {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
    margin: 0 0 4px 0;
  }

  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin: 0;
  }

  @media (max-width: 900px) {
    text-align: left;
  }
`;

export {
  Container,
  Content,
  Desc,
  FeatureItem,
  FeatureList,
  ImageBadge,
  ImageWrap,
  MainImage,
  Section,
  SectionLabel,
  Title,
};
