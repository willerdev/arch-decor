import React from 'react';
import { Outlet } from 'react-router-dom';
import ShopHeader from '../shop/ShopHeader';
import CategoriesMenu from '../shop/CategoriesMenu';
import ShopFooter from '../shop/ShopFooter';

const ShopLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ShopHeader />
      <CategoriesMenu />
      <main className="flex-grow">
        <Outlet />
      </main>
      <ShopFooter />
    </div>
  );
};

export default ShopLayout;
