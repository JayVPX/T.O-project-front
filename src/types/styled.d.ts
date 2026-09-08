import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryDark: string;
      secondary: string;
      background: string;
      surface: string;
      accent: string;
      text: string;
      textSecondary: string;
      border: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    radius: {
      sm: string;
      md: string;
      lg: string;
    };
    shadows: {
      card: string;
    };
  }
}
