import { combineReducers } from "redux";
import addLinkReducer from "./addLinkReducers";

const rootReducer = combineReducers({ linkList: addLinkReducer });

export default rootReducer;
