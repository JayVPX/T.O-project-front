import {
  CalendarClock,
  CalendarDays,
  FileText,
  LogOut,
  Menu,
  Users,
  X,
} from "lucide-react";
import {
  Content,
  Layout,
  LogoImg,
  LogoLink,
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
} from "./styled";
import { useState } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "../../providers/auth/useAuth";

export default function TherapistDashboard() {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const titles: Record<string, string> = {
    "/therapist/patients": "Pacientes",
    "/therapist/schedule": "Agendar Consulta",
    "/therapist/history": "Cronograma",
    "/therapist/documents": "Documentos",
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
            to="/therapist/patients"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <Users size={20} />
            Pacientes
          </NavItem>

          <NavItem
            to="/therapist/schedule"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <CalendarClock size={20} />
            Agendar Consulta
          </NavItem>

          <NavItem
            to="/therapist/history"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <CalendarDays size={20} />
            Cronograma
          </NavItem>

          <NavItem
            to="/therapist/documents"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FileText size={20} />
            Documentos
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
