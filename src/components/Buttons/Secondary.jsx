import React from "react";
import { Link } from "react-router-dom";

function Secondary({ text, toLink }) {
  return (
    <Link to={toLink} className="secondary-btn">
      <p>{text}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="none"
      >
        <path
          d="M1.81114 13.707L0.400146 12.293L5.68914 6.99998L0.400146 1.70698L1.81514 0.292976L7.10013 5.58598C7.47508 5.96103 7.68571 6.46965 7.68571 6.99998C7.68571 7.5303 7.47508 8.03892 7.10013 8.41397L1.81114 13.707Z"
          fill="white"
        />
      </svg>
    </Link>
  );
}

export default Secondary;
