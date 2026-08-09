import React from "react";
import Img1 from "../../../../assets/Portfolio/Branding/Mission/Brochure/Img 1.webp";
import Img2 from "../../../../assets/Portfolio/Branding/Mission/Brochure/Img 2.webp";
import Img3 from "../../../../assets/Portfolio/Branding/Mission/Brochure/Img 3.webp";
import Img4 from "../../../../assets/Portfolio/Branding/Mission/Brochure/Img 4.webp";

function Brochure() {
  return (
    <div className="portfolio-branding-mission-brochure">
      <img src={Img1} alt="Corporate brochure design sample 1" />
      <img src={Img2} alt="Corporate brochure design sample 2" />
      <img src={Img3} alt="Corporate brochure design sample 3" />
      <img src={Img4} alt="Corporate brochure design sample 4" />
    </div>
  );
}

export default Brochure;
