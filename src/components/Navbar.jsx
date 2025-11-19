import React from "react";
import { Link } from "react-router-dom";
import Logo from "/Logo.png";
import Primary from "./Buttons/Primary";

function Navbar() {
  return (
    <header>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={Logo} alt="Koiostudio Logo" />
        </Link>
        <nav>
          <Link to="/designing">Designing</Link>
          <Link to="/development">Development</Link>
          <Link to="/branding">Branding</Link>
          <Link to="/marketing">Digital Marketing</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/blog">Blog</Link>
        </nav>
        <Primary text="Contact Us" toLink="/" />
      </div>
    </header>
  );
}

export default Navbar;
