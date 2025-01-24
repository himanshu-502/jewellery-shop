import React from "react";
import { useCartWishlist } from "./CartWishlistContext";
import "../styles/Cart.css";
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, addToCart, removeFromCart } = useCartWishlist();

  const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price.toString().replace(/,/g, "")) * item.quantity, 0);

  return (
    <div className="cart-container mt-10">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <Link to={`/menu/${item.id}`}>
                  <img src={item.image[0]} alt={item.name} className="cart-item-image" />
                </Link>
                <div className="cart-item-details">
                  <Link to={`/menu/${item.id}`}>
                    <h3 className="cart-item-name">{item.name}</h3>
                  </Link>
                  <p className="cart-item-price">Price: ${item.price}</p>
                  <div className="cart-item-quantity">
                    <button
                      className="quantity-btn"
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Decrease Quantity"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="currentColor"
                      >
                        <path d="M19 13H5v-2h14v2z" />
                      </svg>
                    </button>
                    <span className="quantity-number">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => addToCart(item)}
                      aria-label="Increase Quantity"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="currentColor"
                      >
                        <path d="M19 11H13V5h-2v6H5v2h6v6h2v-6h6v-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Total Price: ${totalPrice.toLocaleString()}</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
