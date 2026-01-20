import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../AuthContainer/AuthContext";

const PrivetRoute = ({ children }) => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to={"/auth/login"}></Navigate>;
};

export default PrivetRoute;
