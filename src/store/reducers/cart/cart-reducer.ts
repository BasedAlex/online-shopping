import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import {
  addToCartAction,
  clearCartAction,
  decreaseCartAction,
  removeFromCartAction,
} from './cart-action';

export type InitialStateType = {
  items: Array<ItemsType>;
  cartTotalQuantity: number;
};

export type ItemsType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  cartQuantity: number;
};

export const initialState: InitialStateType = {
  items: [],
  cartTotalQuantity: 0,
};

export const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCartAction, (state, action: PayloadAction<ItemsType>) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      state.cartTotalQuantity++;
      if (itemIndex >= 0) {
        state.items[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.items.push(tempProduct);
      }
    })
    .addCase(removeFromCartAction, (state, action: PayloadAction<ItemsType>) => {
      const nextCartItems = state.items.filter((cartItem) => cartItem.id !== action.payload.id);
      state.items = nextCartItems;
    })
    .addCase(decreaseCartAction, (state, action: PayloadAction<ItemsType>) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      state.cartTotalQuantity--;
      if (state.items[itemIndex].cartQuantity > 1) {
        state.items[itemIndex].cartQuantity -= 1;
      } else {
        const nextCartItems = state.items.filter((cartItem) => cartItem.id !== action.payload.id);
        state.items = nextCartItems;
      }
    })
    .addCase(clearCartAction, (state) => {
      state.items = [];
      state.cartTotalQuantity = 0;
    });
});
