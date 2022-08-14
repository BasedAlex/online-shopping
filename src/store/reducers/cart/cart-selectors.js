import { createSelector } from '@reduxjs/toolkit'

export const cartItemsSelector = state => state.cart.cartItems

export const totalPriceSelector = createSelector(cartItemsSelector, items =>
	items.reduce((acc, item) => acc + item.price * item.cartQuantity, 0)
)

const selectItemId = (state, itemId) => itemId

export const itemInCartSelector = createSelector(
	[cartItemsSelector, selectItemId],
	(items, itemId) => items.find(item => item.id === itemId)
)
