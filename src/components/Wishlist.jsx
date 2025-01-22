import React from 'react';
import { useCartWishlist } from './CartWishlistContext';

function Cart() {
  const { wishlist } = useCartWishlist();

  return (
    <div>
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {wishlist.map((item) => (
            <li key={item.id}>
              {item.name} - Quantity: {item.quantity} - Price: ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
