import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BlogPage from "../pages/BlogPage";
import NotFoundPage from "../pages/NotFoundPage";
import MainLayout from "../Layout/MainLayout";
import BlogPostPage from "../pages/BlogPostPage";
import AboutPage from "../pages/AboutPage";
const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/blogs" element={<BlogPage />}></Route>
            <Route path="/blogs/:slug" element={<BlogPostPage />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
