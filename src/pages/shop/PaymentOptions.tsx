import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { processPayment } from './paymentUtils';

const PaymentOptions = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, totalAmount } = location.state || { cartItems: [], totalAmount: 0 };
  const [isProcessing, setIsProcessing] = useState(false);
  
  console.log("Location state:", location.state);
  console.log("Cart Items:", cartItems);
  console.log("Total Amount:", totalAmount);

  if (!location.state) {
    return (
      <div className="p-4 text-center">
        <p className="text-red-500">No cart data found. Please return to cart.</p>
        <button 
          onClick={() => navigate('/boutique/cart')}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Return to Cart
        </button>
      </div>
    );
  }

  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return (
      <div className="p-4 text-center">
        <p className="text-red-500">Your cart is empty. Please add items to your cart.</p>
        <button 
          onClick={() => navigate('/boutique/cart')}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Return to Cart
        </button>
      </div>
    );
  }

  if (!totalAmount || totalAmount <= 0) {
    return (
      <div className="p-4 text-center">
        <p className="text-red-500">Invalid total amount. Please try again.</p>
        <button 
          onClick={() => navigate('/boutique/cart')}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Return to Cart
        </button>
      </div>
    );
  }

  const handlePaymentMethod = async (method: string) => {
    setIsProcessing(true);
    try {
      const paymentSuccess = await processPayment({
        items: cartItems,
        method,
        amount: totalAmount
      });
      if (paymentSuccess) {
        alert("Payment successful! Thank you for your purchase.");
        navigate('/boutique/order-confirmation');
      } else {
        alert("Payment failed. Please try again.");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("An error occurred during payment. Please try again later.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="payment-options-page p-4">
      <h2 className="text-2xl font-bold mb-6">Select Payment Method</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={() => handlePaymentMethod('airtel-money')}
          disabled={isProcessing}
          className="p-4 border rounded-lg hover:bg-gray-50"
        >
          Airtel Money
        </button>
        <button
          onClick={() => handlePaymentMethod('mobile-money')}
          disabled={isProcessing}
          className="p-4 border rounded-lg hover:bg-gray-50"
        >
          Mobile Money
        </button>
        <button
          onClick={() => handlePaymentMethod('stripe')}
          disabled={isProcessing}
          className="p-4 border rounded-lg hover:bg-gray-50"
        >
          Credit/Debit Card (Stripe)
        </button>
      </div>
      {isProcessing && (
        <div className="mt-4 text-center">Processing payment...</div>
      )}
    </div>
  );
};

export default PaymentOptions;
