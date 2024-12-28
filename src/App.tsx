import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Architecture from './pages/Architecture';
import Decoration from './pages/Decoration';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { ShopProvider } from './context/ShopContext';
import Team from './pages/Team';
import Services from './pages/Services';

// Shop Components
import ShopLayout from './components/layouts/ShopLayout';
import ShopHome from './pages/shop/ShopHome';
import ProductList from './pages/shop/ProductList';
import ProductDetail from './pages/shop/ProductDetail';
import Cart from './pages/shop/Cart';
import Checkout from './pages/shop/Checkout';
import Account from './pages/shop/Account';
import Login from './pages/shop/Login';
import Register from './pages/shop/Register';
import OrderHistory from './pages/shop/OrderHistory';
import PaymentOptions from './pages/shop/PaymentOptions';
import OrderConfirmation from './pages/shop/OrderConfirmation';
import CategoryPage from './pages/shop/CategoryPage';
import AreaPage from './pages/shop/AreaPage';

// Admin Components
import AdminLayout from './layouts/AdminLayout';
import AdminProducts from './pages/admin/Products';
import AdminOrders from './pages/admin/Orders';
import AdminUsers from './pages/admin/Users';
import AdminLogin from './pages/admin/Login';
import AdminDashboard from './pages/admin/Dashboard';
import AdminCategories from './pages/admin/Categories';
import AdminSettings from './pages/admin/Settings';
import AdminSliders from './pages/admin/Sliders';

import ContactFrance from './pages/contact/France';
import ContactRwanda from './pages/contact/Rwanda';
import AfricanHistory from './pages/african/History';
import AfricanUpdates from './pages/african/Updates';
import About from './components/About';
import GoogleTranslate from './components/GoogleTranslate'; // Import GoogleTranslate component


function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white">
          <Routes>
            {/* Regular website routes */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/architecture" element={<Architecture />} />
              <Route path="/decoration" element={<Decoration />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/team" element={<Team />} />
              <Route path="/services" element={<Services />} />
              <Route path="/african-history" element={<AfricanHistory />} />
              <Route path="/african-updates" element={<AfricanUpdates />} />
              <Route path="/about-us" element={<About />} />
              <Route path="contact/france" element={<ContactFrance />} />
              <Route path="contact/rwanda" element={<ContactRwanda />} />
            </Route>

            {/* Shop routes */}
            <Route path="/shop" element={<ShopLayout />}>
              <Route path="cart" element={<Cart />} />
              <Route index element={<ShopHome />} />
              <Route path="area/:areaId" element={<AreaPage />} />
              <Route path="products" element={<ProductList />} />
              <Route path="products/:category" element={<ProductList />} />
              <Route path="product/:productId" element={<ProductDetail />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout cartItems={[]} />} />
              <Route path="account" element={<Account />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="orders" element={<OrderHistory />} />
              <Route path="payment-options" element={<PaymentOptions />} />
              <Route path="order-confirmation" element={<OrderConfirmation />} />
              <Route path="category/:category" element={<CategoryPage />} />
            </Route>

            {/* Admin routes */}
            <Route path="/admin">
              <Route path="login" element={<AdminLogin />} />
              <Route element={<AdminLayout />}>
                <Route index element={<Navigate to="/admin/products" replace />} />
                <Route path="products" element={<AdminProducts />} />
                <Route path="orders" element={<AdminOrders />} />
                <Route path="users" element={<AdminUsers />} />
                <Route path="categories" element={<AdminCategories />} />
                <Route path="settings" element={<AdminSettings />} />
                <Route path="sliders" element={<AdminSliders />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </ShopProvider>
  );
}

// Main Layout component for the regular website
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <GoogleTranslate /> {/* Add Google Translate here */}
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
