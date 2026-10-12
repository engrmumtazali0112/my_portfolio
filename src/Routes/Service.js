// src/Routes/Services.js
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ServicesOffer from "../Components/ServicesOffer";
import ServicesSection from "../Components/ServicesSection";
import ServicesMission from "../Components/ServicesMission";

const Services = () => {
  return (
    <div>
      <Navbar />
      <ServicesOffer />
      <ServicesSection />
      <ServicesMission />
      <Footer />
    </div>
  );
};

export default Services;