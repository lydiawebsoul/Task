import {CART} from '../actionTypes';

const initialState = {
  cart: [],
  cartQty: 0,
  totalPrice: 0,
  isCartItem: false,
};

const cartReducer = (state = initialState, action) => {
  let cart = state.cart;
  let cartQty = state.cartQty;
  let totalPrice = state.totalPrice;

  switch (action.type) {
    case CART.ADD_TO_CART:
      return {
        ...state,
        cart: [...cart, {...action.payload}],
        cartQty: cartQty + 1,
        totalPrice:
          totalPrice + (action.payload.special_price || action.payload.price),
      };

    case CART.IS_CARTITEM:
      let checkCartItem = cart.find(item => item.id === action.payload);
      let isCartItem = checkCartItem ? true : false;
      return {
        ...state,
        isCartItem: isCartItem,
      };

    case CART.UPDATE_CART_QUANTITY:
      let itemIndex = cart.findIndex(item => item.id === action.payload.id);
      let prevPrice = cart[itemIndex].sellingPriceTotal;
      const newCart = [...cart];
      newCart[itemIndex].quantity = action.payload.quantity;
      newCart[itemIndex].sellingPriceTotal = action.payload.sellingPriceTotal;
      return {
        ...state,
        cart: newCart,
        totalPrice: totalPrice - +prevPrice + +action.payload.sellingPriceTotal,
      };

    case CART.REMOVE_FROM_CART:
      let deletedCart = cart.filter(item => item.id !== action.payload.id);
      let deletedItem = cart.find(item => item.id === action.payload.id);
      return {
        ...state,
        cart: deletedCart,
        cartQty: cartQty - 1,
        totalPrice: totalPrice - +deletedItem.sellingPriceTotal,
      };

    default:
      return state;
  }
};

export default cartReducer;
