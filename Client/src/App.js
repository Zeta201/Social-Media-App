import React from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import { useAuthContext } from "@asgardeo/auth-react";

function App() {
  const { state } = useAuthContext();
  return (
    <div>
      <Routes>
        <Route
          path="/login"
          element={
            state?.isAuthenticated ? <Navigate to="/dashboard" /> : <Login />
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            state?.isAuthenticated ? <Dashboard /> : <Navigate to="/login" />
          }
        ></Route>
        <Route path="/" element={<Navigate to="/login" />}></Route>
      </Routes>
    </div>
  );
}

export default App;
