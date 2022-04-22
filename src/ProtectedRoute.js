import React from "react";
import { Outlet } from "react-router-dom";
import ForbiddenPage from "./ForbiddenPage";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return isAuthenticated ? <Outlet /> : <ForbiddenPage />;
}

export default ProtectedRoute;
