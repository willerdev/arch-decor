import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../../lib/firebaseConfig';
import { Save, ShoppingCart, Users, Package, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [statistics, setStatistics] = useState({
    totalSales: 0,
    totalOrders: 0,
    totalCustomers: 0,
    totalProducts: 0,
  });

  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     fetchDashboardData();
//   }, []);

//   const fetchDashboardData = async () => {
//     try {
//       setIsLoading(true);

//       // Fetch statistics
//       const statsDoc = await getDoc(doc(db, 'statistics', 'dashboard'));
//       if (statsDoc.exists()) {
//         setStatistics(statsDoc.data());
//       }

//       // Fetch products
//       const productsSnapshot = await getDocs(collection(db, 'products'));
//       setProducts(productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));

//       // Fetch orders
//       const ordersSnapshot = await getDocs(collection(db, 'orders'));
//       setOrders(ordersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
//     } catch (error) {
//       console.error('Error fetching dashboard data:', error);
//       alert('Failed to load dashboard data. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

  if (isLoading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-600">Overview of your eCommerce platform's performance</p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow flex items-center">
          <ShoppingCart size={32} className="text-blue-500" />
          <div className="ml-4">
            <h2 className="text-lg font-semibold">Total Sales</h2>
            <p className="text-2xl font-bold">${statistics.totalSales.toLocaleString()}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow flex items-center">
          <Package size={32} className="text-green-500" />
          <div className="ml-4">
            <h2 className="text-lg font-semibold">Total Orders</h2>
            <p className="text-2xl font-bold">{statistics.totalOrders}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow flex items-center">
          <Users size={32} className="text-yellow-500" />
          <div className="ml-4">
            <h2 className="text-lg font-semibold">Total Customers</h2>
            <p className="text-2xl font-bold">{statistics.totalCustomers}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow flex items-center">
          <TrendingUp size={32} className="text-purple-500" />
          <div className="ml-4">
            <h2 className="text-lg font-semibold">Total Products</h2>
            <p className="text-2xl font-bold">{statistics.totalProducts}</p>
          </div>
        </div>
      </div>

      {/* Product Management */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Product Management</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          {/* <ul>
            {products.map(product => (
              <li key={product.id} className="flex justify-between py-2 border-b">
                <span>{product.name}</span>
                <span>${product.price.toFixed(2)}</span>
              </li>
            ))}
          </ul> */}
        </div>
      </div>

      {/* Order Tracking */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Order Tracking</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          {/* <ul>
            {orders.map(order => (
              <li key={order.id} className="flex justify-between py-2 border-b">
                <span>Order #{order.id}</span>
                <span>Status: {order.status}</span>
              </li>
            ))}
          </ul> */}
        </div>
      </div>

      {/* User Management */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">User Management</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <p>Manage user accounts and permissions.</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Go to User Management
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
