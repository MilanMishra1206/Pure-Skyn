import { useState } from "react";

const OffersCarousel = () => {
  const offers = [
    {
      title: "Best Value Offer",
      description: "Get 50% off on all skincare products. Limited time offer!",
    },
    {
      title: "Buy 1 Get 1 Free",
      description: "Buy one product and get another one for free.",
    },
    {
      title: "Free Shipping",
      description: "Free shipping on all orders above ₹500.",
    },
  ];

  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);

  const nextOffer = () => {
    setCurrentOfferIndex((prevIndex) =>
      prevIndex === offers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevOffer = () => {
    setCurrentOfferIndex((prevIndex) =>
      prevIndex === 0 ? offers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative mt-6 max-w-4xl mx-auto">
      <div className="flex overflow-hidden rounded-xl shadow">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentOfferIndex * 100}%)` }}
        >
          {offers.map((offer, index) => (
            <div
              key={index}
              className="flex-none w-full p-5 flex justify-between items-center bg-success-subtle"
            >
              <div>
                <h3 className="text-xl font-semibold">{offer.title}</h3>
                <p className="text-sm mt-2">{offer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevOffer}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-success-subtle px-1 text-2xl hover:opacity-80 rounded-full"
      >
        &#8592;
      </button>
      <button
        onClick={nextOffer}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-success-subtle px-1 text-2xl hover:opacity-80 rounded-full"
      >
        &#8594;
      </button>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-coal font-semibold text-lg">
        {currentOfferIndex + 1} / {offers.length}
      </div>
    </div>
  );
};

export default OffersCarousel;
