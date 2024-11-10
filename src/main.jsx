import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GalaxyHolding } from "./GalaxyHoldingApp.jsx";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GalaxyHolding />
    </BrowserRouter>
  </StrictMode>
);
