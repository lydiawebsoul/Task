import {PRODUCTS} from '../actionTypes';

const getHomeProducts = payload => {
  return {
    type: PRODUCTS.GET_HOME_PRODUCTS,
    payload: payload,
  };
};

const getProductDetail = payload => {
  return {
    type: PRODUCTS.GET_PRODUCT_DETAIL,
    payload: payload,
  };
};

const getRelatedProducts = payload => {
  return {
    type: PRODUCTS.GET_RELATED_PRODUCTS,
    payload: payload,
  };
};

export {getHomeProducts, getProductDetail, getRelatedProducts};
