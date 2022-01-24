import React from "react";
import type { FC, } from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";


const GuestGuard: FC = () => {
  const { autenticated } = useAuth();

  return autenticated ? <Navigate to="/home" /> : <Outlet />;
};

export default GuestGuard;
