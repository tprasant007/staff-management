import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import EmployeeContextProvider from "./contexts/EmployeeContext.jsx";
import ScheduleContextProvider from "./contexts/ScheduleContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScheduleContextProvider>
      <EmployeeContextProvider>
        <App />
      </EmployeeContextProvider>
    </ScheduleContextProvider>
  </StrictMode>
);
