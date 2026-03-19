import { httpClient } from '@/06-shared/lib/http';

export const loginRequest = async (email: string) => {
  // O httpClient já sabe a URL base e já tem o Axios blindado por baixo dos panos!
  const response = await httpClient.post('/login', { email });
  return response.data;
};
