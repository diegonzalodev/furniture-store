import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeFireStore } from "./firebase/config";
import "./index.css";

initializeFireStore();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
