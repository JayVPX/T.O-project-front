import styled from "styled-components";

const Nav = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: ${({ scrolled, theme }) =>
    scrolled ? theme.colors.surface : "transparent"};
  box-shadow: ${({ scrolled, theme }) =>
    scrolled ? theme.shadows.card : "none"};
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.md}
      ${({ theme }) => theme.spacing.lg};
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryDark};
  /* background-color: red; */
`;

const LogoImage = styled.img`
  width: 188px;
  height: 90px;
  /* object-fit: fill; */
  object-position: center 30%;
  transition: transform 0.3s ease;
  border-radius: ${({ theme }) => theme.radius.sm};

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 480px) {
    width: 154px;
    height: 70px;
  }
`;

const NavLinks = styled.ul<{ open: boolean }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  list-style: none;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 64px;
    right: 0;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.surface};
    padding: ${({ theme }) => theme.spacing.xl};
    border-radius: ${({ theme }) => theme.radius.md} 0 0
      ${({ theme }) => theme.radius.md};
    box-shadow: ${({ theme }) => theme.shadows.card};
    width: 260px;
    height: calc(100vh - 64px);
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const NavLinkItem = styled.li`
  a {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 500;
    font-size: 0.95rem;
    transition: color 0.2s ease;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: ${({ theme }) => theme.colors.primary};
      transition: width 0.3s ease;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primaryDark};

      &::after {
        width: 100%;
      }
    }
  }
`;

const LoginButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(53, 92, 80, 0.25);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: ${({ theme }) => theme.spacing.md};
    margin-top: ${({ theme }) => theme.spacing.sm};
  }
`;

const MenuToggle = styled.button`
  display: none;
  color: ${({ theme }) => theme.colors.primaryDark};
  z-index: 101;

  @media (max-width: 768px) {
    display: block;
  }
`;

const AccountWrap = styled.div`
  position: relative;
`;

const AccountButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.surface};
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(53, 92, 80, 0.25);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    border-radius: ${({ theme }) => theme.radius.sm};
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

const AccountDropdown = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  min-width: 140px;
  padding: ${({ theme }) => theme.spacing.xs};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: 0 10px 28px rgba(41, 51, 47, 0.14);
  z-index: 110;

  @media (max-width: 768px) {
    position: static;
    width: 100%;
    margin-top: ${({ theme }) => theme.spacing.sm};
    box-shadow: none;
  }
`;

const AccountOption = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
    background: ${({ theme }) => theme.colors.accent};
  }
`;

const AccountLogout = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.sm};
  color: #dc2626;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: left;
  transition: background 0.2s ease;

  &:hover {
    background: #fef2f2;
  }
`;

export {
  LoginButton,
  Logo,
  LogoImage,
  MenuToggle,
  Nav,
  NavContainer,
  NavLinkItem,
  NavLinks,
  AccountButton,
  AccountDropdown,
  AccountLogout,
  AccountOption,
  AccountWrap,
};
