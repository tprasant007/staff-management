import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Navbar from "./pages/Navbar";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Schedule from "./pages/Schedule";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/schedule/:name" element={<Schedule />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
