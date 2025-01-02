import React from "react";
import Slider from "react-slick"; // Import Slick Slider
import Resources from "../../config/Resources";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

const images = [
  {
    img: `${Resources.images.Carousel.headerOne}`,
    title: "Welcome to Pure Skyn",
    content:
      "Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem.",
    button: "Download",
    navigateTo: "#",
  },
  {
    img: `${Resources.images.Carousel.headerOne}`,
    title: "Services at our Pure Skyn",
    content:
      "Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut.",
    button: "Read More",
    navigateTo: "/services",
  },
  {
    img: `${Resources.images.Carousel.headerOne}`,
    title: "Products",
    content:
      "Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem.",
    button: "Check More",
    navigateTo: "/products",
  },
  {
    img: `${Resources.images.Carousel.headerOne}`,
    title: "About Us",
    content:
      "At Pure Skyn we are focused on providing you with the permanent laser hair removal results that you have always wanted and nothing less. We stand behind our work and ensure that all of our customers are 100% satisfied. If you are looking for laser hair removal in India, please search 'laser hair removal near me' to find our location and contact us to Book a FREE consultation.",
    button: "Read More",
    navigateTo: "/about-us",
  },
];

function CustomCarousel() {
  const isMobile = useMediaQuery("(max-width: 767px)");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="mt-5 p-5 bg-coal shadow-lg text-white w-auto">
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index} className="relative">
            <div className="!flex items-center">
              {!isMobile && (
                <img
                  src={item.img}
                  alt={`carousel-image-${index}`}
                  className="h-72 object-cover rounded-lg shadow-lg"
                />
              )}
              <div
                className={`flex flex-col mb-6 ${isMobile ? "ml-4" : "ml-16"}`}
              >
                <h2>{item.title}</h2>
                <p className="text-wrap">{item.content}</p>
                <Link
                  className="p-2 text-white w-2/5 no-underline text-center font-poppins font-bold rounded-5 border !bg-coal hover:!bg-skyn hover:!text-white transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                  to={item.navigateTo}
                >
                  {item.button}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CustomCarousel;
