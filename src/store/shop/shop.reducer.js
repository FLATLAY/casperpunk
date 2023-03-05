import SHOP_ACTION_TYPES from "./shop.types";

//import { getPrimaryColor, getSecondryColor } from "./utils";

export const SHOP_INITIAL_STATE = {
  currentShop: null,
};

const getPrimaryColor = (shopName) => {
  switch (shopName) {
    case "testcasperpunk":
      return "#161f2f";
    case "testunstoppable":
      return "#edeff1";
    default:
      return "#D8D3C5";
  }
};

const getSecondryColor = (shopName) => {
  switch (shopName) {
    case "testcasperpunk":
      return "#ffffff";
    default:
      return "#262626";
  }
};

export const shopReducer = (state = SHOP_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SHOP_ACTION_TYPES.SET_SHOP:
      const objx = {
        ...payload,
        primaryColor: getPrimaryColor(payload.name),
        secondryColor: getSecondryColor(payload.name),
      };
      return { ...state, currentShop: objx };
    default:
      return state;
  }
};
