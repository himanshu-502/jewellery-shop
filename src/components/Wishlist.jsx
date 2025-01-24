import React from "react";
import { useCartWishlist } from "./CartWishlistContext";
import "../styles/Cart.css";
import { Link } from "react-router-dom";

function Wishlist() {
  const { wishlist, addToWishlist, removeFromWishlist } = useCartWishlist();

  return (
    <div className="cart-container mt-10">
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="empty-cart">Your wishlist is empty.</p>
      ) : (
        <ul className="cart-items">
          {wishlist.map((item) => (
            <li key={item.id} className="cart-item">
              <Link to={`/menu/${item.id}`}>
                <img src={item.image[0]} alt={item.name} className="cart-item-image" />
              </Link>
              <div className="cart-item-details">
                <Link to={`/menu/${item.id}`}>
                  <h3 className="cart-item-name">{item.name}</h3>
                </Link>
                <p className="cart-item-price">Price: ${item.price}</p>
                <button
                  className="wishlist-remove-btn"
                  onClick={() => removeFromWishlist(item.id)}
                  aria-label="Remove from Wishlist"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Wishlist;
