import USER_ACTION_TYPES from "./user.types";
import { createAction } from "../reducer-utils";

export const setCurrentUser= (data) => {
  //localStorage.setItem("user", JSON.stringify(data.jwt));

  return createAction(USER_ACTION_TYPES.SET_USER, data);
};

export const setLogoutUser= () => {
  //localStorage.setItem("user", JSON.stringify(data.jwt));
  localStorage.clear();
  return createAction(USER_ACTION_TYPES.LOGOUT_USER);
};

