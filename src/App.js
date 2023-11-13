import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./components/layout/Layout";


import { IndexLandingPage } from "./components/ui/major-components/IndexLandingPage";
import { IndexHome } from "./components/ui/major-components/IndexHome";
import { SignIn } from "./components/ui/major-components/credentials/SignIn";
import { SignUp } from "./components/ui/major-components/credentials/SignUp";
import { Blogs } from "./components/ui/major-components/blogs/Blog";
import { Checkout } from "./components/ui/major-components/cart/Checkout";
import { ProductFilters } from "./components/ui/major-components/product/ProductFilters";
import { Cart } from "./components/ui/major-components/cart/Cart";

import "./components/fontawesomeIcons"
import { SingleRestaurant } from "./components/ui/major-components/single-restaurant/SingleRestaurant";
import { Accounts } from "./components/ui/major-components/accounts/Accounts";
import { ResetPassword } from "./components/ui/major-components/credentials/ResetPassword";
import { ConfirmPassword } from "./components/ui/major-components/credentials/ConfirmPassword";
import { RestaurantRegistration } from "./components/ui/major-components/restaurants/RestaurantRegistration";
import ProtectedRoutes from "./components/layout/ProtectedRoute";
import { useJsApiLoader } from "@react-google-maps/api";

const places = ["places"]
function App() {

  const navigate = useNavigate();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyASE7MqDo7TNZ_4fmORznk_JMBFm0d_pKY',
    libraries: places,
  });

  return (
      <Routes >
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/confirm-password/:token" element={<ConfirmPassword />} />
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<IndexLandingPage />} />
          <Route path="/home" element={<IndexHome />} />
          <Route path="/restaurant/createAccount" element={<RestaurantRegistration />} />
          <Route path="/restaurant/:restaurantId" element={<SingleRestaurant />} />
          <Route path="/shop/:shopName" element={<ProductFilters />} />
          <Route path="/blogs" element={<Blogs />} />
        
          <Route element={localStorage.getItem('token') ? <ProtectedRoutes /> :  <SignIn />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/account" element={<Accounts />} />
          </Route>
        </Route>
      </Routes>
  );
}

export default App;
