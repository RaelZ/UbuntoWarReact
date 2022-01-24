import React from "react";
import type { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthGuard from "./components/AuthGuard";
import GuestGuard from "./components/GuestGuard";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

const PathRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GuestGuard />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
        </Route>
        <Route element={<AuthGuard />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PathRoutes;
