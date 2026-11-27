import { X, Menu, LogOut, UserRound } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Nav,
  NavContainer,
  Logo,
  LogoImage,
  MenuToggle,
  NavLinks,
  NavLinkItem,
  LoginButton,
  AccountButton,
  AccountDropdown,
  AccountLogout,
  AccountOption,
  AccountWrap,
} from "./styled";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/auth/useAuth";

export default function Navbar() {
  const { user, signOut } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [accountOpen, setAccountOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const closeMenu = () => setMenuOpen(false);

  const sendToLogin = () => {
    navigate("/login");
  };

  const sendToDashboard = () => {
    if (user?.role === "USER") {
      navigate("/user");
    } else if (user?.role === "THERAPIST") {
      navigate("/therapist");
    }
  };

  const closeAccount = () => setAccountOpen(false);

  const handleSignOut = async () => {
    closeAccount();
    closeMenu();
    signOut();
    navigate("/login");
  };
  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <Logo href="#home">
          <LogoImage
            src="/src/assets/images/logoNoBg.png"
            alt="Beatriz Praxedes — Terapia Ocupacional"
          />
        </Logo>

        <MenuToggle onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </MenuToggle>

        <NavLinks open={menuOpen}>
          <NavLinkItem>
            <a href="#sobre" onClick={closeMenu}>
              Sobre
            </a>
          </NavLinkItem>
          <NavLinkItem>
            <a href="#servicos" onClick={closeMenu}>
              Serviços
            </a>
          </NavLinkItem>

          <NavLinkItem>
            <a href="#publicos" onClick={closeMenu}>
              Para Quem
            </a>
          </NavLinkItem>

          <NavLinkItem>
            <a href="#faq" onClick={closeMenu}>
              FAQ
            </a>
          </NavLinkItem>
          <NavLinkItem>
            {user ? (
              <AccountWrap>
                <AccountButton
                  type="button"
                  aria-label="Abrir menu da conta"
                  aria-expanded={accountOpen}
                  onClick={() => setAccountOpen(!accountOpen)}
                >
                  <UserRound size={21} />
                </AccountButton>
                {accountOpen && (
                  <AccountDropdown>
                    <AccountOption
                      onClick={() => {
                        closeAccount();
                        closeMenu();
                        sendToDashboard();
                      }}
                    >
                      <UserRound size={17} />
                      Dashboard
                    </AccountOption>
                    <AccountLogout type="button" onClick={handleSignOut}>
                      <LogOut size={17} />
                      Sair
                    </AccountLogout>
                  </AccountDropdown>
                )}
              </AccountWrap>
            ) : (
              <LoginButton
                onClick={() => {
                  sendToLogin();
                  closeMenu();
                }}
              >
                Entrar
              </LoginButton>
            )}
          </NavLinkItem>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}
