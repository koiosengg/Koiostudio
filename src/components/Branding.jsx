import React from "react";
import Banner from "./Branding/Banner";
import Animation from "./Branding/Animation";
import WhyUs from "./Branding/WhyUs";
import Types from "./Branding/Types";
import Services from "./Designing/Services";
import Testimony from "./Home/Testimony";
import Gallery from "./Home/Gallery";
import FAQ from "./Home/FAQ";
import Connection from "./Home/Connection";

function Branding() {
  return (
    <>
      <Banner />
      <Animation />
      <WhyUs />
      <Types />
      <Services hide="branding" />
      <Testimony />
      <Gallery />
      <FAQ />
      <Connection />
    </>
  );
}

export default Branding;
