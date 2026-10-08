// src/Components/ReviewsSection.js
import React, { useState } from 'react';
import './ReviewsSectionStyles.css';

// Import client images
import janeSmith from '../assets/Jane Smith.jpeg';
import michaelJohnson from '../assets/Michael Johnson.jpeg';
import emilyBrown from '../assets/Emily Brown.jpeg';
import davidWilson from '../assets/David Wilson.jpeg';

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "Jane Smith",
      role: "CEO & Founder",
      rating: 4.9,
      comment: "Working with this team has been transformative for our business. They delivered beyond expectations with exceptional attention to detail.",
      company: "TechVision Solutions",
      image: janeSmith
    },
    {
      name: "Michael Johnson",
      role: "CTO",
      rating: 4.8,
      comment: "Impressive technical skills combined with great communication. The project was completed on time and exceeded our quality standards.",
      company: "Digital Dynamics Corp",
      image: michaelJohnson
    },
    {
      name: "Emily Brown",
      role: "Product Manager",
      rating: 4.9,
      comment: "Outstanding professionalism and expertise. They understood our vision perfectly and brought it to life with remarkable precision.",
      company: "Innovation Hub Inc",
      image: emilyBrown
    },
    {
      name: "David Wilson",
      role: "Engineering Director",
      rating: 4.7,
      comment: "Exceptional development quality and collaborative approach. Their commitment to excellence made this project a complete success.",
      company: "NextGen Technologies",
      image: davidWilson
    }
  ];

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return visible;
  };

  return (
    <div className="reviews-section">
      <div className="reviews-container">
        <div className="reviews-header">
          <div className="reviews-title-box">
            <h2>CLIENT REVIEWS</h2>
          </div>
          <p className="reviews-subtitle">What our clients say about our work</p>
        </div>

        <div className="reviews-carousel">
          <button onClick={prevReview} className="carousel-btn prev-btn" aria-label="Previous review">
            ‹
          </button>

          <div className="reviews-grid">
            {getVisibleReviews().map((review, index) => (
              <div 
                key={index} 
                className={`review-card ${index === 1 ? 'center-card' : ''}`}
              >
                <div className="quote-icon top">"</div>
                <p className="review-comment">{review.comment}</p>
                <div className="quote-icon bottom">"</div>
                
                <div className="rating-badge">
                  <span className="rating-number">{review.rating}/5</span>
                  <span className="star-icon">★</span>
                </div>

                <div className="review-divider"></div>

                <div className="author-info">
                  <div className="author-avatar">
                    {review.image ? (
                      <img src={review.image} alt={review.name} />
                    ) : (
                      review.name.charAt(0)
                    )}
                  </div>
                  <div className="author-details">
                    <h4>{review.name}</h4>
                    <p className="author-role">{review.role}</p>
                    <p className="author-company">{review.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={nextReview} className="carousel-btn next-btn" aria-label="Next review">
            ›
          </button>
        </div>

        <div className="carousel-dots">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;