import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AboutPage from "./pages/About/AboutPage.jsx"
import BlogRead from "./pages/Blog/BlogRead.jsx";
import Cart from "./pages/CartWishlist/Cart.jsx";
import Collections from "./pages/Collections/Collections.jsx";
import ContactPage from "./pages/About/ContactPage.jsx"
import HomePage from "./pages/HomePage/HomePage.jsx";
import Layout from "./pages/HomePage/Layout.jsx";
import Login from "./pages/Auth/Login.jsx";
import ProductDesc from "./pages/ProductDescription/ProductDesc.jsx";
import SignUp from "./pages/Auth/SignUp.jsx";
import UserProfile from "./pages/Profile/UserProfile.jsx";
import Wishlist from "./pages/CartWishlist/Wishlist.jsx";
import "./index.css";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="collections/:collectionName" element={<Collections />} />
        <Route path="menu/:productId" element={<ProductDesc />} />
        <Route path="cart" element={<Cart />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="blogread/:id" element={<BlogRead />} />
        <Route path="user/:activepage" element={<UserProfile/>} />
      </Route>
    )
  );
  
  return <RouterProvider router={router} />
};


ReactDOM.createRoot(document.getElementById("root")).render(<App />);
