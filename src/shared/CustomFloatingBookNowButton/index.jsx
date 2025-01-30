import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FadeInWrapper from "../../config/MotionFramer/FadeInWrapper";
import { Link } from "react-router-dom";

function CustomFloatingBookNowButton({ treatmentName, goToStep }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
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
        className="fixed !bottom-[180px] !right-[50px] px-3 py-2 bg-skyn text-white font-bold text-2xl rounded-full shadow-lg transition-opacity duration-300 hover:!scale-110"
      >
        <Link
          to={`/book-now`}
          onClick={() => {
            sessionStorage.setItem("treatmentName", treatmentName);
            sessionStorage.setItem("currentBookStep", goToStep);
          }}
          className="no-underline text-white"
        >
          Book Now
        </Link>
      </motion.button>
    )
  );
}

export default CustomFloatingBookNowButton;
