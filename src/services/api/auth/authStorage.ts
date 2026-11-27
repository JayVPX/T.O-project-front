const STORAGE_KEY = "@my-app:access-token";

export const authStorage = {
  getToken(): string | null {
    return sessionStorage.getItem(STORAGE_KEY);
  },

  setToken(token: string): void {
    sessionStorage.setItem(STORAGE_KEY, token);
  },

  removeToken(): void {
    sessionStorage.removeItem(STORAGE_KEY);
  },
};
