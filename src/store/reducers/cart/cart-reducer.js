import { createReducer } from '@reduxjs/toolkit'
import {
	addToCartAction,
	clearCartAction,
	decreaseCartAction,
	removeFromCartAction,
	setProductsAction,
} from './cart-action-creators'

export const initialState = {
	cartItems: localStorage.getItem('cartItems')
		? JSON.parse(localStorage.getItem('cartItems'))
		: [],
	cartTotalQuantity: 0,
	cartTotalAmount: 0,
}

export const cartReducer = createReducer(initialState, builder => {
	builder
		.addCase(setProductsAction, (state, action) => {
			state.products = action.payload
		})
		.addCase(addToCartAction, (state, action) => {
			const itemIndex = state.cartItems.findIndex(
				item => item.id === action.payload.id
			)
			state.cartTotalQuantity++
			if (itemIndex >= 0) {
				state.cartItems[itemIndex].cartQuantity += 1
			} else {
				const tempProduct = { ...action.payload, cartQuantity: 1 }
				state.cartItems.push(tempProduct)
			}
			localStorage.setItem('cartItems', JSON.stringify([...state.cartItems]))
		})
		.addCase(removeFromCartAction, (state, action) => {
			const nextCartItems = state.cartItems.filter(
				cartItem => cartItem.id !== action.payload.id
			)
			state.cartItems = nextCartItems
			localStorage.setItem('cartItems', JSON.stringify([...nextCartItems]))
		})
		.addCase(decreaseCartAction, (state, action) => {
			const itemIndex = state.cartItems.findIndex(
				item => item.id === action.payload.id
			)
			state.cartTotalQuantity--
			if (state.cartItems[itemIndex].cartQuantity > 1) {
				state.cartItems[itemIndex].cartQuantity -= 1
				localStorage.setItem('cartItems', JSON.stringify([...state.cartItems]))
			} else {
				const nextCartItems = state.cartItems.filter(
					cartItem => cartItem.id !== action.payload.id
				)
				state.cartItems = nextCartItems
				localStorage.setItem('cartItems', JSON.stringify(nextCartItems))
			}
		})
		.addCase(clearCartAction, state => {
			state.cartItems = []
			state.cartTotalQuantity = 0
			localStorage.removeItem('cartItems')
		})
})
