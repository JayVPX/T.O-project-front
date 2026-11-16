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
    marginBottom: 20,
  },

  // Informações do paciente
  information: {
    marginBottom: 20,
    paddingLeft: 12,
  },

  informationRow: {
    flexDirection: "row",
    marginBottom: 4,
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

  // Data e horário
  sessionInformation: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 0.6,
    borderColor: "#888888",
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#f7f7f7",
  },

  sessionField: {
    flexDirection: "row",
    alignItems: "center",
    width: "48%",
  },

  fieldLabel: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
    marginRight: 5,
  },

  fieldValue: {
    fontSize: 10,
  },

  // Campos da evolução
  evolutionContainer: {
    width: "100%",
    borderWidth: 0.6,
    borderColor: "#888888",
  },

  evolutionField: {
    padding: 9,
    borderBottomWidth: 0.5,
    borderBottomColor: "#aaaaaa",
  },

  lastEvolutionField: {
    borderBottomWidth: 0,
  },

  evolutionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
    color: "#244dab",
    marginBottom: 5,
  },

  evolutionText: {
    fontSize: 9.5,
    lineHeight: 1.5,
    textAlign: "justify",
  },

  // Data de emissão
  emission: {
    marginTop: 30,
    textAlign: "center",
    fontSize: 9,
  },

  // Assinatura
  signature: {
    marginTop: 45,
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
