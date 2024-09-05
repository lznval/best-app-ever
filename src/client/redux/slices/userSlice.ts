import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginUser, checkLoginUser, registerUser } from '@redux/asyncThunks/userThunk';
import { IAuthState, IUserLoginData } from '@redux/types';
import { RootState } from '@redux/store';

const initialState: IAuthState = {
  data: null,
  status: 'loading',
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.data = null;
      window.localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    // Login slice
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<IUserLoginData>) => {
        state.status = 'loaded';
        state.data = action.payload;
        window.localStorage.setItem('token', state.data.token);
      })
      .addCase(loginUser.rejected, (state) => {
        state.status = 'error';
        state.data = null;
      })
      // Check login slice
      .addCase(checkLoginUser.pending, (state) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(checkLoginUser.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.data = action.payload;
      })
      .addCase(checkLoginUser.rejected, (state) => {
        state.status = 'error';
        state.data = null;
      })

      // Register slice
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.data = action.payload;
        window.localStorage.setItem('token', state.data.token);
      })
      .addCase(registerUser.rejected, (state) => {
        state.status = 'error';
        state.data = null;
      });
  },
});

export const isAuth = (state: RootState) => Boolean(state.auth.data);
export const { logoutUser } = userSlice.actions;
export const authReducer = userSlice.reducer;
