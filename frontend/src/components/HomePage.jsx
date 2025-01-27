import React, { useState, useEffect } from "react";
import "../App.css";
import ProductCard from "./ProductCard";
import BlogCard from "./BlogCard";
import LocationCard from "./LocationCard";
import Slider from "./CollectionSlider.jsx";
import "../styles/Style.css";
import Marquee from "react-fast-marquee";
import { locations, blogs, limitedStocks, trendingProducts, limitedStockPeriod } from "../data/DataSet.js";


const HomePage = () => {
  const [timeLeft, setTimeLeft] = useState(limitedStockPeriod);

  // Effect to handle the countdown timer
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };


  return (
    <>

      <div
        className={`relative transition-opacity duration-500 ease-out ${isVisible ? "opacity-100" : "opacity-0"
          } ${isVisible ? "h-auto" : "h-0 overflow-hidden"}`}
        style={{ background: "#610C63" }}
      >
        <div className="relative">

          <button
            onClick={handleClose}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black-500 focus:outline-none z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L12 10.586l6.293-6.293a1 1 0 111.414 1.414L13.414 12l6.293 6.293a1 1 0 01-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 01-1.414-1.414L10.586 12 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div className="pl-8">
            <Marquee speed={35}>
              Discover our wide range of jewelry collections including gold, diamond, and silver!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              50% off on Making Charges&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Free shipping on Pre-Paid Orders&nbsp;&nbsp;&nbsp;&nbsp;
            </Marquee>
          </div>
        </div>
      </div>

      {/* body start */}
      <div className="mt-6 flex flex-col  gap-10 banner">
        <div className=" font-serif  text-center mt-5 mb-0 md:mb-3 text-4xl font banner-title1">What's on <span className="text-400 font-semibold banner-title2">Your Mind!! </span></div>
        <Slider />
      </div>

      {/*Trending*/}
      <div>
        <div className="  text-center mt-5 mb-0 md:mb-3 text-3xl  font-serif banner banner-title1">Trending <span className="text-red-400 font-semibold banner-title2">Jewellery</span></div>
        <div className="product-list">
          {trendingProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>

      {/*Limited*/}
      {timeLeft > 0 && (
        <div>
          <div className="text-center pt-7 mb-0  text-4xl  font-serif banner banner-title1">Limited <span >Period Offer</span></div>
          <div className="text-[20px]   text-center limited-countdown ">
            Ends in :
            {timeLeft > 0 ? formatTime(timeLeft) : "Time's up!"}
          </div>
          <div className="product-list">
            {limitedStocks.map((stock, index) => (
              <ProductCard key={index} product={stock} />
            ))}
          </div>
        </div>
      )}

      {/*Blog Sections*/}
      <div className="blog-list banner">
        <h2 className="blog-list-title text-4x banner-title1">Latest Blogs</h2>
        <div className="blog-list-grid">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div>

      {/*Location Sections*/}
      <div className="our-locations banner">
        <h2 className="locations-title banner-title1">Our Locations</h2>
        <div className="locations-grid">
          {locations.map((location, index) => (
            <LocationCard key={index} location={location} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
