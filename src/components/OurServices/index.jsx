import { Breadcrumbs, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import CustomCards from "../../shared/CustomCards";
import { servicesCardDetails } from "../../helpers/LaserServices";
import FadeInWrapper from "../../config/MotionFramer/FadeInWrapper";
import FadedLineBreak from "../../shared/CustomHrTag";
import { Link } from "react-router-dom";
import Resources from "../../config/Resources";

function LaserServices() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isLargeScreen = useMediaQuery("(min-width: 1023px)");
  const isTablet = useMediaQuery("(max-width: 1023px)");

  const breadcrumbs = [
    <Link
      key="1"
      to="/"
      className="text-skyn no-underline !font-poppins hover:opacity-80 text-lg"
    >
      Home
    </Link>,
    <Typography key="3" className="text-cello font-poppins text-lg">
      Services
    </Typography>,
  ];

  return (
    <div className={`mt-3 ${isTablet ? "py-3" : "py-4 mt-4"}`}>
      <motion.div
        variants={FadeInWrapper("left", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`mt-5 ${isMobile ? "px-1" : "px-5"}`}
      >
        <Breadcrumbs
          separator=">"
          aria-label="breadcrumb"
          className="mb-4 px-4 py-2"
        >
          {breadcrumbs}
        </Breadcrumbs>
        {isLargeScreen && (
          <div className="grid grid-cols-2 font-poppins h-96">
            <div className="flex flex-col justify-between p-5 bg-[#FFF7E9]">
              <div className="space-y-10 text-center lg:mb-5">
                <div className="text-4xl xl:!text-6xl font-medium text-center text-coal">
                  <p>It's All About </p> <p className="mt-3">The Results!</p>
                </div>
                <p className="text-center text-coal text-xl">
                  Laser Hair Removal, Oxy Hydra Facial, RF Skin Tightening,
                  Dermafrac Infusion, Oxygenero & More.
                </p>
              </div>
              <div className="grid  mt-4 lg:!mt-0">
                <Link
                  to="/book-now"
                  className="w-full no-underline text-center rounded-3xl border-1 !border-[#B18260] shadow md:p-2 lg:!p-3 duration-500 text-coffee hover:!bg-coffee hover:!text-white hover:!shadow-lg"
                >
                  Book Now
                </Link>
              </div>
            </div>
            <img
              src={Resources.images.Common.homeHeader}
              className="h-100 w-full"
              alt="Banner"
            />
          </div>
        )}
        {!isLargeScreen && (
          <div className="grid md:!grid-cols-2 font-poppins">
            <img
              src={Resources.images.Common.homeHeaderMobile}
              className="h-100 w-full"
              alt="Banner"
            />
            <div className="flex flex-col justify-between p-5 bg-[#FFF7E9]">
              <div className="space-y-10 text-center lg:mb-5">
                <div className="text-4xl xl:!text-6xl font-medium text-center text-coal">
                  <p>It's All About </p> <p className="mt-3">The Results!</p>
                </div>
                <p className="text-center text-coal text-xl">
                  Laser Hair Removal, Oxy Hydra Facial, RF Skin Tightening,
                  Dermafrac Infusion, Oxygenero & More.
                </p>
              </div>
              <div className="grid mt-4 lg:!mt-0">
                <Link
                  to="/book-now"
                  className="w-full no-underline text-center rounded-3xl border-1 !border-[#B18260] shadow p-2 lg:!p-3  text-coffee hover:!bg-coffee hover:!text-white hover:!shadow-lg"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </motion.div>
      <div className={`mt-5 ${isMobile ? "p-3" : "p-5"}`}>
        <div className="text-justify font-poppins text-cello">
          <p className="mb-4">
            At <strong>Pure Skyn</strong>, we believe in the power of self-care
            and rejuvenation, offering cutting-edge, non-invasive beauty and
            wellness treatments that bring out the best version of yourself. Our
            expertly designed services are tailored to cater to your skin's
            unique needs, leaving you feeling refreshed, revitalized, and
            glowing. Whether you're looking to tackle unwanted hair, rejuvenate
            your skin, or tighten and lift, we have the perfect solution for
            you.
          </p>
          {servicesCardDetails.map((service, index) => (
            <motion.div
              variants={FadeInWrapper("up", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div key={index}>
                <div className="gap-5 grid grid-cols-1 md:grid-cols-2 place-items-center">
                  <div>
                    <p className="font-bold mb-2">
                      {index + 1}. {service.title}
                    </p>
                    <span>{service.description}</span>
                    <ol className="font-medium list-disc text-start p-4 ml-4">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ol>
                  </div>
                  <div className="flex items-center">
                    <CustomCards
                      key={index}
                      title={service.cardTitle}
                      imgSrc={service.image}
                      linkTo={service.linkTo}
                    />
                  </div>
                </div>
                {index < servicesCardDetails.length - 1 && <FadedLineBreak />}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LaserServices;
