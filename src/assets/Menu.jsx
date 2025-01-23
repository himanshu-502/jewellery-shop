import React,{useState} from "react";
import { useParams, Link } from "react-router-dom";
import gold1 from "../assets/goldring.webp";
import gold2 from "../assets/goldearings.webp";
import gold3 from "../assets/goldnecklace.jpg";
import gold4 from "../assets/earings.webp";
import gold5 from "../assets/gold.png";

import image from "../assets/earings.webp"
import silver1 from "../assets/silverring.jpg"
import silver2 from "../assets/silverearings.webp"
import silver3 from "../assets/silvernecklace.jpg"
import silver4 from "../assets/silverbangles.jpg"
import silver5 from "../assets/silverbangles1.webp"

import diamond1 from "../assets/diamondring.webp"
import diamond2 from "../assets/diamondearings.webp"
import diamond3 from "../assets/diamondnecklace.jpeg"
import diamond4 from "../assets/diamondbangles.jpeg"
import diamond5 from "../assets/diamondbangles1.webp"

import trend1 from '../assets/trend1.jpeg';
import trend2 from '../assets/trend2.webp';
import trend3 from '../assets/trend3.jpg';
import trend4 from '../assets/trend4.webp';

import necklace from "../assets/necklace.svg"
import delivery from "../assets/delivery.svg"
import time from "../assets/time.svg"
import certified from "../assets/certified.svg"

import maintenance from "../assets/maintenance.webp"
import transparency from "../assets/transparency.webp"
import purity from "../assets/purity.webp"


const products = [
  { id: 1, name: "Harshika Stunning Gold Ring", price: "18,754.00", image: gold1 },
  { id: 2, name: "Nandita Beautiful Gold Earings", price: "23,986.00", image: gold2 },
  { id: 3, name: "Ritika Lovely Gold Necklace", price: "28,429.00", image: gold3 },
  { id: 4, name: "Kashvi Regal Gold Bangles", price: "25,683.00", image: gold4 },
  { id: 5, name: "Navya Charming Gold Bangles", price: "19,876.00", image: gold5 },
  {
      id:6,
      name: "Harshika Stunning Silver Ring",
      price: "18,754.00",
      image: silver1,
    },
    {
      id:7,
      name: "Nandita Beautiful Silver Earings",
      price: "23,986.00",
      image: silver2,
    },
    {
      id:8,
      name: "Ritika Lovely Silver Necklace",
      price: "28,429.00",
      image: silver3,
    },
    {
      id:9,
      name: "Kashvi Regal Silver Bangles",
      price: "25,683.00",
      image: silver4,
    },
    {
      id:10,
      name: "Navya Charming Silver Bangles",
      price: "19,876.00",
      image: silver5,
    },
    {
        id:11,
        name: "Harshika Stunning Diamond Ring",
        price: "18,754.00",
        image: diamond1,
      },
      {
        id:12,
        name: "Nandita Beautiful Diamond Earings",
        price: "23,986.00",
        image: diamond2,
      },
      {
        id:13,
        name: "Ritika Lovely Diamond Necklace",
        price: "28,429.00",
        image: diamond3,
      },
      {
        id:14,
        name: "Kashvi Regal Diamond Bangles",
        price: "25,683.00",
        image: diamond4,
      },
      {
        id:15,
        name: "Navya Charming Diamond Bangles",
        price: "19,876.00",
        image: diamond5,
      },
        {
          id:16,
          name: "Harshika Stunning Silver Ring",
          price: "18,754.00",
          image: silver1,
        },
        {
          id:17,
          name: "Nandita Beautiful Gold Earings",
          price: "23,986.00",
          image: gold2,
        },
        {
          id:18,
          name: "Ritika Lovely Diamond Necklace",
          price: "28,429.00",
          image: diamond3,
        },
        {
          id:19,
          name: "Kashvi Regal Silver Bangles",
          price: "25,683.00",
          image: silver4,
        },
        {
          id:20,
          name: "Navya Charming Silver Bangles",
          price: "19,876.00",
          image: silver5,
        },
        {
            id:21,
            name: "Harshika Stunning Gold Bangles",
            price: "18,754.00",
            image: gold5,
          },
          {
            id:22,
            name: "Nandita Beautiful Silver Bangles",
            price: "23,986.00",
            image: silver5,
          },
          {
            id:23,
            name: "Ritika Lovely Diamond Bangles",
            price: "28,429.00",
            image: diamond5,
          },
           {
              id:24,
              name: "Harshika Stunning Gold Earings",
              price: "18,754.00",
              image: gold2,
            },
            {
              id:25,
              name: "Nandita Beautiful Silver Earings",
              price: "23,986.00",
              image: silver2,
            },
            {
              id:26,
              name: "Ritika Lovely Diamond Earings",
              price: "28,429.00",
              image: diamond2,
            },
             {
                id:27,
                name: "Harshika Stunning Gold Ring",
                price: "18,754.00",
                image: gold1,
              },
              {
                id:28,
                name: "Nandita Beautiful Silver Ring",
                price: "23,986.00",
                image: silver1,
              },
              {
                id:29,
                name: "Ritika Lovely Diamond Ring",
                price: "28,429.00",
                image: diamond1,
              },
                {
                  id:30,
                  name: "Harshika Stunning Gold Necklace",
                  price: "18,754.00",
                  image: gold3,
                },
                {
                  id:31,
                  name: "Nandita Beautiful Silver Necklace",
                  price: "23,986.00",
                  image: silver3,
                },
                {
                  id:32,
                  name: "Ritika Lovely Diamond Necklace",
                  price: "28,429.00",
                  image: diamond3,
                },
                {
                      id:33,
                      image: trend1,
                      name: 'Adya Classic Gold Bracelet',
                      price: 64240,
                    },
                    {
                      id:34,
                      image: trend2,
                      name: 'Shubhi Pleasing  Gold Earrings',
                      price: 21635,
                    },
                    {
                      id:35,
                      image: trend3,
                      name: 'Brezza Red & White Diamond Earrings',
                      price: 47663,
                    },
                    {
                      id:36,
                      image: trend4,
                      name: 'Sia Elegant Diamond Necklace',
                      price: 99817,
                    },
];

