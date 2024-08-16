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
  return config;
})

export default api;
