import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "@mui/material";

const OffersCarousel = () => {
  const smallestMobile = useMediaQuery("(max-width: 395px)");
  const mediumMobile = useMediaQuery(
    "(min-width: 396px) and (max-width: 658px)"
  );
  const largeScreeen = useMediaQuery("(min-width: 659px)");

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1101,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 881,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
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
  const offers = [
    {
      title: "Best Value Offer",
      description: "Get 50% off on all skincare products. Limited time offer!",
      code: "SKIN50",
      validUntil: "31st Dec 2025",
    },
    {
      title: "Buy 1 Get 1 Free",
      description: "Buy one product and get another one for free.",
      code: "BUY1GET1",
      validUntil: "15th Feb 2025",
    },
    {
      title: "Free Shipping",
      description: "Free shipping on all orders above ₹500.",
      code: "FREESHIP",
      validUntil: "28th Feb 2025",
    },
    {
      title: "10% Off",
      description: "Get 10% off on your next purchase.",
      code: "NEXT10",
      validUntil: "30th Mar 2025",
    },
  ];

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      alert("Coupon code copied!");
    });
  };

  return (
    <div
      className={`max-w-xl mx-auto mt-8 ${smallestMobile ? "w-56" : ""} ${mediumMobile ? "w-80" : ""} ${largeScreeen ? "w-100" : ""}`}
    >
      <Slider {...settings}>
        {offers.map((offer, index) => (
          <div
            key={index}
            className="flex flex-col justify-between p-6 bg-[#FEEFD2] border border-gray-200 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-coal">{offer.title}</h3>
            <p className="text-sm text-cello">{offer.description}</p>
            <div
              className="border-4 border-dotted border-gray-600 p-4 rounded-md mt-4 cursor-pointer hover:!shadow-xl"
              onClick={() => copyToClipboard(offer.code)}
            >
              <p className="font-semibold text-coal">Code: {offer.code}</p>
              <p className="text-xs text-cello">
                Valid until: {offer.validUntil}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OffersCarousel;
