import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginUser, checkLoginUser } from '@redux/asyncThunks/authThunk';
import { IAuthState, IUserLoginData } from '@redux/types';

const initialState: IAuthState = {
  data: null,
  status: 'loading',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.data = null;
      window.localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        loginUser.pending, (state) => {
          state.status = 'loading';
          state.data = null;
        }
      )
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<IUserLoginData>) => {
          state.status = 'loaded';
          state.data = action.payload;
          window.localStorage.setItem('token', state.data.token);
        },
      )
      .addCase(loginUser.rejected, (state) => {
        state.status = 'error';
        state.data = null;
      })

      .addCase(
        checkLoginUser.pending, (state) => {
          state.status = 'loading';
          state.data = null;
        }
      )
      .addCase(
        checkLoginUser.fulfilled,
        (state, action) => {
          state.status = 'loaded';
          state.data = action.payload;
        },
      )
      .addCase(checkLoginUser.rejected, (state) => {
        state.status = 'error';
        state.data = null;
      });
  },
});

export const selectLogin = (state: any) => Boolean(state.auth.data)
export const stateSelect = (state:any) => state;
export const { logoutUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
