import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import AllDoctor from "./components/AllDoctor.jsx";
import Contact from './components/Contact.jsx'
import About from "./components/About.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      

      <Route path="/all-doctors" element={<AllDoctor />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
