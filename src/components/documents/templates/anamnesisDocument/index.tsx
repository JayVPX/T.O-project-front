import { Document, Page, View, Text } from "@react-pdf/renderer";

import { styles } from "./styled";
import type { AnamnesisBodyProps } from "../../../../types/documents";
import type { PatientDTO } from "../../../../model/patient/patientDto";

export interface Props {
  body: AnamnesisBodyProps;
  patient: PatientDTO;
}

// Campo com espaço para preenchimento
function Field({ label, value }: { label: string; value?: string }) {
  return (
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>{label}: </Text>
      {value ? (
        <Text style={styles.fieldValue}>{value}</Text>
      ) : (
        <View style={styles.fieldLine} />
      )}
    </View>
  );
}

// Campo com linhas adicionais
function LongField({
  label,
  value,
  lines = 2,
}: {
  label: string;
  value?: string;
  lines?: number;
}) {
  return (
    <View style={styles.longField}>
      <View style={styles.field}>
        <Text style={styles.fieldLabel}>{label}: </Text>
        {value ? (
          <Text style={styles.fieldValue}>{value}</Text>
        ) : (
          <View style={styles.fieldLine} />
        )}
      </View>

      {Array.from({ length: lines }).map((_, index) => (
        <View key={index} style={styles.writingLine} />
      ))}
    </View>
  );
}

// Subtítulo das seções
function SectionTitle({ children }: { children: string }) {
  return <Text style={styles.sectionTitle}>{children}</Text>;
}

