import { useCallback, useState, type ReactNode } from "react";
import { authStorage } from "../../services/api/auth/authStorage";
import type { UserModelDto } from "../../model/user/userDto";
import type { LoginResponseDTO } from "../../model/auth/authDto";
import { AuthContext } from "./authContext";

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserModelDto | null>(null);

  const [accessToken, setAccessToken] = useState<string | null>(() =>
    authStorage.getToken(),
  );

  const signIn = useCallback((data: LoginResponseDTO) => {
    authStorage.setToken(data.accessToken);

    setAccessToken(data.accessToken);
    setUser(data.user);
  }, []);

  const signOut = useCallback(() => {
    authStorage.removeToken();

    setAccessToken(null);
    setUser(null);
  }, []);

  const isAuthenticated = Boolean(accessToken && user);

  return (
    <AuthContext.Provider
      value={{
        user,
        accessToken,
        isAuthenticated,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
