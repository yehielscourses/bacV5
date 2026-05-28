import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { StudyTrackProvider } from "./context/StudyTrackContext";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <StudyTrackProvider>
        <App />
      </StudyTrackProvider>
    </HashRouter>
  </React.StrictMode>,
);
