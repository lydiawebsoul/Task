import {combineReducers} from 'redux';
// Imports: Reducers
import appSettingReducer from './appSettingReducer';
import cartReducer from './cartReducer';
import productDetailReducer from './productDetailReducer';
import productReducer from './productsReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  appSetting: appSettingReducer,
  cart: cartReducer,
  products: productReducer,
  productDetail: productDetailReducer,
});

export default rootReducer;
