import { ADD_LINK, DELETE_LINK } from "../actions/actionTypes";

const addLinkReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_LINK:
      return [...state, action.payload];
    case DELETE_LINK:
      const newState = state.filter(val => val !== state[action.payload]);
      return newState;
    default:
      return state;
  }
};

export default addLinkReducer;
