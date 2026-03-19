import axios from 'axios';

/**
 * HTTP Client Adapter
 * * We encapsulate Axios here so the rest of the application
 * doesn't depend directly on it. If we decide to swap Axios
 * for Fetch API in the future, we only change this file!
 */
export const httpClient = axios.create({
  // In a real app, this would come from an environment variable (e.g., process.env.EXPO_PUBLIC_API_URL)
  baseURL: 'https://api.sauvvitech.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor for requests (e.g., automatically injecting the Auth Token)
httpClient.interceptors.request.use(
  (config) => {
    // const token = getAuthToken();
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Interceptor for responses (e.g., treating 401 Unauthorized globally)
httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Force user logout
    }
    return Promise.reject(error);
  },
);
