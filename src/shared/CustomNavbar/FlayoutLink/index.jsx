import React, { useState } from "react";
import { Link } from "react-router-dom";

const FlyoutLink = ({ children, href, isActive }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative w-fit h-fit navbar-links"
    >
      <Link to={href} className="relative text-white no-underline">
        {children}
        <span
          style={{
            transform: hover || isActive ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 left-0 right-0 h-1 origin-left scale-x-0 rounded-full bg-skyn transition-transform duration-300 ease-out"
        />
      </Link>
    </div>
  );
};

export default FlyoutLink;
