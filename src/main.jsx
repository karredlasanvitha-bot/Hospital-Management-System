import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { HospitalProvider } from "./context/HospitalContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HospitalProvider>
        <App />
      </HospitalProvider>
    </AuthProvider>
  </React.StrictMode>
);
