import axios, { AxiosInstance } from 'axios';

const baseURL = 'http://localhost:3005';

const api: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token');
  config.headers.Authorization = window.localStorage.getItem('token_seller');
  return config;
});

export default api;
