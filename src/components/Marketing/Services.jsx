import React from "react";
import { Link } from "react-router-dom";
import Designing from "../../assets/Designing/Services/Designing.png";
import Development from "../../assets/Designing/Services/Development.png";
import CompanyBranding from "../../assets/Designing/Services/Company Branding.png";
import DigitalMarketing from "../../assets/Designing/Services/Digital Marketing.png";

function Services({ hide }) {
  const handleMouseEnter = (e) => {
    const imgDiv = e.currentTarget.querySelector(".designing-services-set-img");
    const img = imgDiv.querySelector("img");

    const divHeight = imgDiv.offsetHeight;
    const imgHeight = img.offsetHeight;
    const moveY = imgHeight - divHeight;

    img.style.transform = `translateY(-${moveY}px)`;
  };

  const handleMouseLeave = (e) => {
    const img = e.currentTarget.querySelector("img");
    img.style.transform = "translateY(0)";
  };

  const services = [
    {
      id: "designing",
      link: "/designing",
      img: Designing,
      title: "Designing",
    },
    {
      id: "development",
      link: "/development",
      img: Development,
      title: "Website Development",
    },
    {
      id: "branding",
      link: "/branding",
      img: CompanyBranding,
      title: "Company Branding",
    },
    {
      id: "marketing",
      link: "/marketing",
      img: DigitalMarketing,
      title: "Digital Marketing",
    },
  ];

  const visibleServices = services.filter(
    (service) => service.id !== hide?.toLowerCase()
  );

  return (
    <section className="template">
      <div className="template-heading">
        <p>Services We offer</p>
        <h2>
          Tailored Solution <br className="desktop" />
          For You
        </h2>
      </div>

      <div className="designing-services">
        {visibleServices.map((service) => (
          <Link
            to={service.link}
            className="designing-services-set"
            key={service.id}
          >
            <div
              className="designing-services-set-card"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="designing-services-set-img">
                <img src={service.img} alt={service.title} />
              </div>
            </div>
            <h3>{service.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Services;
