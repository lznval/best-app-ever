import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUserLoginData, IRegisterParams, IProductsData } from '../types';
import api from 'client/api';


export const getAllProduct = createAsyncThunk<IProductsData>(
  'product/getAllProduct',
  async () => {
    const { data } = await api.get('/products');
    return data;
  },
);

// export const checkLoginUser = createAsyncThunk(
//   'auth/checkLoginUser',
//   async () => {
//     const { data } = await api.get('/auth/me');
//     return data;
//   },
// );

// export const registerUser = createAsyncThunk<IUserLoginData, IRegisterParams>(
//   'auth/registerUser',
//   async (params) => {
//     const { data } = await api.post<IUserLoginData>('/auth/register', params);
//     return data;
//   },
// );
