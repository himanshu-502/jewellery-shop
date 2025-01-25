import React, { useState, useEffect } from 'react';
import '../styles/productcard.css'; 
import { Link } from 'react-router-dom';
import CartWishlist from './AddToCartWishlist';

const ProductCard = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(product.image[0]); // Default to the first image
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval;

    if (isHovered && product.image.length > 1) {
      // Start the slideshow on hover
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % product.image.length);
      }, 2100); // Change image every 1 second
    } else {
      // Reset to the main image when not hovered
      setCurrentIndex(0);
      setCurrentImage(product.image[0]);
    }

    return () => clearInterval(interval); // Cleanup interval on hover leave or unmount
  }, [isHovered, product.image]);

  useEffect(() => {
    if (isHovered) {
      setCurrentImage(product.image[currentIndex]);
    }
  }, [currentIndex, isHovered, product.image]);

  const handleImageClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      key={product.id}
      className="product-card mx-auto w-full "
      onMouseEnter={() => setIsHovered(true)} // Start slideshow on hover
      onMouseLeave={() => setIsHovered(false)} // Stop slideshow on hover leave
    >
      <Link to={`/menu/${product.id}`} onClick={handleImageClick}>
        <img src={currentImage} alt={product.title} className="product-image" />
      </Link>
      <h3 className="product-title">{product.name}</h3>
      <p className="product-price">Rs. {product.price.toLocaleString()}</p>
      <div><CartWishlist productId = {Number(product.id)} /></div>
      
      {/* <Link to={`/menu/${product.id}`} onClick={handleImageClick}>
        <button className="shop-now-btn">Shop Now &rsaquo;</button>
      </Link> */}
    </div>
  );
};

export default ProductCard;
