import type { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/tanstackQueryClient";

export interface ProviderProps {
  children: ReactNode;
}

export default function Providers({ children }: ProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>;
    </QueryClientProvider>
  );
}
