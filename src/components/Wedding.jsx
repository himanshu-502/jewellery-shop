import banner from "../assets/weddingbanner.jpg"
import React, { useState } from "react";
import "../styles/index.css";
import { Link } from "react-router-dom";
import { products } from "./DataSet.jsx";
import SortSelect from "./SortSelect";
import ProductCard from "./ProductCard.jsx";

const wedding = () => {
  const [sortOption, setSortOption] = useState("best-selling");
  const [filteredProducts, setFilteredProducts] = useState(
    products.filter((product) => product.name.includes("Wedding"))
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
            src={banner}
            alt="Wedding Collection"
          />
        </div>
        <div className="text-center m-auto text-3xl md:text-6xl font-bold font-serif">
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
          <SortSelect onChange={handleSortChange} />
        </div>

        {/* Product Grid */}
        <div className="product-list">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default wedding;