export default function AnamnesisDocument({ body }: Props) {
  const identification = body.identification || {};
  const history = body.history || {};
  const development = body.development || {};
  const routine = body.routine || {};
  const school = body.school || {};
  const dailyActivities = body.dailyActivities || {};

  return (
    <Document>
      {/* ================================================= */}
      {/* PÁGINA 1 - IDENTIFICAÇÃO E HISTÓRIA PREGRESSA */}
      {/* ================================================= */}

      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.mainTitle}>Terapia Ocupacional</Text>

          <Text style={styles.mainTitle}>Anamnese Infantil</Text>
        </View>

        <SectionTitle>Identificação</SectionTitle>

        <View style={styles.identification}>
          <View style={styles.row}>
            <Field label="Nome" value={""} />

            <Field
              label="Data da Avaliação"
              value={identification.evaluationDate}
            />
          </View>

          <View style={styles.row}>
            <Field label="Data Nasc" value={identification.birthDate} />

            <Field label="Idade" value={identification.age} />

            <Field label="Sexo" value={identification.sex} />

            <Field label="Naturalidade" value={identification.birthplace} />
          </View>

          <Field label="Escolaridade" value={identification.education} />

          <View style={styles.indentedField}>
            <Field label="Filiação: Pai" value={identification.father} />

            <View style={styles.row}>
              <Field
                label="Profissão"
                value={identification.fatherProfession}
              />

              <Field
                label="Escolaridade"
                value={identification.fatherEducation}
              />

              <Field label="Idade" value={identification.fatherAge} />
            </View>

            <Field label="Mãe" value={identification.mother} />

            <View style={styles.row}>
              <Field
                label="Profissão"
                value={identification.motherProfession}
              />

              <Field
                label="Escolaridade"
                value={identification.motherEducation}
              />

              <Field label="Idade" value={identification.motherAge} />
            </View>
          </View>

          <Field label="Responsável" value={identification.responsible} />

          <Field label="Endereço" value={identification.address} />

          <View style={styles.row}>
            <Field label="Telefone" value={identification.phone} />

            <Field label="Cidade" value={identification.city} />

            <Field label="Estado" value={identification.state} />
          </View>

          <Field
            label="Diagnóstico / Sequela"
            value={identification.diagnosis}
          />

          <Field label="Medicação atual" value={identification.medication} />

          <Field label="Médico responsável" value={identification.doctor} />

          <Field label="Encaminhamento" value={identification.referral} />
        </View>

        <LongField
          label="Composição familiar"
          value={body.familyComposition}
          lines={3}
        />

        <LongField
          label="Queixa principal"
          value={body.mainComplaint}
          lines={2}
        />

        <SectionTitle>História Pregressa</SectionTitle>

        <LongField
          label="Gravidez (idade, planejada, pré-natal, uso de drogas, medicamentos, ameaça de aborto, dieta, intercorrências)"
          value={history.pregnancy}
          lines={5}
        />

        <Field
          label="Parto (tipo, idade gestacional, peso, cor, choro, intercorrências)"
          value={history.delivery}
        />
      </Page>

      {/* ================================================= */}
      {/* PÁGINA 2 - HISTÓRIA PREGRESSA E DESENVOLVIMENTO */}
      {/* ================================================= */}

      <Page size="A4" style={styles.page}>
        <View style={styles.continuationLines}>
          <View style={styles.writingLine} />
          <View style={styles.writingLine} />
          <View style={styles.writingLine} />
        </View>

        <LongField
          label="Período Neonatal (choro, icterícia, convulsões, sucção, movimentação)"
          value={history.neonatal}
          lines={3}
        />

        <LongField
          label="Tratamentos anteriores (médicos, reabilitação, exames)"
          value={history.previousTreatments}
          lines={3}
        />

        <LongField
          label="Internações (infecção, cirurgias)"
          value={history.hospitalizations}
          lines={3}
        />

        <Field label="Vacinas" value={history.vaccines} />

        <Field label="Antecedentes alérgicos" value={history.allergies} />

        <SectionTitle>História Desenvolvimento</SectionTitle>

        <Field label="Controlou cabeça" value={development.headControl} />

        <Field label="Rolou" value={development.rolled} />

        <Field label="Arrastou" value={development.dragged} />

        <Field label="Sentou" value={development.sat} />

        <Field label="Engatinhou" value={development.crawled} />

        <Field label="Andou" value={development.walked} />

        <Field label="Falou" value={development.spoke} />

        <Field label="Esfíncteres" value={development.sphincters} />

        <SectionTitle>Rotina da Criança</SectionTitle>

        <LongField
          label="Com que / onde fica a criança"
          value={routine.caregiver}
          lines={3}
        />

        <LongField
          label="Relacionamento familiar"
          value={routine.familyRelationship}
          lines={3}
        />
      </Page>

      {/* ================================================= */}
      {/* PÁGINA 3 - ROTINA E ESCOLA */}
      {/* ================================================= */}

      <Page size="A4" style={styles.page}>
        <LongField
          label="Assiste TV (posição, tempo, programa)"
          value={routine.tv}
          lines={1}
        />

        <LongField
          label="Gosta de música (preferência, como reage)"
          value={routine.music}
          lines={1}
        />

        <LongField
          label="Passeios, locais que frequência"
          value={routine.outings}
          lines={1}
        />

        <LongField
          label="Brincar (como, posição, tempo, nível de atenção, brinquedos preferidos)"
          value={routine.playing}
          lines={7}
        />

        <SectionTitle>Escola</SectionTitle>

        <Field label="Nome, horário, série" value={school.name} />

        <Field
          label="Relacionamento c/ profª"
          value={school.teacherRelationship}
        />

        <Field
          label="Relacionamento c/ colegas"
          value={school.peerRelationship}
        />

        <Field label="Mobiliário" value={school.furniture} />

        <LongField label="Dificuldades" value={school.difficulties} lines={3} />

        <LongField
          label="Comportamento (humor, birras, medos)"
          value={school.behavior}
          lines={3}
        />

        <SectionTitle>
          Atividades de Vida Diária (posição, local, dificuldades, nível de
          dependência)
        </SectionTitle>

        <LongField
          label="Alimentação"
          value={dailyActivities.feeding}
          lines={4}
        />
      </Page>

      {/* ================================================= */}
      {/* PÁGINA 4 - ATIVIDADES DE VIDA DIÁRIA E ASSINATURA */}
      {/* ================================================= */}

      <Page size="A4" style={styles.page}>
        <LongField label="Higiene" value={dailyActivities.hygiene} lines={4} />

        <LongField label="Banho" value={dailyActivities.bath} lines={4} />

        <LongField label="Vestir" value={dailyActivities.dressing} lines={4} />

        <LongField
          label="Despir"
          value={dailyActivities.undressing}
          lines={4}
        />

        <LongField label="Observações" value={body.observations} lines={10} />

        <View style={styles.signature}>
          <View style={styles.signatureLine} />

          <Text style={styles.signatureText}>Terapeuta Ocupacional</Text>
        </View>
      </Page>
    </Document>
  );
}
