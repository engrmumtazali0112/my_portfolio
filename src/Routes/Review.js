


// ============================================
// FILE 2: src/Routes/Reviews.js
// ============================================
import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Heroimg2 from '../Components/Heroimg2';
import ReviewsSection from '../Components/ReviewsSection';

const Reviews = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="CLIENT REVIEWS" text="What Our Satisfied Clients Say About Us" />
      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default Reviews;