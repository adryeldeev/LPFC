import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { useAuth } from '../Context/AuthProvider';

const useApi = (): AxiosInstance => {
  const { token } = useAuth(); // Obtém o token do contexto

  const api = axios.create({
    baseURL: 'http://localhost:8080/', // Fallback para desenvolvimento
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Interceptor para adicionar o token
  api.interceptors.request.use((config: AxiosRequestConfig) => {
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return api;
};

export default useApi;