import React, { useState } from 'react';
import { Navigate, Outlet, useNavigate, Link } from 'react-router-dom';
import { 
  LogOut, 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  Menu, 
  X,
  Settings,
  Layers,
  Image
} from 'lucide-react';

const AdminLayout = () => {
  const navigate = useNavigate();
  const isAdminLoggedIn = sessionStorage.getItem('isAdminLoggedIn') === 'true';
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  if (!isAdminLoggedIn) {
    return <Navigate to="/admin/login" replace />;
  }

  const handleLogout = () => {
    sessionStorage.removeItem('isAdminLoggedIn');
    navigate('/admin/login');
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-red-600">KMT Admin</h2>
          <p className="text-sm text-gray-600 mt-1">Welcome back, Admin</p>
        </div>
        <nav className="mt-6">
          <Link
            to="/admin/dashboard"
            onClick={closeSidebar}
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600"
          >
            <LayoutDashboard className="w-5 h-5 mr-3" />
            Dashboard
          </Link>
          <Link
            to="/admin/products"
            onClick={closeSidebar}
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600"
          >
            <Package className="w-5 h-5 mr-3" />
            Products
          </Link>
          <Link
            to="/admin/categories"
            onClick={closeSidebar}
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600"
          >
            <Layers className="w-5 h-5 mr-3" />
            Categories
          </Link>
          <Link
            to="/admin/orders"
            onClick={closeSidebar}
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600"
          >
            <ShoppingCart className="w-5 h-5 mr-3" />
            Orders
          </Link>
          <Link
            to="/admin/users"
            onClick={closeSidebar}
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600"
          >
            <Users className="w-5 h-5 mr-3" />
            Users
          </Link>
          <Link
            to="/admin/sliders"
            onClick={closeSidebar}
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600"
          >
            <Image className="w-5 h-5 mr-3" />
            Sliders
          </Link>
          <Link
            to="/admin/settings"
            onClick={closeSidebar}
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600"
          >
            <Settings className="w-5 h-5 mr-3" />
            Settings
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center px-6 py-3 w-full text-left text-gray-700 hover:bg-red-50 hover:text-red-600"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-4 py-4 lg:px-6">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-md lg:hidden"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg"
            >
              <LogOut className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
          <div className="container mx-auto px-4 py-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;