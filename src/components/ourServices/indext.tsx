import {
  Accessibility,
  Activity,
  Baby,
  Brain,
  Hand,
  HeartPulse,
} from "lucide-react";
import {
  Card,
  CardDesc,
  CardTitle,
  Desc,
  Grid,
  Header,
  IconWrap,
  Section,
  SectionLabel,
  Title,
} from "./styled";

export default function Services() {
  const services = [
    {
      icon: Baby,
      title: "Terapia Infantil",
      desc: "Promoção do desenvolvimento e da autonomia infantil, com estímulos nas habilidades motoras, cognitivas, sociais e sensoriais.",
    },
    {
      icon: Brain,
      title: "Saúde Mental",
      desc: "Atuação na saúde mental para favorecer autonomia, organização da rotina, participação social e qualidade de vida.",
    },
    {
      icon: Accessibility,
      title: "Reabilitação Física",
      desc: "Reabilitação e treino de habilidades funcionais após lesões, cirurgias ou condições neurológicas e ortopédicas.",
    },
    {
      icon: HeartPulse,
      title: "Terapia Geriátrica",
      desc: "Promoção da independência e segurança nas atividades diárias, com estratégias para prevenção de quedas e adaptações.",
    },
    {
      icon: Hand,
      title: "Integração Sensorial",
      desc: "Intervenções para dificuldades de processamento e modulação sensorial que impactam o desempenho e a participação nas atividades.",
    },
    {
      icon: Activity,
      title: "Avaliação Funcional",
      desc: "Avaliação das habilidades, necessidades e limitações funcionais para elaborar um plano terapêutico individualizado.",
    },
  ];

  return (
    <Section id="servicos">
      <Header>
        <SectionLabel>Nossos Serviços</SectionLabel>
        <Title>Especialidades que oferecemos</Title>
        <Desc>
          Atendimento completo em Terapia Ocupacional para todas as fases da
          vida, com técnicas baseadas em evidências e cuidado individualizado.
        </Desc>
      </Header>
      <Grid>
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <Card key={s.title}>
              <IconWrap>
                <Icon size={28} />
              </IconWrap>
              <CardTitle>{s.title}</CardTitle>
              <CardDesc>{s.desc}</CardDesc>
            </Card>
          );
        })}
      </Grid>
    </Section>
  );
}
