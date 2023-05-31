
import { Outlet, Navigate } from "react-router-dom";

const Auth = ({}) => {
  const token = localStorage.getItem("Savetoken");

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default Auth;
