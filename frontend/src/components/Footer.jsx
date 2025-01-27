import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { serviceId, templateId, publicKey } from '../data/DataSet';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    // Check if email is not empty and valid
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");

    emailjs
      .send(
        serviceId,
        templateId,
        { user_email: email },
        publicKey
      )
      .then(
        (response) => {
          // console.log("Email sent successfully:", response.status, response.text);
          setSubscribed(true);
        },
        (error) => {
          // console.error("Failed to send email:", error);
          setError("Failed to subscribe. Please try again.");
        }
      );
  };

  return (
    <footer className="bg-black text-white "> {/* Footer Section */}
      <div className="container mx-auto py-4 px-5 lg:px-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-gray-400">Our Story</Link></li>
              <li><Link to="/about" className="hover:text-gray-400">Careers</Link></li>
              <li><Link to="/about" className="hover:text-gray-400">Press</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Customer Care</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="hover:text-gray-400">Contact Us</Link></li>
              <li><Link to="/contact" className="hover:text-gray-400">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-gray-400">Returns & Exchanges</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Policies</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-gray-400">Privacy Policy</Link></li>
              <li><Link to="/about" className="hover:text-gray-400">Terms of Service</Link></li>
              <li><Link to="/about" className="hover:text-gray-400">Shipping Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Stay Connected</h3>
            {!subscribed ? (
              <form className="space-y-4" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-800 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded w-full"
                >
                  Subscribe
                </button>
                {error && <p className="text-red-500 text-sm">{error}</p>}
              </form>
            ) : (
              <p className="text-green-500 text-sm">You are subscribed!</p>
            )}
            <div className="flex space-x-4 ">
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

      <div className="bg-gray-900  shadow-2xl border-b-slate-700">
        <div className="container mx-auto text-center text-sm">
          <p>&copy; 2025 EagleView JewelTechs Jeweller. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
