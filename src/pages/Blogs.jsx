import React from "react";
import { Routes, Route } from "react-router-dom";
import Banner from "@/components/Blogs/Banner";
import OurBlogs from "@/components/Blogs/OurBlogs";
import Vision from "@/components/Blogs/Vision";
import Projects from "@/components/Portfolio/Websites/Projects";
import FAQ from "@/components/Home/FAQ";
import InnerPage from "@/components/Blogs/InnerPage";
import Connection from "@/components/Blogs/Connection";
import Blog1 from "@/components/Blogs/Blog/Blog1";

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
            <Projects />
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
