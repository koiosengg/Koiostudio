import React from "react";
import { Link } from "react-router-dom";

function Primary({ text, toLink }) {
  return (
    <Link to={toLink} className="primary-btn">
      <p>{text}</p>
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
  );
}

export default Primary;
