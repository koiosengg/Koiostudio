import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Glow from "./components/Glow";
import Designing from "./components/Designing";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="designing" element={<Designing />} />
          <Route path="blog/*" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <Footer />
      <Glow />
    </BrowserRouter>
  );
}

export default App;
