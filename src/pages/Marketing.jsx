import React from "react";
import Banner from "@/components/Marketing/Banner";
import Animation from "@/components/Marketing/Animation";
import WhyUs from "@/components/Marketing/WhyUs";
import Types from "@/components/Marketing/Types";
import Services from "@/components/Designing/Services";
import Testimony from "@/components/Home/Testimony";
import Projects from "@/components/Portfolio/Websites/Projects";
import FAQ from "@/components/Home/FAQ";
import Connection from "@/components/Home/Connection";

function Marketing() {
  return (
    <>
      <Banner />
      <Animation />
      <WhyUs />
      <Types />
      <Services hide="marketing" />
      <Testimony />
      <Projects />
      <FAQ />
      <Connection />
    </>
  );
}

export default Marketing;
