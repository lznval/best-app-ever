import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'client/api';

// Интерфейс для параметров логина
interface LoginParams {
  email: string;
  password: string;
}

// Интерфейс для ответа от API
interface UserData {
  id: string;
  email: string;
  token: string;
  // другие поля, которые возвращает API
}

export const loginUser = createAsyncThunk<UserData, LoginParams>(
  'auth/loginUser',
  async (params) => {
    const { data } = await api.post<UserData>('/auth/login', params);
    return data;
  },
);
