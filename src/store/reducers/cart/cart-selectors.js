import { createSelector } from '@reduxjs/toolkit'

export const cartItemsSelector = state => state.cart.items

export const totalPriceSelector = createSelector(cartItemsSelector, items =>
	items.reduce((acc, item) => acc + item.price * item.cartQuantity, 0)
)
