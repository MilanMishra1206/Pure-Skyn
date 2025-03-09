import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Resources from "../../config/Resources";

const FuzzyPricingOverlay = ({ header, subText, link, buttonText }) => {
  return (
    <div className="relative overflow-hidden">
      <Content
        header={header}
        subText={subText}
        link={link}
        buttonText={buttonText}
      />
      <FuzzyOverlay />
    </div>
  );
};

const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{
        transform: "translateX(10%) translateY(10%)",
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "mirror",
      }}
      style={{
        backgroundImage: `url(${Resources.images.Common.blackNoise})`,
      }}
      className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
    />
  );
};

const Content = ({ header, subText, link, buttonText }) => {
  return (
    <div className="relative grid  place-content-center space-y-6 bg-neutral-950 p-5 font-poppins">
      <p className="text-center text-6xl font-black text-neutral-50">
        {header}
      </p>
      <p className="text-2xl text-center text-neutral-400">{subText}</p>
      <div className="flex items-center justify-center gap-3">
        <Link
          to={link}
          className="w-fit bg-neutral-200 px-4 py-2 font-semibold text-neutral-700 transition-colors hover:bg-neutral-50 no-underline"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default FuzzyPricingOverlay;
