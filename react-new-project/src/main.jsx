import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./store";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

console.log(store);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
