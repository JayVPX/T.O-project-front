import styled from "styled-components";

const FooterWrap = styled.footer`
  background: ${({ theme }) => theme.colors.text};
  color: rgba(255, 255, 255, 0.8);
  padding: ${({ theme }) => theme.spacing.xxl}
    ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.xxl}
      ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.lg};
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  padding-bottom: ${({ theme }) => theme.spacing.xl};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const LogoColumn = styled.div`
  @media (max-width: 480px) {
    text-align: center;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

const LogoImage = styled.img`
  width: 220px;
  height: 100px;
  object-fit: cover;
  object-position: center 30%;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radius.lg};

  @media (max-width: 480px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const LogoDesc = styled.p`
  font-size: 0.9rem;
  line-height: 1.7;
  max-width: 300px;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 480px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const Social = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  width: 38px;
  height: 38px;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.surface};
    transform: translateY(-3px);
  }
`;

const ColumnTitle = styled.h4`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.surface};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const LinkList = styled.ul`
  list-style: none;
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const LinkItem = styled.li`
  a {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.65);
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const ContactList = styled.ul`
  list-style: none;
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
`;

const ContactItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.65);

  svg {
    color: ${({ theme }) => theme.colors.secondary};
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
`;

const MadeWith = styled.p`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export {
  Bottom,
  Logo,
  LogoColumn,
  LogoDesc,
  LogoImage,
  ColumnTitle,
  ContactItem,
  ContactList,
  Container,
  Copyright,
  FooterWrap,
  LinkItem,
  LinkList,
  MadeWith,
  Social,
  SocialLink,
  Top,
};
