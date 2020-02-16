// import { ADD_LINK, SIGN_IN, SIGN_OUT, DELETE_LINK } from "./actionTypes";
import { ADD_LINK } from "./actionTypes";

export const addLink = inputLink => {
  console.log(inputLink);
  return {
    type: ADD_LINK,
    payload: inputLink
  };
};
