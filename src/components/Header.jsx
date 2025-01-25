import React from "react";
import { Link } from "react-router-dom";
import { useCartWishlist } from "./CartWishlistContext";
import logo from "../assets/icon.png";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
import { RiMenu3Fill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa6";
import { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import "../index.css"
import { IoSearch } from "react-icons/io5";
import mob from "../assets/mobiledrop.webp"
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { collections } from "./DataSet";

const options = collections.map((item) => item.label.toLowerCase());
const Header = () => {
  let phrase=""
  const navigate=useNavigate()
  const[search,setsearch]=useState("")
  const handlechange=(e)=>{
     setsearch(e.target.value)
  }
 
  const handleSearch = () => {
    for(let i=0;i<options.length;i++)
    {
      if(options[i].includes(search.trim().toLowerCase()))
      {
        phrase=options[i];
        break;
      }
    }
    if (search.trim().toLowerCase() !== ""  && phrase.trim().toLowerCase() === search.trim().toLowerCase()) {
      navigate(`/collections/${search.trim()}`); 
      setsearch("")
      phrase=""
    }
    else if(phrase.trim().toLowerCase() !== ""){  navigate(`/collections/${phrase.trim()}`); 
    setsearch("");phrase=""} 
    else {
      alert("Please enter a valid search term"); 
      setsearch("")
      phrase=""
    }
  };
  const[toggle,settoggle]=useState(false)
  const sidemenu=()=>{
    console.log("HII")
    settoggle(!toggle)
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
    sidemenu(); 
  };

  const [isHovered, setIsHovered] = useState(false);

  const { cart} = useCartWishlist();
  const totalQty = cart.reduce((total, item) => total + item.quantity, 0);
  
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };  


  return (<>
    
    <header className="fixed shadow-md w-full  h-auto md:h-40vh px-2 md:px-4 z-50 bg-pink-100">
  
      {/*  mobile Desktop Navbar */}
      <div className="flex flex-col  gap-2 justify-between  mt-5">
      <div className="flex items-center h-full justify-between   ">
        {/* Logo */}
        
        <Link to="/">
          <div className="h-10 ">
            <img src={logo} alt="Logo" className="h-full" />
          </div>
        </Link>
        

        {/* Desktop Navigation */}
        <div className=" md:flex items-center gap-20 mx-auto">
          {/* Search Bar */}
          <div className="hidden md:flex items-center border-gray-300 rounded-lg overflow-hidden  ">
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 focus:outline-none  "
             value={search}
              onChange={handlechange}

            />
            <button onClick={handleSearch} className="bg-blue-500 text-white px-4 rounded-2xl  hover:bg-red-600">
              Search
            </button>
          </div>
          </div>
          
          {/* Navigation Links */}
          <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-4 text-base md:text-lg mx-auto">
            <Link to="/" className=" hover:scale-120 hover:text-red-700 font-extralight hover:font-bold transition duration-300">
              Home
            </Link>
            
            <Link
              to="/about"
              className="hover:text-red-700 transition duration-300 font-extralight hover:font-bold hover:scale-120"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="hover:text-red-700 transition duration-300 font-extralight hover:font-bold hover:scale-140"
            >
              Contact Us
            </Link>
          </nav>
        

        {/* Icons */}
        
          
          {/* Cart Icon */}
          <div className="text-2xl text-slate-600 relative">
          <Link to="/cart" className="relative">
            <BsCartFill size={24} />
            {totalQty > 0 && (
              <div className="absolute -top-8 -right-8 text-white bg-red-500 h-5 w-5 rounded-full flex items-center justify-center text-xs font-bold">
                {totalQty}
              </div>
            )}
          </Link>
          </div>
           {/* wishlist Icon */}
          <div className="text-2xl text-slate-600">
            <Link to="/wishlist">
              <FaHeart />
            </Link>
          </div>
          {/* User Icon */}
          <div 
            className="relative text-2xl text-slate-600"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Link to="/account">
              <HiOutlineUserCircle />
            </Link>

            {isHovered && (
              <div
                className={`absolute right-0 top-12 bg-white shadow-xl border border-gray-200 rounded-lg w-64 p-4 z-50 transition-transform duration-300 ease-in-out ${
                  isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
                }`}
              >
                <h3 className="text-lg font-bold text-gray-800 mb-2">User Info</h3>
                <p className="text-sm text-gray-600">John Doe</p>
                <p className="text-sm text-gray-600">johndoe@example.com</p>
                <button
                  className="mt-3 w-full bg-red-400 text-white py-2 px-3 rounded hover:bg-red-600 transition duration-200"
                  onClick={() => console.log("Log Out")}
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
         

          {/* Menu Icon (Hidden on medium and larger screens) */}
          <div className="text-2xl text-slate-600 md:hidden">
      {isMenuOpen ? (
        <ImCancelCircle onClick={handleMenuToggle} />
      ) : (
        <RiMenu3Fill onClick={handleMenuToggle} />
      )}
    </div>
        </div>
        
      </div>



      <div className=" mx-auto block md:hidden flex items-center w-auto border-gray-300 border-none rounded-2xl overflow-hidden ">
            <input
              type="text"
              placeholder="Search..."
              className=" px-2 py-1 focus:outline-none"
              value={search}
              onChange={handlechange}
            />
            <button onClick={handleSearch} className="  hover:bg-red-600">
              <IoSearch/>
            </button>
          </div>
      </div>

       {/* Down Navigation */}
      

   {/* Menu DropDown */}

      {/* Mobile Navigation (Hidden for medium and larger screens) */}
     {/* <div className="flex flex-col md:hidden mt-4">
        <Link to="/" className="px-2 py-1 hover:bg-gray-100 rounded">
          Home
        </Link>
        <Link to="/menu" className="px-2 py-1 hover:bg-gray-100 rounded">
          Menu
        </Link>
        <Link to="/about" className="px-2 py-1 hover:bg-gray-100 rounded">
          About
        </Link>
        <Link to="/contact" className="px-2 py-1 hover:bg-gray-100 rounded">
          Contact
        </Link>
      </div>*/}
      <div className="md:hidden  flex flex-col flex-wrap  absolute w-full shadow-1xl rounded-lg bg-pink-100 h-auto duration-[400ms] " style={{right:toggle ? '0%' : '-100%'}}>
      <div className="flex  items-center gap-8 font-normal justify-between flex-col md:hidden mt-4">
        <Link to="/" className="underline  text-[rgb(255,165,0)] px-2 py-1 hover:bg-red-300 rounded">
          Home
        </Link>
       
        <Link to="/gold" className="text-[rgb(255,165,0)] px-2 py-1 underline hover:bg-red-300 rounded">
          Gold Collections
        </Link>
        <Link to="/diamond" className="text-[rgb(255,165,0)] px-2 py-1 underline hover:bg-red-300 rounded">
          Diamond Collections
        </Link>
        <Link to="/silver" className="text-[rgb(255,165,0)] px-2 py-1 underline hover:bg-red-300 rounded">
          Silver Collections
        </Link>
        <Link to="/wedding" className="text-[rgb(255,165,0)] px-2 py-1 underline hover:bg-red-300 rounded">
          Wedding Wear Collections
        </Link>

        <Link to="/about" className="text-[rgb(255,165,0)] px-2 py-1 underline hover:bg-red-300 rounded">
          About
        </Link>
        <Link to="/contact" className="text-[rgb(255,165,0)] px-2 py-1 underline hover:bg-red-300 rounded">
          Contact Us
        </Link>

      </div>

      <div className="bg-gray-200 flex flex-col gap-4 p-5  font-bold">
        <div>FAQS</div>
        <div>Customer Care</div>
        <div>Terms & Conditions </div>
        <div>Our Policy</div>
      </div>
      <div >
          <img className=" w-full opacity-90  h-40" src={mob}></img>
      </div>
      
      
      </div>

            <div
              className={`relative transition-opacity duration-500 ease-out ${
                isVisible ? "opacity-100" : "opacity-0"
              } ${isVisible ? "h-auto" : "h-0 overflow-hidden"}`}
              style={{ background: "indianred" }}
            >
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black-500 focus:outline-none z-10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L12 10.586l6.293-6.293a1 1 0 111.414 1.414L13.414 12l6.293 6.293a1 1 0 01-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 01-1.414-1.414L10.586 12 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
            
                {/* Marquee Content */}
                <div className="pl-8">
                  <Marquee speed={35}>
                    Discover our wide range of jewelry collections including gold, diamond, and silver!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    50% off on Making Charges&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Free shipping on Pre-Paid Orders&nbsp;&nbsp;&nbsp;&nbsp;
                  </Marquee>
                </div>
              </div>
            </div>
      
      </header>
      </>
  );
};

export default Header;
