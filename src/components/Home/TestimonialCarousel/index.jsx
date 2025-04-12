import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Resources from "../../../config/Resources";
import { testimonialsCarousel } from "../../../helpers/AccordianContent";
import CustomHomeHeader from "../../../shared/CustomHomeHeader";
import FadedLineBreak from "../../../shared/CustomHrTag";
import BeforeAfterCarousel from "../../OurServices/BeforeAfterCarousel";
import FadeInWrapper from "../../../config/MotionFramer/FadeInWrapper";
import { motion } from "framer-motion";
import {
  beforeAfterCarouselContent,
  homeBeforeAfterCarouselContent,
} from "../../../helpers/LaserServices";

const TestimonialCarousel = ({ isMobile }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="px-4 mb-5">
      <div className={`${isMobile ? "" : "px-4"}`}>
        <FadedLineBreak />
        <CustomHomeHeader heading="Testimonials - What they say about us" />
      </div>
      <div className="grid grid-cols-1 lg:!grid-cols-2 gap-5 items-center px-4">
        <div className="flex flex-col md:!flex-row items-center justify-center space-x-2">
          <img
            src={Resources.images.Common.googleGLogo}
            alt="Google"
            className="h-[150px]"
          />
          <div className="flex flex-col gap-2 items-center">
            <div className="flex gap-4 items-center">
              <p className="text-2xl md:!text-4xl font-semibold text-kashmirBlue">
                4.7
              </p>
              <div className="flex items-center space-x-0.5">
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-6 w-6 md:!w-10 md:!h-10 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.719c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                {/* Half Star */}
                <svg
                  className="h-6 w-6 md:!w-10 md:!h-10 text-yellow-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <defs>
                    <linearGradient id="half">
                      <stop offset="50%" stopColor="currentColor" />
                      <stop offset="50%" stopColor="white" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#half)"
                    d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.4 8.173L12 18.896l-7.334 3.857 1.4-8.173L.132 9.21l8.2-1.192z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex gap-4 justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:!w-10 md:!h-10 text-blue-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0L1.605 4.5v6.75c0 6.435 4.365 12.57 10.395 13.5 6.03-.93 10.395-7.065 10.395-13.5V4.5L12 0zM10.5 18l-5.25-5.25 1.77-1.77L10.5 14.46l6.48-6.48 1.77 1.77L10.5 18z" />
              </svg>

              {/* Review Text */}
              <p className="text-blue-600 font-medium text-xl md:!text-3xl">
                500+ Reviews
              </p>
            </div>
          </div>
        </div>
        <div className={`text-white w-auto ${isMobile ? "p-1" : "p-5"}`}>
          <Slider {...settings}>
            {testimonialsCarousel.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <div className="bg-white border shadow rounded-2xl p-6 max-w-md mx-auto">
                  <div className="flex items-center justify-center mb-4">
                    <FaQuoteLeft className="text-gray-400 text-4xl" />
                  </div>
                  <p className="text-gray-600 text-base mb-4">
                    {testimonial.content}
                  </p>
                  <div className="flex flex-col items-center">
                    <div className="text-lg font-bold text-gray-800">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.title}
                    </div>
                  </div>
                  <div className="flex items-center justify-center mt-4">
                    <FaQuoteRight className="text-gray-400 text-4xl" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <motion.div
        variants={FadeInWrapper("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flexpx-4"
      >
        <FadedLineBreak />
        <BeforeAfterCarousel carouselContent={homeBeforeAfterCarouselContent} />
        <FadedLineBreak />
      </motion.div>
    </div>
  );
};

export default TestimonialCarousel;
