import React from "react";
import { treatmentList } from "../../../helpers/LaserServices";
import { useNavigate } from "react-router-dom";

const SmallCard = ({ image, title }) => {
  const navigate = useNavigate();

  const handleCardClick = (treatmentName) => {
    sessionStorage.setItem("treatmentName", treatmentName);
    sessionStorage.setItem("currentBookStep", 1);

    navigate("/book-now");
  };

  return (
    <div
      className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center p-2"
      onClick={() => handleCardClick(title)}
    >
      <img src={image} alt={title} className="object-cover rounded-md" />
      <p className="text-sm mt-2 text-center font-poppins ">{title}</p>
    </div>
  );
};

const ServiceCards = () => {
  return (
    <div className="grid grid-cols-2 gap-3 overflow-x-auto p-4">
      {treatmentList.map((card, index) => (
        <SmallCard key={index} image={card.imgSrc} title={card.treatmentName} />
      ))}
    </div>
  );
};

export default ServiceCards;
