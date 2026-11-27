import { createContext } from "react";
import type { AuthContextData } from "../../model/auth/authDto";

export const AuthContext = createContext<AuthContextData | null>(null);
