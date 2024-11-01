import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { Search, ShoppingCart, User, UserPlus } from 'lucide-react';
import { useShopContext } from '../../context/ShopContext';

const ShopHeader = () => {
  const { cartItems } = useShopContext();
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const SHOP_BASE_PATH = '/boutique';



  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
    if (e.target.value) {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000); // Hide message after 3 seconds
    }
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link to={SHOP_BASE_PATH} className="flex-shrink-0 flex items-center">
              <img src={logo} alt="Arch-Decor Logo" className="w-6 h-9 mr-2" />
              <span className="text-red-600 text-2xl font-bold">KMT Shop</span>
            </Link>
            
            <div className="relative">
            
              {showMessage && (
                <div className="absolute top-full left-0 mt-2 w-64 p-3 bg-yellow-50 border border-yellow-200 rounded-md shadow-lg z-50">
                  <p className="text-sm text-yellow-800">
                    Désolé, les données pour ce pays ne sont pas encore disponibles.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher un produit..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link to={`${SHOP_BASE_PATH}/register`} className="text-gray-600 hover:text-red-600">
              <span className="hidden md:inline">S'inscrire</span>
              <UserPlus size={24} className="md:hidden" />
            </Link>
            <Link to={`${SHOP_BASE_PATH}/account`} className="text-gray-600 hover:text-red-600">
              <User size={24} />
            </Link>
            <Link to={`${SHOP_BASE_PATH}/cart`} className="text-gray-600 hover:text-red-600 relative">
              <ShoppingCart size={24} />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ShopHeader;
