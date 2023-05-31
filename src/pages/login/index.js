import React, { useEffect, useReducer, useState } from "react";
import Login from "../../component/Login";
import { loginUser } from "../../helper";
import { useNavigate } from "react-router-dom";
import { loginReducer } from "./reducers";
import { loadingAction, passwordAction, usernameAction } from "./actions";

const Loginpage = () => {
    const navigate = useNavigate();
    const[state,dispatch]=useReducer(loginReducer,loginReducer());
  // const [password, setPassword] = useState(null);

  const handleLoginUser = async () => {
    loadingAction(dispatch,true);
    const payload = {
      username: state.username,
      password: state.password,
    };
    console.log("payload:",payload);
    if (state.username !== null && state.username !== "" && state.password!==null && state.password !=="") {
      try {
        const result = await loginUser(payload);
        console.log("result:", result);
        if(result.token){
            // setLoading(false);
            loadingAction(dispatch,false);
            localStorage.setItem('Savetoken', result.token);
            navigate("/")
        }
      } catch (error) {
        console.log("handleLoginUser error:", error);
        loadingAction(dispatch,false);
      }
    }else{
        alert("Username and password must be filled!")
    }
  };

  const handleUsername=(val)=>{
    usernameAction(dispatch,val);
  }

  const handlePassword=(val)=>{
    passwordAction(dispatch,val)
  }
  return (
    <Login
      userName={state.username}
      password={state.password}
      loading={state.loading}
      handlePassword={handlePassword}
      handleUsername={handleUsername}
      handleLoginUser={handleLoginUser}
    />
  );
};

export default Loginpage;
