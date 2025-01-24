import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "../App.css";
import image1 from '../assets/gold.png';
import image2 from '../assets/earings.webp';
import image3 from '../assets/ring.avif';
import image4 from '../assets/necklace.jpg';
import ProductCard from "./ProductCard";
import trend1 from '../assets/trend1.jpeg';
import trend2 from '../assets/trend2.webp';
import trend3 from '../assets/trend3.jpg';
import trend4 from '../assets/trend4.webp';
import BlogCard from "./BlogCard";
import blog1 from "../assets/blog1.jpeg"
import blog2 from "../assets/blog2.jpg"
import blog3 from "../assets/blog3.jpg"
import LocationCard from "./LocationCard";
import silver1 from "../assets/silverring.jpg"
import diamond5 from "../assets/diamondbangles1.webp"
import gold3 from "../assets/goldnecklace.jpg";
import diamond3 from "../assets/diamondnecklace.jpeg"

const locations = [
    {
      title: 'Flagship',
      address: 'PP Tower, H - 5, Netaji Subhash Place, Pitampura, Delhi, 110034',
      phone: '+91 84482 25844,70425 00206',
      directionsLink: '#',
    },
    {
      title: 'South Extension Branch',
      address: 'A-13, South Extension, Part-1, First Floor, New Delhi-110049',
      phone: '+011-41100600,+011-41100700',
      directionsLink: '#',
    },
    {
      title: 'Indirapuram Branch',
      address:
        'G-10, Krishna Apra Shopping Complex, Vaibhav Khand, Indirapuram Ghaziabad (U.P)-201014',
      phone: '+91 981 097 4147',
      directionsLink: '#',
    },
    {
      title: 'Gurugram Branch',
      address:
        '415, Ramleela Ground, Sadar Bazarr, Opposite- Hanuman Mandir, Gurugram-122001',
      phone: '+91 84482 25844',
      directionsLink: '#',
    },
  ];

  const blogs = [
    {
      image: blog1,
      date: 'January 14, 2025',
      title: 'Make Your Lohri And Makar Sankranti Special With Eagleview JewelTech Jewellers',
      link: '#',
    },
    {
      image: blog2,
      date: 'January 16, 2025',
      title: 'Iconic Celebrity Jewellery Trends For 2025',
      link: '#',
    },
    {
      image: blog3,
      date: 'January 18, 2024',
      title: 'How To Choose The Perfect Gold Jewellery For Winter Weddings',
      link: '#',
    },
  ];

  const products = [
    {
      id: 32,
      name: "Ritika Lovely Diamond Earings",
      price: "28,429.00",
      image: [trend3, trend4],
      desc: "For a doubly charming accessory to aestheticize your Office Wear go for this Winsome Dual Heart Gold Bracelet crafted in 22 Karat Yellow Gold. With this bracelet, win over minds with your professional expertise and win over hearts with your elegant style",
    },
    {
      id:33,
      image: [trend1, trend2],
      name: 'Adya Classic Gold Bracelet',
      price: 64240,
      desc: "For a doubly charming accessory to aestheticize your Office Wear go for this Winsome Dual Heart Gold Bracelet crafted in 22 Karat Yellow Gold. With this bracelet, win over minds with your professional expertise and win over hearts with your elegant style",
    },
    {
      id:34,
      image: [trend2, trend3],
      name: 'Shubhi Pleasing  Gold Earrings',
      price: 21635,
      desc: "For a doubly charming accessory to aestheticize your Office Wear go for this Winsome Dual Heart Gold Bracelet crafted in 22 Karat Yellow Gold. With this bracelet, win over minds with your professional expertise and win over hearts with your elegant style",
    },
    {
      id:35,
      image: [trend3, trend1],
      name: 'Brezza Red & White Diamond Earrings',
      price: 47663,
      desc: "For a doubly charming accessory to aestheticize your Office Wear go for this Winsome Dual Heart Gold Bracelet crafted in 22 Karat Yellow Gold. With this bracelet, win over minds with your professional expertise and win over hearts with your elegant style",
    },
   
  ];

  const stocks = [
        {
            id: 30,
            name: "Harshika Stunning Gold Necklace",
            price: "18,754.00",
            image: [gold3],
            desc: "For a doubly charming accessory to aestheticize your Office Wear go for this Winsome Dual Heart Gold Bracelet crafted in 22 Karat Yellow Gold. With this bracelet, win over minds with your professional expertise and win over hearts with your elegant style",
        },
    {
            id: 32,
            name: "Ritika Lovely Diamond Necklace",
            price: "28,429.00",
            image: [diamond3],
            desc: "For a doubly charming accessory to aestheticize your Office Wear go for this Winsome Dual Heart Gold Bracelet crafted in 22 Karat Yellow Gold. With this bracelet, win over minds with your professional expertise and win over hearts with your elegant style",
        },
    {
            id: 16,
            name: "Harshika Stunning Silver Wedding Ring",
            price: "18,754.00",
            image: [silver1],
            desc: "For a doubly charming accessory to aestheticize your Office Wear go for this Winsome Dual Heart Gold Bracelet crafted in 22 Karat Yellow Gold. With this bracelet, win over minds with your professional expertise and win over hearts with your elegant style",
        },
   
   
  ];
  
