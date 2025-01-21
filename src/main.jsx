import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx"; // Your main App component
import AboutPage from "./components/AboutPage.jsx"
import ContactPage from "./components/ConatctPage.jsx"
import Account from "./components/Account.jsx";
import Login from "./components/Login.jsx";
import Gold from "./components/Gold.jsx";
import Silver from "./components/Silver.jsx";
import Diamond from "./components/Diamond.jsx";
import Wedding from "./components/Wedding.jsx";
import Ring from "./components/ring.jsx";
import Necklace from "./components/necklace.jsx";
import Earings from "./components/earings.jsx";
import Bangles from "./components/bangles.jsx";
import Menu from "./components/Menu.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css"; // Your global CSS styles
import HomePage from "./components/HomePage.jsx";
import Layout from "./components/Layout.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      {/* <Route path="menu" element={<Menu />} /> */}
     
      <Route path="about" element={<AboutPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="account" element={<Account />} />
      <Route path="login" element={<Login />} />
      <Route path="gold" element={<Gold />} />
      <Route path="silver" element={<Silver />} />
      <Route path="diamond" element={<Diamond />} />
      <Route path="wedding" element={<Wedding />} />
      <Route path="ring" element={<Ring />} />
      <Route path="earings" element={<Earings />} />
      <Route path="necklace" element={<Necklace />} />
      <Route path="bangles" element={<Bangles />} />
      <Route path="menu/:filter" element={<Menu />} />




    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
