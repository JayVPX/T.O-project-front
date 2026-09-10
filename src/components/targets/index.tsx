import { Accessibility, Baby, User, Users } from "lucide-react";
import {
  Header,
  SectionLabel,
  Title,
  Desc,
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardDesc,
  Section,
  Grid,
} from "./styled";

export default function TargetAudience() {
  const publicos = [
    {
      icon: Baby,
      title: "Crianças",
      desc: "Atrasos no desenvolvimento, TDAH, autismo, dificuldades motoras e sensoriais.",
      img: "https://images.pexels.com/photos/7025513/pexels-photo-7025513.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
    },
    {
      icon: User,
      title: "Adultos",
      desc: "Saúde mental, reabilitação pós-cirúrgica, ergonomia e rotina ocupacional.",
      img: "https://images.pexels.com/photos/4506166/pexels-photo-4506166.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
    },
    {
      icon: Accessibility,
      title: "Idosos",
      desc: "Manutenção da autonomia, prevenção de quedas e adaptações para o dia a dia.",
      img: "https://images.pexels.com/photos/8172607/pexels-photo-8172607.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
    },
    {
      icon: Users,
      title: "Famílias",
      desc: "Orientação e suporte para familiares participarem do processo terapêutico.",
      img: "https://images.pexels.com/photos/4566528/pexels-photo-4566528.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
    },
  ];
  return (
    <Section id="publicos">
      <Header>
        <SectionLabel>Para Quem</SectionLabel>
        <Title>Atendemos todas as fases da vida</Title>
        <Desc>
          Cada etapa da vida traz desafios únicos. Nossa equipe está preparada
          para acolher e tratar pacientes de todas as idades.
        </Desc>
      </Header>
      <Grid>
        {publicos.map((p) => {
          const Icon = p.icon;
          return (
            <Card key={p.title}>
              <CardImage img={p.img} />
              <CardBody>
                <Icon size={26} />
                <CardTitle>{p.title}</CardTitle>
                <CardDesc>{p.desc}</CardDesc>
              </CardBody>
            </Card>
          );
        })}
      </Grid>
    </Section>
  );
}
