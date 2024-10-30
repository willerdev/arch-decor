import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
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


function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white">
          {/* Main Site Routes */}
          <Routes>
            {/* Regular website routes */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/architecture" element={<Architecture />} />
              <Route path="/decoration" element={<Decoration />} />
              <Route path="/projets" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/equipe" element={<Team />} />
              <Route path="/services" element={<Services />} />
            </Route>

            {/* Shop routes */}
            <Route path="/boutique" element={<ShopLayout />}>
              <Route path="cart" element={<Cart />} />
              <Route index element={<ShopHome />} />
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
      <Outlet />
      <Footer />
    </>
  );
};

export default App;