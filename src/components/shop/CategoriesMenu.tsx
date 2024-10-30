import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  'Tous',
  'Meubles',
  'Décoration'

];

const CategoriesMenu = () => {
  return (
    <nav className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-8 h-12">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/boutique/category/${category.toLowerCase().replace(/ /g, '-')}`}
              className="text-gray-600 hover:text-white hover:bg-red-600 text-sm font-medium rounded-md px-2 py-1"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CategoriesMenu;
