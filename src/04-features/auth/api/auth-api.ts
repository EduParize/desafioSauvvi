import { apiClient } from "../../../06-shared/api/api-client";

export const requisitarLogin = async (credenciais: any) => {
  const response = await apiClient.post("/auth/login", credenciais);
  return response.data;
};
