import React, { useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import CustomHomeHeader from "../../../../shared/CustomHomeHeader";
import { servicesOffered } from "../../../../helpers/LaserServices";
import CustomCards from "../../../../shared/CustomCards";

const CustomServicesCardsCarousel = () => {
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
    <div className="px-4 py-10 font-poppins">
      <CustomHomeHeader heading="BEST SELLING DEALS" />
      <div className="relative mt-4">
        <MdChevronLeft
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-4xl bg-coal text-white rounded-full cursor-pointer shadow-md"
        />

        <div
          ref={sliderRef}
          className="flex overflow-x-auto space-x-4 px-10 py-1 scrollbar-hide scroll-smooth"
        >
          {servicesOffered.map((item) => (
            <CustomCards
              title={item.title}
              imgSrc={item.imageSrc}
              linkTo={item.linkTo}
              key={item.id}
              customClass={"w-72 2xl:!w-60 h-[20.5rem] rounded-2xl shadow-lg"}
              imageClass="h-100"
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

export default CustomServicesCardsCarousel;
