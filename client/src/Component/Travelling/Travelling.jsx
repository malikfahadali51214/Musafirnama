import React from 'react';
import './Travelling.css'; // Import your CSS file
import { MdOutlineDirectionsBus, MdOutlineTour, MdOutlineTerrain, MdOutlineBeachAccess, MdOutlineLocationCity, MdOutlineHiking } from 'react-icons/md'; // Importing new icons

const Travelling = () => {
  return (
    <div className="travelling-container">
      <h1 className="heading">Popular Destination</h1>
      <div className="icons-row">
        <div className="icon-item">
          <MdOutlineDirectionsBus className="icons" />
          <p>Bus Tour</p>
        </div>
        <div className="icon-item">
          <MdOutlineTour className="icons" />
          <p>Guide</p>
        </div>
        <div className="icon-item">
          <MdOutlineTerrain className="icons" />
          <p>Mountain Tour</p>
        </div>
        <div className="icon-item">
          <MdOutlineBeachAccess className="icons" />
          <p>Summer Tours</p>
        </div>
        <div className="icon-item">
          <MdOutlineLocationCity className="icons" />
          <p>City Tour</p>
        </div>
        <div className="icon-item">
          <MdOutlineHiking className="icons" />
          <p>Adventure Tour</p>
        </div>
      </div>
    </div>
  );
};

export default Travelling;
