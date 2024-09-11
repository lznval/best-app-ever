import axios, { AxiosInstance } from 'axios';

const baseURL = 'http://localhost:3005';

const api: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('token');
  const tokenSeller = window.localStorage.getItem('token_seller');

  if (tokenSeller) {
    config.headers.Authorization = `Bearer ${tokenSeller}`;
  } else if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
