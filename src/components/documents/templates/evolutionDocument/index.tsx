import { Document, Page, View, Text, Image } from "@react-pdf/renderer";
import { styles } from "./styled";
import logo from "../../../../assets/images/logo1.png";
import type { PatientDTO } from "../../../../model/patient/patientDto";
import { useState, useEffect } from "react";
import { getImageBase64 } from "../../../../utils/getImage64";
import { formatDateToBr } from "../../../../utils/formatDateToBr";
import type { EvolutionBodyProps } from "../../../../types/documents";

interface Props {
  patient: PatientDTO;
  body: EvolutionBodyProps;
}

export default function EvolutionDocument({ body, patient }: Props) {
  const [logoBase64, setLogoBase64] = useState("");
  const therapistName = "Beatriz Praxedes";

  useEffect(() => {
    getImageBase64(logo).then(setLogoBase64);
  }, []);

  const evolutionFields = [
    {
      title: "Comportamento apresentado",
      value: body.behavior,
    },
    {
      title: "Atividades desenvolvidas",
      value: body.activities,
    },
    {
      title: "Como respondeu às atividades",
      value: body.activitiesResponse,
    },
    {
      title: "Treino de AVD",
      value: body.avdTraining,
    },
    {
      title: "Treino alimentar",
      value: body.foodTraining,
    },
    {
      title: "Devolutiva",
      value: body.feedback,
    },
  ];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          {logoBase64 && <Image src={logoBase64} style={styles.logo} />}
        </View>

        {/* Título */}
        <Text style={styles.title}>FICHA DE EVOLUÇÃO DIÁRIA</Text>

        {/* Informações do paciente */}
        <View style={styles.information}>
          <View style={styles.informationRow}>
            <Text style={styles.informationIcon}>✚</Text>

            <Text style={styles.informationText}>
              <Text style={styles.boldText}>Paciente: </Text>
              {patient.name}
            </Text>
          </View>

          <View style={styles.informationRow}>
            <Text style={styles.informationIcon}>✚</Text>

            <Text style={styles.informationText}>
              <Text style={styles.boldText}>Responsável: </Text>
              {patient.responsible.name}
            </Text>
          </View>

          <View style={styles.informationRow}>
            <Text style={styles.informationIcon}>✚</Text>

            <Text style={styles.informationText}>
              <Text style={styles.boldText}>Terapeuta: </Text>
              {therapistName}
            </Text>
          </View>
        </View>

        {/* Data e horário */}
        <View style={styles.sessionInformation}>
          <View style={styles.sessionField}>
            <Text style={styles.fieldLabel}>Dia:</Text>
            <Text style={styles.fieldValue}>{formatDateToBr(body.date)}</Text>
          </View>

          <View style={styles.sessionField}>
            <Text style={styles.fieldLabel}>Horário:</Text>
            <Text style={styles.fieldValue}>
              {body.startTime} - {body.endTime}
            </Text>
          </View>
        </View>

        {/* Campos da evolução */}
        <View style={styles.evolutionContainer}>
          {evolutionFields.map((field, index) => (
            <View
              key={field.title}
              style={[
                styles.evolutionField,
                index === evolutionFields.length - 1
                  ? styles.lastEvolutionField
                  : {},
              ]}
              wrap={false}
            >
              <Text style={styles.evolutionTitle}>{field.title}:</Text>

              <Text style={styles.evolutionText}>
                {field.value || "Não informado."}
              </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
