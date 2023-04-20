// components/Nav.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow py-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Home
          </Link>
        </li>
        <li>
          <Link to="/shop" className="text-blue-600 hover:text-blue-800">
            Shop
          </Link>
        </li>
        <li>
          <Link to="/about-us" className="text-blue-600 hover:text-blue-800">
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
