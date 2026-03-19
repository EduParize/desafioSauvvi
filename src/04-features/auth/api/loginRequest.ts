import { httpClient } from '@/06-shared/lib/http';

export const loginRequest = async (email: string) => {
  // httpClient already knows the base URL and already has Axios shielded under the hood!
  const response = await httpClient.post('/login', { email });
  return response.data;
};