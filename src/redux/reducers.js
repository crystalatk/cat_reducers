import { ACTION_SET_ACTIVITY, ACTION_ADD_CAT } from "./actionTypes";

export const observer = (state, action) => {
  const { id, activity, newCat } = action.payload;
  switch (action.type) {
    case ACTION_SET_ACTIVITY:
      return {
        ...state,
        cats: {
          ...state.cats,
          [id]: {
            ...state.cats[id],
            activity,
          },
        },
      };
    case ACTION_ADD_CAT:
      return {
        ...state,
        cats: {
          ...state.cats,
          [id]: newCat,
        },
      };
    default:
      return state;
  }
};
