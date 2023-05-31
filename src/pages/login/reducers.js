import { LOADING, USERNAME,PASSWORD } from "./constants";

const initialState={
    loading:false,
    username:"",
    password:"",
};

export const loginReducer=(state=initialState,actions={type:"",payload:null})=>{
    switch (actions.type) {
        case LOADING:{
            return {...state,loading:actions.payload}
        };

        case USERNAME:{
            return {...state,username:actions.payload}
        };

        case PASSWORD:{
            return{...state,password:actions.payload}
        };
        
        default:{
            return state;
        }
    }
}