import React from "react";
import "../styles/silver.css"
import image from "../assets/earings.webp"
import silver1 from "../assets/silverring.jpg"
import silver2 from "../assets/silverearings.webp"
import silver3 from "../assets/silvernecklace.jpg"
import silver4 from "../assets/silverbangles.jpg"
import silver5 from "../assets/silverbangles1.webp"
import { Link } from "react-router-dom";

const products = [
  {
    id:6,
    name: "Harshika Stunning Silver Ring",
    price: "18,754.00",
    image: silver1,
  },
  {
    id:7,
    name: "Nandita Beautiful Silver Earings",
    price: "23,986.00",
    image: silver2,
  },
  {
    id:8,
    name: "Ritika Lovely Silver Necklace",
    price: "28,429.00",
    image: silver3,
  },
  {
    id:9,
    name: "Kashvi Regal Silver Bangles",
    price: "25,683.00",
    image: silver4,
  },
  {
    id:10,
    name: "Navya Charming Silver Bangles",
    price: "19,876.00",
    image: silver5,
  },
];

const Silver = () => {
  return (
    <div className="flex flex-col mt-6">
      {/* Header Section */}
      <div className="bg-gray-100 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <img className="h-[30vh] md:h-[50vh] md:w-[50vw] w-[100vw]" src={silver1}  alt="Gold Collection"  />
        </div>
        <div className="text-center m-auto text-3xl md:text-6xl font-bold  font-serif">
          Silver 
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
