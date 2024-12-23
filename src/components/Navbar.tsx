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
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src={logo} alt="Arch-Decor Logo" className="w-6 h-9 mr-2" />
              <span className="text-red-600 text-2xl font-bold">KMT Shop</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/architecture" className="text-gray-700 hover:text-red-600">Why KMT?</Link>
            <div className="relative group">
              <Link to="/decoration" className="text-gray-700 hover:text-red-600">About</Link>
              <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out bg-white shadow-md py-2 mt-2">
                <Link to="#" className="block px-4 py-2 text-gray-700 hover:text-red-600 whitespace-nowrap">About Us</Link>
                <Link to="/african-history" className="block px-4 py-2 text-gray-700 hover:text-red-600 whitespace-nowrap">African History</Link>
                <Link to="/african-updates" className="block px-4 py-2 text-gray-700 hover:text-red-600 whitespace-nowrap">African Updates</Link>
              </div>
            </div>
            <Link to="/projets" className="text-gray-700 hover:text-red-600">Transit or Transport</Link>
            <div className="relative group">
              <Link to="#" className="text-gray-700 hover:text-red-600">Contact</Link>
              <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out bg-white shadow-md py-2 mt-2">
                <Link to="/contact/france" className="block px-4 py-2 text-gray-700 hover:text-red-600 whitespace-nowrap">KMT France</Link>
                <Link to="/contact/rwanda" className="block px-4 py-2 text-gray-700 hover:text-red-600 whitespace-nowrap">KMT Rwanda</Link>
              </div>
            </div>
            <Link to="/boutique" className="text-gray-700 hover:text-red-600">Shop</Link>
            <Link to="/equipe" className="text-gray-700 hover:text-red-600">Our Team</Link>
        
            <div className="relative group">
              <Link to="#" className="text-gray-700 hover:text-red-600">Services</Link>
              <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out bg-white shadow-md py-2 mt-2">
                <Link to="#selling" className="block px-4 py-2 text-gray-700 hover:text-red-600 whitespace-nowrap">Selling</Link>
                <Link to="#delivering" className="block px-4 py-2 text-gray-700 hover:text-red-600 whitespace-nowrap">Delivering</Link>
                <Link to="#payment" className="block px-4 py-2 text-gray-700 hover:text-red-600 whitespace-nowrap">Payment</Link>
              </div>
            </div>
{/*             
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="text-gray-700 hover:text-red-600">
              <Search size={20} />
            </button>
            
            <button 
              onClick={toggleCart} 
              className="text-gray-700 hover:text-red-600 relative"
            >
              <ShoppingCart size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </button> */}
          </div>

          {/* Mobile menu button */}
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

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          {/* <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/architecture" className="block px-3 py-2 text-gray-700 hover:text-red-600">Architecture</Link>
            <Link to="/decoration" className="block px-3 py-2 text-gray-700 hover:text-red-600">About</Link>
            <Link to="/african-history" className="block px-3 py-2 ml-4 text-gray-700 hover:text-red-600">African History</Link>
            <Link to="/african-updates" className="block px-3 py-2 ml-4 text-gray-700 hover:text-red-600">African Updates</Link>
            <Link to="/projets" className="block px-3 py-2 text-gray-700 hover:text-red-600">Nos Projets</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-red-600">Contact</Link>
            <Link to="/contact/france" className="block px-3 py-2 ml-4 text-gray-700 hover:text-red-600">KMT France</Link>
            <Link to="/contact/rwanda" className="block px-3 py-2 ml-4 text-gray-700 hover:text-red-600">KMT Rwanda</Link>
            <Link to="/boutique" className="block px-3 py-2 text-gray-700 hover:text-red-600">Boutique</Link>
            <Link to="/equipe" className="block px-3 py-2 text-gray-700 hover:text-red-600">Notre Équipe</Link>
          </div> */}
        </div>
      )}

      {/* Search overlay */}
      {isSearchOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4">
          <div className="max-w-7xl mx-auto">
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;