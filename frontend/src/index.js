import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { UserContextProvider } from "./Components/UserContext";

const root = createRoot(document.getElementById("root"));

root.render(
  <UserContextProvider>
    <App />
  </UserContextProvider>
);
