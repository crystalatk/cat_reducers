import { createStore } from "redux";
import { observer } from "./reducers";
import { ACTION_NAP } from "./actionTypes";

const defaultState = {
  activity: ACTION_NAP,
};

export const store = createStore(
  observer,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
