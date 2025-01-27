import React from "react";
import { useCartWishlist } from "./CartWishlistContext.jsx";
import { products } from "../data/DataSet.js";
import "../styles/Productcard.css";

const CartWishlist = ({ productId }) => {
  const { cart, addToCart, addToWishlist, wishlist, removeFromCart, removeFromWishlist } = useCartWishlist();
  const productInCart = cart.find(item => item.id === Number(productId)) || false;
  const productInWishlist = wishlist.find(item => item.id === Number(productId)) || false;
  const currentProduct = products.find(item => item.id === Number(productId));
  const heartColor = productInWishlist ? "red" : "grey";
  return (
    <>

      <div className="mt-4 flex items-center justify-between">
        {/* Add to Cart Button */}
        <div className="flex-1 text-center flex items-center justify-center">
          {productInCart ? (
            <div className="cart-item-quantity flex items-center gap-2">
              <button
                className="quantity-btn  transition-all duration-200 rounded-full p-2"
                onClick={() => removeFromCart(productInCart.id)}
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
              <span className="quantity-number text-lg font-semibold text-gray-800">{productInCart.quantity}</span>
              <button
                className="quantity-btn  transition-all duration-200 rounded-full p-2"
                onClick={() => addToCart(productInCart)}
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
          ) : (
            <button
              onClick={() => addToCart(currentProduct)}
              className=" add-cart-btn px-6 py-3 rounded-lg  transition-all duration-300 shadow-md transform hover:scale-105"
            >
              Add to Cart
            </button>
          )}
        </div>

        {/* Wishlist Button */}
        <div className="flex items-center justify-end">
          <button
            onClick={() => {
              productInWishlist
                ? removeFromWishlist(productInWishlist.id)
                : addToWishlist(currentProduct);
            }}
            className=" wishlist-btn flex items-center justify-center bg-transparent rounded-full w-12 h-12 transition-all duration-300 ease-in-out transform hover:translate-y-[-2px]"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="48" fill="none" stroke="black" strokeWidth="2" />
              <path
                d="M50 70 
                C 20 50, 20 20, 50 35 
                C 80 20, 80 50, 50 70 Z"
                fill={heartColor}
              />
            </svg>
          </button>
        </div>
      </div>

    </>
  );

};

export default CartWishlist;