import React, {useState} from "react";

import './index.css';
import './Portfolio/src/Components/Navbar.js'
import Home from "./Portfolio/src/Routes/Home.js"
import About from "./Portfolio/src/Routes/About.js"
import Project from "./Portfolio/src/Routes/Project.js"
import Contact from "./Portfolio/src/Routes/Contact.js"
import Gallery from "./Portfolio/src/Routes/Gallery.js"
import DownloadCv from "./Portfolio/src/Routes/DownloadCv.js"
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