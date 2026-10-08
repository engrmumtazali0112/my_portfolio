// src/App.js
import React from "react";
import "./index.css";
import "./theme.css";
import "./DarkModeFixes.css";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Project from "./Routes/Project";
import Contact from "./Routes/Contact";
import Services from "./Routes/Service";
import Review from "./Routes/Review";
import EducationPage from "./Routes/Education";
import CaseStudy from "./Components/CaseStudy/CaseStudyHero";   // ✅ FIXED PATH
import ScrollToTop from "./Components/ScrollToTop";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/review" element={<Review />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
      </Routes>
    </>
  );
}

export default App;