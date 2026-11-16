import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  // Página principal
  page: {
    paddingTop: 34,
    paddingLeft: 38,
    paddingRight: 38,
    paddingBottom: 35,

    fontFamily: "Helvetica",
    fontSize: 9.5,
    color: "#222222",
  },

  // Cabeçalho
  header: {
    alignItems: "center",
    marginBottom: 23,
  },

  mainTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 11,
    textAlign: "center",
    marginBottom: 4,
  },

  // Títulos das seções
  sectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
    marginTop: 15,
    marginBottom: 6,
  },

  // Identificação
  identification: {
    width: "100%",
  },

  // Linhas horizontais
  row: {
    flexDirection: "row",
    alignItems: "flex-end",
    width: "100%",
  },

  field: {
    flexDirection: "row",
    alignItems: "flex-end",
    flexGrow: 1,
    minHeight: 18,
    marginBottom: 1,
  },

  fieldLabel: {
    fontSize: 9.5,
  },

  fieldValue: {
    fontSize: 9.5,
    flexGrow: 1,
  },

  fieldLine: {
    flexGrow: 1,
    height: 13,
    borderBottomWidth: 0.45,
    borderBottomColor: "#777777",
  },

  indentedField: {
    paddingLeft: 35,
  },

  // Campos com linhas para escrita
  longField: {
    width: "100%",
    marginTop: 2,
  },

  writingLine: {
    width: "100%",
    height: 18,
    borderBottomWidth: 0.45,
    borderBottomColor: "#777777",
  },

  continuationLines: {
    marginTop: 0,
    marginBottom: 4,
  },

  // Assinatura
  signature: {
    width: "48%",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 55,
  },

  signatureLine: {
    width: "100%",
    borderBottomWidth: 0.6,
    borderBottomColor: "#333333",
    marginBottom: 6,
  },

  signatureText: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9.5,
    textAlign: "center",
  },
});
