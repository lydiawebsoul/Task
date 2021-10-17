import {PRODUCTS} from '../actionTypes';

const initialState = {
  productDetails: [],
  relatedProducts: [],
};

const productDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS.GET_PRODUCT_DETAIL:
      return {
        ...state,
        productDetails: action.payload,
      };

    case PRODUCTS.GET_RELATED_PRODUCTS:
      return {
        ...state,
        relatedProducts: action.payload,
      };
    default:
      return state;
  }
};

export default productDetailReducer;
