import USER_ACTION_TYPES from "./user.types";

export const USER_INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

export const userReducer = (state = USER_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_USER:
      return { ...state, currentUser: payload };
      case USER_ACTION_TYPES.LOGOUT_USER:
      return { ...state, currentUser: null };
    default:
      return state;
  }
};
