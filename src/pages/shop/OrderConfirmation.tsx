import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been successfully processed.
        </p>
        <Link 
          to="/boutique"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;
