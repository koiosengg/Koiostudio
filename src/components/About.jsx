import React from "react";
import Banner from "./About/Banner";
import Numbers from "./About/Numbers";
import Company from "./About/Company";
import Vision from "./About/Vision";
import Vertical from "./About/Vertical";
import Possibilities from "./About/Possibilities";
import Gallery from "./Home/Gallery";
import Content from "./About/Content";
import FAQ from "./Home/FAQ";
import Connection from "./Home/Connection";
import Pride from "./Home/Pride";

function About() {
  return (
    <>
      <Banner />
      <Numbers />
      <Company />
      <Pride />
      <Vision />
      <Vertical />
      <Possibilities />
      <Gallery />
      <Content />
      <FAQ />
      <Connection />
    </>
  );
}

export default About;
