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
import { IoSearch } from "react-icons/io5";
import mob from "../assets/mobiledrop.webp"
import { useNavigate } from "react-router-dom";

const options=[
    "gold","silver","diamond","wedding","ring","bangles","earings","necklace"
]

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
        phrase=options[i]
      }
    }
    if (search.trim().toLowerCase() !== ""  && phrase.trim().toLowerCase() === search.trim().toLowerCase()) {
      navigate(`/${search.trim()}`); 
      setsearch("")
      phrase=""
    }
    else if(phrase.trim().toLowerCase() !== ""){  navigate(`/${phrase.trim()}`); 
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

  return (<>
    
    <header className="fixed shadow-md w-full  h-auto md:h-40vh px-2 md:px-4 z-50 bg-pink-100">
  
      {/*  mobile Desktop Navbar */}
      <div className="flex flex-col  gap-2 justify-between mt-5">
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
          <div className="hidden md:flex items-center border border-gray-300 rounded-lg overflow-hidden  ">
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 focus:outline-none "
             value={search}
              onChange={handlechange}

            />
            <button onClick={handleSearch} className="bg-blue-500 text-white px-4 rounded-2xl  hover:bg-red-600">
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
              <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center ">
                
              </div>
            </Link>
          </div>
           {/* wishlist Icon */}
          <div className="text-2xl text-slate-600">
            <Link to="/wishlist">
              <FaHeart />
            </Link>
          </div>
          {/* User Icon */}
          <div  className="text-2xl text-slate-600 ">
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



      <div className=" mx-auto block md:hidden flex items-center border w-auto border-gray-300 border-none rounded-2xl overflow-hidden ">
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

        <div className=" mt-auto w-full relative top-5 p-2 bg-gray-100 hidden md:block">
             
              <p className="text-lg mb-4">
                Discover our wide range of jewelry collections including gold, diamond, and silver!
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* Gold Collection */}
                <Link
                  to="/gold"
                  className="bg-white shadow-md p-4 rounded-lg text-center transition duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-yellow-200"
                >
                  Gold Collection
                </Link>
        
                {/* Diamond Collection */}
                <Link
                  to="/diamond"
                  className="bg-white shadow-md p-4 rounded-lg text-center transition duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-blue-200"
                >
                  Diamond Collection
                </Link>
        
                {/* Silver Collection */}
                <Link
                  to="/silver"
                  className="bg-white shadow-md p-4 rounded-lg text-center transition duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gray-200"
                >
                  Silver Collection
                </Link>
        
                {/* Wedding Wear */}
                <Link
                  to="/wedding"
                  className="bg-white shadow-md p-4 rounded-lg text-center transition duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-pink-50"
                >
                  Wedding Wear
                </Link>
              </div>
            </div>

      
      </header>
      </>
  );
};

export default Header;
