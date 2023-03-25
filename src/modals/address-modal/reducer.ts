
import React, { useReducer } from 'react';

type State = {
    addressLine1: string;
    addressLine2: string;
    country: string;
    city: string;
    state: string;
    zip: string;
    firstName: string;
    lastName: string;
    addressType:String;
  };

  type Action =
  | { type: 'SET_ADDRESS_LINE_1'; payload: string }
  | { type: 'SET_ADDRESS_LINE_2'; payload: string }
  | { type: 'SET_COUNTRY'; payload: string }
  | { type: 'SET_CITY'; payload: string }
  | { type: 'SET_STATE'; payload: string }
  | { type: 'SET_ZIP'; payload: string }
  | { type: 'SET_FIRST_NAME'; payload: string }
  | { type: 'SET_LAST_NAME'; payload: string }
  | { type: "INITIALIZE"; payload: any };
  


export const initialState: State = {
  addressLine1: "",
  addressLine2: "",
  country: "",
  city: "",
  state: "",
  zip: "",
  firstName: "",
  lastName: "",
  addressType: "CUSTOMER",
};


export const reducer =  (state: State, action: Action): State  => {
    switch (action.type) {
      case "SET_ADDRESS_LINE_1":
        return {
          ...state,
          addressLine1: action.payload,
        };
      case "SET_ADDRESS_LINE_2":
        return {
          ...state,
          addressLine2: action.payload,
        };
      case "SET_COUNTRY":
        return {
          ...state,
          country: action.payload,
        };
      case "SET_CITY":
        return {
          ...state,
          city: action.payload,
        };
      case "SET_STATE":
        return {
          ...state,
          state: action.payload,
        };
      case "SET_ZIP":
        return {
          ...state,
          zip: action.payload,
        };
      case "SET_FIRST_NAME":
        return {
          ...state,
          firstName: action.payload,
        };
      case "SET_LAST_NAME":
        return {
          ...state,
          lastName: action.payload,
        };
        case "INITIALIZE":
            return {
              ...state,
              addressLine1: action.payload.addressLine1,
              addressLine2: action.payload.addressLine2,
              country: action.payload.country,
              city: action.payload.city,
              state: action.payload.state,
              zip: action.payload.zip,
              firstName: action.payload.firstName,
              lastName: action.payload.lastName,
              addressType: "CUSTOMER",
            };
      default:
        return state;
    }
  };