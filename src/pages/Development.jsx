import React from "react";
import Banner from "@/components/Development/Banner";
import Animation from "@/components/Development/Animation";
import WhyUs from "@/components/Development/WhyUs";
import Types from "@/components/Development/Types";
import Services from "@/components/Designing/Services";
import Testimony from "@/components/Home/Testimony";
import Projects from "@/components/Portfolio/Websites/Projects";
import FAQ from "@/components/Home/FAQ";
import Connection from "@/components/Home/Connection";

function Development() {
  return (
    <>
      <Banner />
      <Animation />
      <WhyUs />
      <Types />
      <Services hide="development" />
      <Testimony />
      <Projects />
      <FAQ />
      <Connection />
    </>
  );
}

export default Development;
