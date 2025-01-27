import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCartWishlist } from "./CartWishlistContext";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
import { RiMenu3Fill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa6";
import { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import "../index.css"
import { IoSearch } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import mob from "../assets/mobiledrop.webp"
import { collections } from "../data/DataSet";
import logo2 from "../assets/eagleview_jewelogo.png";
import "../fonts/fonts.css";
import { useUserProfile } from "./UserProfileContext";

const options = collections.map((item) => item.label.toLowerCase());
const Header = () => {

  let phrase = ""
  const navigate = useNavigate()

  const [search, setsearch] = useState("")
  const { userProfile } = useUserProfile();

  const handlechange = (e) => {
    setsearch(e.target.value)
  }

  const handleSearch = () => {
    for (let i = 0; i < options.length; i++) {
      if (options[i].includes(search.trim().toLowerCase())) {
        phrase = options[i];
        break;
      }
    }
    if (search.trim().toLowerCase() !== "" && phrase.trim().toLowerCase() === search.trim().toLowerCase()) {
      navigate(`/collections/${search.trim()}`);
      setsearch("")
      phrase = ""
    }
    else if (phrase.trim().toLowerCase() !== "") {
      navigate(`/collections/${phrase.trim()}`);
      setsearch(""); phrase = ""
    }
    else {
      alert("Please enter a valid search term");
      setsearch("")
      phrase = ""
    }
  };

  const [toggle, settoggle] = useState(false)

  const sidemenu = () => {
    // console.log("HII")
    settoggle(!toggle)
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
    sidemenu();
  };

  const [isHovered, setIsHovered] = useState(false);
  const { cart } = useCartWishlist();
  const totalQty = cart.reduce((total, item) => total + item.quantity, 0);

  const handleIconClick = () => {
    if (!userProfile) {
      navigate("/signup");
    }
  };


  return (
    <>

      <header className="fixed shadow-md w-full  h-auto md:h-40vh px-2 md:px-4 z-50 bg-pink-100">

        {/*  mobile Desktop Navbar */}
        <div className="flex flex-col  gap-2 justify-between  mt-3">
          <div className="flex items-center h-full justify-evenly   ">

            <Link to="/">
              <div className="h-10 logo">
                <img src={logo2} alt="Logo" className="h-full" />
              </div>
            </Link>
            <div className="logoname">
              JewelTech
            </div>

            <div className=" md:flex items-center gap-20 mx-auto search1">

              <div className="hidden md:flex items-center border-gray-300 rounded-md overflow-hidden search1 ">
                <input
                  type="text"
                  placeholder="Search for Jewellery..."
                  className="px-2 py-1 focus:outline-none search "
                  value={search}
                  onChange={handlechange}

                /><FiSearch className="icon_search transition duration-300" onClick={handleSearch} />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <nav className="hidden md:flex gap-4 text-base md:text-lg mx-auto">
                <Link to="/" className=" hover:scale-120 menu-item font-bold hover:font-bold transition duration-300">
                  Home
                </Link>

                <Link
                  to="/about"
                  className="menu-item transition duration-300 font-bold hover:font-bold hover:scale-120"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="menu-item transition duration-300 font-bold hover:font-bold hover:scale-140"
                >
                  Contact Us
                </Link>
              </nav>

              <div className="text-2xl text-slate-600 relative">
                <Link to="/cart" className="relative menu-item">
                  <BsCartFill size={24} />
                  {totalQty > 0 && (
                    <div className="absolute -top-2 -right-2 text-white bg-red-500 h-5 w-5 rounded-full flex items-center justify-center text-xs font-bold">
                      {totalQty}
                    </div>
                  )}
                </Link>
              </div>

              <div className="rgb(120, 29, 66)  menu-item">
                <Link to="/wishlist">
                  <FaHeart width={24} height={24} />
                </Link>
              </div>
              <div
                className="relative text-2xl text-slate-600"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div onClick={handleIconClick}>
                  <HiOutlineUserCircle className="menu-item cursor-pointer" />
                </div>

                {isHovered && (
                  <div
                    className={`absolute right-0 top-12 bg-white shadow-xl border border-gray-200 rounded-lg w-64 p-4 z-50 transition-transform duration-300 ease-in-out ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
                      }`}
                  >
                    {userProfile ? (
                      <>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">User Info</h3>
                        <p className="text-sm text-gray-600">
                          {userProfile.firstName} {userProfile.lastName}
                        </p>
                        <p className="text-sm text-gray-600">{userProfile.email}</p>
                      </>
                    ) : (
                      <p className="text-sm text-gray-600">
                        Click on the icon to Login/Signup.
                      </p>
                    )}
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
              <IoSearch />
            </button>
          </div>
        </div>

        <div className="md:hidden  flex flex-col flex-wrap  absolute w-full shadow-1xl rounded-lg bg-pink-100 h-auto duration-[400ms] " style={{ right: toggle ? '0%' : '-100%' }}>
          <div className="flex  items-center gap-8 font-normal justify-between flex-col md:hidden mt-4">
            <Link to="/" className="menu-item  px-2 py-1 hover:bg-red-300 rounded">
              Home
            </Link>

            <Link to="/gold" className="menu-item  px-2 py-1  hover:bg-red-300 rounded">
              Gold Collections
            </Link>
            <Link to="/diamond" className="menu-item  px-2 py-1  hover:bg-red-300 rounded">
              Diamond Collections
            </Link>
            <Link to="/silver" className="menu-item  px-2 py-1  hover:bg-red-300 rounded">
              Silver Collections
            </Link>
            <Link to="/wedding" className=" menu-item px-2 py-1  hover:bg-red-300 rounded">
              Wedding Wear Collections
            </Link>

            <Link to="/about" className="menu-item  px-2 py-1  hover:bg-red-300 rounded">
              About
            </Link>
            <Link to="/contact" className="menu-item  px-2 py-1  hover:bg-red-300 rounded">
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



      </header>
    </>
  );
};

export default Header;
