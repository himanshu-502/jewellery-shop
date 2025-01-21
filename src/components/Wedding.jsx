import React from "react";
import "../styles/wedding.css"
import image from "../assets/earings.webp"
import silver1 from "../assets/silverring.jpg"
import gold2 from "../assets/goldearings.webp"
import diamond3 from "../assets/diamondnecklace.jpeg"
import silver4 from "../assets/silverbangles.jpg"
import silver5 from "../assets/silverbangles1.webp"
import banner from "../assets/weddingbanner.jpg"
import { Link } from "react-router-dom";

const products = [
  {
    id:16,
    name: "Harshika Stunning Silver Ring",
    price: "18,754.00",
    image: silver1,
  },
  {
    id:17,
    name: "Nandita Beautiful Gold Earings",
    price: "23,986.00",
    image: gold2,
  },
  {
    id:18,
    name: "Ritika Lovely Diamond Necklace",
    price: "28,429.00",
    image: diamond3,
  },
  {
    id:19,
    name: "Kashvi Regal Silver Bangles",
    price: "25,683.00",
    image: silver4,
  },
  {
    id:20,
    name: "Navya Charming Silver Bangles",
    price: "19,876.00",
    image: silver5,
  },
];

const Silver = () => {
  return (
    <div className="flex flex-col mt-6">
      {/* Header Section */}
      <div className="bg-pink-100 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <img className="h-[30vh] md:h-[50vh] md:w-[50vw] w-[100vw]" src={banner}  alt="Gold Collection"  />
        </div>
        <div className="text-center m-auto text-3xl md:text-6xl font-bold  font-serif">
          Wedding 
        </div>
      </div>

      {/* Product Container */}
      <div className="container mx-auto p-4">
        {/* Product Header with Search and Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <input
            type="search"
            placeholder="Search products"
            className="border border-gray-300 p-2 rounded w-full md:w-1/3 mb-4 md:mb-0"
          />
          <select className="border border-gray-300 p-2 rounded w-full md:w-1/5">
            <option value="best-selling">Best Selling</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              className="product-card border border-gray-300 rounded p-4 shadow-lg hover:shadow-xl transition-shadow"
              key={product.id}
            >
              {/* Link to Product Details */}
              <Link to={`/menu/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded mb-4"
                />
              </Link>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">{product.name}</h3>
              <p className="text-gray-500 mb-4">₹{product.price}</p>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 w-full">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Silver;
