import { LOADING,PRODUCT } from "./constants";

export const loadingAction=(dispatch,payload)=>{
    dispatch({
        type : LOADING,
        payload,
    });

};

export const productAction=(dispatch,payload)=>{
    dispatch({
        type : PRODUCT,
        payload,
    });
};