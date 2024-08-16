import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUserLoginData, ILoginParams } from '../types';
import api from 'client/api';

export const loginUser = createAsyncThunk<IUserLoginData, ILoginParams>(
  'auth/loginUser',
  async (params) => {
    const { data } = await api.post<IUserLoginData>('/auth/login', params);
    return data;
  },
);

export const checkLoginUser = createAsyncThunk(
  'auth/checkLoginUser',
  async () => {
    const { data } = await api.get('/auth/me');
    return data;
  },
);