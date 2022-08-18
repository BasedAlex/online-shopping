import { createAction } from '@reduxjs/toolkit'

// export const setProductsAction = createAction('SET_PRODUCTS')
// export const getProductsAction = createAction('GET_PRODUCTS')
export const addToCartAction = createAction('ADD_TO_CART')
export const removeFromCartAction = createAction('REMOVE_FROM_CART')
export const decreaseCartAction = createAction('DECREASE_CART')
export const clearCartAction = createAction('CLEAR_CART')
