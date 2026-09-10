import { CheckCircle } from "lucide-react";
import {
  Container,
  Content,
  Desc,
  FeatureItem,
  FeatureList,
  ImageBadge,
  ImageWrap,
  MainImage,
  Section,
  SectionLabel,
  Title,
} from "./styled";

export default function About() {
  return (
    <Section id="sobre">
      <Container>
        <ImageWrap>
          <MainImage
            src="https://images.pexels.com/photos/5473223/pexels-photo-5473223.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Terapeuta ocupacional trabalhando reabilitação na mão do paciente"
          />
          <ImageBadge>
            <h3>10+</h3>
            <p>anos de experiência</p>
          </ImageBadge>
        </ImageWrap>

        <Content>
          <SectionLabel>O que é Terapia Ocupacional</SectionLabel>
          <Title>Promovendo independência e bem-estar no dia a dia</Title>
          <Desc>
            A Terapia Ocupacional é a área da saúde que ajuda pessoas a
            recuperarem, desenvolverem e manterem as habilidades necessárias
            para realizar suas atividades cotidianas com autonomia e segurança.
          </Desc>
          <FeatureList>
            <FeatureItem>
              <CheckCircle size={22} />
              <div>
                <h4>Avaliação funcional completa</h4>
                <p>
                  Análise detalhada das necessidades e potencialidades de cada
                  paciente.
                </p>
              </div>
            </FeatureItem>
            <FeatureItem>
              <CheckCircle size={22} />
              <div>
                <h4>Plano terapêutico individualizado</h4>
                <p>
                  Tratamento personalizado conforme os objetivos e rotina do
                  paciente.
                </p>
              </div>
            </FeatureItem>
            <FeatureItem>
              <CheckCircle size={22} />
              <div>
                <h4>Abordagem humanizada</h4>
                <p>
                  Cuidado centrado na pessoa, respeitando história, valores e
                  contexto.
                </p>
              </div>
            </FeatureItem>
            <FeatureItem>
              <CheckCircle size={22} />
              <div>
                <h4>Orientação familiar</h4>
                <p>
                  Suporte e educação para a família participar ativamente do
                  processo.
                </p>
              </div>
            </FeatureItem>
          </FeatureList>
        </Content>
      </Container>
    </Section>
  );
}
