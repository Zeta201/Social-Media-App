import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "@asgardeo/auth-react";

const config = {
  signInRedirectURL: process.env.REACT_APP_SIGN_IN_REDIRECT_URL,
  signOutRedirectURL: process.env.REACT_APP_SIGN_OUT_REDIRECT_URL,
  clientID: process.env.REACT_APP_CLIENT_ID,
  baseUrl: process.env.REACT_APP_BASE_URL,
  scope: ["openid", "profile"],
};
const el = document.getElementById("root");
const root = ReactDom.createRoot(el);
console.log(config);
root.render(
  <AuthProvider config={config}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);
