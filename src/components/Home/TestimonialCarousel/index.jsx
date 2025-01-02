import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Resources from "../../../config/Resources";
import CustomHeader from "../../../shared/CustomHeader";
import { testimonialsCarousel } from "../../../helpers/AccordianContent";

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
        <CustomHeader
          heading={"Testimonials"}
          subHeading={"What they say about us"}
        />
      </div>
      <div className="grid grid-cols-1 lg:!grid-cols-2 gap-5 items-center px-4">
        <div className="flex justify-center items-center">
          <img
            src={Resources.images.Services.feedback}
            alt="feedbacks"
            className="md:!w-3/5 lg:!w-67/100"
          />
        </div>
        <div
          className={`mt-5 bg-coal rounded shadow-lg text-white w-auto ${isMobile ? "p-2" : "p-5"}`}
        >
          <Slider {...settings}>
            {testimonialsCarousel.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <div className="bg-white shadow-lg rounded-3xl p-6 max-w-md mx-auto">
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
    </div>
  );
};

export default TestimonialCarousel;
