import React from "react";
import Banner from "@/components/Branding/Banner";
import Animation from "@/components/Branding/Animation";
import WhyUs from "@/components/Branding/WhyUs";
import Types from "@/components/Branding/Types";
import Services from "@/components/Designing/Services";
import Testimony from "@/components/Home/Testimony";
import Projects from "@/components/Portfolio/Websites/Projects";
import FAQ from "@/components/Home/FAQ";
import Connection from "@/components/Home/Connection";

function Branding() {
  return (
    <>
      <Banner />
      <Animation />
      <WhyUs />
      <Types />
      <Services hide="branding" />
      <Testimony />
      <Projects />
      <FAQ />
      <Connection />
    </>
  );
}

export default Branding;
