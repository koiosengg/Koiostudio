import React from "react";
import Banner from "@/components/Home/Banner";
import Pride from "@/components/Home/Pride";
import Features from "@/components/Home/Features";
import Problems from "@/components/Home/Problems";
import Stories from "@/components/Home/Stories";
import About from "@/components/Home/About";
import Industries from "@/components/Home/Industries";
import Projects from "@/components/Portfolio/Websites/Projects";
import Creations from "@/components/Home/Creations";
import Testimony from "@/components/Home/Testimony";
import FAQ from "@/components/Home/FAQ";
import Connection from "@/components/Home/Connection";

function Home() {
  return (
    <>
      <Banner />
      <Pride />
      <Features />
      <Problems />
      <Stories />
      <About />
      <Industries />
      <Projects />
      <Creations />
      <Testimony />
      <FAQ />
      <Connection />
    </>
  );
}

export default Home;
