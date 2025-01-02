import { Link } from "react-router-dom";
import Resources from "../../../config/Resources";
import CustomHeader from "../../../shared/CustomHeader";
import CustomCards from "../../../shared/CustomCards";
import FadeInWrapper from "../../../config/MotionFramer/FadeInWrapper";
import { motion } from "framer-motion";
import DrawCircleText from "../../../shared/CustomDrawCircleText";

function BestSelling({ isMobile }) {
  const services = [
    {
      id: 1,
      title: "For Men",
      image: `${Resources.images.Services.LaserHairRemoval.Men.headerMenMobile}`,
      buttonText: "Read More",
      linkTo: "/services/laser-hair-removal/men",
    },
    {
      id: 2,
      title: "For Women",
      image: `${Resources.images.Services.LaserHairRemoval.Women.imageTwo}`,
      buttonText: "Read More",
      linkTo: "/services/laser-hair-removal/women",
    },
    {
      id: 3,
      title: "Book Session",
      image: `${Resources.images.Services.LaserHairRemoval.hairRemovalBookNow}`,
      buttonText: "Book Now",
      linkTo: "/book-now?treatment=Laser Hair Removal",
    },
  ];

  return (
    <div className="px-4">
      <div className={`${isMobile ? "" : "px-4"}`}>
        <CustomHeader
          heading={"Most Popular"}
          subHeading={"Laser Hair Removal"}
        />
      </div>
      <div className="flex justify-end mt-4 px-5">
        <Link
          to="/services/laser-hair-removal"
          className="text-skyn hover:opacity-80 font-bold text-xl font-poppins hover:!font-mono"
        >
          {"Explore More >>"}
        </Link>
      </div>
      <div
        className={`grid grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 place-items-center gap-4 ${isMobile ? "p-2" : "p-5"}`}
      >
        {services.map((item) => (
          <CustomCards
            title={item.title}
            imgSrc={item.image}
            linkTo={item.linkTo}
            key={item.id}
            buttonText={item.buttonText}
          />
        ))}
      </div>
      <motion.div
        variants={FadeInWrapper("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <DrawCircleText
          headerText={"70% OFF -"}
          serviceName={"Laser Hair Removal Packages!"}
          buttonText="Check Now"
          link="/services/laser-hair-removal-packages"
        />
      </motion.div>
    </div>
  );
}

export default BestSelling;
