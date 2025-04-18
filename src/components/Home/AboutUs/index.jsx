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
      <div className={`${isMobile ? "px-4" : "px-5"} font-poppins`}>
        <FadedLineBreak />
        <CustomHomeHeader heading="About Us" />
        <p className="mt-4 text-cello font-medium">
          At <strong>PureSkyn</strong>, we bring advanced{" "}
          <strong>
            laser and skincare treatments directly to your doorstep
          </strong>
          , eliminating the hassle of clinic visits and long wait times. Using
          US FDA-approved technology and highly trained experts, we provide safe
          and painless solutions for skin rejuvenation,laser hair reduction—all
          with minimal downtime.
        </p>
        <p className="mt-4 text-cello font-medium">
          Our virtual dermatologist consultations ensure personalized,
          results-driven treatments tailored to your unique needs. From
          precision laser hair removal and cutting-edge anti-aging facials to
          targeted acne treatments and advanced pigmentation correction, we
          deliver science-backed, clinical-grade skincare in the comfort of your
          home. <br />
          We redefine beauty with innovation and convenience, offering
          personalized, dermatologist-approved treatments for flawless smooth
          and youthful skin.
        </p>
        <p className="mt-4 text-cello font-medium">
          At <strong>PureSkyn</strong>, we bring clinic-grade professional
          treatments directly to your doorstep, eliminating the need for travel
          and long wait times. Our at-home solutions ensure convenience,
          comfort, and long-lasting results, allowing you to experience expert
          care without disruption to your routine. We prioritize safety and
          efficacy, utilizing US FDA-approved equipment and a team of highly
          trained therapists.
        </p>
        <p className="mt-4 text-cello font-medium">
          Our team works tirelessly to integrate the latest scientific
          advancements into our formulations, ensuring the highest standards of
          safety, efficacy, and innovation. Meanwhile, our marketing team crafts
          impactful messaging to educate and empower our customers, helping them
          make informed skincare choices.
        </p>
        <p className="mt-4 font-poppins text-kashmirBlue font-bold text-2xl">
          Laser Hair Removal At Home
        </p>
        <p className="mt-4 font-poppins text-cello font-medium">
          Say goodbye to shaving, waxing, and the hassle of constant hair
          removal. Our advanced Laser Hair Removal services at home are designed
          to offer permanent hair reduction with minimal discomfort. Whether
          you're looking to remove hair from your face, body, or sensitive
          areas, we have the expertise and technology to get you the smooth skin
          you've always dreamed of.
        </p>
        <Link
          to="/services/laser-hair-removal"
          className="flex items-center mt-2 w-32 md:!w-25 group text-skyn font-bold font-poppins no-underline hover:opacity-80"
        >
          Explore More
          <MdKeyboardDoubleArrowRight className="hidden group-hover:!block text-xl text-skyn duration-3000" />
        </Link>
        <p className="mt-5 font-poppins text-kashmirBlue font-bold text-2xl">
          Medi Facial Treatments At Home
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
