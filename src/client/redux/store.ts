import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/userSlice';
import { productReducer } from './slices/productSlice';
import { cartReducer } from './slices/cartSlice';
import { sellerReducer } from './slices/sellerSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    cart: cartReducer,
    seller: sellerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const state = (state: RootState) => state;
export default store;
