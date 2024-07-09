import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Trainers from "./pages/Trainers";
import BecomeMember from "./pages/BecomeMember";
import Gallery from "./pages/Gallery";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/become-member" element={<BecomeMember />} />
        <Route path="/gallery" element={<Gallery/>} /> 
      </Routes>
    </Router>
  );
}
