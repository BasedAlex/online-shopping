import { createReducer } from '@reduxjs/toolkit'
import {
	addToCartAction,
	clearCartAction,
	decreaseCartAction,
	removeFromCartAction,
} from './cart-action'

export const initialState = {
	items: localStorage.getItem('items')
		? JSON.parse(localStorage.getItem('items'))
		: [],
	cartTotalQuantity: 0,
}

export const cartReducer = createReducer(initialState, builder => {
	builder

		.addCase(addToCartAction, (state, action) => {
			const itemIndex = state.items.findIndex(
				item => item.id === action.payload.id
			)
			state.cartTotalQuantity++
			if (itemIndex >= 0) {
				state.items[itemIndex].cartQuantity += 1
			} else {
				const tempProduct = { ...action.payload, cartQuantity: 1 }
				state.items.push(tempProduct)
			}
			localStorage.setItem('items', JSON.stringify([...state.items]))
		})
		.addCase(removeFromCartAction, (state, action) => {
			const nextCartItems = state.items.filter(
				cartItem => cartItem.id !== action.payload.id
			)
			state.items = nextCartItems
			localStorage.setItem('items', JSON.stringify([...nextCartItems]))
		})
		.addCase(decreaseCartAction, (state, action) => {
			const itemIndex = state.items.findIndex(
				item => item.id === action.payload.id
			)
			state.cartTotalQuantity--
			if (state.items[itemIndex].cartQuantity > 1) {
				state.items[itemIndex].cartQuantity -= 1
				localStorage.setItem('items', JSON.stringify([...state.items]))
			} else {
				const nextCartItems = state.items.filter(
					cartItem => cartItem.id !== action.payload.id
				)
				state.items = nextCartItems
				localStorage.setItem('items', JSON.stringify(nextCartItems))
			}
		})
		.addCase(clearCartAction, state => {
			state.items = []
			state.cartTotalQuantity = 0
			localStorage.removeItem('items')
		})
})
