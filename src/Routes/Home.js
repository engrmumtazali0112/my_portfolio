// src/Routes/Home.js
import React from 'react';
import Navbar from '../Components/Navbar';
import Heroimg from '../Components/Heroimg';
import Work from '../Components/Work';
import ServicesSection from '../Components/ServicesSection';
import ReviewsSection from '../Components/ReviewsSection';
import Footer from '../Components/Footer';
import PricingCards from '../Components/PricingCards';
// Remove this line if Stats.js doesn't exist:
// import Stats from '../Components/Status';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Heroimg />
      {/* Remove this if Stats doesn't exist: <Stats /> */}
      <Work />
      <ServicesSection />
      <PricingCards />
      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default Home;