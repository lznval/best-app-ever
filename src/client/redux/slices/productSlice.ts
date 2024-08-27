import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProductState, IProductsData } from '@redux/types';
import { getAllProduct } from '@redux/asyncThunks/productThunk';

const initialState: IProductState = {
  data: [],
  status: 'loading',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Product getAll
      .addCase(getAllProduct.pending, (state) => {
        state.status = 'loading';
        state.data = [];
      })
      .addCase(
        getAllProduct.fulfilled,
        (state, action: PayloadAction<IProductsData[]>) => {
          state.status = 'loaded';
          state.data = action.payload;
        },
      )
      .addCase(getAllProduct.rejected, (state) => {
        state.status = 'error';
        state.data = [];
      })
  },
});

export const productReducer = productSlice.reducer;
