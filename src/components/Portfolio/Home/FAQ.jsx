import React, { useState } from "react";
import HeadingDesign from "../../../assets/Portfolio/Home/Section Heading Design.webp";

const faqData = [
  {
    id: 1,
    title: "Web Design",
    points: [
      "UI/UX Designing",
      "Development Options: Custom Code (MERN) / WordPress / Shopify / Wix",
      "Types: Personal, Professional, Business, Booking, E-commerce, Static & Dynamic",
    ],
    tiles: ["web Design", "web Develpoment", "Responsive"],
  },
  {
    id: 2,
    title: "Mobile Applications",
    points: [
      "Web Apps & Standalone Apps",
      "Ecosystem Development (Multiple Apps + Web Apps)",
      "Admin Panels & SaaS Platforms",
    ],
    tiles: ["Research", "UIUX designing", "Cross PLatform (iOS & Android)"],
  },
  {
    id: 3,
    title: "Company Branding",
    points: [
      "Logo Designing & Logo Redesigning",
      "Company Branding Manual",
      "Services : Flyers, Brochures, Price Lists, Invitations, Visiting Cards, Labels, Flex Boards, Pamphlets",
    ],
    tiles: ["Branding Collaterals", " Multiple File Formats", "Logo Designing"],
  },
  {
    id: 4,
    title: "Organic Marketing ",
    points: [
      "Google My Business Setup & Updates",
      "SEO (On-page, Off-page, Technical, Keywords, Backlinks, Blogs)",
      "Social Media Management (Instagram, Facebook, LinkedIn)",
    ],
    tiles: ["Content ", "Blogs ", "SEO", "Campaign Management"],
  },
  {
    id: 5,
    title: "Inorganic Marketing",
    points: [
      "Meta Ads (Facebook & Instagram)",
      "Google Ads (Search, Display, Shopping, etc.)",
      "Campaign Setup & Management",
    ],
    tiles: ["SEO", "Social Media", "Paid Ads"],
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="portfolio-home-faq">
      <div className="portfolio-section-heading">
        <img
          src={HeadingDesign}
          alt="koiostudio section heading design border"
          className="portfolio-section-heading-img"
        />
        <h2>
          When it comes to building Brands , we <span>got you </span> covered !
        </h2>
      </div>
      <div className="portfolio-home-faq-container">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.id}
              className={`portfolio-home-faq-set ${isOpen ? "open" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div
                className="portfolio-home-faq-set-heading"
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleFAQ(index);
                  }
                }}
              >
                <h3>{faq.title}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 14L12 9L17 14"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                className="portfolio-home-faq-set-ans"
                onClick={(e) => e.stopPropagation()}
              >
                <ul>
                  {faq.points.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
                <div className="portfolio-home-faq-tiles-container">
                  {faq.tiles.map((tile, tIdx) => (
                    <div key={tIdx} className="portfolio-home-faq-tiles">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M5 13L10 18L19 7"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p>{tile}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQ;
