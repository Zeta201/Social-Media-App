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
          path="/"
          element={state.isAuthenticated ? <Dashboard /> : <Login />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
