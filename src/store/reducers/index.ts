import { combineReducers } from 'redux';
import { cartReducer } from './cart/cart-reducer';
import userReducer from './auth/userSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

export default rootReducer;
