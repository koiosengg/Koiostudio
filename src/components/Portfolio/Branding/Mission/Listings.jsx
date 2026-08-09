import React from "react";
import Img1 from "../../../../assets/Portfolio/Branding/Mission/Listings/Img 1.webp";
import Img2 from "../../../../assets/Portfolio/Branding/Mission/Listings/Img 2.webp";
import Img3 from "../../../../assets/Portfolio/Branding/Mission/Listings/Img 3.webp";
import Img4 from "../../../../assets/Portfolio/Branding/Mission/Listings/Img 4.webp";
import Img5 from "../../../../assets/Portfolio/Branding/Mission/Listings/Img 5.webp";
import Img6 from "../../../../assets/Portfolio/Branding/Mission/Listings/Img 6.webp";
import Img7 from "../../../../assets/Portfolio/Branding/Mission/Listings/Img 7.webp";

function Listings() {
  return (
    <div className="portfolio-branding-mission-listings">
      <img src={Img1} alt="Brand product listing design 1 showcase" />
      <img src={Img2} alt="Brand product listing design 2 showcase" />
      <img src={Img3} alt="Brand product listing design 3 showcase" />
      <img src={Img4} alt="Brand product listing design 4 showcase" />
      <img src={Img5} alt="Brand product listing design 5 showcase" />
      <img src={Img6} alt="Brand product listing design 6 showcase" />
      <img src={Img7} alt="Brand product listing design 7 showcase" />
    </div>
  );
}

export default Listings;
