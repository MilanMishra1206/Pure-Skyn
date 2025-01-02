import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FadeInWrapper from "../../config/MotionFramer/FadeInWrapper";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <motion.button
        variants={FadeInWrapper("up", 0.02)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        onClick={scrollToTop}
        className="fixed !bottom-[100px] !right-[50px] p-3 bg-skyn text-white font-bold text-2xl rounded-full shadow-lg transition-opacity duration-300 hover:opacity-80"
      >
        ↑
      </motion.button>
    )
  );
};

export default ScrollToTopButton;
