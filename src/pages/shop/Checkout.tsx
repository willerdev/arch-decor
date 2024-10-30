import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // If using React Router for navigation
import { getUser } from './authUtils'; // Mock function for checking user login
import { CartItem } from '../../types/cart';
const CheckoutPage = ({ cartItems, onCheckout }: { 
  cartItems: CartItem[];
  onCheckout?: () => Promise<void>;
}) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();
  const user = getUser();

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    setTotalAmount(total);
  }, [cartItems]);

  const handleCheckout = async () => {
    if (!user) {
      alert("Please sign in to proceed with checkout.");
      navigate('/boutique/login');
      return;
    }

    // Navigate to payment options page with cart data
    navigate('/boutique/payment-options', {
      state: {
        cartItems,
        totalAmount
      }
    });
  };

  return (
    <div className="checkout-page">
      <h2 className="text-2xl font-bold mb-4">Checkouts</h2>
      <ul className="mb-4">
        {cartItems.map(item => (
          <li key={item.id} className="border-b py-2">
            <p>{item.name} - ${item.price}</p>
          </li>
        ))}
      </ul>
      <p className="text-lg font-semibold mb-4">Total: ${totalAmount.toFixed(2)}</p>
      <button
        onClick={handleCheckout}
        disabled={isProcessing}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg"
      >
        {isProcessing ? 'Processing...' : 'Complete Checkout'}
      </button>
    </div>
  );
};

export default CheckoutPage;
