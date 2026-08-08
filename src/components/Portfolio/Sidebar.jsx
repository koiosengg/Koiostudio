import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar({ isOnBanner }) {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className={`portfolio-sidebar ${!isOnBanner ? "visible" : ""}`}>
      <div className="portfolio-sidebar-container">
        <nav>
          <section>
            <Link
              to="/portfolio/websites"
              className={path.startsWith("/portfolio/websites") ? "active" : ""}
              aria-label="View koiostudio portfolio websites"
            >
              Websites
            </Link>
            <span></span>
            <Link
              to="/portfolio/applications"
              className={path.startsWith("/portfolio/applications") ? "active" : ""}
              aria-label="View koiostudio portfolio applications"
            >
              Applications
            </Link>
            <span></span>
            <Link
              to="/portfolio/branding"
              className={path.startsWith("/portfolio/branding") ? "active" : ""}
              aria-label="View koiostudio portfolio branding"
            >
              Branding
            </Link>
          </section>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
