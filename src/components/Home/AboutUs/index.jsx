import { useMediaQuery } from "@mui/material";
import FadeInWrapper from "../../../config/MotionFramer/FadeInWrapper";
import { motion } from "framer-motion";
import CustomHrTag from "../../../shared/CustomHrTag";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import CustomHomeHeader from "../../../shared/CustomHomeHeader";

function AboutUs() {
  const isTablet = useMediaQuery("(max-width: 1023px)");
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <motion.div
      variants={FadeInWrapper("left", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`mt-3 ${isTablet ? "py-3" : ""}`}
    >
      <div className={`mt-5 ${isMobile ? "px-4" : "px-5"}`}>
        <CustomHomeHeader heading="About Us" />
        <p className="mt-4 font-poppins text-cello font-medium">
          At Pure Skyn we are focused on providing you with the permanent laser
          hair removal results that you have always wanted and nothing less. We
          stand behind our work and ensure that all of our customers are 100%
          satisfied. If you are looking for laser hair removal in India, please
          search "laser hair removal near me" to find our location and contact
          us to Book a FREE consultation.
        </p>
        <p className="mt-4 font-poppins text-cello font-medium">
          Our mission is to provide safe, effective, and comfortable treatments
          that enhance your natural beauty, leaving you with the confidence to
          shine in every moment. We believe that everyone deserves to feel their
          best, and we're here to help you achieve just that.
        </p>
        <CustomHrTag />
        <p className="mt-4 font-poppins text-kashmirBlue font-bold text-2xl">
          Laser Hair Removal
        </p>
        <p className="mt-4 font-poppins text-cello font-medium">
          Say goodbye to shaving, waxing, and the hassle of constant hair
          removal. Our advanced Laser Hair Removal services are designed to
          offer permanent hair reduction with minimal discomfort. Whether you're
          looking to remove hair from your face, body, or sensitive areas, we
          have the expertise and technology to get you the smooth skin you've
          always dreamed of.
        </p>
        <Link
          to="/services/laser-hair-removal"
          className="flex items-center mt-2 w-32 md:!w-25 group text-skyn font-bold font-poppins no-underline hover:opacity-80"
        >
          Explore More
          <MdKeyboardDoubleArrowRight className="hidden group-hover:!block text-xl text-skyn duration-3000" />
        </Link>
        <CustomHrTag />
        <span className="mt-4 font-poppins text-kashmirBlue font-bold text-2xl">
          Medi Facial Treatments
        </span>
        <p className="mt-4 font-poppins text-cello font-medium">
          Achieve glowing, healthy skin with our Medi Facial Treatments,
          customized to meet your specific skin care needs. From acne treatment
          and anti-aging facials to deep cleansing and rejuvenation, our
          treatments use the latest skincare technologies to deliver immediate
          results and long-lasting benefits.
        </p>
        <Link
          to="/services/skin/medi-facial"
          className="flex items-center mt-2 w-32 md:!w-25 group text-skyn font-bold font-poppins no-underline hover:opacity-80"
        >
          Explore More
          <MdKeyboardDoubleArrowRight className="hidden group-hover:!block text-xl text-skyn duration-3000" />
        </Link>
        <CustomHrTag />
      </div>
    </motion.div>
  );
}

export default AboutUs;
