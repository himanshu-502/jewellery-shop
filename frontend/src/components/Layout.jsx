import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="flex-grow  md:mt-20 md:p-3">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
