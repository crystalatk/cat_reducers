import { ACTION_EAT, ACTION_NAP, ACTION_PLAY } from "./actionTypes";

export const observer = (state, action) => {
  switch (action.type) {
    case ACTION_EAT:
      return {
        activity: ACTION_EAT,
      };
    case ACTION_NAP:
      return {
        activity: ACTION_NAP,
      };
    case ACTION_PLAY:
      return {
        activity: ACTION_PLAY,
      };
    default:
      return state;
  }
};
