import React from "react";
import './index.css';
import Home from "./Routes/Home";
import About from "./Routes/About";
import Project from "./Routes/Project";
import Contact from "./Routes/Contact";
import Gallery from "./Routes/Gallery";
import Certificate from "./Routes/Certificate";
import DownloadCv from "./Routes/DownloadCv";
import Service from "./Routes/Service";
import Review from "./Routes/Review";
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
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/downloadcv" element={<DownloadCv />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/service" element={<Service />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </>
  );
}

export default App;