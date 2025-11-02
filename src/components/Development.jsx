import React from "react";
import Banner from "./Development/Banner";
import Animation from "./Development/Animation";
import WhyUs from "./Development/WhyUs";
import Types from "./Development/Types";
import Services from "./Designing/Services";
import Testimony from "./Home/Testimony";
import Gallery from "./Home/Gallery";
import FAQ from "./Home/FAQ";
import Connection from "./Home/Connection";

function Development() {
  return (
    <>
      <Banner />
      <Animation />
      <WhyUs />
      <Types />
      <Services hide="development" />
      <Testimony />
      <Gallery />
      <FAQ />
      <Connection />
    </>
  );
}

export default Development;
