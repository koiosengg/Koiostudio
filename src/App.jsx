import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Designing from "@/pages/Designing";
import Development from "@/pages/Development";
import Branding from "@/pages/Branding";
import Marketing from "@/pages/Marketing";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Blogs from "@/pages/Blogs";
import PortfolioHome from "@/pages/Portfolio";
import PortfolioWebsites from "@/pages/portfolio/Websites";
import PortfolioApplications from "@/pages/portfolio/Applications";
import PortfolioBranding from "@/pages/portfolio/Branding";
import ProjectDetailPage from "@/pages/portfolio/ProjectDetailPage";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Glow from "@/components/Glow";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="designing" element={<Designing />} />
          <Route path="development" element={<Development />} />
          <Route path="branding" element={<Branding />} />
          <Route path="marketing" element={<Marketing />} />
          <Route path="blog/*" element={<Blogs />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          {/* Portfolio Main & Sub-categories */}
          <Route path="portfolio" element={<PortfolioHome />} />
          <Route path="portfolio/websites" element={<PortfolioWebsites />} />
          <Route path="portfolio/applications" element={<PortfolioApplications />} />
          <Route path="portfolio/branding" element={<PortfolioBranding />} />

          {/* Dynamic Portfolio Project Routes */}
          <Route path="portfolio/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="portfolio/websites/:slug" element={<ProjectDetailPage />} />
          <Route path="portfolio/applications/:slug" element={<ProjectDetailPage />} />
          <Route path="portfolio/branding/:slug" element={<ProjectDetailPage />} />

          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <Footer />
      <Glow />
    </BrowserRouter>
  );
}

export default App;
