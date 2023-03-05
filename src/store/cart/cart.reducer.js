import { IMS_TYPES } from "../../constant/ims-types";

import CART_ACTION_TYPES from "./cart.types";

export const CART_INITIAL_STATE = {
  currentCart: JSON.parse(localStorage.getItem("cart")) || {
    items: [],
    type: IMS_TYPES.DROPLINKED,
  },
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART:
      return { ...state, currentCart: payload };
    case CART_ACTION_TYPES.CLEAR_CART:
      return {
        ...state,
        currentCart: { items: [], type: IMS_TYPES.DROPLINKED },
      };
    default:
      return state;
  }
};
