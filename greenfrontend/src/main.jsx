import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import Template from "./components/Template";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Query from "./components/Query";
import PageNotFound from "./components/PageNotFound";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Products from "./components/Products";
import Contact from "./components/Contact";
import AuthPage from "./components/AuthPage";
import CartPage from "./components/CartPage";
import CheckoutButton from "./components/CheckoutButton";
import CartProvider, { CartContext } from "./components/CartContext";
import ProtectedRoute from "./components/ProtectedRoute";
import UserPage from "./components/UserPage";
import Unauthorized from "./components/Unauthorized";
import Favorites from "./components/Favorites";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route path="/" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="zadelife" element={<Products />} />
          <Route path="contact" element={<Contact />} />
          <Route path="siparis-sorgulama" element={<Query />} />
          <Route path="account/login" element={<AuthPage type="login" />} />
          <Route
            path="account/register"
            element={<AuthPage type="register" />}
          />
          <Route
            path="account"
            element={<ProtectedRoute role="user" pageToReturn={<UserPage />} />}
          />
          <Route path="account/favorites" element={<Favorites />} />

          <Route path="cart" element={<CartPage />}>
            <Route path="checkout" element={<CheckoutButton />} />
          </Route>
          <Route path="unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </CartProvider>
);
