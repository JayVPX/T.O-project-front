import { Document, Page, View, Text, Image } from "@react-pdf/renderer";
import { styles } from "./styled";
import logo from "../../../../assets/images/logo1.png";
import type { AttendanceBodyProps } from "../../../../types/documents";
import type { PatientDTO } from "../../../../model/patient/patientDto";
import { useState, useEffect } from "react";
import { getImageBase64 } from "../../../../utils/getImage64";
import { formatDateToBr } from "../../../../utils/formatDateToBr";

interface Props {
  patient: PatientDTO;
  body: AttendanceBodyProps;
}

export default function AttendanceDocument({ body, patient }: Props) {
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

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          {logoBase64 && <Image src={logoBase64} style={styles.logo} />}
        </View>

        {/* Título */}
        <Text style={styles.title}>FOLHA DE REGISTRO DE ATENDIMENTO</Text>

        {/* Informações */}
        <View style={styles.information}>
          <View style={styles.informationRow}>
            <Text style={styles.informationIcon}>✚</Text>

            <Text style={styles.informationText}>
              <Text style={styles.boldText}>Prestação de serviços à: </Text>
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
              <Text style={styles.boldText}>Mês de atendimento: </Text>
              {body.month} de {year}
            </Text>
          </View>
        </View>

        {/* Tabela */}
        <View style={styles.table}>
          {/* Cabeçalho */}
          <View style={styles.tableHeader} wrap={false}>
            <View style={styles.tableCell}>
              <Text style={[styles.headerText, { color: "#ff0000" }]}>
                Data e hora da Terapia
              </Text>
            </View>

            <View style={styles.tableCell}>
              <Text style={[styles.headerText, { color: "#244dab" }]}>
                Assinatura da Terapeuta
              </Text>
            </View>

            <View style={styles.lastCell}>
              <Text style={[styles.headerText, { color: "#66a52b" }]}>
                Assinatura da(o) Responsável
              </Text>
            </View>
          </View>

          {/* Linhas dinâmicas */}
          {body.sessions.map((session, index) => (
            <View
              key={`${session.date}-${index}`}
              style={[
                styles.tableRow,
                index === body.sessions.length - 1
                  ? { borderBottomWidth: 0 }
                  : {},
              ]}
              wrap={false}
            >
              {/* Data e horário */}
              <View style={styles.tableCell}>
                <Text style={styles.dateText}>
                  {formatDateToBr(session.date)}
                </Text>

                <Text style={styles.dateText}>
                  ({session.startTime}-{session.endTime})
                </Text>
              </View>

              {/* Assinatura da terapeuta */}
              <View style={styles.tableCell} />

              {/* Assinatura do responsável */}
              <View style={styles.lastCell} />
            </View>
          ))}
        </View>

        {/* Data de emissão */}
        <Text style={styles.emission}>
          {body.city}, {day} de {months[month]} de {year}.
        </Text>

        {/* Assinatura da terapeuta */}
        <View style={styles.signature}>
          <View style={styles.signatureLine} />

          <Text style={styles.signatureName}>
            {therapistName}, Terapeuta Ocupacional
          </Text>

          <Text style={styles.signatureRegistration}>CREFITO: 19376 TO</Text>
        </View>

        {/* Rodapé */}
        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>
            Beatrizpraxedes@hotmail.com / CREFITO - 19376 TO
          </Text>
        </View>
      </Page>
    </Document>
  );
}
