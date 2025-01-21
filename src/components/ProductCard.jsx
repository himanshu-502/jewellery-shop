import React from 'react';
import '../styles/productcard.css'; 
import { Link } from 'react-router-dom';
const ProductCard = ({ product }) => {
  return (
    <div key={product.id} className="product-card">
      <Link to={`/menu/${product.id}`}><img src={product.image} alt={product.title} className="product-image" /></Link>
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">Rs. {product.price.toLocaleString()}</p>
      <Link to={`/menu/${product.id}`}> <button className="shop-now-btn">Shop Now &rsaquo;</button></Link>
    </div>
  );
};

export default ProductCard;
