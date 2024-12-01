import React from 'react';
import "./Middle.css";

const Middle = () => {
  return (
    <div className="maincomponent">
    <div className='middle section'>
      <div className="secContainer container">
        {/* New wrapper for all stats with a single background */}
        <div className="statsWrapper">
          <div className="grid">
            <div className="stat-item">
              <h1>10</h1>
              <p>World of Experiences</p>
            </div>
            <div className="stat-item">
              <h1>2k+</h1>
              <p>Fine Destinations</p>
            </div>
            <div className="stat-item">
              <h1>10k+</h1>
              <p>Customer Reviews</p>
            </div>
            <div className="stat-item">
              <h1>4.8</h1>
              <p>Overall Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Middle;
