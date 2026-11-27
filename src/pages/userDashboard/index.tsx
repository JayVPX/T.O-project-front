import {
  CalendarClock,
  History,
  // House,
  LogOut,
  Menu,
  UserRoundCog,
  Users,
  X,
} from "lucide-react";
import {
  Overlay,
  SidebarHeader,
  LogoImg,
  Nav,
  NavItem,
  SidebarFooter,
  SignOutBtn,
  Main,
  Topbar,
  MenuBtn,
  TopbarTitle,
  UserEmail,
  Content,
  Layout,
  Sidebar,
  LogoLink,
} from "./styled";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../providers/auth/useAuth";

export default function UserDashboard() {
  const { user } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const titles: Record<string, string> = {
    "/user/me": "Meus Dados",
    "/user/patients": "Pacientes",
    "/user/schedule": "Agendar Consulta",
    "/user/history": "Histórico de Consultas",
  };
  const title = titles[location.pathname] ?? "Dashboard";
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sendToHome = () => {
    navigate("/");
  };

  const signOut = () => {
    console.log("Deslogado");
  };

  return (
    <Layout>
      <Overlay show={sidebarOpen} onClick={() => setSidebarOpen(false)} />
      <Sidebar open={sidebarOpen}>
        <SidebarHeader>
          <LogoLink
            aria-label="Voltar para a home"
            title="Voltar para a home"
            onClick={sendToHome}
          >
            <LogoImg
              src="/src/assets/images/logo1.png"
              alt="Beatriz Praxedes — TO"
            />
          </LogoLink>
        </SidebarHeader>

        <Nav>
          <NavItem
            to="/user/me"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <UserRoundCog size={20} />
            Meus Dados
          </NavItem>

          <NavItem
            to="/user/patients"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <Users size={20} />
            Pacientes
          </NavItem>

          <NavItem
            to="/user/schedule"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <CalendarClock size={20} />
            Agendar Consulta
          </NavItem>

          <NavItem
            to="/user/history"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <History size={20} />
            Histórico
          </NavItem>
        </Nav>

        <SidebarFooter>
          <SignOutBtn onClick={signOut}>
            <LogOut size={20} />
            Sair
          </SignOutBtn>
        </SidebarFooter>
      </Sidebar>

      <Main>
        <Topbar>
          <MenuBtn onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </MenuBtn>
          <TopbarTitle>{title}</TopbarTitle>
          <UserEmail>{user?.email}</UserEmail>
        </Topbar>

        <Content>
          <Outlet />
        </Content>
      </Main>
    </Layout>
  );
}
