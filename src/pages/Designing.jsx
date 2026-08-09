import React from "react";
import Banner from "@/components/Designing/Banner";
import Animation from "@/components/Designing/Animation";
import WhyUs from "@/components/Designing/WhyUs";
import Types from "@/components/Designing/Types";
import Services from "@/components/Designing/Services";
import Testimony from "@/components/Home/Testimony";
import Projects from "@/components/Portfolio/Websites/Projects";
import FAQ from "@/components/Home/FAQ";
import Connection from "@/components/Home/Connection";

function Designing() {
  return (
    <>
      <Banner />
      <Animation />
      <WhyUs />
      <Types />
      <Services hide="designing" />
      <Testimony />
      <Projects />
      <FAQ />
      <Connection />
    </>
  );
}

export default Designing;
