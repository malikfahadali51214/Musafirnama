import React from 'react';
import './Hotel.css'; // Import your CSS file
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa'; // Importing location and rating icons

const Hotels = () => {
  return (
    <div className="hotels-container">
      <h1 className="hotels-heading">Most Popular Hotel</h1>
      <div className="hotels-card-container">
        {Array(4).fill().map((_, index) => (
          <div key={index} className="hotel-card">
            <img src={`https://via.placeholder.com/200`} alt="Hotel" className="hotel-image" />
            <h2 className="hotel-title">Enjoy the beautiful place in Pakistan</h2>
            <div className="hotel-location">
              <FaMapMarkerAlt className="location-icon" />
              <span>Lahore, Pakistan</span>
            </div>
            <div className="hotel-footer">
              <div className="hotel-rating">
                <FaStar className="rating-icon" />
                <span>4.5</span>
              </div>
              <button className="price-button">$200</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
