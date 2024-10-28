import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { useShopContext } from '../../context/ShopContext';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, category }) => {
  const { addToCart } = useShopContext();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image, quantity: 1 });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 space-y-2">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-red-600 hover:text-white transition-colors">
            <Heart size={20} />
          </button>
        </div>
      </div>
      <div className="p-4">
        <span className="text-sm text-gray-500">{category}</span>
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">{price.toFixed(2)} €</span>
          <button
            onClick={handleAddToCart}
            className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
