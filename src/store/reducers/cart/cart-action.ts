import { createAction } from '@reduxjs/toolkit';
import { ItemsType } from './cart-reducer';

export const addToCartAction = createAction<ItemsType>('ADD_TO_CART');
export const removeFromCartAction = createAction<ItemsType>('REMOVE_FROM_CART');
export const decreaseCartAction = createAction<ItemsType>('DECREASE_CART');
export const clearCartAction = createAction('CLEAR_CART');
