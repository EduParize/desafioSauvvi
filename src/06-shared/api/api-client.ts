import axios from 'axios';

// Essa é a instância única do Axios. O app todo usa isso.
export const apiClient = axios.create({
  baseURL: 'https://api.sauvvitech.com.br',
  timeout: 10000,
});

// Exemplo para a apresentação: Interceptor para Token
apiClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer TOKEN_FALSO`;
  return config;
});