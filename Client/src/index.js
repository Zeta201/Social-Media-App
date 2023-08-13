import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "@asgardeo/auth-react";
import configData from "./config.json";

const config = {
  signInRedirectURL: configData.REACT_APP_SIGN_IN_REDIRECT_URL,
  signOutRedirectURL: configData.REACT_APP_SIGN_OUT_REDIRECT_URL,
  clientID: configData.REACT_APP_CLIENT_ID,
  baseUrl: configData.REACT_APP_BASE_URL,
  scope: ["openid", "profile"],
};

console.log(config);
const el = document.getElementById("root");
const root = ReactDom.createRoot(el);
// wow
root.render(
  <AuthProvider config={config}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);
