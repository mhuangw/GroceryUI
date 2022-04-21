import React from "react";
import { Route, Outlet } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  console.log("this", isAuthenticated);

  return isAuthenticated ? <Outlet /> : alert("forbidden");
}

export default ProtectedRoute;
