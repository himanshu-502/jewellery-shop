import React,{useState,useEffect} from "react";
import "../App.css";
import ProductCard from "./ProductCard";
import BlogCard from "./BlogCard";
import LocationCard from "./LocationCard";
import Slider from "./CollectionSlider.jsx";
import "../styles/style.css";
import { locations, blogs, limitedStocks, trendingProducts, limitedStockPeriod } from "./DataSet.jsx";

  
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

  // Function to format time into HH:MM:SS
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };
  return (
    <>
    <div className="mt-6 flex flex-col  gap-10">
      <div className=" font-serif  text-center mt-5 mb-0 md:mb-3 text-4xl font">What's on <span className="text-red-400 font-semibold">Your Mind!! </span></div>
        <Slider/>
    </div>
  
    {/*Trending*/}
    <div>
      <div className=" bg-gray-100 text-center mt-5 mb-0 md:mb-3 text-3xl  font-serif ">Trending <span className="text-red-400 font-semibold">Jewellery</span></div>
      <div className="product-list">
        {trendingProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>

    {/*Limited*/}
    { timeLeft > 0 && ( 
      <div>
      <div className="text-center mt-7 mb-0 md:mb-2 text-4xl  font-serif ">Limited <span >Period Offer</span></div>
      <div className="text-[20px] mt-2 mb-3 p-1  text-center bg-yellow-100 text-red-500 ">
      Ends in :
        {  timeLeft > 0 ? formatTime(timeLeft) : "Time's up!"}
      </div>
      <div className="product-list">
        {limitedStocks.map((stock, index) => (
          <ProductCard key={index} product={stock} />
        ))}
      </div>
    </div>
    )}

 {/*Blog Sections*/}
    <div className="blog-list">
      <h2 className="blog-list-title text-4x">Latest Blogs</h2>
      <div className="blog-list-grid">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>

 {/*Location Sections*/}
 <div className="our-locations">
      <h2 className="locations-title">Our Locations</h2>
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
