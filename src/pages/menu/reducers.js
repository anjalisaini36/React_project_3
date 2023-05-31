import { LOADING,PRODUCT } from "./constants";

const initialState={
    loading:false,
    product:[],
}

export const menuReducer=(state=initialState, actions={type:"",payload:null})=>{
    switch (actions.type) {
        case LOADING:
            return{...state,loading:actions.payload}

        case PRODUCT:
            return{...state,product:actions.payload}
    
        default:
            return state;
    }
}