import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import Dog from "./Dog";

const root = createRoot(document.getElementById("root"));

const reloadPage = () => {
  window.location.reload();
};

root.render(
  <StrictMode>
    <App />
    <Dog />
    <button onClick={reloadPage}>New Dog!</button>
  </StrictMode>
);