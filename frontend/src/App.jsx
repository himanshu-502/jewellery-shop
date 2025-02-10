import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AboutPage from "./pages/AboutPage.jsx"
import ContactPage from "./pages/ContactPage.jsx"
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import Collections from "./pages/Collections.jsx";
import ProductDesc from "./pages/ProductDesc.jsx";
import Cart from "./pages/Cart.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import Layout from "./pages/Layout.jsx";
import { CartWishlistProvider } from "./context/CartWishlistContext.jsx"
import { UserProfileProvider } from "./context/UserProfileContext.jsx";
import BlogRead from "./pages/BlogRead.jsx";

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
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProfileProvider>
    <CartWishlistProvider>
      <RouterProvider router={router} />
    </CartWishlistProvider>
  </UserProfileProvider>
);
