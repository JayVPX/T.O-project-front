import type { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: "#6B9080",
    primaryDark: "#355C50",
    secondary: "#A4C3B2",
    background: "#FCFBF8",
    surface: "#FFFFFF",
    accent: "#F6F1E9",
    text: "#29332F",
    textSecondary: "#68736E",
    border: "#E5E9E6",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "40px",
    xxl: "64px",
  },
  radius: {
    sm: "8px",
    md: "12px",
    lg: "20px",
  },
  shadows: {
    card: "0 4px 20px rgba(41, 51, 47, 0.06)",
  },
};
