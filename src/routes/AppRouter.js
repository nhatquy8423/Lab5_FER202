import React from "react";
import { Routes, Route } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Product from "../pages/Product";
import ProductDetail from "../pages/ProductDetail";
import AdminDashboard from "../pages/AdminDashboard";
import AdminUsers from "../pages/AdminUsers";
import NotFound from "../pages/NotFound";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<UserLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="product" element={<Product />} />
      <Route path="product/:id" element={<ProductDetail />} />
    </Route>

    <Route path="/admin" element={<AdminLayout />}>
      <Route index element={<AdminDashboard />} />
      <Route path="users" element={<AdminUsers />} />
    </Route>

    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRouter;
