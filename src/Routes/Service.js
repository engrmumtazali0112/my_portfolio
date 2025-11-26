// ============================================
// FILE 1: src/Routes/Services.js
// ============================================
import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Heroimg2 from '../Components/Heroimg2';
import ServicesSection from '../Components/ServicesSection';
import ReviewsSection from '../Components/ReviewsSection';

const Services = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="SERVICES" text="Professional Development Solutions" />
      <ServicesSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default Services;