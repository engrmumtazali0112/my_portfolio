// src/Routes/Education.js
import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Heroimg2 from '../Components/Heroimg2';
import Education from '../Components/Education';

const EducationPage = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 
        heading="EDUCATION" 
        text="Academic Background & Professional Certifications"
      />
      <Education />
      <Footer />
    </div>
  );
};

export default EducationPage;