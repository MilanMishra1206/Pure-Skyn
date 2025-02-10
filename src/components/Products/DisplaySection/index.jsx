import { motion } from "framer-motion";
import FadeInWrapper from "../../../config/MotionFramer/FadeInWrapper";
import Resources from "../../../config/Resources";

const offers = [
  {
    title: "100% Certified",
    description: "Products",
    imageSrc: Resources.images.Products.certified,
  },
  {
    title: "COD",
    description: "PAN-India",
    imageSrc: Resources.images.Products.cod_available,
  },
  {
    title: "Free Delivery",
    description: "Above ₹599",
    imageSrc: Resources.images.Products.free_delivery,
  },
  {
    title: "Dermatologist",
    description: "Approved",
    imageSrc: Resources.images.Products.dermat,
  },
];

const DisplaySection = () => {
  return (
    <motion.div
      variants={FadeInWrapper("top", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex gap-6 lg:p-5 justify-center flex-wrap bg-aliceBlue-1"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 w-full">
        {offers.map((offer, index) => (
          <div
            key={index}
            className={`flex flex-col xl:flex-row justify-center items-center p-3 w-full sm:w-auto 
                 ${index % 4 === 3 ? "lg:!border-r-0" : "lg:!border-r-2"}
              ${index % 2 === 0 ? "border-r-2 lg:!border-r-0" : ""}
              
            `}
          >
            <img
              src={offer.imageSrc}
              alt={offer.title}
              className="h-20 md:h-24 lg:h-28"
            />
            <div className="flex flex-col ml-2">
              <span className="text-md font-bold text-center">
                {offer.title}
              </span>
              <span className="text-sm text-kashmirBlue font-bold text-center">
                {offer.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default DisplaySection;
