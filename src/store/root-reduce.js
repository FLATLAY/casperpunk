import { combineReducers } from "redux";

import { cartReducer } from "./cart/cart.reducer";
import { userReducer } from "./user/user.reducer";
import { shopReducer } from "./shop/shop.reducer";

export const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  shop:shopReducer
});
