import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  // Página principal
  page: {
    paddingTop: 25,
    paddingLeft: 55,
    paddingRight: 55,
    paddingBottom: 110,
    fontFamily: "Helvetica",
    fontSize: 10,
  },

  // Decoração superior
  topDecoration: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 12,
    backgroundColor: "#58ada8",
  },

  // Logo
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 20,
    height: 95,
  },

  logo: {
    width: 200,
    height: 85,
    objectFit: "contain",
  },

  // Título
  title: {
    fontFamily: "Times-Roman",
    fontSize: 19,
    color: "#e00000",
    textAlign: "center",
    marginBottom: 12,
  },

  // Informações
  information: {
    marginBottom: 35,
    paddingLeft: 12,
  },

  informationRow: {
    flexDirection: "row",
    marginBottom: 3,
    alignItems: "center",
  },

  informationIcon: {
    width: 15,
    color: "#d6a800",
    fontSize: 11,
  },

  informationText: {
    fontSize: 10,
  },

  boldText: {
    fontFamily: "Helvetica-Bold",
  },

  // Tabela
  table: {
    width: "100%",
    borderWidth: 0.6,
    borderColor: "#888888",
  },

  tableHeader: {
    flexDirection: "row",
    minHeight: 48,
    borderBottomWidth: 0.6,
    borderBottomColor: "#888888",
  },

  tableRow: {
    flexDirection: "row",
    minHeight: 42,
    borderBottomWidth: 0.5,
    borderBottomColor: "#aaaaaa",
  },

  tableCell: {
    width: "33.333%",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRightWidth: 0.5,
    borderRightColor: "#aaaaaa",
  },

  lastCell: {
    width: "33.333%",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRightWidth: 0,
  },

  headerText: {
    fontSize: 11,
    textAlign: "center",
    lineHeight: 1.5,
  },

  dateText: {
    fontSize: 9.5,
    textAlign: "center",
    lineHeight: 1.4,
  },

  // Data de emissão
  emission: {
    marginTop: 45,
    textAlign: "center",
    fontSize: 9,
  },

  // Assinatura
  signature: {
    marginTop: 65,
    alignItems: "center",
    width: "65%",
    alignSelf: "center",
  },

  signatureLine: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#222222",
    marginBottom: 5,
  },

  signatureName: {
    fontSize: 9,
    fontFamily: "Helvetica-Oblique",
    textAlign: "center",
  },

  signatureRegistration: {
    fontSize: 9,
    fontFamily: "Helvetica-Oblique",
    marginTop: 3,
  },

  // Rodapé
  footer: {
    position: "absolute",
    bottom: 0,
    left: 2,
    right: 2,
    height: 36,
    backgroundColor: "#58ada8",
    justifyContent: "center",
    alignItems: "center",
  },

  footerText: {
    color: "#ffffff",
    fontFamily: "Helvetica-Bold",
    fontSize: 11,
  },
});
