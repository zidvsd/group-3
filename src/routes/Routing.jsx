import React from "react";
import { Route, Routes, useLocation, BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import HomePage from "../pages/HomePage";
import BlogPage from "../pages/BlogPage";
import NotFoundPage from "../pages/NotFoundPage";
import MainLayout from "../Layout/MainLayout";
import BlogPostPage from "../pages/BlogPostPage";
import AboutPage from "../pages/AboutPage";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blogs" element={<BlogPage />} />
          <Route path="blogs/:slug" element={<BlogPostPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const Routing = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default Routing;
