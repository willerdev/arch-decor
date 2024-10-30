import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { Search, ShoppingCart, User, UserPlus } from 'lucide-react';
import { useShopContext } from '../../context/ShopContext';

const ShopHeader = () => {
  const { cartItems } = useShopContext();
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const SHOP_BASE_PATH = '/boutique';

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to={SHOP_BASE_PATH} className="flex-shrink-0 flex items-center">
            <img src={logo} alt="Arch-Decor Logo" className="w-6 h-9 mr-2" />
            <span className="text-red-600 text-2xl font-bold">Arch-Shop</span>
          </Link>

          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher un produit..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              {/* <Search className="absolute right-81 top-2.5 text-gray-400" size={20} /> */}
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
