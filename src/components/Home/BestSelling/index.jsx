import { Link, useNavigate } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import Resources from "../../../config/Resources";
import CustomCards from "../../../shared/CustomCards";
import FadeInWrapper from "../../../config/MotionFramer/FadeInWrapper";
import DrawCircleText from "../../../shared/CustomDrawCircleText";
import CustomHomeHeader from "../../../shared/CustomHomeHeader";

function BestSelling({ isMobile, isLargeScreen }) {
  const navigate = useNavigate();
  const services = [
    {
      id: 1,
      title: "For Women",
      image: `${Resources.images.Services.LaserHairRemoval.Women.imageTwo}`,
      buttonText: "Read More",
      heading: "Laser Hair Removal For Women",
      content:
        "Laser hair removal is a cosmetic procedure that uses concentrated light beams to target hair follicles. It effectively removes unwanted hair by inhibiting future growth, leaving the skin smooth and hair-free. This treatment is ideal for various body areas and provides long-lasting results.",
      treatmentName: "Laser Hair Removal Women",
      linkTo: "/services/laser-hair-removal/women",
    },
    {
      id: 2,
      title: "For Men",
      image: `${Resources.images.Services.LaserHairRemoval.Men.headerMenMobile}`,
      buttonText: "Read More",
      heading: "Laser Hair Removal For Men",
      content:
        "Laser hair removal for men targets hair follicles using focused laser light, reducing unwanted hair. This non-invasive treatment is perfect for areas like the back, chest, or face. It's effective, quick, and helps achieve smooth, well-groomed skin without the hassle of shaving.",
      treatmentName: "Laser Hair Removal Men",
      linkTo: "/services/laser-hair-removal/men",
    },
  ];

  const handleBookNow = (treatmentName) => {
    sessionStorage.setItem("treatmentName", treatmentName);
    sessionStorage.setItem("currentBookStep", 1);
    navigate("/book-now");
  };

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
        className={`grid grid-cols-1 xl:!grid-cols-2 gap-4 xl:!gap-0 place-items-center mb-5 xl:!px-5 ${isLargeScreen ? "mt-5" : "p-2"}`}
      >
        {services.map((item) => (
          <motion.div
            variants={FadeInWrapper("left", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col md:!flex-row max-w-2xl"
            key={item.id}
          >
            <CustomCards
              title={item.title}
              imgSrc={item.image}
              linkTo={item.linkTo}
              key={item.id}
              buttonText={item.buttonText}
              customClass={`${isMobile ? "rounded-t-2xl" : "rounded-l-2xl"}  md:! w-80`}
            />
            <div
              className={`flex flex-col justify-content-between shadow-lg bg-white ${isMobile ? "rounded-b-2xl" : "rounded-r-2xl"} p-4 w-80 md:!w-full`}
            >
              <p className="font-extrabold text-xl text-coal text-center">
                {item.heading}
              </p>
              <p className="font-semibold text-coal text-justify mx-auto">
                {item.content}
              </p>
              <button
                className="border p-2 rounded-3xl font-bold w-full mt-2 bg-coffee text-white hover:opacity-80 transition-colors duration-500"
                onClick={() => handleBookNow(item.treatmentName)}
              >
                Book Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        variants={FadeInWrapper("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="xl:!flex xl:!justify-center xl:!items-center"
      >
        <img
          src={Resources.images.Common.offerBannerMobile}
          alt="Offer"
          className="md:hidden"
        />
        <img
          src={Resources.images.Common.offerBannerLaptop}
          alt="Offer"
          className="hidden md:!block"
        />
      </motion.div>
    </div>
  );
}

export default BestSelling;
