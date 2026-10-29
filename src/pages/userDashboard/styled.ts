import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

const Sidebar = styled.aside<{ open: boolean }>`
  width: 260px;
  background: ${({ theme }) => theme.colors.surface};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: 100vh;
  position: sticky;
  top: 0;
  z-index: 50;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  }
`;

const SidebarHeader = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const LogoImg = styled.img`
  width: 180px;
  height: 80px;
  object-fit: cover;
  object-position: center 30%;
  cursor: pointer;
`;

const Nav = styled.nav`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 0.95rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  background: transparent;
  transition: all 0.2s ease;
  text-align: left;
  text-decoration: none;

  &.active {
    color: ${({ theme }) => theme.colors.primaryDark};
    background: ${({ theme }) => theme.colors.accent};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.primaryDark};
  }

  svg {
    flex-shrink: 0;
  }
`;

const SidebarFooter = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const SignOutBtn = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 0.95rem;
  font-weight: 500;
  color: #dc2626;
  width: 100%;
  transition: background 0.2s ease;

  &:hover {
    background: #fef2f2;
  }
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  width: 100%;
`;

const Topbar = styled.header`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  position: sticky;
  top: 0;
  z-index: 40;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.md}
      ${({ theme }) => theme.spacing.lg};
  }
`;

const MenuBtn = styled.button`
  display: none;
  color: ${({ theme }) => theme.colors.primaryDark};
  align-items: center;
  justify-content: center;
  padding: 4px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const TopbarTitle = styled.h1`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.primaryDark};
  margin: 0;
  flex: 1;
`;

const UserEmail = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  @media (max-width: 480px) {
    display: none;
  }
`;

const Content = styled.main`
  padding: ${({ theme }) => theme.spacing.xl};
  flex: 1;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

const Overlay = styled.div<{ show: boolean }>`
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 45;
  opacity: ${({ show }) => (show ? 1 : 0)};
  pointer-events: ${({ show }) => (show ? "auto" : "none")};
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    display: block;
  }
`;
export {
  Content,
  Layout,
  LogoImg,
  Main,
  MenuBtn,
  Nav,
  NavItem,
  Overlay,
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SignOutBtn,
  Topbar,
  TopbarTitle,
  UserEmail,
};
