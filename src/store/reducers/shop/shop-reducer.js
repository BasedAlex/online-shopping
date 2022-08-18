import axios from 'axios'
import { createReducer, createAsyncThunk } from '@reduxjs/toolkit'
import { setProductsAction, getProductsAction } from './shop-action'

export const initialState = {
	products: localStorage.getItem('products')
		? JSON.parse(localStorage.getItem('products'))
		: [],
}

console.log(initialState)

export const productReducer = createReducer(initialState, builder => {
	builder.addCase(setProductsAction, (state, action) => {
		state.products = action.payload
	})
})

export const getProducts = createAsyncThunk(
	getProductsAction,
	async (_, { rejectWithValue, dispatch }) => {
		try {
			const res = await axios.get('https://fakestoreapi.com/products')
			dispatch(setProductsAction(res.data))
			console.log(res.data)
		} catch (e) {
			return rejectWithValue("Can't load the page")
		}
	}
)
