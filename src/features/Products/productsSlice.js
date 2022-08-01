import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

//https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list
//https://jsonplaceholder.typicode.com/posts

const initialState = {
	products: [],
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
	}
)

export const productsSlice = createSlice({
	name: 'productName',
	initialState,
	reducers: {
		setProducts: (state, action) => {
			state.products = action.payload
		},
	},
	extraReducers: {
		[getProducts.fulfilled]: () => console.log('fulfilled'),
		[getProducts.pending]: () => console.log('pending'),
		[getProducts.rejected]: () => console.log('rejected'),
	},
})

export const { setProducts } = productsSlice.actions
export default productsSlice.reducer
