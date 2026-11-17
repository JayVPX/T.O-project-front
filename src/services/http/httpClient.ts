import axios from "axios";

export const publicApi = axios.create({
  baseURL: import.meta.env.API_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 15000,
});

export const privateApi = axios.create({
  baseURL: import.meta.env.API_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 15000,
});
