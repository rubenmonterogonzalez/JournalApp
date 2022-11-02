import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LoginScreen from "../components/auth/LoginScreen";
import RegisterScreen from "../components/auth/RegisterScreen";

const AuthRouter = () => {
  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <Routes>
          <Route path="login" element={<LoginScreen />} />
          <Route path="register" element={<RegisterScreen />} />
          <Route path="/*" element={<Navigate replace to="/login" />} />
        </Routes>
      </div>
    </div>
  );
};

export default AuthRouter;
