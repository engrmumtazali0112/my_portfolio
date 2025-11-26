// src/Components/ReviewsSection.js
import React, { useState } from 'react';
import './ReviewsSectionStyles.css';

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "Jane Smith",
      role: "Business Owner",
      rating: 4.8,
      comment: "Highly skilled developers who understand the client's vision and execute perfectly.",
      company: "Tech Solutions Inc."
    },
    {
      name: "Michael Johnson",
      role: "Project Coordinator",
      rating: 4.6,
      comment: "Great communication and excellent results. Our new site performs beautifully.",
      company: "Digital Innovations"
    },
    {
      name: "Emily Brown",
      role: "Creative Director",
      rating: 4.9,
      comment: "Professional, efficient, and highly knowledgeable. Would definitely recommend",
      company: "Creative Studios"
    },
    {
      name: "David Wilson",
      role: "Tech Lead",
      rating: 4.7,
      comment: "Outstanding technical expertise and commitment to quality. A pleasure to work with.",
      company: "Innovation Labs"
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
                    {review.name.charAt(0)}
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