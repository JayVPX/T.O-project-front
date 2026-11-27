import { FileCheck2, FileText, LockKeyhole } from "lucide-react";
import { useState } from "react";

import {
  Header,
  Panel,
  Intro,
  Field,
  SelectIcon,
  FooterNote,
  Select,
  Form,
  Preview,
  PreviewRow,
  PreviewRows,
  PreviewTitle,
  DownloadButtonContainer,
  LoadingState,
} from "./styled";

import type {
  AttendanceBodyProps,
  DocumentProps,
  DocumentType,
  EvolutionBodyProps,
  SchoolVisitBodyProps,
} from "../../../types/documents";

import DocumentGenerator from "../../../components/documents/generator";
import AttendanceForm from "../../../components/documents/forms/attendance";
import EvolutionForm from "../../../components/documents/forms/evolution";
import SchoolVisitForm from "../../../components/documents/forms/schoolVisit";
import { useGetTherapistPatients } from "../../../hooks/patients/useGetTherapistPatients";
import { CircularProgress } from "@mui/material";
import { useTheme } from "styled-components";

export default function TherapistDocuments() {
  const id = "bcb8ca89-ce32-4c41-933b-179f0acb36e7";
  const therapistName = "Beatriz Praxedes";
  const theme = useTheme();
  const { data: patients, isLoading } = useGetTherapistPatients(id);

  const [documentType, setDocumentType] = useState<DocumentType>("anamnese");

  const [patientId, setPatientId] = useState("");

  // Dados preenchidos e enviados pelo formulário selecionado.
  const [documentData, setDocumentData] = useState<DocumentProps | null>(null);

  const documentNames: Record<DocumentType, string> = {
    evolucao: "Evolução Diária",
    atendimento: "Registro de Atendimento",
    visita: "Relatório de Visita Escolar",
    anamnese: "Anamnese Infantil",
  };

  const patient = patients?.find((item) => item.id === patientId);

  function handleDocumentTypeChange(value: DocumentType) {
    setDocumentType(value);

    if (value === "anamnese" && patient) {
      setDocumentData({
        documentType: "anamnese",
        patient,
        body: {},
      });

      return;
    }

    setDocumentData(null);
  }

  function handlePatientChange(value: string) {
    setPatientId(value);

    const selectedPatient = patients?.find((item) => item.id === value);

    if (documentType === "anamnese" && selectedPatient) {
      setDocumentData({
        documentType: "anamnese",
        patient: selectedPatient,
        body: {},
      });

      return;
    }

    setDocumentData(null);
  }

  // Recebe os dados já validados pelo React Hook Form.
  function handleEvolutionSubmit(data: EvolutionBodyProps) {
    if (!patient) return;

    setDocumentData({
      documentType: "evolucao",
      patient,
      body: data,
    });
  }

  function handleAttendanceSubmit(data: AttendanceBodyProps) {
    if (!patient) return;

    setDocumentData({
      documentType: "atendimento",
      patient,
      body: data,
    });
  }

  function handleSchoolVisitSubmit(data: SchoolVisitBodyProps) {
    if (!patient) return;

    setDocumentData({
      documentType: "visita",
      patient,
      body: data,
    });
  }

  // Renderiza o formulário correspondente ao documento selecionado.
  function renderDocumentForm() {
    if (!patient) return null;

    switch (documentType) {
      case "evolucao":
        return <EvolutionForm onSubmit={handleEvolutionSubmit} />;

      case "atendimento":
        return <AttendanceForm onSubmit={handleAttendanceSubmit} />;

      case "visita":
        return <SchoolVisitForm onSubmit={handleSchoolVisitSubmit} />;

      case "anamnese":
        return null;

      default:
        return null;
    }
  }

  return (
    <div>
      <Header>
        <h2>Documentos</h2>
        <p>Escolha um modelo e o paciente para preparar um novo documento.</p>
      </Header>
      {isLoading ? (
        <LoadingState>
          <CircularProgress
            size={48}
            sx={{ color: theme.colors.textSecondary }}
          />
          <p
            style={{
              color: theme.colors.textSecondary,
              textAlign: "center",
              margin: "12px 0 0",
              fontSize: "14px",
            }}
          >
            Carregando seu cronograma...
          </p>
        </LoadingState>
      ) : (
        <Panel>
          <Intro>
            <FileText size={24} />

            <div>
              <h3>Gerador de documentos</h3>
              <p>
                Selecione as informações que deverão constar no documento.
                Preencha os campos necessários para gerar o PDF.
              </p>
            </div>
          </Intro>

          {/* Seleções iniciais */}
          <Form>
            <Field>
              <span>Tipo de documento</span>

              <Select
                value={documentType}
                onChange={(event) =>
                  handleDocumentTypeChange(event.target.value as DocumentType)
                }
              >
                <option value="anamnese">Anamnese infantil</option>
                <option value="evolucao">Evolução diária</option>
                <option value="atendimento">Registro de atendimento</option>
                <option value="visita">Relatório de visita escolar</option>
              </Select>

              <SelectIcon size={17} />
            </Field>

            <Field>
              <span>Paciente</span>

              <Select
                value={patientId}
                onChange={(event) => handlePatientChange(event.target.value)}
              >
                <option value="">Selecione o paciente...</option>

                {patients?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Select>

              <SelectIcon size={17} />
            </Field>
          </Form>

          {/* Prévia das informações selecionadas */}
          {documentType && (
            <Preview>
              <PreviewTitle>
                <FileCheck2 size={18} />
                Prévia das informações selecionadas
              </PreviewTitle>

              <PreviewRows>
                <PreviewRow>
                  Documento
                  <strong>{documentNames[documentType]}</strong>
                </PreviewRow>

                <PreviewRow>
                  Paciente
                  <strong>{patient?.name || "Aguardando seleção"}</strong>
                </PreviewRow>

                <PreviewRow>
                  Terapeuta
                  <strong>{therapistName || "Dados da conta atual"}</strong>
                </PreviewRow>

                <PreviewRow>
                  Formato
                  <strong>PDF</strong>
                </PreviewRow>
              </PreviewRows>
              {documentType && patient && renderDocumentForm()}
            </Preview>
          )}

          {/* Gerador do PDF após o envio do formulário */}
          {documentData !== null && patient && (
            <DownloadButtonContainer>
              <DocumentGenerator {...documentData} />
            </DownloadButtonContainer>
          )}

          <FooterNote>
            <LockKeyhole size={15} />
            Os dados do documento ficam disponíveis apenas para o atendimento
            selecionado.
          </FooterNote>
        </Panel>
      )}
    </div>
  );
}
