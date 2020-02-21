// import { ADD_LINK, SIGN_IN, SIGN_OUT, DELETE_LINK } from "./actionTypes";
import { ADD_LINK, DELETE_LINK } from "./actionTypes";

export const addLink = inputLink => {
  return {
    type: ADD_LINK,
    payload: inputLink
  };
};

export const deleteLink = index => {
  return {
    type: DELETE_LINK,
    payload: index
  };
};
