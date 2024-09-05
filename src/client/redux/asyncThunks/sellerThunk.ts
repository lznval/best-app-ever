import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUserLoginData, ILoginParams, IRegisterParams } from '../types';
import api from 'client/api';

export const loginSeller = createAsyncThunk<IUserLoginData, ILoginParams>(
  'seller/loginSeller',
  async (params) => {
    const { data } = await api.post<IUserLoginData>('/seller/login', params);
    return data;
  },
);

export const checkLoginSeller = createAsyncThunk('seller/checkLoginSeller', async () => {
  const { data } = await api.get('/seller/me');
  return data;
});

export const registerSeller = createAsyncThunk<IUserLoginData, IRegisterParams>(
  'seller/registerSeller',
  async (params) => {
    const { data } = await api.post<IUserLoginData>('/seller/register', params);
    return data;
  },
);
