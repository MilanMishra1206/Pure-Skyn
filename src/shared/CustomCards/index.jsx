import React from "react";
import { motion } from "framer-motion";
import fadeInWrapper from "../../config/MotionFramer/FadeInWrapper";
import CustomButton from "../CustomButton";
import { INRCurrency } from "../../helpers/Regex";

const CustomCards = ({
  title,
  imgSrc,
  linkTo,
  buttonText = "Explore",
  customClass,
  imageClass = "h-96",
  packagePrice = "",
  strikeOutPrice = "",
  bgGradient = "bg-gradient-to-t from-black/60 to-transparent",
  titleClass = "",
}) => {
  return (
    <motion.div
      variants={fadeInWrapper("left", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div
        className={`relative overflow-hidden group cursor-pointer ${customClass || "w-72 sm:!w-80 rounded-2xl shadow-lg"}`}
      >
        <img
          src={imgSrc}
          className={`transition-transform group-hover:scale-110 duration-500 w-full ${imageClass}`}
          alt={title}
        />
        <div className={`absolute inset-0 flex items-end ${bgGradient}`}>
          <div className="p-4 w-full text-white">
            <h3 className={`text-xl font-bold font-poppins mb-5 ${titleClass}`}>
              {title}
            </h3>
            {strikeOutPrice && (
              <p className="text-red line-through">
                {INRCurrency(strikeOutPrice)}
              </p>
            )}
            {packagePrice && (
              <p className="text-white text-lg font-semibold">
                {INRCurrency(packagePrice)}
              </p>
            )}
            <CustomButton
              text={buttonText}
              linkTo={linkTo}
              linkClass="no-underline cursor-pointer text-white font-poppins font-bold flex items-center transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CustomCards;
