import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import Resources from "../../../config/Resources";
import CustomCards from "../../../shared/CustomCards";
import FadeInWrapper from "../../../config/MotionFramer/FadeInWrapper";
import DrawCircleText from "../../../shared/CustomDrawCircleText";
import CustomHomeHeader from "../../../shared/CustomHomeHeader";

function BestSelling({ isMobile, isLargeScreen }) {
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
        <CustomHomeHeader heading="Most Popular - Laser Hair Removal" />
      </div>
      <div className="flex justify-end px-5">
        <Link
          to="/services/laser-hair-removal"
          className="flex items-center text-skyn font-bold text-xl font-poppins no-underline hover:opacity-80 hover:underline hover:!tracking-widest"
        >
          Explore More
          <MdKeyboardDoubleArrowRight className="text-2xl text-skyn" />
        </Link>
      </div>
      <div
        className={`grid grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 place-items-center gap-4 mb-5 xl:!px-4 ${isLargeScreen ? "mt-5" : "p-2"}`}
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
