import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // El id debe coincidir con el del HTML
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
