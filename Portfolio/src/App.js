import React, {useState} from "react";

import './index.css';
import './Components/Navbar'
import Home from "./Routes/Home.js"
import About from "./Routes/About.js"
import Project from "./Routes/Project.js"
import Contact from "./Routes/Contact.js"
import Gallery from "./Routes/Gallery.js"
import DownloadCv from "./Routes/DownloadCv.js"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Home" element={<Home />}/>
        <Route path="/Project" element={<Project />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Gallery" element={<Gallery />}/>
        <Route path="/DownloadCv" element={<DownloadCv />}/>
      </Routes>
    </>
  );
}

export default App;