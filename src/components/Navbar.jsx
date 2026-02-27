import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/Logo.png";
import Menu from "/menu.svg";
import MenuCancel from "/menu cancel.svg";

function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [hasToggled, setHasToggled] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    setHasToggled(true);
  };

  const handleLinkClick = () => {
    if (isMobileNavOpen) {
      setIsMobileNavOpen(false);
    }
  };

  return (
    <header>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={Logo} alt="Koiostudio Logo" />
        </Link>
        <nav className="desktop">
          <Link to="/designing">Designing</Link>
          <Link to="/development">Development</Link>
          <Link to="/branding">Branding</Link>
          <Link to="/marketing">Digital Marketing</Link>
          <Link to="/about">About Us</Link>
          <Link to="/blog">Blog</Link>
        </nav>
        <Link to="/contact" className="primary-btn desktop">
          Contact Us
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
          >
            <path
              d="M1.81111 13.707L0.400116 12.293L5.68911 6.99998L0.400116 1.70698L1.81511 0.292976L7.1001 5.58598C7.47505 5.96103 7.68568 6.46965 7.68568 6.99998C7.68568 7.5303 7.47505 8.03892 7.1001 8.41397L1.81111 13.707Z"
              fill="#121212"
            />
          </svg>
        </Link>
        <div className="mobile-navbar-button mobile" onClick={toggleMobileNav}>
          <img
            src={Menu}
            alt="Mobile navbar open"
            style={{
              display: isMobileNavOpen ? "none" : hasToggled ? "block" : "",
            }}
          />
          <img
            src={MenuCancel}
            alt="Mobile navbar close"
            style={{
              display: isMobileNavOpen ? "block" : hasToggled ? "none" : "none",
            }}
          />
        </div>
        <div
          className={`mobileNavbar mobile ${
            isMobileNavOpen
              ? "activeMobileNavbar"
              : hasToggled
                ? "nonactiveMobileNavbar"
                : ""
          }`}
        >
          <div className="mobileNavbarLinks">
            <Link to="/designing" onClick={handleLinkClick}>
              Designing
            </Link>
            <Link to="/development" onClick={handleLinkClick}>
              Development
            </Link>
            <Link to="/branding" onClick={handleLinkClick}>
              Branding
            </Link>
            <Link to="/marketing" onClick={handleLinkClick}>
              Digital Marketing
            </Link>
            <Link to="/about" onClick={handleLinkClick}>
              About Us
            </Link>
            <Link to="/blog" onClick={handleLinkClick}>
              Blog
            </Link>
          </div>
          <div className="mobileNavbar-contact">
            <Link
              to="/contact"
              className="primary-btn"
              onClick={handleLinkClick}
            >
              Contact Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
              >
                <path
                  d="M1.81111 13.707L0.400116 12.293L5.68911 6.99998L0.400116 1.70698L1.81511 0.292976L7.1001 5.58598C7.47505 5.96103 7.68568 6.46965 7.68568 6.99998C7.68568 7.5303 7.47505 8.03892 7.1001 8.41397L1.81111 13.707Z"
                  fill="#121212"
                />
              </svg>
            </Link>
            <div className="mobileNavbar-socials">
              <a href="#" target="_blank" onClick={handleLinkClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M9 0C6.555 0 6.24975 0.01125 5.28975 0.054C4.33125 0.099 3.67875 0.24975 3.105 0.4725C2.51325 0.702 2.01075 1.01025 1.5105 1.5105C1.01025 2.01075 0.70125 2.5125 0.4725 3.105C0.24975 3.67875 0.09825 4.33125 0.054 5.28975C0.009 6.24975 0 6.555 0 9C0 11.445 0.01125 11.7503 0.054 12.7103C0.099 13.668 0.24975 14.3213 0.4725 14.895C0.702 15.486 1.01025 15.9893 1.5105 16.4895C2.01075 16.989 2.5125 17.2987 3.105 17.5275C3.6795 17.7495 4.332 17.9018 5.28975 17.946C6.24975 17.991 6.555 18 9 18C11.445 18 11.7503 17.9888 12.7103 17.946C13.668 17.901 14.3213 17.7495 14.895 17.5275C15.486 17.298 15.9893 16.989 16.4895 16.4895C16.989 15.9893 17.2987 15.4883 17.5275 14.895C17.7495 14.3213 17.9018 13.668 17.946 12.7103C17.991 11.7503 18 11.445 18 9C18 6.555 17.9888 6.24975 17.946 5.28975C17.901 4.332 17.7495 3.678 17.5275 3.105C17.298 2.51325 16.989 2.01075 16.4895 1.5105C15.9893 1.01025 15.4883 0.70125 14.895 0.4725C14.3213 0.24975 13.668 0.09825 12.7103 0.054C11.7503 0.009 11.445 0 9 0ZM9 1.62C11.4023 1.62 11.6888 1.632 12.6375 1.67325C13.515 1.7145 13.9913 1.86 14.3077 1.9845C14.7292 2.14725 15.0278 2.34225 15.3442 2.6565C15.6585 2.9715 15.8535 3.27075 16.0163 3.69225C16.1392 4.00875 16.2862 4.485 16.326 5.3625C16.3687 6.312 16.3785 6.597 16.3785 9C16.3785 11.403 16.3673 11.6888 16.323 12.6375C16.2773 13.515 16.131 13.9913 16.0072 14.3077C15.8393 14.7292 15.648 15.0278 15.333 15.3442C15.0188 15.6585 14.715 15.8535 14.298 16.0163C13.983 16.1392 13.4993 16.2862 12.6217 16.326C11.6663 16.3687 11.385 16.3785 8.9775 16.3785C6.56925 16.3785 6.288 16.3673 5.33325 16.323C4.455 16.2773 3.97125 16.131 3.65625 16.0072C3.2295 15.8393 2.93625 15.648 2.622 15.333C2.30625 15.0188 2.1045 14.715 1.947 14.298C1.82325 13.983 1.67775 13.4993 1.632 12.6217C1.59825 11.6768 1.58625 11.385 1.58625 8.98875C1.58625 6.59175 1.59825 6.29925 1.632 5.343C1.67775 4.4655 1.82325 3.9825 1.947 3.6675C2.1045 3.24 2.30625 2.9475 2.622 2.63175C2.93625 2.3175 3.2295 2.115 3.65625 1.95825C3.97125 1.83375 4.4445 1.6875 5.322 1.6425C6.27825 1.60875 6.5595 1.5975 8.96625 1.5975L9 1.62ZM9 4.3785C6.44625 4.3785 4.3785 6.4485 4.3785 9C4.3785 11.5538 6.4485 13.6215 9 13.6215C11.5538 13.6215 13.6215 11.5515 13.6215 9C13.6215 6.44625 11.5515 4.3785 9 4.3785ZM9 12C7.3425 12 6 10.6575 6 9C6 7.3425 7.3425 6 9 6C10.6575 6 12 7.3425 12 9C12 10.6575 10.6575 12 9 12ZM14.8845 4.19625C14.8845 4.7925 14.4 5.27625 13.8045 5.27625C13.2083 5.27625 12.7245 4.79175 12.7245 4.19625C12.7245 3.60075 13.209 3.117 13.8045 3.117C14.3993 3.11625 14.8845 3.60075 14.8845 4.19625Z"
                    fill="#B9B9B9"
                  />
                </svg>
              </a>
              <a href="#" target="_blank" onClick={handleLinkClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M15.3353 15.339H12.6698V11.1623C12.6698 10.1663 12.6495 8.8845 11.2808 8.8845C9.891 8.8845 9.67875 9.96825 9.67875 11.0887V15.339H7.01325V6.75H9.57375V7.92075H9.60825C9.966 7.24575 10.836 6.53325 12.1357 6.53325C14.8365 6.53325 15.336 8.31075 15.336 10.6245L15.3353 15.339ZM4.00275 5.57475C3.14475 5.57475 2.4555 4.88025 2.4555 4.026C2.4555 3.1725 3.1455 2.47875 4.00275 2.47875C4.85775 2.47875 5.55075 3.1725 5.55075 4.026C5.55075 4.88025 4.857 5.57475 4.00275 5.57475ZM5.33925 15.339H2.66625V6.75H5.33925V15.339ZM16.6688 0H1.32825C0.594 0 0 0.5805 0 1.29675V16.7033C0 17.4202 0.594 18 1.32825 18H16.6665C17.4 18 18 17.4202 18 16.7033V1.29675C18 0.5805 17.4 0 16.6665 0H16.6688Z"
                    fill="#B9B9B9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
