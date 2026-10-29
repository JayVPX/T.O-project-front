import { MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  FaFacebook as Facebook,
  FaInstagram as Instagram,
} from "react-icons/fa";

import {
  Bottom,
  ColumnTitle,
  ContactItem,
  ContactList,
  Container,
  Copyright,
  FooterWrap,
  LinkItem,
  LinkList,
  Logo,
  LogoColumn,
  LogoDesc,
  LogoImage,
  MadeWith,
  Social,
  SocialLink,
  Top,
} from "./styled";

export default function Footer() {
  return (
    <FooterWrap>
      <Container>
        <Top>
          <LogoColumn>
            <Logo>
              <LogoImage
                src="/src/assets/images/logo.png"
                alt="Beatriz Praxedes — Terapia Ocupacional"
              />
            </Logo>
            <LogoDesc>
              Clínica de Terapia Ocupacional dedicada a promover autonomia,
              saúde e qualidade de vida para pessoas de todas as idades.
            </LogoDesc>
            <Social>
              <SocialLink href="#" aria-label="Instagram">
                <Instagram size={18} />
              </SocialLink>
              <SocialLink href="#" aria-label="Facebook">
                <Facebook size={18} />
              </SocialLink>
            </Social>
          </LogoColumn>

          <div>
            <ColumnTitle>Navegação</ColumnTitle>
            <LinkList>
              <LinkItem>
                <a href="#sobre">Sobre</a>
              </LinkItem>

              <LinkItem>
                <a href="#servicos">Serviços</a>
              </LinkItem>

              <LinkItem>
                <a href="#publicos">Para Quem</a>
              </LinkItem>

              <LinkItem>
                <a href="#faq">FAQ</a>
              </LinkItem>
            </LinkList>
          </div>

          <div>
            <ColumnTitle>Serviços</ColumnTitle>
            <LinkList>
              <LinkItem>
                <a href="#servicos">Terapia Infantil</a>
              </LinkItem>
              <LinkItem>
                <a href="#servicos">Saúde Mental</a>
              </LinkItem>
              <LinkItem>
                <a href="#servicos">Reabilitação Física</a>
              </LinkItem>
              <LinkItem>
                <a href="#servicos">Terapia Geriátrica</a>
              </LinkItem>
              <LinkItem>
                <a href="#servicos">Avaliação Funcional</a>
              </LinkItem>
            </LinkList>
          </div>

          <div>
            <ColumnTitle>Contato</ColumnTitle>
            <ContactList>
              <ContactItem>
                <MapPin size={18} />
                <span>
                  Av. Boa Viagem, 987
                  <br />
                  Recife, PE
                </span>
              </ContactItem>
              <ContactItem>
                <Phone size={18} />
                <span>(81) 99876-5432</span>
              </ContactItem>
              <ContactItem>
                <Mail size={18} />
                <span>beatrizpraxedes@gmail.com.br</span>
              </ContactItem>
              <ContactItem>
                <Clock size={18} />
                <span>
                  Seg a Sex: 8h às 18h
                  <br />
                  Sáb: 8h às 12h
                </span>
              </ContactItem>
            </ContactList>
          </div>
        </Top>

        <Bottom>
          <Copyright>
            © 2026 Beatriz Praxedes. Todos os direitos reservados.
          </Copyright>
          <MadeWith>Feito com cuidado para você</MadeWith>
        </Bottom>
      </Container>
    </FooterWrap>
  );
}
