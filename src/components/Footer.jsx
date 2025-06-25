import React from "react";

/**
 * Footer component with copyright and links
 */
const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-4 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} MyReactApp. All rights reserved.</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
