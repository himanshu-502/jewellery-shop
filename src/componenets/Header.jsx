import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icon.png";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
import { RiMenu3Fill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa6";
import { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import "../index.css"
const Header = () => {
  const[toggle,settoggle]=useState(false)
  const sidemenu=()=>{
    console.log("HII")
    settoggle(!toggle)
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
    sidemenu(); // Call your sidemenu function here
  };
  return (<>
    
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-pink-100">
      {/* Desktop Navbar */}
      <div className="flex items-center h-full justify-between  ">
        {/* Logo */}
        <Link to="/">
          <div className="h-10 ">
            <img src={logo} alt="Logo" className="h-full" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className=" md:flex items-center gap-20 mx-auto">
          {/* Search Bar */}
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden ">
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-4 rounded-2xl  hover:bg-red-600">
              Search
            </button>
          </div>

          {/* Navigation Links */}
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
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          
          {/* Cart Icon */}
          <div className="text-2xl text-slate-600 relative">
            <Link to="/cart">
              <BsCartFill />
            </Link>
          </div>
           {/* wishlist Icon */}
          <div className="text-2xl text-slate-600">
            <Link to="/account">
              <FaHeart />
            </Link>
          </div>
          {/* User Icon */}
          <div className="text-2xl text-slate-600">
            <Link to="/account">
              <HiOutlineUserCircle />
            </Link>
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

       {/* Down Navigation */}
       <div className="hidden md:flex items-center justify-center shadow-md h-auto">
       <Link
              to="/gold"
              className="mx-auto hover:text-red-700 transition duration-300 font-extralight hover:font-bold hover:scale-120"
            >
              Gold
            </Link>

            <Link
              to="/diamond"
              className="mx-auto hover:text-red-700 transition duration-300 font-extralight hover:font-bold hover:scale-120"
            >
              Diamond
            </Link>

            <Link
              to="/silver"
              className="mx-auto hover:text-red-700 transition duration-300 font-extralight hover:font-bold hover:scale-120"
            >
             Silver
            </Link>

            <Link
              to="/wedding"
              className="mx-auto hover:text-red-700 transition duration-300 font-extralight hover:font-bold hover:scale-120"
            >
              Wedding Wear
            </Link>

       </div>


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
      <div className="md:hidden  absolute w-full shadow-1xl rounded-lg bg-[rgb(242,240,239)] h-auto duration-[400ms] " style={{right:toggle ? '0%' : '-100%'}}>
      <div className="flex  items-center font-normal justify-between flex-col md:hidden mt-4">
        <Link to="/" className="underline  text-[rgb(255,165,0)] px-2 py-1 hover:bg-red-300 rounded">
          Home
        </Link>
        <Link to="/gold" className="text-[rgb(255,165,0)] px-2 py-1 underline hover:bg-red-300 rounded">
          Gold
        </Link>
        <Link to="/diamond" className="text-[rgb(255,165,0)] px-2 py-1 underline hover:bg-red-300 rounded">
          Diamond
        </Link>
        <Link to="/silver" className="text-[rgb(255,165,0)] px-2 py-1 underline hover:bg-red-300 rounded">
          Silver
        </Link>
        <Link to="/wedding" className="text-[rgb(255,165,0)] px-2 py-1 underline hover:bg-red-300 rounded">
          Wedding Wear
        </Link>

        <Link to="/about" className="text-[rgb(255,165,0)] px-2 py-1 underline hover:bg-red-300 rounded">
          About
        </Link>
        <Link to="/contact" className="text-[rgb(255,165,0)] px-2 py-1 underline hover:bg-red-300 rounded">
          Contact Us
        </Link>
      </div>
      </div>



      
      </header>
      </>
  );
};

export default Header;
