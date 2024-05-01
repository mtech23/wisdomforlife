import { combineReducers } from 'redux';
import cartReducer from './cardreducer';
import productReducer from './product_reducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
});

export default rootReducer;