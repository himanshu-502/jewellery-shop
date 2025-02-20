import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useUserProfileStore from "../../store/UserProfileStore";
import useProductStore from "../../store/ProductStore";
import Loader from "../Loader";

const MyReviews = () => {
    const { reviews, fetchMyReviews } = useUserProfileStore();
    const { products, fetchProducts } = useProductStore();
    const productLoading = useProductStore(state => state.loading);
    const reviewsLoading = useUserProfileStore(state => state.loading);
    useEffect(() => {
        const fetchData = async () => {
            await fetchMyReviews();
            await fetchProducts();
        };
        fetchData();
    }, []);
    const reviewedProducts = reviews.map(review => ({
        ...review,
        product: products.find(p => p.id === review.productId),
      }));
    
    if(productLoading || reviewsLoading) {
        return (
            <Loader/>
        );
    }
    return (
        <>
            {reviewedProducts.length === 0 ? (
                <p className="empty-cart">Your have not reviewed any products yet.</p>
            ) : (
                <ul className="cart-items">
                    {reviewedProducts.map((item) => (
                        <li key={item.productId} className="cart-item">
                            <Link to={`/menu/${item.productId}`}>
                                <img src={item.product?.images[0]} alt={item.product?.name ?? 'product image'} className="cart-item-image" />
                            </Link>
                            <div className="cart-item-details">
                                <Link to={`/menu/${item.productId}`}>
                                    <h3 className="cart-item-name">{item.product?.name ?? 'Product Name'}</h3>
                                </Link>
                                <p className="cart-item-price">Price: ₹{item.product?.price ?? 0}</p>
                                <div className="flex items-center mb-2">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <span
                                      key={star}
                                      className={`text-lg ${star <= item.rating ? "text-yellow-500" : "text-gray-300"
                                        }`}
                                    >
                                      ★
                                    </span>
                                  ))}
                                </div>
                                { item.comment && (<p className="text-gray-700">review: {item.comment}</p>) }
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default MyReviews;