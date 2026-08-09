import React from "react";
import Img1 from "../../../../assets/Portfolio/Branding/Mission/Catalog/Img 1.webp";
import Img2 from "../../../../assets/Portfolio/Branding/Mission/Catalog/Img 2.webp";
import Img3 from "../../../../assets/Portfolio/Branding/Mission/Catalog/Img 3.webp";
import Img4 from "../../../../assets/Portfolio/Branding/Mission/Catalog/Img 4.webp";
import Img5 from "../../../../assets/Portfolio/Branding/Mission/Catalog/Img 5.webp";
import Img6 from "../../../../assets/Portfolio/Branding/Mission/Catalog/Img 6.webp";

function Catalog() {
  return (
    <div className="portfolio-branding-mission-catalog">
      <img src={Img1} alt="Product catalog page design sample 1" />
      <img src={Img2} alt="Product catalog page design sample 2" />
      <img src={Img3} alt="Product catalog page design sample 3" />
      <img src={Img4} alt="Product catalog page design sample 4" />
      <img src={Img5} alt="Product catalog page design sample 5" />
      <img src={Img6} alt="Product catalog page design sample 6" />
    </div>
  );
}

export default Catalog;
