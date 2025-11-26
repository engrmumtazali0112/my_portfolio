import React from 'react';
import Navbar from '../Components/Navbar';
import Heroimg from '../Components/Heroimg';

import Work from '../Components/Work';
import ServicesSection from '../Components/ServicesSection';
import ReviewsSection from '../Components/ReviewsSection';
import Footer from '../Components/Footer';
import AboutContent from '../Components/AboutContent';
import PricingCards from '../Components/PricingCards';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Heroimg />
      <Work />
      <ServicesSection />
      <PricingCards />
      <ReviewsSection />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default Home;