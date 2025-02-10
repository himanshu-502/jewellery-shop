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

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0); // Remove items with quantity <= 0
    });
  };

  const clearCart = () => setCart([]);


  // Add to Wishlist function
  const addToWishlist = (product) => {
    if (!(wishlist.length > 0 && wishlist.some((item) => item.id === product.id))) {
      setWishlist([...wishlist, product]);
    }
  };

  // Remove from Wishlist
  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <CartWishlistContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        addToWishlist,
        removeFromWishlist,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartWishlistContext.Provider>
  );
};

export const useCartWishlist = () => useContext(CartWishlistContext);
