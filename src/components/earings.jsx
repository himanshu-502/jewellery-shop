import gold2 from "../assets/goldearings.webp"
import React, { useState } from "react";
import "../styles/earings.css";
import { Link } from "react-router-dom";
import { products } from "./productsInfo.jsx";
import SortSelect from "./SortSelect";

const earings = () => {
  const [sortOption, setSortOption] = useState("best-selling");
  const [filteredProducts, setFilteredProducts] = useState(
    products.filter((product) => product.name.includes("Earings"))
  );

  const handleSortChange = (option) => {
    setSortOption(option);
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (option === "low-to-high") return parseFloat(a.price) - parseFloat(b.price);
      if (option === "high-to-low") return parseFloat(b.price) - parseFloat(a.price);
      return 0; 
    });
    console.log(sortedProducts);
    setFilteredProducts(sortedProducts);
  };
  

  return (
    <div className="flex flex-col mt-6">
      {/* Header Section */}
      <div className="bg-gray-100 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <img
            className="h-[30vh] md:h-[50vh] md:w-[50vw] w-[100vw]"
            src={gold2}
            alt="Earings Collection"
          />
        </div>
        <div className="text-center m-auto text-3xl md:text-6xl font-bold font-serif">
          Earings
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
          <SortSelect onChange={handleSortChange} />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              className="product-card border border-gray-300 rounded p-4 shadow-lg hover:shadow-xl transition-shadow"
              key={product.id}
            >
              <Link to={`/menu/${product.id}`}>
                <img
                  src={product.image[0]}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded mb-4"
                />
              </Link>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {product.name}
              </h3>
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

export default earings;
