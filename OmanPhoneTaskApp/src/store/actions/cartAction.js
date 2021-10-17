import {CART} from '../actionTypes';

const addtoCart = item => {
  return {
    type: CART.ADD_TO_CART,
    payload: item,
  };
};

const updateCart = item => {
  return {
    type: CART.UPDATE_CART_QUANTITY,
    payload: item,
  };
};

const deleteCart = item => {
  return {
    type: CART.REMOVE_FROM_CART,
    payload: item,
  };
};

const isCartItem = item => {
  return {
    type: CART.IS_CARTITEM,
    payload: item,
  };
};

export {addtoCart, updateCart, deleteCart, isCartItem};
