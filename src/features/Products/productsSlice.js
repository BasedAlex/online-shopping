import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
	cartItems: localStorage.getItem('cartItems')
		? JSON.parse(localStorage.getItem('cartItems'))
		: [],
	cartTotalQuantity: 0,
	cartTotalAmount: 0,
}

export const getProducts = createAsyncThunk(
	'products/getProducts',
	async (_, { rejectWithValue, dispatch }) => {
		const res = await axios.get(
			'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list',
			{
				headers: {
					'X-RapidAPI-Key':
						'517c65ce36msh7ca8687d9a72ef7p163f38jsn028e1ad2364b',
					'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com',
				},
			}
		)
		dispatch(setProducts(res.data))
		console.log(rejectWithValue.value)
	}
)

export const productsSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setProducts: (state, action) => {
			state.products = action.payload
		},
		extraReducers: {
			[getProducts.fulfilled]: () => console.log('fulfilled'),
			[getProducts.pending]: () => console.log('pending'),
			[getProducts.rejected]: () => console.log('rejected'),
		},
		addToCart: (state, action) => {
			const itemIndex = state.cartItems.findIndex(
				item => item[1] === action.payload[1]
			)
			state.cartTotalQuantity++
			if (itemIndex >= 0) {
				state.cartItems[itemIndex].cartQuantity += 1
			} else {
				const tempProduct = { ...action.payload, cartQuantity: 1 }
				state.cartItems.push(tempProduct)
			}
			localStorage.setItem('cartItems', JSON.stringify([[...state.cartItems]]))
		},
		removeFromCart: (state, action) => {
			const nextCartItems = state.cartItems.filter(
				cartItem => cartItem[1] !== action.payload[1]
			)
			state.cartItems = nextCartItems
			localStorage.setItem('cartItems', JSON.stringify([[...state.cartItems]]))
		},
		decreaseCart: (state, action) => {
			const itemIndex = state.cartItems.findIndex(
				item => item[1] === action.payload[1]
			)
			if (state.cartItems[itemIndex].cartQuantity > 1) {
				state.cartItems[itemIndex].cartQuantity -= 1
			}
			localStorage.setItem('cartItems', JSON.stringify([[...state.cartItems]]))
		},
		clearCart: state => {
			state.cartItems = []
			localStorage.setItem('cartItems', JSON.stringify([[...state.cartItems]]))
		},
		getTotals(state) {
			let { total, quantity } = state.cartItems.reduce(
				(cartTotal, cartItem) => {
					let { 3: price, cartQuantity } = cartItem
					const itemTotal = price * cartQuantity
					cartTotal.total += itemTotal
					cartTotal.quantity += cartQuantity
					return cartTotal
				},
				{
					total: 0,
					quantity: 0,
				}
			)

			state.cartTotalQuantity = quantity
			state.cartTotalAmount = total
		},
	},
})

export const {
	setProducts,
	addToCart,
	removeFromCart,
	decreaseCart,
	clearCart,
	getTotals,
} = productsSlice.actions
export default productsSlice.reducer
