import { apiClient } from '../../../06-shared/api/api-client';

export const requisitarLogin = async (credenciais: any) => {
  // A feature usa a base compartilhada, nunca o Axios direto
  const response = await apiClient.post('/auth/login', credenciais);
  return response.data;
};