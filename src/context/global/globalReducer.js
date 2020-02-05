import { OPEN_CONTACT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case OPEN_CONTACT:
      return {
        ...state,
        open: action.payload
      };
    default:
      return state;
  }
};
