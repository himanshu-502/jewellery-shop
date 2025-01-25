import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AboutPage from "./components/AboutPage.jsx"
import ContactPage from "./components/ContactPage.jsx"
import Account from "./components/Account.jsx";
import Login from "./components/Login.jsx";
import Collections from "./components/Collections.jsx";
import Menu from "./components/ProductDesc.jsx";
import Cart from "./components/Cart.jsx";
import Wishlist from "./components/Wishlist.jsx";
import "./index.css"; 
import HomePage from "./components/HomePage.jsx";
import Layout from "./components/Layout.jsx";
import { CartWishlistProvider } from "./components/CartWishlistContext.jsx";
import BlogRead from "./components/BlogRead.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="account" element={<Account />} />
      <Route path="login" element={<Login />} />
      <Route path="collections/:collectionName" element={<Collections />} />
      <Route path="menu/:productId" element={<Menu />} />
      <Route path="cart" element={<Cart />} />
      <Route path="wishlist" element={<Wishlist />} />
      <Route path="blogread/:id" element={<BlogRead />} />


      
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <CartWishlistProvider>
    <RouterProvider router={router} />
    </CartWishlistProvider>
);
