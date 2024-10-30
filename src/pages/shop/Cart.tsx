import React, { useState, useEffect } from 'react';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import { getCart, updateQuantity, removeFromCart, getCartTotal } from './cartUtils';
import { CartItem } from '../../types/cart';
import { useNavigate } from 'react-router-dom';
import CheckoutPage from './Checkout';

const CartPage = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [cartNotification, setCartNotification] = useState<string | null>(null);

  useEffect(() => {
    setCart(getCart());
    setIsLoading(false);
  }, []);

  const handleUpdateQuantity = (productId: number, newQuantity: number) => {
    const updatedCart = updateQuantity(productId, newQuantity) as CartItem[];
    setCart(updatedCart);
  };

  const handleRemoveItem = (productId: number) => {
    const updatedCart = removeFromCart(productId) as CartItem[];
    setCart(updatedCart);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center py-12">
          <ShoppingBag className="w-16 h-16 text-gray-400 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-600 mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-4">Add some items to your cart to continue shopping</p>
          <button 
            onClick={() => window.history.back()}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cart.map((item) => (
            <div 
              key={item.id}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-white rounded-lg shadow-md mb-4 animate-fade-in"
            >
              <div className="w-full sm:w-24 h-24 bg-gray-200 rounded-lg"></div>
              
              <div className="flex-1">
                <h3 className="font-semibold mb-1">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-2">${item.price.toFixed(2)}</p>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  
                  <span className="w-8 text-center">{item.quantity}</span>
                  
                  <button
                    onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="p-2 text-gray-500 hover:text-red-500 rounded-full hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>${getCartTotal(cart).toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span>Free</span>
              </div>
              <div className="h-px bg-gray-200 my-2"></div>
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${getCartTotal(cart).toFixed(2)}</span>
              </div>
            </div>
            
            <CheckoutPage cartItems={cart} onCheckout={async () => {
              // Handle post-checkout logic like clearing the cart
            }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;