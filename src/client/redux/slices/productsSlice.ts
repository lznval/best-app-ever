import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from 'client/api';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const { data } = await api.get('/products');
    return data;
  },
);

const initialState = {
  products: {
    items: [],
    status: 'loading',
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export const productsReducer = productsSlice.reducer;
