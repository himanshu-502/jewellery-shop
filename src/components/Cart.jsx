import React from 'react';
import { useCartWishlist } from './CartWishlistContext';

function Cart() {
  const { cart } = useCartWishlist();

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
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
