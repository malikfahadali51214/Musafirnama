import React from 'react';
import { FaMapMarkerAlt, FaDollarSign, FaCalendarAlt, FaSearch } from 'react-icons/fa';
import './Filter.css'; // Ensure you have this CSS file

const Filter = () => {
  return (
    <div className="filter-bar-container">
      {/* Small Heading */}
      <h4 className="small-heading-ist">Explore more</h4>

      {/* Big Heading */}
      <h1 className="big-heading">Discover Your Next Adventure</h1>

      {/* Small Heading */}
      <h4 className="small-heading">Fill the fields</h4>

      {/* Filter Fields in a Row */}
      <div className="filter-fields">
        {/* Destination Field */}
        <div className="filter-item">
          <div className="input-icon-container">
            <FaMapMarkerAlt className="input-icon" />
            <input
              type="text"
              placeholder="Enter destination"
              className="filter-input"
            />
          </div>
        </div>

        {/* Budget Field */}
        <div className="filter-item">
          <div className="input-icon-container">
            <FaDollarSign className="input-icon" />
            <input
              type="number"
              placeholder="Enter budget"
              className="filter-input"
            />
          </div>
        </div>

        {/* Date Field */}
        <div className="filter-item">
          <div className="input-icon-container">
            <FaCalendarAlt className="input-icon" />
            <input type="date" className="filter-input" />
          </div>
        </div>

        {/* Search Button */}
        <div className="filter-item">
          <button className="search-button">
            <FaSearch className="search-icon" /> Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
