import React from "react";
import Banner from "@/components/About/Banner";
import Numbers from "@/components/About/Numbers";
import Company from "@/components/About/Company";
import Vision from "@/components/About/Vision";
import Vertical from "@/components/About/Vertical";
import Possibilities from "@/components/About/Possibilities";
import Projects from "@/components/Portfolio/Projects";
import { WEBSITE_PROJECTS } from "@/data/portfolioProjects";
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
      <Projects slides={WEBSITE_PROJECTS} />
      <Content />
      <FAQ />
      <Connection />
    </>
  );
}

export default About;
