import React from "react";
import { Outlet } from "react-router-dom";
import ForbiddenPage from "./ForbiddenPage";

function AdminRoute({ component: Component, ...restOfProps }) {
  const isAdmin = localStorage.getItem("privilege") === "Admin";

  return isAdmin ? <Outlet /> : <ForbiddenPage />;
}

export default AdminRoute;
