import { FINAL } from "./constants";

const initialState = {
  final: [],
};

export const mycartReducer = (
  state = initialState,
  action = { type: "", payload: null }
) => {
  switch (action.type) {
    case FINAL:
      return { ...state, final: action.payload };

    default:
      return state;
  }
};
