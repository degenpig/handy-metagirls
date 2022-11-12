import React from "react";
import { Navigate } from "react-router-dom";

import Layout from "../layout";

const PrivateRoute = ({ component: Component, ...rest }) => {
  function hasJWT() {
    let flag = false;
    //check user has JWT token
    localStorage.getItem("token") ? (flag = true) : (flag = false);
    return flag;
  }
  if (hasJWT())
    return (
      <>
        <Layout />
        <Component />
      </>
    );
  return <Navigate to="/login" />;
};

export default PrivateRoute;
