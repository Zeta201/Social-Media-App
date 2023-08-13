import React from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import { useAuthContext } from "@asgardeo/auth-react";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/" element={<Navigate to="/login" />}></Route>
      </Routes>
    </div>
  );
}

export default App;
