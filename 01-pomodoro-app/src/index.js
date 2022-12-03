import React from "react";
import ReactDOM from "react-dom/client";
import PomodoroTimer from "./components/PomodoroTimer";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PomodoroTimer />
  </React.StrictMode>
);
