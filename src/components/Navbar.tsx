import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart } from 'lucide-react';
import { useShopContext } from '../context/ShopContext';
import logo from '../images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { toggleCart, cartItems } = useShopContext();

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about-us" className="text-gray-700 hover:text-red-600">About Us</Link>
            <Link to="/projects" className="text-gray-700 hover:text-red-600">Projects</Link>
            <Link to="/contact" className="text-gray-700 hover:text-red-600">Contact</Link>
          </div>

          {/* Logo in the Center */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Logo" className="w-8 h-8 mr-2" />
              <span className="text-red-600 text-2xl font-bold">KMT Shop</span>
            </Link>
          </div>

          {/* Right Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className="text-gray-700 hover:text-red-600">Shop</Link>
            <Link to="/team" className="text-gray-700 hover:text-red-600">Our Team</Link>
            <Link to="/services" className="text-gray-700 hover:text-red-600">Services</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/about-us" className="block px-3 py-2 text-gray-700 hover:text-red-600">About Us</Link>
            <Link to="/projects" className="block px-3 py-2 text-gray-700 hover:text-red-600">Projects</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-red-600">Contact</Link>
            <Link to="/shop" className="block px-3 py-2 text-gray-700 hover:text-red-600">Shop</Link>
            <Link to="/team" className="block px-3 py-2 text-gray-700 hover:text-red-600">Our Team</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-red-600">Services</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
