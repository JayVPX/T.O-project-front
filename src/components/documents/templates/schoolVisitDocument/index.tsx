import { useEffect, useState } from "react";

import { Document, Page, View, Text, Image } from "@react-pdf/renderer";

import logo from "../../../../assets/images/logo1.png";
import { styles } from "./styled";
import { getImageBase64 } from "../../../../utils/getImage64";
import type { PatientDTO } from "../../../../model/patient/patientDto";
import type { SchoolVisitBodyProps } from "../../../../types/documents";
import { formatDateToBr } from "../../../../utils/formatDateToBr";

interface Props {
  body: SchoolVisitBodyProps;
  patient: PatientDTO;
}

// Título das seções
function SectionTitle({ children }: { children: string }) {
  return (
    <Text style={styles.sectionTitle} wrap={false}>
      {children}
    </Text>
  );
}

// Informações gerais com marcadores
function InformationItem({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.informationItem}>
      <Text style={styles.bullet}>•</Text>

      <Text style={styles.informationText}>
        <Text style={styles.bold}>{label}: </Text>
        {value}
      </Text>
    </View>
  );
}

// Campos com texto corrido
function ParagraphField({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.paragraphField}>
      <Text style={styles.fieldLabel}>{label}:</Text>

      <Text style={styles.paragraph}>{value}</Text>
    </View>
  );
}

export default function SchoolVisitDocument({ body, patient }: Props) {
  const [logoBase64, setLogoBase64] = useState("");
  const emissionDate = new Date();
  const therapistName = "Beatriz Praxedes";
  const day = emissionDate.getDate();
  const month = emissionDate.getMonth();
  const year = emissionDate.getFullYear();

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  useEffect(() => {
    getImageBase64(logo).then(setLogoBase64);
  }, []);

  const general = body.generalInformation;
  const therapeutic = body.therapeuticObservation;
  const school = body.schoolContext;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Logo fixa em todas as páginas */}
        <View style={styles.header} fixed>
          {logoBase64 && <Image src={logoBase64} style={styles.logo} />}
        </View>

        {/* Título principal */}
        <Text style={styles.mainTitle}>RELATÓRIO DE VISITA ESCOLAR</Text>

        {/* Informações gerais */}
        <SectionTitle>INFORMAÇÕES GERAIS</SectionTitle>

        <View style={styles.informationContainer}>
          <InformationItem label="Nome da criança" value={patient.name} />

          <InformationItem label="Instituição" value={general.institution} />

          <InformationItem label="Data" value={formatDateToBr(general.date)} />

          <InformationItem
            label="Hora"
            value={`${general.startTime} às ${general.endTime}`}
          />

          <InformationItem label="Terapeuta relatora" value={therapistName} />
        </View>

        {/* Observação terapêutica */}
        <SectionTitle>
          OBSERVAÇÃO TERAPÊUTICA SEM PERCEPÇÃO DA CRIANÇA
        </SectionTitle>

        <ParagraphField
          label="Interação com a professora"
          value={therapeutic.teacherInteraction}
        />

        <ParagraphField
          label="Interação com os colegas"
          value={therapeutic.peerInteraction}
        />

        <ParagraphField
          label="Como a criança estava e reagiu ao notar a presença"
          value={therapeutic.reactionToPresence}
        />

        {/* Aspectos observados no contexto escolar */}
        <SectionTitle>ASPECTOS OBSERVADOS NO CONTEXTO ESCOLAR</SectionTitle>

        <ParagraphField
          label="Comunicação e interação com a professora e/ou auxiliar de sala"
          value={school.teacherCommunication}
        />

        <ParagraphField
          label="Comunicação e interação com os pares"
          value={school.peerCommunication}
        />

        <ParagraphField label="Brincar com os pares" value={school.peerPlay} />

        <ParagraphField
          label="Seguimento de regras e rotinas da escola"
          value={school.rulesAndRoutines}
        />

        <ParagraphField label="Momento do parque" value={school.playground} />

        <ParagraphField label="Momento do lanche" value={school.snackTime} />

        <ParagraphField
          label="Atividade em sala de aula"
          value={school.classroomActivity}
        />

        <ParagraphField
          label="Atividade externa"
          value={school.externalActivity}
        />

        <ParagraphField
          label="Adaptações necessárias"
          value={school.necessaryAdaptations}
        />

        {/* Pontuações da professora */}
        <SectionTitle>PONTUAÇÕES DA PROFESSORA</SectionTitle>

        <Text style={styles.paragraph}>{body.teacherNotes}</Text>

        {/* Pontuações da psicóloga */}
        <SectionTitle>PONTUAÇÕES DA PSICÓLOGA ESCOLAR</SectionTitle>

        <Text style={styles.paragraph}>{body.psychologistNotes}</Text>

        {/* Conclusão */}
        <SectionTitle>CONCLUSÃO</SectionTitle>

        <Text style={styles.paragraph}>{body.conclusion}</Text>

        {/* Data do relatório */}
        <Text style={styles.emission}>
          {general.city}, {day} de {months[month]} de {year}.
        </Text>

        {/* Assinatura */}
        <View style={styles.signatureContainer} wrap={false}>
          <View style={styles.signature}>
            <View style={styles.signatureLine} />

            <Text style={styles.signatureLabel}>Terapeuta Ocupacional</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
