import SHOP_ACTION_TYPES from "./shop.types";
import { createAction } from "../reducer-utils";

export const setCurrentShop = (data) =>
  createAction(SHOP_ACTION_TYPES.SET_SHOP, data);
