import React, { useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { customPackageDetails } from "../../../helpers/LaserServices";
import CustomHomeHeader from "../../../shared/CustomHomeHeader";
import { Link } from "react-router-dom";
import CustomCards from "../../../shared/CustomCards";

const BestSellingCarousel = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="px-1 py-10 font-poppins">
      <CustomHomeHeader heading="BEST SELLING DEALS" />
      <div className="relative mt-4">
        <MdChevronLeft
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-4xl bg-coal text-white rounded-full cursor-pointer shadow-md"
        />

        <div
          ref={sliderRef}
          className="flex overflow-x-auto space-x-4 px-10 py-1 scrollbar-hide scroll-smooth bg-white"
        >
          {customPackageDetails.map((item, index) => (
            <CustomCards
              title={item.treatmentName}
              imgSrc={item.selectedPackageImg}
              linkTo="/packages"
              packagePrice={item.packagePrice}
              strikeOutPrice={item.strikeOutPrice}
              bgGradient="bg-gradient-to-t from-black/60 via-black/40 to-transparent"
              key={index}
              customClass="w-64 2xl:!w-64 h-[20.5rem] rounded-2xl shadow-lg"
              imageClass="h-100"
              titleClass="text-white"
            />
          ))}
        </div>

        <MdChevronRight
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-4xl bg-coal text-white rounded-full cursor-pointer shadow-md"
        />
      </div>
    </div>
  );
};

export default BestSellingCarousel;
