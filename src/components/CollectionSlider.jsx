import React, { useState } from "react";
import { Link } from "react-router-dom";
import image1 from '../assets/gold.png';
import image2 from '../assets/earings.webp';
import image3 from '../assets/ring.avif';
import image4 from '../assets/necklace.jpg';
import "../App.css";
import "../styles/CollectionSlider.css";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { id: 1, image: image1, label: "Bangles", link: "/bangles" },
    { id: 2, image: image2, label: "Earrings", link: "/earings" },
    { id: 3, image: image3, label: "Rings", link: "/ring" },
    { id: 4, image: image4, label: "Necklace", link: "/necklace" },
  ];

  const visibleItems = 3; // Number of items visible in the slider
  const maxIndex = items.length - visibleItems;

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
          disabled={currentIndex === 0}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" fill="#333" />
          </svg>
        </button>
        <div className="slider-container">
          {items.slice(currentIndex, currentIndex + visibleItems).map((item) => (
            <Link to={item.link} key={item.id} className="image-wrapper">
              <img src={item.image} alt={item.label} className="hover:scale-110" />
              <p>{item.label}</p>
            </Link>
          ))}
        </div>
        <button
          className="slider-arrow right-arrow"
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
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
