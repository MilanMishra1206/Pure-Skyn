import React from "react";
import "./SkeletonLoader.css";
import { Backdrop } from "@mui/material";

const CustomLoader = ({ open }) => {
  return (
    <Backdrop open={open} className="!z-[9999]">
      <div className="loader-container">
        <div className="loader"></div>
        <p className="loader-text">Loading...</p>
      </div>
    </Backdrop>
  );
};

export default CustomLoader;