const features = [
  {
    icon: necklace, 
    title: "Contemporary Designs",
  },
  {
    icon: certified, 
    title: "Bis Hallmark",
  },
  {
    icon: time, 
    title: "Easy Lifetime Exchange",
  },
  {
    icon:delivery,
    title: "Insured Delivery",
  },
];

const assurances = [
 
  {
    icon: purity, 
    text: "The Purity Guarantee",
  },
  {
    icon: transparency,
    text: "Complete Transparency and Trust",
  },
  {
    icon: maintenance, 
    text: "Lifetime Maintenance",
  },
];

const Menu = () => {
    const { filter } = useParams();
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [reviews, setReviews] = useState([]);
    const [reviewText, setReviewText] = useState("");
  
    // Convert filter to a number and find the product
    const productDisplay = products.find((product) => product.id === Number(filter));
  
    // Fallback for invalid product ID
    if (!productDisplay) {
      return (
        <div className="text-center text-red-500 mt-10">
          <h1>Product Not Found</h1>
          <p>The product you're looking for does not exist.</p>
          <Link to="/gold" className="text-blue-500 underline">
            Back to Gold Collection
          </Link>
        </div>
      );
    }
  
    // Handle review submission
    const handleReviewSubmit = () => {
      if (reviewText.trim()) {
        setReviews([...reviews, { text: reviewText, rating }]);
        setReviewText("");
        setRating(0);
      }
    };

    return (
      <div className="p-4 mt-6">
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row bg-white shadow-lg">
    {/* Product Image Section */}
    <div className="w-full md:w-1/2 h-100 overflow-hidden">
      <img
        src={productDisplay.image[0]}
        alt={productDisplay.name}
        className="w-full h-full object-cover hover:scale-150"
      />
    </div>

    {/* Product Info Section */}
    <div className="w-full md:w-1/2 p-6 flex flex-col">
      <h3 className="text-2xl font-bold text-gray-800 font-serif">{productDisplay.name}</h3>
      <div className=" items-center mt-2 gap-2">
        {/* Product Price */}
        <p className="text-xl font-normal font-mono  text-black">   ₹{productDisplay.price}</p>
        
       
      </div>
      <hr className="border-t border-gray-300  mt-5" />

      {/*  Icon */}
      <div className="flex justify-center items-center gap-6 mt-5">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            {/* Icon */}
            <img
              src={feature.icon}
              alt={feature.title}
              className="h-7 mx-auto mb-4"
            />
            {/* Title */}
            <p className="text-sm font-medium text-gray-700">
              {feature.title}
            </p>
          </div>
        ))}
      </div>
      <hr className="border-t border-gray-300  mt-5" />
      <div className="mt-4 font-serif">
        <p>For a doubly charming accessory to aestheticize your Office Wear go for this Winsome Dual Heart Gold Bracelet crafted in 22 Karat Yellow Gold.

With this bracelet, win over minds with your professional expertise and win over hearts with your elegant style</p>
        <div className="font-serif font-semibold p-3 mx-auto text-end text-red-500 text-1xl">By EagleView </div>
      </div>
      <div className="mt-4 flex gap-4">
        <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
          Buy Now
        </button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
          Add to Cart
        </button>
      </div>
    </div>
  </div>

{/*purity*/}
  <div className="bg-white py-8 mt-8">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-serif font-bold text-brown-800">The EagleView JewelTechs  Assurance</h2>
        <p className="text-gray-600 mx-auto">Crafted by Experts, Cherished by You.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 ">
        {assurances.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center ">
            <img
              src={item.icon}
              alt={item.text}
              className="w-100 h-20 object-contain mb-4"
            />
            <p className="text-sm text-gray-700 font-semibold">{item.text}</p>
          </div>
        ))}
      </div>
    </div>

  

  {/* Rating Section */}
  <div className="mt-6">
    <h3 className="text-lg font-semibold mb-2">Rate this product</h3>
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-2xl cursor-pointer ${
            star <= (hoverRating || rating) ? "text-yellow-500" : "text-gray-300"
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
      value={reviewText}
      onChange={(e) => setReviewText(e.target.value)}
    ></textarea>
    <button
      className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
      onClick={handleReviewSubmit}
    >
      Submit Review
    </button>
  </div>

  {/* Display Reviews */}
  {reviews.length > 0 && (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
      <ul className="space-y-4">
        {reviews.map((review, index) => (
          <li
            key={index}
            className="border border-gray-300 rounded p-4 bg-gray-50"
          >
            <div className="flex items-center mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`text-lg ${
                    star <= review.rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="text-gray-700">{review.text}</p>
          </li>
        ))}
      </ul>
    </div>
   
  )}
 
</div>

    );
  };
export default Menu;
