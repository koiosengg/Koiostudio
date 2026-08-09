import React from "react";
import GCS from "../../../../assets/Portfolio/Branding/Mission/Cards/GCS.webp";
import Rudrappa from "../../../../assets/Portfolio/Branding/Mission/Cards/Rudrappa.webp";
import Innocrate from "../../../../assets/Portfolio/Branding/Mission/Cards/Innocrate.webp";
import Prakash from "../../../../assets/Portfolio/Branding/Mission/Cards/Prakash.webp";
import Hamora from "../../../../assets/Portfolio/Branding/Mission/Cards/Hamora.webp";

function Cards() {
  return (
    <div className="portfolio-branding-mission-cards">
      <img src={GCS} alt="GCS business card brand identity design" />
      <img src={Rudrappa} alt="Rudrappa business card brand identity design" />
      <img src={Innocrate} alt="Innocrate business card brand identity design" />
      <img src={Prakash} alt="Prakash business card brand identity design" />
      <img src={Hamora} alt="Hamora business card brand identity design" />
      <img src={Innocrate} alt="Innocrate business card stationery design showcase" />
      <img src={Prakash} alt="Prakash business card stationery design showcase" />
      <img src={Hamora} alt="Hamora business card stationery design showcase" />
    </div>
  );
}

export default Cards;
