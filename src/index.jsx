import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.css";

const root = document.getElementById("root");
const rootElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootInstance = ReactDOM.createRoot(root);
rootInstance.render(rootElement);
