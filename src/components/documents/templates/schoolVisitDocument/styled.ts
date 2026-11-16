import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  // Página
  page: {
    paddingTop: 115,
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 55,

    fontFamily: "Helvetica",
    fontSize: 10,
    color: "#000000",
  },

  // Logo fixa
  header: {
    position: "absolute",
    top: 15,
    left: 0,
    right: 0,

    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 140,
    height: 75,
    objectFit: "contain",
  },

  // Título principal
  mainTitle: {
    fontSize: 13,
    fontFamily: "Helvetica",
    color: "#24549a",
    textAlign: "center",
    marginBottom: 32,
  },

  // Títulos das seções
  sectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
    marginTop: 22,
    marginBottom: 13,
    lineHeight: 1.3,
  },

  // Informações gerais
  informationContainer: {
    width: "100%",
  },

  informationItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 3,
  },

  bullet: {
    width: 12,
    fontSize: 10,
  },

  informationText: {
    flex: 1,
    fontSize: 10,
    lineHeight: 1.3,
  },

  bold: {
    fontFamily: "Helvetica-Bold",
  },

  // Campos com texto corrido
  paragraphField: {
    marginBottom: 13,
    width: "100%",
  },

  fieldLabel: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
    marginBottom: 5,
    lineHeight: 1.3,
  },

  paragraph: {
    fontSize: 10,
    lineHeight: 1.4,
    textAlign: "justify",
  },

  // Data do relatório
  reportDate: {
    marginTop: 25,
    marginBottom: 15,
    alignItems: "flex-end",
    fontSize: 10,
  },

  // Data de emissão
  emission: {
    marginTop: 45,
    textAlign: "center",
    fontSize: 9,
  },

  // Assinatura
  signatureContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: 65,
    gap: 25,
  },

  signature: {
    width: 210,
    alignItems: "center",
  },

  signatureLine: {
    width: "100%",
    borderBottomWidth: 0.7,
    borderBottomColor: "#000000",
    marginBottom: 6,
  },

  signatureLabel: {
    fontSize: 9,
    textAlign: "center",
    fontFamily: "Helvetica-Bold",
  },

  // Espaço para carimbo
  stamp: {
    width: 85,
    height: 65,
    borderWidth: 0.6,
    borderColor: "#999999",
    justifyContent: "center",
    alignItems: "center",
  },

  stampText: {
    fontSize: 8,
    color: "#999999",
  },
});
