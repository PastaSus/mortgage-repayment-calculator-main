import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MortgageProvider } from "./context/MortgageProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MortgageProvider>
      <App />
    </MortgageProvider>
  </StrictMode>,
);
