import React from "react";
import GCS from "../../../../assets/Portfolio/Branding/Mission/Cards/GCS.webp";
import Rudrappa from "../../../../assets/Portfolio/Branding/Mission/Cards/Rudrappa.webp";
import Innocrate from "../../../../assets/Portfolio/Branding/Mission/Cards/Innocrate.webp";
import Prakash from "../../../../assets/Portfolio/Branding/Mission/Cards/Prakash.webp";
import Hamora from "../../../../assets/Portfolio/Branding/Mission/Cards/Hamora.webp";

function Cards() {
  return (
    <div className="portfolio-branding-mission-cards">
      <img src={GCS} />
      <img src={Rudrappa} />
      <img src={Innocrate} />
      <img src={Prakash} />
      <img src={Hamora} />
      <img src={Innocrate} />
      <img src={Prakash} />
      <img src={Hamora} />
    </div>
  );
}

export default Cards;
