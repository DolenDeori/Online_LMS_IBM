import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import SignIn from "./auth/SignIn.tsx";
import SignUp from "./auth/SignUp.tsx";
import Profile from "./auth/Profile.tsx";
import "bootstrap-icons/font/bootstrap-icons.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
