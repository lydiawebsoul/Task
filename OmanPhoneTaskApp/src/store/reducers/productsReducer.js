import {PRODUCTS} from '../actionTypes';

const initialState = {
  homeProducts: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS.GET_HOME_PRODUCTS:
      return {
        ...state,
        homeProducts: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
