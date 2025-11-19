import React from "react";
import Banner from "./Marketing/Banner";
import Animation from "./Marketing/Animation";
import WhyUs from "./Marketing/WhyUs";
import Types from "./Marketing/Types";
import Services from "./Designing/Services";
import Testimony from "./Home/Testimony";
import Gallery from "./Home/Gallery";
import FAQ from "./Home/FAQ";
import Connection from "./Home/Connection";

function Marketing() {
  return (
    <>
      <Banner />
      <Animation />
      <WhyUs />
      <Types />
      <Services hide="marketing" />
      <Testimony />
      <Gallery />
      <FAQ />
      <Connection />
    </>
  );
}

export default Marketing;
