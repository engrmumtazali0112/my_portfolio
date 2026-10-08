// src/Routes/Home.js
import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Bio from "../Components/Bio";
import Work from "../Components/Work";
import ServicesSection from "../Components/ServicesSection";
import ReviewsSection from "../Components/ReviewsSection";
import Footer from "../Components/Footer";
import "./HomeStyles.css";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <Bio />
      <Work />
      <ServicesSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default Home;