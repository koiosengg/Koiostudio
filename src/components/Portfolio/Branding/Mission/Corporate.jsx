import React from "react";
import Img1 from "../../../../assets/Portfolio/Branding/Mission/Corporate/Img 1.webp";
import Img2 from "../../../../assets/Portfolio/Branding/Mission/Corporate/Img 2.webp";
import Img3 from "../../../../assets/Portfolio/Branding/Mission/Corporate/Img 3.webp";
import Img4 from "../../../../assets/Portfolio/Branding/Mission/Corporate/Img 4.webp";
import Img5 from "../../../../assets/Portfolio/Branding/Mission/Corporate/Img 5.webp";

function Corporate() {
  return (
    <div className="portfolio-branding-mission-corporate">
      <img src={Img1} alt="Corporate branding identity collateral 1" />
      <img src={Img2} alt="Corporate branding identity collateral 2" />
      <img src={Img3} alt="Corporate branding identity collateral 3" />
      <img src={Img4} alt="Corporate branding identity collateral 4" />
      <img src={Img5} alt="Corporate branding identity collateral 5" />
    </div>
  );
}

export default Corporate;
