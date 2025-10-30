import React from "react";
import { Routes, Route } from "react-router-dom";
import Banner from "./Blogs/Banner";
import OurBlogs from "./Blogs/OurBlogs";
import Vision from "./Blogs/Vision";
import Gallery from "./Home/Gallery";
import FAQ from "./Home/FAQ";
import InnerPage from "./Blogs/InnerPage";
import Connection from "./Blogs/Connection";

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
    </Routes>
  );
}

export default Blog;
