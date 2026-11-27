import type { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/tanstackQueryClient";
import { GlobalStyle } from "./styles/globalStyles";
import { AuthProvider } from "./providers/auth/authProvider";

export interface ProviderProps {
  children: ReactNode;
}

export default function Providers({ children }: ProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
