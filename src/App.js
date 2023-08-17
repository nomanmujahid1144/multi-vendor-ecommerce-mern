import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";


import { Index } from "./components/ui/major-components/Index";
import { SignIn } from "./components/ui/major-components/credentials/SignIn";
import { SignUp } from "./components/ui/major-components/credentials/SignUp";
import { Blogs } from "./components/ui/major-components/blogs/Blog";
import { Checkout } from "./components/ui/major-components/cart/Checkout";
import { ProductFilters } from "./components/ui/major-components/product/ProductFilters";
import { Cart } from "./components/ui/major-components/cart/Cart";

import "./components/fontawesomeIcons"
import { SingleShop } from "./components/ui/major-components/single-shop/SingleShop";
import { Accounts } from "./components/ui/major-components/accounts/Accounts";
import { ResetPassword } from "./components/ui/major-components/credentials/ResetPassword";
import { ConfirmPassword } from "./components/ui/major-components/credentials/ConfirmPassword";

function App() {
  return (
    <div>
      <Layout >
        <Routes >
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/confirm-password/:token" element={<ConfirmPassword />} />
          <Route path="/shop/:shopName" element={<ProductFilters />} />
          <Route path="/single-product/:shopName" element={<SingleShop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account" element={<Accounts />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
