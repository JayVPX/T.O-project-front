import { CalendarClock, History, LogOut, Menu, Users, X } from "lucide-react";
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
} from "./styled";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function UserDashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const titles: Record<string, string> = {
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
          <LogoImg
            onClick={sendToHome}
            src="/src/assets/images/logo.png"
            alt="Beatriz Praxedes — TO"
          />
        </SidebarHeader>

        <Nav>
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
          <UserEmail>{"joao@gmail.com"}</UserEmail>
        </Topbar>

        <Content>
          <Outlet />
        </Content>
      </Main>
    </Layout>
  );
}
