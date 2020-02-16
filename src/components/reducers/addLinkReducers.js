import { ADD_LINK } from "../actions/actionTypes";

const addLinkReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_LINK:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default addLinkReducer;
