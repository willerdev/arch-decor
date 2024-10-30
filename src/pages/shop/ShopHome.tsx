import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingCart, TrendingUp, Shield, Truck, Info, Smartphone, Shirt, Home as HomeIcon, Activity, BookOpen, Check } from 'lucide-react';
import { addToCart } from './cartUtils';
import { db } from '../../lib/firebaseConfig';
import { collection, getDocs, query, limit } from 'firebase/firestore';
import { Product } from '../../types/product';
import { Link } from 'react-router-dom';

const ShopHome = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [animatedElements, setAnimatedElements] = useState({});
  const [cartNotification, setCartNotification] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch products from Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsQuery = query(collection(db, 'products'), limit(8)); // Limit to 8 products initially
        const querySnapshot = await getDocs(productsQuery);
        const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Product[];
        
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Update the handler signature to use string ID
  const handleAddToCart = (product: Product) => {
    try {
      addToCart(product);
      setCartNotification(product.id);
      setTimeout(() => setCartNotification(null), 2000);
    } catch (error) {
      console.error('Error adding to cart:', error);
      // Optionally show an error message to the user
    }
  };

  // Add loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const heroSlides = [
    {
      id: 1,
      title: "Summer Collection",
      subtitle: "30% Off on Selected Items",
      bgColor: "bg-gradient-to-r from-blue-500 to-purple-500",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 2,
      title: "New Arrivals",
      subtitle: "Check out our latest products",
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 3,
      title: "Special Deals",
      subtitle: "Limited time offers",
      bgColor: "bg-gradient-to-r from-green-500 to-blue-500",
      image: "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  const categories = [
    { id: 1, name: "Electronics", color: "bg-red-400", icon: Smartphone },
    { id: 2, name: "Fashion", color: "bg-blue-400", icon: Shirt },
    { id: 3, name: "Home", color: "bg-green-400", icon: HomeIcon },
    { id: 4, name: "Sports", color: "bg-yellow-400", icon: Activity },
    { id: 5, name: "Books", color: "bg-purple-400", icon: BookOpen }
  ];

  const buyingSteps = [
    {
      icon: Search,
      title: "Browse Products",
      description: "Explore our wide range of products"
    },
    {
      icon: ShoppingCart,
      title: "Add to Cart",
      description: "Select your favorite items"
    },
    {
      icon: Shield,
      title: "Secure Checkout",
      description: "Fast and secure payment process"
    },
    {
      icon: Truck,
      title: "Quick Delivery",
      description: "Get your items delivered fast"
    }
  ];

  const shoppingTips = [
    {
      title: "Compare Prices",
      description: "Always check multiple sellers for the best deals"
    },
    {
      title: "Read Reviews",
      description: "Check customer reviews before making a purchase"
    },
    {
      title: "Check Size Charts",
      description: "Ensure proper fit by reviewing size guides"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 mt-10">
      {/* Hero Slider */}
      <div className="relative h-80 md:h-96 mb-12 rounded-lg overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full transition-all duration-700 transform ${
              index === activeSlide ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            } ${slide.bgColor}`}
          >
            <div className="flex flex-col items-center justify-center h-full text-white">
              <h2 className="text-4xl font-bold mb-2 animate-fade-in">{slide.title}</h2>
              <p className="text-xl animate-slide-up">{slide.subtitle}</p>
            </div>
          </div>
        ))}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeSlide ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">Shop by Category</h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`${category.color} w-20 h-20 md:w-24 md:h-24 rounded-full flex flex-col items-center justify-center cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-on-scroll`}
              style={{
                animationDelay: `${index * 100}ms`,
                opacity: 0,
                animation: 'fadeInUp 0.5s ease forwards'
              }}
            >
              <category.icon className="w-6 h-6 text-white mb-1" />
              <span className="text-white font-medium text-xs md:text-sm text-center px-1">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden animate-on-scroll"
            style={{
              animationDelay: `${Number(product.id) * 100}ms`,
              opacity: 0,
              animation: 'fadeInUp 0.5s ease forwards'
            }}
          >
            <Link to={`/boutique/product/${product.id}`} className="block">
              <div className="relative">
                <img 
                  src={product.image || "https://citroen.navigation.com/static/WFS/Shop-CitroenEMEA-Site/-/Shop-CitroenEMEA/en_GB/Product%20Not%20Found.png"}
                  alt={product.name}
                  className="w-full h-40 md:h-48 object-cover"
                />
                <button className="absolute top-2 right-2 p-2 bg-white/80 rounded-full hover:bg-white transition-all">
                  <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                </button>
              </div>
            </Link>
            <div className="p-4">
              <Link to={`/boutique/product/${product.id}`}>
                <h3 className="font-semibold mb-2 text-sm md:text-base hover:text-blue-500">{product.name}</h3>
              </Link>
              <p className="text-gray-600 mb-2 text-sm md:text-base">${product.price}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 relative"
                >
                  {cartNotification === product.id ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span className="hidden md:inline">Added</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-4 h-4" />
                      <span className="hidden md:inline">Cart</span>
                    </>
                  )}
                </button>
                <Link 
                  to={`/boutique/product/${product.id}`}
                  className="flex-1 border border-blue-500 text-blue-500 py-2 px-4 rounded-lg text-sm hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                >
                  <Info className="w-4 h-4" />
                  <span className="hidden md:inline">Details</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Buying Steps */}
      <div className="mb-12 mt-10">
        <h2 className="text-2xl font-bold text-center mb-8">How to Buy</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {buyingSteps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all animate-on-scroll"
              style={{
                animationDelay: `${index * 100}ms`,
                opacity: 0,
                animation: 'fadeInUp 0.5s ease forwards'
              }}
            >
              <step.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="font-semibold mb-2 text-center">{step.title}</h3>
              <p className="text-gray-600 text-sm text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Shopping Tips */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">Shopping Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {shoppingTips.map((tip, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg hover:shadow-md transition-all animate-on-scroll"
              style={{
                animationDelay: `${index * 100}ms`,
                opacity: 0,
                animation: 'fadeInUp 0.5s ease forwards'
              }}
            >
              <h3 className="font-semibold mb-2">{tip.title}</h3>
              <p className="text-gray-600 text-sm">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products Grid */}

      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slide-up {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          
          .animate-fade-in {
            animation: fade-in 0.5s ease-out;
          }
          
          .animate-slide-up {
            animation: slide-up 0.5s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default ShopHome;