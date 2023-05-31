import { LOADING, PRODUCT, PRODUCTS } from "./constants";

const initialState = {
  loading: false,
  product: [],
  products: [],
};

export const shopReducer = (
  state = initialState,
  action = { type: "", payload: null }
) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.payload };

    case PRODUCT:
      return { ...state, product: action.payload };

    case PRODUCTS:
      return { ...state, products: action.payload };

    default:
      return state;
  }
};
