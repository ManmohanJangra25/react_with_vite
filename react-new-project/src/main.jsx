import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import counterStore from "./store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={counterStore}>
      <App />
    </Provider>
  </StrictMode>
);
