import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { setProductsAction } from '../store/reducers/cart/cart-action-creators'

export const getProducts = createAsyncThunk(
	'products/getProducts',
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
