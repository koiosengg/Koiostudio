import React from "react";
import Img1 from "../../../../assets/Portfolio/Branding/Mission/Slides/Img 1.webp";
import Img2 from "../../../../assets/Portfolio/Branding/Mission/Slides/Img 2.webp";
import Img3 from "../../../../assets/Portfolio/Branding/Mission/Slides/Img 3.webp";
import Img4 from "../../../../assets/Portfolio/Branding/Mission/Slides/Img 4.webp";
import Img5 from "../../../../assets/Portfolio/Branding/Mission/Slides/Img 5.webp";

function Slides() {
  return (
    <div className="portfolio-branding-mission-slides">
      <img src={Img1} />
      <img src={Img2} />
      <img src={Img3} />
      <img src={Img4} />
      <img src={Img5} />
    </div>
  );
}

export default Slides;
