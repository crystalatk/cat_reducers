import { ACTION_SET_ACTIVITY, ACTION_SET_NAME } from "./actionTypes";

export const observer = (state, action) => {
  switch (action.type) {
    case ACTION_SET_ACTIVITY:
      return {
        ...state,
        activity: action.payload.activity,
      };
    case ACTION_SET_NAME:
      return {
        ...state,
        name: action.payload.name,
      };
    default:
      return state;
  }
};
