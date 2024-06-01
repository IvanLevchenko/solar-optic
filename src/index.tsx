import React from "react";
import ReactDOM from "react-dom/client";
import LanguageProvider from "./components/language-provider/language-provider";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <LanguageProvider />
  </React.StrictMode>
);
