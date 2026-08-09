import React from "react";
import Img1 from "../../../../assets/Portfolio/Branding/Mission/Slides/Img 1.webp";
import Img2 from "../../../../assets/Portfolio/Branding/Mission/Slides/Img 2.webp";
import Img3 from "../../../../assets/Portfolio/Branding/Mission/Slides/Img 3.webp";
import Img4 from "../../../../assets/Portfolio/Branding/Mission/Slides/Img 4.webp";
import Img5 from "../../../../assets/Portfolio/Branding/Mission/Slides/Img 5.webp";

function Slides() {
  return (
    <div className="portfolio-branding-mission-slides">
      <img src={Img1} alt="Brand presentation deck slide 1 showcase" />
      <img src={Img2} alt="Brand presentation deck slide 2 showcase" />
      <img src={Img3} alt="Brand presentation deck slide 3 showcase" />
      <img src={Img4} alt="Brand presentation deck slide 4 showcase" />
      <img src={Img5} alt="Brand presentation deck slide 5 showcase" />
    </div>
  );
}

export default Slides;
