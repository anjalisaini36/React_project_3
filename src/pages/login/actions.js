import { LOADING, USERNAME, PASSWORD } from "./constants";

export const loadingAction = (dispatch, payload) => {
  dispatch({
    type: LOADING,
    payload,
  });
};

export const usernameAction = (dispatch, payload) => {
    dispatch({
      type: USERNAME,
      payload,
    });
  };

export const passwordAction = (dispatch,payload)=>{
    dispatch(
        {
            type: PASSWORD,
            payload,
        }
    );
};
