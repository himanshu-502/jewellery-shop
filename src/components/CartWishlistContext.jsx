import React, { createContext, useState, useContext } from 'react';

const CartWishlistContext = createContext();

export const CartWishlistProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Add to Cart function
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Add to Wishlist function
  const addToWishlist = (product) => {
    if (! (wishlist.length>0 && wishlist.some((item) => item.id === product.id))) {
      setWishlist([...wishlist, product]);
    }
  };

  // Remove from Wishlist
  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <CartWishlistContext.Provider value={{ cart, wishlist, addToCart, addToWishlist, removeFromWishlist }}>
      {children}
    </CartWishlistContext.Provider>
  );
};

export const useCartWishlist = () => useContext(CartWishlistContext);
