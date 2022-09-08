import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/store';
import { ItemsType } from './cart-reducer';

export const cartItemsSelector = (state: RootState) => state.cart.items;

export const totalPriceSelector = createSelector(cartItemsSelector, (items) =>
  items.reduce((acc: number, item: ItemsType) => acc + item.price * item.cartQuantity, 0)
);
