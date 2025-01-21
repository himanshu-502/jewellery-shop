import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-black text-white ">
      {/* Footer Top Section */}
      <div className="container mx-auto  py-8 px-4 lg:px-0  ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/our-story" className="hover:text-gray-400">Our Story</Link></li>
              <li><Link to="/careers" className="hover:text-gray-400">Careers</Link></li>
              <li><Link to="/press" className="hover:text-gray-400">Press</Link></li>
            </ul>
          </div>

          {/* Column 2: Customer Care */}
          <div>
            <h3 className="text-lg font-bold mb-4">Customer Care</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="hover:text-gray-400">Contact Us</Link></li>
              <li><Link to="/faqs" className="hover:text-gray-400">FAQs</Link></li>
              <li><Link to="/returns" className="hover:text-gray-400">Returns & Exchanges</Link></li>
            </ul>
          </div>

          {/* Column 3: Policies */}
          <div>
            <h3 className="text-lg font-bold mb-4">Policies</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-gray-400">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-gray-400">Terms of Service</Link></li>
              <li><Link to="/shipping-policy" className="hover:text-gray-400">Shipping Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Connected</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-gray-800 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded w-full"
              >
                Subscribe
              </button>
            </form>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" className="text-xl hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook text-3xl text-blue-400"></i>
              </a>
              <a href="https://instagram.com" className="text-xl hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram text-3xl text-red-300"></i>
              </a>
              <a href="https://twitter.com" className="text-xl hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter text-3xl text-blue-700"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-gray-900 py-4 shadow-2xl border-b-slate-700">
        <div className="container mx-auto text-center text-sm">
          <p>&copy; 2025 EagleView JewelTechs Jeweller. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer