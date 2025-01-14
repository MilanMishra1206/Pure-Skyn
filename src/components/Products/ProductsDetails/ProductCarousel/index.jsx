import React from "react";
import Slider from "react-slick";
import ProductCard from "../ProductCard";
import "../../../../index.css";

function ProductCarousel({ carouselContent }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1101,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 881,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-4 w-auto">
      <Slider {...settings}>
        {carouselContent.map((item, index) => (
          <div key={index}>
            <ProductCard product={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductCarousel;
