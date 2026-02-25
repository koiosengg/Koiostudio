import React from "react";
import { Routes, Route } from "react-router-dom";
import Banner from "./Blogs/Banner";
import OurBlogs from "./Blogs/OurBlogs";
import Vision from "./Blogs/Vision";
import Gallery from "./Home/Gallery";
import FAQ from "./Home/FAQ";
import InnerPage from "./Blogs/InnerPage";
import Connection from "./Blogs/Connection";
import Blog1 from "./Blogs/Blog/Blog1";

function Blog() {
  return (
    <Routes>
      <Route
        index
        element={
          <>
            <Banner />
            <OurBlogs />
            <Vision />
            <Gallery />
            <FAQ />
            <Connection />
          </>
        }
      />
      <Route path="inner-page" element={<InnerPage />} />
      <Route path="blog-1" element={<Blog1 />} />
    </Routes>
  );
}

export default Blog;
