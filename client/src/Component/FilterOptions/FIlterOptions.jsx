import React, { useState } from "react";
import "./FilterOptions.css"; // Make sure to create this CSS file

const FilterOptions = () => {
  const [selectedOption, setSelectedOption] = useState("All");

  const filterOptions = ["All", "Recommended", "Beach", "Mountain", "Landscape", "Hiking"];

  return (
    <div className="filter-options-container">
      {filterOptions.map((option) => (
        <button
          key={option}
          className={`filter-option ${selectedOption === option ? "selected" : ""}`}
          onClick={() => setSelectedOption(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FilterOptions;
