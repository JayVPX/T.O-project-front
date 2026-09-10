import { Calendar, Phone } from "lucide-react";
import {
  Card,
  Title,
  Desc,
  Buttons,
  BtnPrimary,
  BtnSecondary,
  Section,
} from "./styled";

export default function CTA() {
  return (
    <Section>
      <Card>
        <Title>Pronto para dar o primeiro passo?</Title>
        <Desc>
          Agende sua avaliação hoje mesmo e descubra como a Terapia Ocupacional
          pode transformar o seu dia a dia ou o de quem você ama.
        </Desc>
        <Buttons>
          <BtnPrimary>
            <Calendar size={20} />
            Agendar Consulta
          </BtnPrimary>
          <BtnSecondary>
            <Phone size={20} />
            Falar com a equipe
          </BtnSecondary>
        </Buttons>
      </Card>
    </Section>
  );
}
