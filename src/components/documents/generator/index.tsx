import EvolutionDocument from "../templates/evolutionDocument/index";
import AnamnesisDocument from "../templates/anamnesisDocument";
import AttendanceDocument from "../templates/attendanceDocument";
import SchoolVisitDocument from "../templates/schoolVisitDocument";

import type { DocumentProps } from "../../../types/documents";
import { DocumentDownloadButton } from "../../documentDownloadButton";

export default function DocumentGenerator({
  body,
  documentType,
  patient,
}: DocumentProps) {
  switch (documentType) {
    case "anamnese":
      return (
        <DocumentDownloadButton
          document={<AnamnesisDocument body={body} patient={patient} />}
          fileName={"anamnese_infantil.pdf"}
        />
      );

    case "atendimento":
      return (
        <DocumentDownloadButton
          document={<AttendanceDocument body={body} patient={patient} />}
          fileName={`folha_registro_${patient.name}.pdf`}
        />
      );
    case "evolucao":
      return (
        <DocumentDownloadButton
          document={<EvolutionDocument body={body} patient={patient} />}
          fileName={`evolucao_diaria_${patient.name}.pdf`}
        />
      );
    case "visita":
      return (
        <DocumentDownloadButton
          document={<SchoolVisitDocument body={body} patient={patient} />}
          fileName={`relatorio_escolar_${patient.name}.pdf`}
        />
      );
    default:
      return null;
  }
}
