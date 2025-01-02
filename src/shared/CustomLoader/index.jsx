import React from "react";
import "./SkeletonLoader.css";

const CustomLoader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p className="loader-text">Loading...</p>
    </div>
  );
};

export default CustomLoader;
