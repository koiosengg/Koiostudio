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
import Development from "./components/Development";
import Branding from "./components/Branding";
import Marketing from "./components/Marketing";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import PortfolioWebsites from "./components/Portfolio/PortfolioWebsites";
import PortfolioApplications from "./components/Portfolio/PortfolioApplications";
import PortfolioBranding from "./components/Portfolio/PortfolioBranding";
import {
  NeStructures, Mobiglide, Xlr8, Cilkencave, Akarswift,
  IskAutoIndustries, HappyGummies, Talankey, Fourstor,
  UrbanSphere, BalajiProtoTools, MrIndustries, Gmw, Ameya,
  ClayfulHomes, Simmfa, ScaleCraft, MachineMovers,
  Airportr, Lmg, Negilu, IdaviFoods,
  Micronix, Nirmalyam, Goat, Aerovidya, CoffeeCulture,
  Motard, Smilevieu, Voltus, GreenTara, Spinteq, Itel,
} from "./components/Projects/index";

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
          {/* Portfolio Main */}
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/websites" element={<PortfolioWebsites />} />
          <Route path="portfolio/applications" element={<PortfolioApplications />} />
          <Route path="portfolio/branding" element={<PortfolioBranding />} />

          {/* Website Projects */}
          <Route path="portfolio/projects/NE_Structures" element={<NeStructures />} />
          <Route path="portfolio/websites/NE_Structures" element={<NeStructures />} />
          <Route path="portfolio/projects/Mobiglide" element={<Mobiglide />} />
          <Route path="portfolio/websites/Mobiglide" element={<Mobiglide />} />
          <Route path="portfolio/projects/XLR8" element={<Xlr8 />} />
          <Route path="portfolio/websites/XLR8" element={<Xlr8 />} />
          <Route path="portfolio/projects/Cilkencave" element={<Cilkencave />} />
          <Route path="portfolio/websites/Cilkencave" element={<Cilkencave />} />
          <Route path="portfolio/projects/Akarswift" element={<Akarswift />} />
          <Route path="portfolio/websites/Akarswift" element={<Akarswift />} />
          <Route path="portfolio/projects/ISK_Auto_Industries" element={<IskAutoIndustries />} />
          <Route path="portfolio/websites/ISK_Auto_Industries" element={<IskAutoIndustries />} />
          <Route path="portfolio/projects/Happy_Gummies" element={<HappyGummies />} />
          <Route path="portfolio/websites/Happy_Gummies" element={<HappyGummies />} />
          <Route path="portfolio/projects/Talankey" element={<Talankey />} />
          <Route path="portfolio/websites/Talankey" element={<Talankey />} />
          <Route path="portfolio/projects/Fourstor" element={<Fourstor />} />
          <Route path="portfolio/websites/Fourstor" element={<Fourstor />} />
          <Route path="portfolio/projects/Urban_Sphere" element={<UrbanSphere />} />
          <Route path="portfolio/websites/Urban_Sphere" element={<UrbanSphere />} />
          <Route path="portfolio/projects/Balaji_Proto_Tools" element={<BalajiProtoTools />} />
          <Route path="portfolio/websites/Balaji_Proto_Tools" element={<BalajiProtoTools />} />
          <Route path="portfolio/projects/MR_Industries" element={<MrIndustries />} />
          <Route path="portfolio/websites/MR_Industries" element={<MrIndustries />} />
          <Route path="portfolio/projects/GMW" element={<Gmw />} />
          <Route path="portfolio/websites/GMW" element={<Gmw />} />
          <Route path="portfolio/projects/Ameya" element={<Ameya />} />
          <Route path="portfolio/websites/Ameya" element={<Ameya />} />
          <Route path="portfolio/projects/Clayful_Homes" element={<ClayfulHomes />} />
          <Route path="portfolio/websites/Clayful_Homes" element={<ClayfulHomes />} />
          <Route path="portfolio/projects/SIMMFA" element={<Simmfa />} />
          <Route path="portfolio/websites/SIMMFA" element={<Simmfa />} />
          <Route path="portfolio/projects/Scale_Craft" element={<ScaleCraft />} />
          <Route path="portfolio/websites/Scale_Craft" element={<ScaleCraft />} />
          <Route path="portfolio/projects/Machine_Movers" element={<MachineMovers />} />
          <Route path="portfolio/websites/Machine_Movers" element={<MachineMovers />} />

          {/* Application Projects */}
          <Route path="portfolio/projects/Airportr" element={<Airportr />} />
          <Route path="portfolio/applications/Airportr" element={<Airportr />} />
          <Route path="portfolio/projects/LMG" element={<Lmg />} />
          <Route path="portfolio/applications/LMG" element={<Lmg />} />
          <Route path="portfolio/projects/Negilu" element={<Negilu />} />
          <Route path="portfolio/applications/Negilu" element={<Negilu />} />
          <Route path="portfolio/projects/Idavi_Foods" element={<IdaviFoods />} />
          <Route path="portfolio/applications/Idavi_Foods" element={<IdaviFoods />} />

          {/* Branding Projects */}
          <Route path="portfolio/projects/Micronix" element={<Micronix />} />
          <Route path="portfolio/branding/Micronix" element={<Micronix />} />
          <Route path="portfolio/projects/Nirmalyam" element={<Nirmalyam />} />
          <Route path="portfolio/branding/Nirmalyam" element={<Nirmalyam />} />
          <Route path="portfolio/projects/GOAT" element={<Goat />} />
          <Route path="portfolio/branding/GOAT" element={<Goat />} />
          <Route path="portfolio/projects/Aerovidya" element={<Aerovidya />} />
          <Route path="portfolio/branding/Aerovidya" element={<Aerovidya />} />
          <Route path="portfolio/projects/Coffee_Culture" element={<CoffeeCulture />} />
          <Route path="portfolio/branding/Coffee_Culture" element={<CoffeeCulture />} />
          <Route path="portfolio/projects/Motard" element={<Motard />} />
          <Route path="portfolio/branding/Motard" element={<Motard />} />
          <Route path="portfolio/projects/Smilevieu" element={<Smilevieu />} />
          <Route path="portfolio/branding/Smilevieu" element={<Smilevieu />} />
          <Route path="portfolio/projects/Voltus" element={<Voltus />} />
          <Route path="portfolio/branding/Voltus" element={<Voltus />} />
          <Route path="portfolio/projects/Green_Tara" element={<GreenTara />} />
          <Route path="portfolio/branding/Green_Tara" element={<GreenTara />} />
          <Route path="portfolio/projects/SPINTeQ" element={<Spinteq />} />
          <Route path="portfolio/branding/SPINTeQ" element={<Spinteq />} />
          <Route path="portfolio/projects/Itel" element={<Itel />} />
          <Route path="portfolio/branding/Itel" element={<Itel />} />

          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <Footer />
      <Glow />
    </BrowserRouter>
  );
}

export default App;

