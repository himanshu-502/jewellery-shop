import React, { useState, useEffect } from "react";
import "../../styles/Index.css";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard.jsx";
import useProductStore from "../../store/ProductStore.js";

const Categories = () => {
  
  const {products, categories, fetchCategories, fetchProducts} = useProductStore();
    useEffect(() => {
      const fetchData = async () => {
        await fetchProducts();
        await fetchCategories();
      };
      fetchData();
    }, []);
  
  let { categoryName } = useParams();

  const capitalizeFirstLetter = (str) => str ? str[0].toUpperCase() + str.slice(1) : "";
  categoryName = capitalizeFirstLetter(categoryName);

  const [sortOption, setSortOption] = useState("best-selling");
  const [filteredProducts, setFilteredProducts] = useState(
    products.filter(product =>
      product.categories.some(cat => cat.category.name === categoryName)
    )
  );
  const categoryDetails = categories.find(item => item.name === categoryName);
  const [image, setImage] = useState(categoryDetails ? categoryDetails.imageBanner : "");

  useEffect(() => {
    const newFilteredProducts = products.filter(product =>
      product.categories.some(cat => cat.category.name === categoryName)
    );
    const newCategoryDetails = categories.find(item => item.name === categoryName);
    setImage(newCategoryDetails ? newCategoryDetails.imageBanner : "");
    setFilteredProducts(newFilteredProducts);
    setSortOption("best-selling");
  }, [categoryName, products, categories]);

  const handleSortChange = (option) => {
    setSortOption(option);
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (option === "low-to-high") return parseFloat(a.price) - parseFloat(b.price);
      if (option === "high-to-low") return parseFloat(b.price) - parseFloat(a.price);
      return 0;
    });
    setFilteredProducts(sortedProducts);
  };


  return (
    <div className="flex flex-col mt-6">

      {/* Header Section */}
      <div className="bg-gray-100 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <img
            className="h-[30vh] md:h-[50vh] md:w-[50vw] w-[100vw]"
            src={image}
            alt={`${categoryName} category`}
          />
        </div>
        <div className="text-center m-auto text-3xl md:text-6xl font-bold font-serif">
          {categoryName}
        </div>
      </div>

      {/* Product Container */}
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* <input
            type="search"
            placeholder={`Search products`}
            className="border border-gray-300 p-2 rounded w-full md:w-1/3 mb-4 md:mb-0"
          /> */}
          <select
            className="border border-gray-300 p-2 rounded w-full md:w-1/5"
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="best-selling">Best Selling</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
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

export default Categories;
