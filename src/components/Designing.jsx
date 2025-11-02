import React from "react";
import Banner from "./Designing/Banner";
import Animation from "./Designing/Animation";
import WhyUs from "./Designing/WhyUs";
import Types from "./Designing/Types";
import Services from "./Designing/Services";
import Testimony from "./Home/Testimony";
import Gallery from "./Home/Gallery";
import FAQ from "./Home/FAQ";
import Connection from "./Home/Connection";

function Designing() {
  return (
    <>
      <Banner />
      <Animation />
      <WhyUs />
      <Types />
      <Services hide="designing" />
      <Testimony />
      <Gallery />
      <FAQ />
      <Connection />
    </>
  );
}

export default Designing;
