import React from "react";
import type { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthGuard from "./components/AuthGuard";
import GuestGuard from "./components/GuestGuard";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Dashboard from "./components/dashboard/Dashboard";

const PathRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GuestGuard />}>
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route element={<AuthGuard />}>
          <Route element={<Dashboard />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PathRoutes;
