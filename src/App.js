// src/App.js
import React from "react";
import './index.css';
import Home from "./Routes/Home";
import About from "./Routes/About";
import Project from "./Routes/Project";
import Contact from "./Routes/Contact";
import Certificate from "./Routes/Certificate";
import Services from "./Routes/Service";
import Review from "./Routes/Review";
import EducationPage from "./Routes/Education"; 
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/services" element={<Services />} />
        <Route path="/review" element={<Review />} />
        <Route path="/education" element={<EducationPage />} />
      </Routes>
    </>
  );
}

export default App;