import { PDFDownloadLink, type DocumentProps } from "@react-pdf/renderer";
import { FileDown } from "lucide-react";

import { SubmitBtn } from "./styled";
import type { ReactElement } from "react";
import { CircularProgress } from "@mui/material";
import { useTheme } from "styled-components";

interface DocumentDownloadButtonProps {
  document: ReactElement<DocumentProps>;
  fileName: string;
}

export function DocumentDownloadButton({
  document,
  fileName,
}: DocumentDownloadButtonProps) {
  const theme = useTheme();
  return (
    <PDFDownloadLink
      document={document}
      fileName={fileName}
      style={{ textDecoration: "none" }}
    >
      {({ loading, error }) => {
        const disabled = loading || !!error;

        return (
          <SubmitBtn
            loading={loading}
            aria-disabled={disabled}
            onClick={(event) => {
              if (disabled) event.preventDefault();
            }}
          >
            {loading ? (
              <>
                <CircularProgress
                  sx={{ color: theme.colors.accent }}
                  size={18}
                />
                Gerando PDF...
              </>
            ) : error ? (
              <>
                <FileDown size={18} />
                Erro ao gerar PDF
              </>
            ) : (
              <>
                <FileDown size={18} />
                Baixar PDF
              </>
            )}
          </SubmitBtn>
        );
      }}
    </PDFDownloadLink>
  );
}
