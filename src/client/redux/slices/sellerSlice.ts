import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginSeller, checkLoginSeller, registerSeller } from '@redux/asyncThunks/sellerThunk';
import { IAuthState, IUserLoginData } from '@redux/types';
import { RootState } from '@redux/store';

const initialState: IAuthState = {
  data: null,
  status: 'loading',
};

const sellerSlice = createSlice({
  name: 'seller',
  initialState,
  reducers: {
    logoutSeller: (state) => {
      state.data = null;
      window.localStorage.removeItem('token_seller');
    },
  },
  extraReducers: (builder) => {
    // Login slice
    builder
      .addCase(loginSeller.pending, (state) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(loginSeller.fulfilled, (state, action: PayloadAction<IUserLoginData>) => {
        state.status = 'loaded';
        state.data = action.payload;
        window.localStorage.setItem('token_seller', state.data.token);
      })
      .addCase(loginSeller.rejected, (state) => {
        state.status = 'error';
        state.data = null;
      })
      // Check login slice
      .addCase(checkLoginSeller.pending, (state) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(checkLoginSeller.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.data = action.payload;
      })
      .addCase(checkLoginSeller.rejected, (state) => {
        state.status = 'error';
        state.data = null;
      })

      // Register slice
      .addCase(registerSeller.pending, (state) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(registerSeller.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.data = action.payload;
        window.localStorage.setItem('token_seller', state.data.token);
      })
      .addCase(registerSeller.rejected, (state) => {
        state.status = 'error';
        state.data = null;
      });
  },
});

export const isSellerAuth = (state: RootState) => Boolean(state.seller.data);
export const { logoutSeller } = sellerSlice.actions;
export const sellerReducer = sellerSlice.reducer;
