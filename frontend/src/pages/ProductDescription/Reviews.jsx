import React, { useState, useEffect } from "react";
import "../../styles/Magnifier.css";
import useProductStore from "../../store/ProductStore.js";

const Reviews = ({productId}) => {
  
  const {reviews, fetchReviews, products, postReview} = useProductStore();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");

  useEffect(() => {
          const fetchData = async () => {
              await fetchReviews();
          };
          fetchData();
      }, []);
  
  const selectedProductReviews = reviews.length>0 ? reviews.filter(
    (item) => item.productId === Number(productId)
  ) : [];

  const productExsts = products.some(product => product.id === Number(productId));

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (rating > 0) {
      await postReview({productId, rating, comment});
      setComment("");
      setRating(0);
    }
  };

  if(!productExsts) {
    return (<></>);
  }

  return (
    <>
    <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Rate this product</h3>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`text-2xl cursor-pointer ${star <= (hoverRating || rating) ? "text-yellow-500" : "text-gray-300"
                }`}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Review Section */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Write a Review</h3>
        <textarea
          className="w-full border border-gray-300 p-2 rounded mb-2"
          rows="4"
          placeholder="Write your review here..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          onClick={handleReviewSubmit}
        >
          Submit Review
        </button>
      </div>

      {/* Display Reviews */}
      {selectedProductReviews.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
          <ul className="space-y-4">
            {selectedProductReviews.map((review, index) => (
              <li
                key={index}
                className="border border-gray-300 rounded p-4 bg-gray-50"
              >
                <p className="text-gray-700">{review.user.name}</p>
                <div className="flex items-center mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`text-lg ${star <= review.rating ? "text-yellow-500" : "text-gray-300"
                        }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
  
};

export default Reviews;