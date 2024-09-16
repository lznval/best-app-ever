import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductsData } from '@types';

interface CartState {
  items: IProductsData[];
}

const initialState: CartState = {
  items: JSON.parse(localStorage.getItem('cart') || '[]') as IProductsData[],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<IProductsData>) => {
      const item = state.items.find((i) => i._id === action.payload._id);
      if (item) {
        item.quantity = action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem('cart');
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
