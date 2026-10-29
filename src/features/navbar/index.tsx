import { X, Menu } from "lucide-react";
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
} from "./styled";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const sendToLogin = () => {
    navigate("/login");
  };

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <Logo href="#home">
          <LogoImage
            src="/src/assets/images/logo.png"
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
            <LoginButton onClick={sendToLogin}>Entrar</LoginButton>
          </NavLinkItem>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}
