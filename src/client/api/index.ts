import axios, { AxiosInstance } from 'axios';

const baseURL = 'http://localhost:3005'; // Укажите ваш базовый URL

const api: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
