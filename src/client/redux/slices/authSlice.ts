import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginUser } from '@redux/asyncThunks/authThunk';
interface UserData {
  id: string;
  email: string;
  token: string;
  // другие поля, которые возвращает API
}
// Интерфейсы для состояния и данных пользователя
interface AuthState {
  data: UserData | null;
  status: 'loading' | 'loaded' | 'error';
}

const initialState: AuthState = {
  data: null,
  status: 'loading',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Дополнительные действия, если нужно (например, logout)
    logout: (state) => {
      state.data = null;
      state.status = 'error';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<UserData>) => {
          state.status = 'loaded';
          state.data = action.payload;
        },
      )
      .addCase(loginUser.rejected, (state) => {
        state.status = 'error';
        state.data = null;
      });
  },
});

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
