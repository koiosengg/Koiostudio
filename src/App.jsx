import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Glow from "@/components/Glow";
import WhatsAppButton from "@/components/WhatsAppButton";

// Lazy load page components for route-based code splitting
const Home = lazy(() => import("@/pages/Home"));
const Designing = lazy(() => import("@/pages/Designing"));
const Development = lazy(() => import("@/pages/Development"));
const Branding = lazy(() => import("@/pages/Branding"));
const Marketing = lazy(() => import("@/pages/Marketing"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const Connections = lazy(() => import("@/pages/Connections"));
const Blogs = lazy(() => import("@/pages/Blogs"));
const PortfolioHome = lazy(() => import("@/pages/Portfolio"));
const PortfolioWebsites = lazy(() => import("@/pages/portfolio/Websites"));
const PortfolioApplications = lazy(() => import("@/pages/portfolio/Applications"));
const PortfolioBranding = lazy(() => import("@/pages/portfolio/Branding"));
const ProjectDetailPage = lazy(() => import("@/pages/portfolio/ProjectDetailPage"));

// Lazy load onboarding pages
const OnboardingHub = lazy(() => import("@/pages/onboarding/OnboardingHub"));
const AdsOnboarding = lazy(() => import("@/pages/onboarding/AdsOnboarding"));
const LogoBrandingOnboarding = lazy(() => import("@/pages/onboarding/LogoBrandingOnboarding"));
const BrandingPackagingOnboarding = lazy(() => import("@/pages/onboarding/BrandingPackagingOnboarding"));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
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
            <Route path="mahi/connections" element={<Connections />} />
            <Route path="connections" element={<Connections />} />
            <Route path="connections/mahi" element={<Connections />} />
            <Route path="circle" element={<Connections />} />

            {/* Client Onboarding Routes */}
            <Route path="onboarding" element={<OnboardingHub />} />
            <Route path="onboarding/ads" element={<AdsOnboarding />} />
            <Route path="onboarding/logo-and-branding" element={<LogoBrandingOnboarding />} />
            <Route path="onboarding/logo-branding" element={<LogoBrandingOnboarding />} />
            <Route path="onboarding/branding" element={<LogoBrandingOnboarding />} />
            <Route path="onboarding/branding-and-packaging" element={<BrandingPackagingOnboarding />} />
            <Route path="onboarding/branding-packaging" element={<BrandingPackagingOnboarding />} />
            <Route path="onboarding/packaging" element={<BrandingPackagingOnboarding />} />

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
      </Suspense>
      <Footer />
      <Glow />
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
