import { Sparkles, Calendar, ArrowRight, Stethoscope } from "lucide-react";
import {
  HeroSection,
  DecorCircle,
  HeroContainer,
  HeroText,
  HeroTitle,
  HeroDesc,
  HeroButtons,
  PrimaryButton,
  SecondaryButton,
  HeroImageWrap,
  HeroImage,
  FloatingCard,
  FloatIcon,
  FloatText,
  Highlight,
  Badge,
} from "./styled";
import { useTheme } from "styled-components";

export default function Hero() {
  const theme = useTheme();

  return (
    <HeroSection id="home">
      <DecorCircle
        top="15%"
        left="5%"
        size="120px"
        color={theme.colors.secondary}
        delay="0s"
      />
      <DecorCircle
        top="60%"
        left="80%"
        size="80px"
        color={theme.colors.primary}
        delay="1.5s"
      />
      <DecorCircle
        top="80%"
        left="10%"
        size="60px"
        color={theme.colors.secondary}
        delay="3s"
      />

      <HeroContainer>
        <HeroText>
          <Badge>
            <Sparkles size={16} />
            Cuidado humanizado e especializado
          </Badge>
          <HeroTitle>
            Recupere sua <Highlight>autonomia</Highlight> com Terapia
            Ocupacional
          </HeroTitle>
          <HeroDesc>
            Oferecemos acompanhamento personalizado para crianças, adultos e
            idosos, promovendo independência, qualidade de vida e reabilitação
            funcional com profissionais especializados.
          </HeroDesc>
          <HeroButtons>
            <PrimaryButton>
              <Calendar size={20} />
              Agendar Consulta
            </PrimaryButton>
            <SecondaryButton>
              Conhecer Serviços
              <ArrowRight size={20} />
            </SecondaryButton>
          </HeroButtons>
        </HeroText>

        <HeroImageWrap>
          <HeroImage
            src="https://images.pexels.com/photos/5793700/pexels-photo-5793700.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Terapeuta ocupacional em sessão com paciente"
          />
          <FloatingCard top="20px" left="-30px">
            <FloatIcon>
              <Stethoscope size={22} />
            </FloatIcon>
            <FloatText>
              <h4>+300 pacientes</h4>
              <p>atendidos com sucesso</p>
            </FloatText>
          </FloatingCard>
          <FloatingCard bottom="30px" right="-20px" delay="1s">
            <FloatIcon>
              <Calendar size={22} />
            </FloatIcon>
            <FloatText>
              <h4>Atendimento</h4>
              <p>presencial e online</p>
            </FloatText>
          </FloatingCard>
        </HeroImageWrap>
      </HeroContainer>
    </HeroSection>
  );
}
