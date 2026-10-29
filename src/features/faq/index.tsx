import { ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  Header,
  SectionLabel,
  Title,
  Wrap,
  Item,
  Question,
  Answer,
  AnswerText,
  Section,
} from "./styled";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "O que é Terapia Ocupacional e quando procurar?",
      a: "A Terapia Ocupacional ajuda pessoas a recuperar ou desenvolver habilidades para realizar atividades do cotidiano com autonomia. Procure um terapeuta ocupacional se há dificuldades motoras, cognitivas, sensoriais ou de adaptação à rotina que afetem a qualidade de vida.",
    },
    {
      q: "Como faço para agendar uma consulta?",
      a: 'Você pode agendar de duas formas: pelo botão "Agendar Consulta" nesta página, que abrirá nosso sistema de marcação online, ou ligando para nossa clínica. A primeira sessão é sempre uma avaliação completa.',
    },
    {
      q: "Atendem crianças e idosos?",
      a: "Sim! Nossa equipe é especializada em atender todas as faixas etárias — de bebês com atrasos no desenvolvimento a idosos que buscam manutenção da independência e prevenção de quedas.",
    },
    {
      q: "Vocês oferecem atendimento online?",
      a: "Sim, oferecemos teleatendimento para casos em que a terapia à distância é viável. A primeira avaliação costuma ser presencial, mas o acompanhamento pode ser híbrido conforme o plano terapêutico.",
    },
    {
      q: "Quanto tempo dura cada sessão?",
      a: "As sessões de terapia ocupacional geralmente duram entre 45 e 60 minutos, dependendo do tipo de atendimento e das necessidades do paciente. A frequência é definida no plano terapêutico.",
    },
    {
      q: "É necessário encaminhamento médico?",
      a: "Não é obrigatório para iniciar a avaliação, mas é recomendável, especialmente se houver um diagnóstico prévio. Em casos de reembolso por plano de saúde, o encaminhamento pode ser necessário.",
    },
  ];

  return (
    <Section id="faq">
      <Header>
        <SectionLabel>Dúvidas Frequentes</SectionLabel>
        <Title>Perguntas e respostas</Title>
      </Header>
      <Wrap>
        {faqs.map((f, i) => (
          <Item key={i}>
            <Question
              open={openIdx === i}
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
            >
              {f.q}
              <ChevronDown size={22} />
            </Question>
            <Answer open={openIdx === i}>
              <AnswerText>{f.a}</AnswerText>
            </Answer>
          </Item>
        ))}
      </Wrap>
    </Section>
  );
}
