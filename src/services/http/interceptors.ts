import { authStorage } from "../api/auth/authStorage";
import { privateApi } from "./httpClient";

privateApi.interceptors.request.use((config) => {
  const token = authStorage.getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
