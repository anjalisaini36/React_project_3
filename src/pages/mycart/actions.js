import { FINAL } from "./constants";

export const finalAction=(dispatch,payload)=>{
    dispatch({
        type:FINAL,
        payload,
    })
};