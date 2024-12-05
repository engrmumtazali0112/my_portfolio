import { Link } from "react-router-dom";
import "./PricingCardsStyles.css";
import React from 'react';

const PricingCards = () => {
  return (
    <div className="pricing">
      <h2 className="pricing-title">Choose Your Plan</h2>
      <div className="card-container">
        
        {/* Basic Plan Card */}
        <div className="card">
          <h3>- Basic -</h3>
          <span className="bar"></span>
          <p className="btc">$ 100</p>
          <p>- 7 Business Days -</p>
          <p>- 3 pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>

        {/* Standard Plan Card */}
        <div className="card">
          <h3>- Standard -</h3>
          <span className="bar"></span>
          <p className="btc">$ 150</p>
          <p>- 10 Business Days -</p>
          <p>- 5 pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>

        {/* Premium Plan Card */}
        <div className="card">
          <h3>- Premium -</h3>
          <span className="bar"></span>
          <p className="btc">$ Custom</p>
          <p>- 12 Business Days -</p>
          <p>- Pages: Based on your requirements -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <p>- SEO Optimized -</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>
        
      </div>
    </div>
  );
}

export default PricingCards;
