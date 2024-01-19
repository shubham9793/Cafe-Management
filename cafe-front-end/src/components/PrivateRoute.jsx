import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../Auth/index";

const PrivateRoute = ({ path, element }) => {
  return isLoggedIn() ? <Outlet /> : <Navigate to={"/Login"} />;
};

export default PrivateRoute;
