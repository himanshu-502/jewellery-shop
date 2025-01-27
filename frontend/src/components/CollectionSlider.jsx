import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../styles/CollectionSlider.css";
import { collections } from "../data/DataSet";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 4;
  const maxIndex = collections.length - visibleItems;

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < maxIndex) setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="slider">
      <div className="slider-wrapper">
        <button
          className="slider-arrow left-arrow"
          onClick={handlePrev}
          style={{ display: currentIndex === 0 ? "none" : "block" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" fill="#333" />
          </svg>
        </button>
        <div className="slider-container">
          {collections.slice(currentIndex, currentIndex + visibleItems).map((item) => (
            <Link
              to={`/collections/${item.label}?image=${encodeURIComponent(item.image)}}`}
              key={item.id} className="image-wrapper">
              <img src={item.image} alt={item.label} className="hover:scale-110" />
              <p>{item.label}</p>
            </Link>
          ))}
        </div>
        <button
          className="slider-arrow right-arrow"
          onClick={handleNext}
          style={{ display: currentIndex === maxIndex ? "none" : "block" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" fill="#333" />
          </svg>

        </button>
      </div>
    </div>
  );
};

export default Slider;
