import { createStore } from "redux";
import { observer } from "./reducers";

const defaultState = {
  activity: "Meowing",
  name: "Fluffy",
};

export const store = createStore(
  observer,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
