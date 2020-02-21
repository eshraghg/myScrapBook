import ReactDOM from "react-dom";
import React from "react";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./components/reducers";
import { loadState, saveState } from "./components/localStorage";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

const store = createStore(rootReducer, loadState());
store.subscribe(() => {
  saveState({
    linkList: store.getState().linkList
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
