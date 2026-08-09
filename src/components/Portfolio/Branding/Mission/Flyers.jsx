import React from "react";
import Img1 from "../../../../assets/Portfolio/Branding/Mission/Flyers/Img 1.webp";
import Img2 from "../../../../assets/Portfolio/Branding/Mission/Flyers/Img 2.webp";
import Img3 from "../../../../assets/Portfolio/Branding/Mission/Flyers/Img 3.webp";
import Img4 from "../../../../assets/Portfolio/Branding/Mission/Flyers/Img 4.webp";

function Flyers() {
  return (
    <div className="portfolio-branding-mission-flyers">
      <img src={Img1} alt="Marketing flyer design sample 1" />
      <img src={Img2} alt="Marketing flyer design sample 2" />
      <img src={Img3} alt="Marketing flyer design sample 3" />
      <img src={Img4} alt="Marketing flyer design sample 4" />
    </div>
  );
}

export default Flyers;
