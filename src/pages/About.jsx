import React from "react";
import Banner from "@/components/About/Banner";
import Numbers from "@/components/About/Numbers";
import Company from "@/components/About/Company";
import Vision from "@/components/About/Vision";
import Vertical from "@/components/About/Vertical";
import Possibilities from "@/components/About/Possibilities";
import Projects from "@/components/Portfolio/Websites/Projects";
import Content from "@/components/About/Content";
import FAQ from "@/components/Home/FAQ";
import Connection from "@/components/Home/Connection";
import Pride from "@/components/Home/Pride";

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
      <Projects />
      <Content />
      <FAQ />
      <Connection />
    </>
  );
}

export default About;
