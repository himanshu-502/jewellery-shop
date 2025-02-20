import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import '../styles/Recommend.css';
import useProductStore from '../store/ProductStore';

const Recommend = ({ productId }) => {
  const {products, fetchProducts} = useProductStore();
    useEffect(() => {
      const fetchData = async () => {
        await fetchProducts();
      };
      if(products.length===0) fetchData();
    }, []);
  
    // console.log('products',products);
  const relatedProducts = products.length>0 ? products.filter(
    (item) => item.id !== Number(productId)
  ) : [];
  // console.log(relatedProducts);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < relatedProducts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const visibleProducts = relatedProducts.slice(currentIndex, currentIndex + 3);

  return (
    <div className="recommend-slider">
      <h2>Recommended for You</h2>
      <div className="slider-wrapper">
        <button className="arrow-btn left-arrow" onClick={handlePrev} disabled={currentIndex === 0}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
          </svg>
        </button>
        <div className="slider-container">
          {visibleProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
        <button
          className="arrow-btn right-arrow"
          onClick={handleNext}
          disabled={currentIndex >= relatedProducts.length - 3}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M8.59 16.59L13.17 12l-4.58-4.59L10 6l6 6-6 6z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Recommend;
