import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://api.sauvvitech.com.br",
  timeout: 10000,
});

apiClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer TOKEN_FALSO`;
  return config;
});
