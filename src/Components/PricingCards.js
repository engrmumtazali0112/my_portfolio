import { Link } from "react-router-dom";
import "./PricingCardsStyles.css";

import React from 'react'

const PricingCards = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="btc">$ 100</p>
                <p>- 3 Days -</p>
                <p>- 3 pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <p>--Currently Not Available--</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW
                </Link>
            </div>

            <div className="card">
                <h3>- Standard -</h3>
                <span className="bar"></span>
                <p className="btc">$ 200</p>
                <p>- 4 Days -</p>
                <p>- 4 pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <p>--Currently Not Available--</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW
                </Link>
            </div>

            <div className="card">
                <h3>- Premium -</h3>
                <span className="bar"></span>
                <p className="btc">$ 300</p>
                <p>- 6 Days -</p>
                <p>-  pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <p>--Currently Not Available--</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW
                </Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCards