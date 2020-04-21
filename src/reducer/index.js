import { CURRENCY_CHANGED } from "../actions";

const initialState = {
  value: "inr",
};

export const currency = (state, action) => {
  if (state === undefined) {
    return initialState;
  }
  switch (action.type) {
    case CURRENCY_CHANGED:
      return {
        ...state,
        value: action.currency,
      };
    default:
      return state;
  }
};
