import { LOADING, PRODUCT, PRODUCTS } from "./constants";

export const loadingAction = (dispatch, payload) => {
  dispatch({
    type: LOADING,
    payload,
  });
};

export const productAction = (dispatch, payload) => {
  dispatch({
    type: PRODUCT,
    payload,
  });
};

export const productsAction = (dispatch, payload) => {
  dispatch({
    type: PRODUCTS,
    payload,
  });
};
