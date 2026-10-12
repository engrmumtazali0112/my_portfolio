// src/Routes/Home.js
import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Bio from "../Components/Bio";
import ServicesOffer from "../Components/ServicesOffer";
import ServicesSection from "../Components/ServicesSection";
import ServicesMission from "../Components/ServicesMission";
import Work from "../Components/Work";
import ReviewsSection from "../Components/ReviewsSection";
import Footer from "../Components/Footer";
import "./HomeStyles.css";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <Bio />
      <ServicesOffer />
      <ServicesSection showAllLink />
      <ServicesMission />
      <Work />
      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default Home;