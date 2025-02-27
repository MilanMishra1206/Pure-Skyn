import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import FadeInWrapper from "../../../config/MotionFramer/FadeInWrapper";
import CustomHomeHeader from "../../../shared/CustomHomeHeader";
import FadedLineBreak from "../../../shared/CustomHrTag";

function AboutUs() {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <motion.div
      variants={FadeInWrapper("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mt-5"
    >
      <div className={`${isMobile ? "px-4" : "px-5"}`}>
        <FadedLineBreak />
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
        <p className="mt-5 font-poppins text-kashmirBlue font-bold text-2xl">
          Medi Facial Treatments
        </p>
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
      </div>
    </motion.div>
  );
}

export default AboutUs;
