import styled, { keyframes } from "styled-components";

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.background} 0%,
    ${({ theme }) => theme.colors.accent} 100%
  );
  padding: 120px ${({ theme }) => theme.spacing.xl}
    ${({ theme }) => theme.spacing.xxl};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 100px ${({ theme }) => theme.spacing.lg}
      ${({ theme }) => theme.spacing.xxl};
    min-height: auto;
  }
`;

const DecorCircle = styled.div<{
  top: string;
  left: string;
  size: string;
  color: string;
  delay: string;
}>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  background: ${({ color }) => color};
  opacity: 0.15;
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay};
  z-index: 0;
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  align-items: center;
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroText = styled.div`
  z-index: 1;
  animation: ${fadeUp} 0.8s ease-out;

  @media (max-width: 900px) {
    order: 2;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.lg ?? "20px"};
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryDark};
  box-shadow: ${({ theme }) => theme.shadows.card};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.2rem;
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 4px;
    left: 0;
    width: 100%;
    height: 8px;
    background: ${({ theme }) => theme.colors.secondary};
    opacity: 0.4;
    z-index: -1;
    border-radius: 4px;
  }
`;

const HeroDesc = styled.p`
  font-size: 1.15rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 520px;

  @media (max-width: 900px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(53, 92, 80, 0.3);

    svg {
      transform: translateX(4px);
    }
  }

  svg {
    transition: transform 0.3s ease;
  }
`;

const SecondaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  background: transparent;
  color: ${({ theme }) => theme.colors.primaryDark};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-weight: 600;
  font-size: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.surface};
    transform: translateY(-3px);
  }
`;

const HeroImageWrap = styled.div`
  position: relative;
  z-index: 1;
  animation: ${fadeUp} 0.8s ease-out 0.2s both;

  @media (max-width: 900px) {
    order: 1;
    max-width: 500px;
    margin: 0 auto;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: 0 12px 40px rgba(41, 51, 47, 0.15);
`;

const FloatingCard = styled.div<{
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
  delay?: string;
}>`
  position: absolute;
  top: ${({ top }) => top || "auto"};
  left: ${({ left }) => left || "auto"};
  bottom: ${({ bottom }) => bottom || "auto"};
  right: ${({ right }) => right || "auto"};
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: 0 8px 24px rgba(41, 51, 47, 0.12);
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  animation: ${float} 4s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay || "0s"};

  @media (max-width: 768px) {
    display: none;
  }
`;

const FloatIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
`;

const FloatText = styled.div`
  h4 {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
  }

  p {
    font-size: 0.78rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin: 0;
  }
`;

export {
  Badge,
  DecorCircle,
  FloatIcon,
  FloatText,
  FloatingCard,
  HeroButtons,
  HeroContainer,
  HeroDesc,
  HeroImage,
  HeroImageWrap,
  HeroSection,
  HeroText,
  HeroTitle,
  Highlight,
  PrimaryButton,
  SecondaryButton,
};