const HomePage = () => {
  const [timeLeft, setTimeLeft] = useState(10 * 60 * 60);

  // Effect to handle the countdown timer
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerInterval); // Cleanup interval on unmount
  }, [timeLeft]);

  // Function to format time into HH:MM:SS
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };
  return (
    <>
   <div className="mt-6 flex flex-col  gap-10">
    {/*Whats mind*/}
    <div className=" font-serif  text-center mt-5 mb-0 md:mb-3 text-4xl font">What's on <span className="text-red-400 font-semibold">Your Mind!! </span></div>
     {/*Categories*/}
  <div className="image-container mb-5">
    <Link to="/bangles">
      <div className="image-wrapper">
        <img src={image1} alt="Image 1" className="hover:scale-110" />
        <p>Bangles</p>
      </div></Link>
      <Link to="/earings">
      <div className="image-wrapper">
        <img src={image2} alt="Image 2"  className="hover:scale-110"/>
        <p>Earings</p>
      </div></Link>
      <Link to="/ring">
      <div className="image-wrapper">
        <img src={image3} alt="Image 3"  className="hover:scale-110"/>
        <p>Rings</p>
      </div></Link>
      <Link to="/necklace">
      <div className="image-wrapper">
        <img src={image4} alt="Image 4"  className="hover:scale-110" />
        <p>Necklace</p>
      </div></Link>
    </div>
   

  </div>
  
    {/*Trending*/}
  <div className="  text-center mt-5 mb-0 md:mb-4 text-4xl  font-serif ">Trending <span >Jewellery</span></div>
   {/*Trending Sections*/}
   <div className="product-list">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
     {/*Limited*/}
   <div className="   text-center mt-7 mb-0 md:mb-2 text-4xl  font-serif ">Limited <span >Stock</span></div>
   {/*Limited Sections*/}
   <div className="text-[20px] mt-2 mb-3 p-1  text-center bg-yellow-100 text-red-500 ">
    Ends in :
        {  timeLeft > 0 ? formatTime(timeLeft) : "Time's up!"}
      </div>
   <div className="product-list">
      {stocks.map((stock, index) => (
        <ProductCard key={index} product={stock} />
      ))}
    </div>
 {/*Blog Sections*/}
    <div className="blog-list">
      <h2 className="blog-list-title text-4x">Latest Blogs</h2>
      <div className="blog-list-grid">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
 {/*Location Sections*/}
 <div className="our-locations">
      <h2 className="locations-title">Our Locations</h2>
      <div className="locations-grid">
        {locations.map((location, index) => (
          <LocationCard key={index} location={location} />
        ))}
      </div>
    </div>
  </>
  );
};

export default HomePage;
