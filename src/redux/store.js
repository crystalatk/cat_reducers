import { createStore } from "redux";
import { observer } from "./reducers";

const defaultState = {
  cats: {
    1001: {
      name: "Midge",
      activity: "meowing",
    },
    1002: {
      name: "Marley",
      activity: "eating",
    },
  },
};

export const store = createStore(
  observer,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
