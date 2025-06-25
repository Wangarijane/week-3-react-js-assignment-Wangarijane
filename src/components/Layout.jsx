import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

/**
 * Layout component to wrap pages with Navbar and Footer
 */
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
