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
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route
          path="/"
          element={
            state.isAuthenticated ? (
              <Navigate to="/dashboard" />
            ) : (
              <Navigate to="/login" />
            )
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
