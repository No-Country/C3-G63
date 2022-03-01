import React from "react";
import ReactDOM from "react-dom";
import IndexRouter from "./App/Routes/Index-Router";
import { AuthProvider } from "./store/auth-context";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <IndexRouter />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
