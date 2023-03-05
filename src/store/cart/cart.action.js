import CART_ACTION_TYPES from "./cart.types";
import { createAction } from "../reducer-utils";

export const setCurrentCart = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));

  return createAction(CART_ACTION_TYPES.SET_CART, data);
};


export const clearCurrentCart = () => {
  localStorage.removeItem('cart');
  return createAction(CART_ACTION_TYPES.CLEAR_CART);
};
