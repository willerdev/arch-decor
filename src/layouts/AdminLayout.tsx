import React from 'react';
import { Navigate, Outlet, useNavigate, Link } from 'react-router-dom';
import { LogOut, LayoutDashboard, Package, ShoppingCart, Users } from 'lucide-react';

const AdminLayout = () => {
  const navigate = useNavigate();
  const isAdminLoggedIn = sessionStorage.getItem('isAdminLoggedIn') === 'true';
  
  if (!isAdminLoggedIn) {
    return <Navigate to="/admin/login" replace />;
  }

  const handleLogout = () => {
    sessionStorage.removeItem('isAdminLoggedIn');
    navigate('/admin/login');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-red-600">KMT Admin</h2>
          <p className="text-sm text-gray-600 mt-1">Welcome back, Admin</p>
        </div>
        <nav className="mt-6">
          <Link 
            to="/admin/products" 
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600"
          >
            <Package className="w-5 h-5 mr-3" />
            Products
          </Link>
          <Link 
            to="/admin/orders" 
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600"
          >
            <ShoppingCart className="w-5 h-5 mr-3" />
            Orders
          </Link>
          <Link 
            to="/admin/users" 
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600"
          >
            <Users className="w-5 h-5 mr-3" />
            Users
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-end px-6 py-4">
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
          <div className="container mx-auto px-6 py-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
