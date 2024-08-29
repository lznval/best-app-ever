import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProductsData } from '../types';
import api from 'client/api';

export const getAllProduct = createAsyncThunk<IProductsData[]>(
  'products/getAllProduct',
  async () => {
    const { data } = await api.get('/products');
    return data;
  },
);

export const getOneProduct = createAsyncThunk<IProductsData>(
  'products/getOneProduct',
  async (id) => {
    const { data } = await api.get(`/products/${id}`);
    return data;
  },
)