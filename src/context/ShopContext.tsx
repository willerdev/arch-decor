import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCart } from '../pages/shop/cartUtils';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface ShopContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  isCartOpen: boolean;
  toggleCart: () => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

// Register service worker
const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(
        '/dev-sw.js?dev-sw', // This is the development service worker
        {
          type: process.env.NODE_ENV === 'development' ? 'module' : 'classic',
          scope: '/'
        }
      );
      console.log('Cart ServiceWorker registered:', registration);
    } catch (error) {
      console.error('ServiceWorker registration failed:', error);
    }
  }
};

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Register service worker on mount
  useEffect(() => {
    registerServiceWorker();

    // Listen for cart updates from other tabs/windows
    navigator.serviceWorker.addEventListener('message', (event) => {
      if (event.data.type === 'CART_UPDATED') {
        setCartItems(event.data.payload);
      }
    });

    // Load initial cart
    const savedCart = getCart();
    if (savedCart) {
      setCartItems(savedCart);
    }

    return () => {
      navigator.serviceWorker.removeEventListener('message', () => {});
    };
  }, []);

  const broadcastCartUpdate = (newCart: CartItem[]) => {
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: 'CART_UPDATE',
        payload: newCart
      });
    }
  };

  const addToCart = (item: CartItem) => {
    setCartItems(prev => {
      const existingItem = prev.find(i => i.id === item.id);
      const newCart = existingItem
        ? prev.map(i => i.id === item.id 
            ? { ...i, quantity: i.quantity + (item.quantity || 1) }
            : i
          )
        : [...prev, { ...item, quantity: item.quantity || 1 }];
      
      // Save to localStorage
      localStorage.setItem('cart', JSON.stringify(newCart));
      
      // Broadcast update
      broadcastCartUpdate(newCart);
      
      return newCart;
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => {
      const newCart = prev.filter(item => item.id !== id);
      localStorage.setItem('cart', JSON.stringify(newCart));
      broadcastCartUpdate(newCart);
      return newCart;
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems(prev => {
      const newCart = quantity > 0
        ? prev.map(item => item.id === id ? { ...item, quantity } : item)
        : prev.filter(item => item.id !== id);
      
      localStorage.setItem('cart', JSON.stringify(newCart));
      broadcastCartUpdate(newCart);
      return newCart;
    });
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <ShopContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      isCartOpen,
      toggleCart
    }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShopContext = () => {
  const context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error('useShopContext must be used within a ShopProvider');
  }
  return context;
};