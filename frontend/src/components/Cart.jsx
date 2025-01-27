import React, { useState } from "react";
import { useCartWishlist } from "./CartWishlistContext";
import { useUserProfile } from "./UserProfileContext";
import "../styles/Cart.css";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const { cart, addToCart, removeFromCart, clearCart } = useCartWishlist();
  const { userProfile } = useUserProfile();
  const [showModal, setShowModal] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (total, item) =>
      total + parseFloat(item.price.toString().replace(/,/g, "")) * item.quantity,
    0
  );

  const handlePayNow = () => {
    if (userProfile) {
      clearCart();
      setShowOrderModal(true);
    } else {
      setShowModal(true);
    }
  };

  const handleLoginRedirect = () => {
    setShowModal(false);
    navigate("/login");
  };

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
                  <p className="cart-item-price">Price: ₹{item.price}</p>
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
            <h3>Total Price: ₹{totalPrice.toLocaleString()}</h3>
            <button
              className="pay-now-btn  text-white py-2 px-4 rounded  transition duration-200 mt-4"
              onClick={handlePayNow}
            >
              Pay Now
            </button>
          </div>
        </>
      )}

      {/* Modal for login */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-bold mb-4">Please Login</h2>
            <p className="text-gray-600 mb-4">
              You need to be logged in to place your order.
            </p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
              onClick={handleLoginRedirect}
            >
              Login
            </button>
            <button
              className="ml-4 text-gray-600 hover:text-gray-800"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Modal for order placed */}
      {showOrderModal && (
        <div className="modal-overlay">
          <div className="modal-content bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-bold mb-4 text-green-600">
              Your order has been placed!
            </h2>
            <p className="text-gray-600 mb-4">
              Thank you for shopping with us. Your order will be delivered soon.
            </p>
            <button
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
              onClick={() => setShowOrderModal(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
