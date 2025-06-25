import React from "react";
import { Link } from "react-router-dom";

/**
 * Navbar component for site navigation
 */
const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold">
          🌟 MyReactApp
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/tasks" className="hover:underline">
            Tasks
          </Link>
          <Link to="/api" className="hover:underline">
            API
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
