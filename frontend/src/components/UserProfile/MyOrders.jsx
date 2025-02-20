import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOrderStore from "../../store/OrdersStore";
import useProductStore from "../../store/ProductStore";
import Loader from '../Loader';
import "./MyOrders.css"; // Import CSS

const MyOrders = () => {
  const { orders, fetchMyOrders, cancelOrder, loading } = useOrderStore();
  const { products, fetchProducts } = useProductStore();
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        await fetchMyOrders();
        if(products.length === 0)   await fetchProducts();
    }
    fetchData();
  }, []);

  const handleCancel = async (orderId) => {
    try {
        await cancelOrder({orderId});
      } catch (error) {
        console.error("Cannot Canel Order", error);
      }
  }

  if(loading){
    return (
        <Loader/>
    );
  }

  return (
    <div className="my-orders-container">
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <div>
                <p><strong>Order ID:</strong> {order.id}</p>
                <p><strong>Total:</strong> {order.total}</p>
                <p><strong>Address:</strong> {order.address}</p>
              </div>
              <div className="order-actions">
                {order.status === "Pending" ? (
                  <button onClick={() => handleCancel(order.id)} className="cancel-button">
                    Cancel Order
                  </button>
                ) : (
                  <button className="status-button" disabled>
                    {order.status}
                  </button>
                )}
                <button
                  className="dropdown-button"
                  onClick={() => setOpenDropdown(openDropdown === order.id ? null : order.id)}
                >
                  {openDropdown === order.id ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path d="M7 14l5-5 5 5z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {openDropdown === order.id && (
              <div className="order-items">
                {order.items.map((item) => {
                  const product = products.find((p) => p.id === item.productId);
                  return (
                    <div key={item.id} className="order-item">
                      {product && 
                        <Link to={`/menu/${product.id}`}>
                            <img src={product.images[0]} alt={product.name} />
                        </Link>
                        }
                      <div>
                        <Link to={`/menu/${product.id}`}>  <p><strong>{product.name}</strong></p>  </Link>
                        <p><strong>Price:</strong> {item.price}</p>
                        <p><strong>Quantity:</strong> {item.quantity}</p>
                      </div>
                    </div>
                  );
                })} 
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default MyOrders;
