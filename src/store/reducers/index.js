import { combineReducers } from 'redux'
import { cartReducer } from './cart/cart-reducer'
import { productReducer } from './shop/shop-reducer'

const rootReducer = combineReducers({
	cart: cartReducer,
	products: productReducer,
})

export default rootReducer
