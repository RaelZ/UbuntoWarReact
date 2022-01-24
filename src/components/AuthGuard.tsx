import React from "react";
import type { FC, } from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";


const AuthGuard: FC = () => {
  const { autenticated } = useAuth();

  return autenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthGuard;
