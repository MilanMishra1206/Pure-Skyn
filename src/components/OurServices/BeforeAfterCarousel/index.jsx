import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
        Before & After Treatments
      </h2>
      <div className="w-[250px] md:!w-[500px] lg:!w-[1000px] mx-auto">
        <Slider {...settings}>
          {carouselContent.map((item, index) => (
            <div key={index} className="p-2">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="relative">
                  <img
                    src={item.beforeImg}
                    alt="Before"
                    className="w-48 h-48 sm:w-56 sm:h-56 md:!w-64 md:!h-64 rounded-lg"
                  />
                  <p className="absolute bottom-2 left-2 bg-gray-800 text-white text-xs sm:text-sm px-2 py-1 rounded">
                    Before
                  </p>
                </div>
                <div className="relative">
                  <img
                    src={item.afterImg}
                    alt="After"
                    className="w-48 h-48 sm:w-56 sm:h-56 md:!w-64 md:!h-64 rounded-lg"
                  />
                  <p className="absolute bottom-2 left-2 bg-green-600 text-white text-xs sm:text-sm px-2 py-1 rounded">
                    After
                  </p>
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
