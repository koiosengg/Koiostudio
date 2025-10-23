import React, { useState } from "react";
import { Link } from "react-router-dom";

function Stories() {
  const [searchTerm, setSearchTerm] = useState("");

  const pages = [
    {
      title: "Website Development",
      desc: "Responsive, UI/UX, Web design",
      link: "/",
    },
    {
      title: "Website Design",
      desc: "Responsive, UI/UX, Web design",
      link: "/",
    },
    {
      title: "App Development",
      desc: "Responsive, UI/UX, Web design",
      link: "/",
    },
    {
      title: "Company Branding",
      desc: "Responsive, UI/UX, Web design",
      link: "/",
    },
  ];

  const filteredPages = pages.filter((page) =>
    page.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="home-stories">
      <div className="home-stories-left">
        <div className="home-stories-left-text">
          <h2>We Got You Covered</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Venenatis sapien id ultrices
            sed mauris ut et
          </p>
        </div>

        <div className="home-stories-left-search">
          <input
            type="text"
            placeholder="Search pages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="home-stories-left-search-container no-scrollbar">
            {filteredPages.length > 0 ? (
              filteredPages.map((page, index) => (
                <Link
                  key={index}
                  to={page.link}
                  className="home-stories-left-search-set"
                >
                  <h3>{page.title}</h3>
                  <p>{page.desc}</p>
                </Link>
              ))
            ) : (
              <div className="home-stories-left-search-set">
                <p>No results found</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="home-stories-right">
        <div className="home-stories-right-text">
          <h2>Our Success Stories</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Venenatis sapien id ultrices
            sed mauris ut et
          </p>
        </div>
        <div className="home-stories-right-numbers">
          <div className="home-stories-right-numbers-set">
            <h3>37</h3>
            <p>Clients</p>
          </div>
          <div className="home-stories-right-numbers-set">
            <h3>01</h3>
            <p>Projects</p>
          </div>
          <div className="home-stories-right-numbers-set">
            <h3>45</h3>
            <p>Team Members</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stories;
