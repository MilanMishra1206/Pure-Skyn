import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const DrawCircleText = ({
  headerText,
  serviceName,
  buttonText,
  link,
  subText,
}) => {
  // bg-gradient-to-br from-[#313440] to-[#4F585A]
  // bg-gradient-to-b from-[#313440] to-[#1F3A3B]
  // bg-gradient-to-b from-[#313440] to-[#3C3F52]
  // bg-gradient-to-r from-[#313440] to-[#0A4C4F]
  // bg-gradient-to-r from-[#313440] to-[#ee6503]
  // bg-gradient-to-r from-[#313440] to-[#103d40]
  return (
    <motion.div
      viewport={{ once: false }}
      className="grid place-content-center bg-gradient-to-r from-[#313440] to-[#1F3A3B] px-4 py-24 text-yellow-50"
    >
      <h1 className="max-w-2xl text-center text-5xl leading-snug">
        <span className="relative">
          {headerText}
          <svg
            viewBox="0 0 286 73"
            fill="none"
            className="absolute -left-2 bottom-0 translate-y-1"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 1.25,
                ease: "easeInOut",
              }}
              d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
              stroke="#FACC15"
              strokeWidth="3"
            />
          </svg>
        </span>{" "}
        {serviceName}
      </h1>
      <p className="font-bold font-poppins text-center mt-4">
        100% Satisfaction Guaranteed
      </p>
      {subText && (
        <span className="text-4xl font-bold font-poppins text-center">
          {subText}
        </span>
      )}
      {buttonText && (
        <div className="flex items-center justify-center gap-3 mt-4">
          <Link
            to={link}
            className="w-fit bg-neutral-200 px-4 py-2 font-semibold text-neutral-700 transition-colors hover:bg-neutral-50 no-underline"
          >
            {buttonText}
          </Link>
        </div>
      )}
    </motion.div>
  );
};

export default DrawCircleText;
