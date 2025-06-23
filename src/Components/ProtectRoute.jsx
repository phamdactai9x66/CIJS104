import React from "react";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({ userLogin = true, children }) => {
  if (!userLogin) {
    return <Navigate to={"/"} />;
  }

  return children;
};

export default ProtectRoute;
