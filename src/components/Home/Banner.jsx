import React from "react";
import DesktopBackground from "../../assets/Home/Banner/Desktop Background.svg"

function Banner() {
  return (
    <section className="home-banner">
      <img src={DesktopBackground} alt="Background"/>
      <h1>
        Implementing <br /> Your Ideas To Reality
      </h1>
    </section>
  );
}

export default Banner;
