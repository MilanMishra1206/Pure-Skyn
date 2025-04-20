import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomHomeHeader from "../../../shared/CustomHomeHeader";

const BeforeAfterCarousel = ({ carouselContent }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="w-[250px] md:!w-[500px] lg:!w-[1000px] mx-auto font-poppins">
      <CustomHomeHeader heading="Before & After Treatments" />
      <div className="w-[250px] md:!w-[500px] lg:!w-[1000px] mx-auto">
        <Slider {...settings}>
          {carouselContent.map((item, index) => (
            <div key={index} className="p-2">
              <p className="font-bold text-lg text-kashmirBlue text-center mb-4">
                {item.serviceName}
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="relative">
                  <img
                    src={item.img}
                    alt="before-after"
                    className="w-48 h-48 sm:w-56 sm:h-56 md:!w-64 md:!h-64 rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BeforeAfterCarousel;
