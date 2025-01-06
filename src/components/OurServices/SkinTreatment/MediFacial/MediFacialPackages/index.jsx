import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { mediFacialPrimePackages } from "../../../../../helpers/LaserServices";
import { motion } from "framer-motion";
import MotionWrapper from "../../../../../config/MotionFramer/MotionWrapper";
import FadeInWrapper from "../../../../../config/MotionFramer/FadeInWrapper";
import CustomHeader from "../../../../../shared/CustomHeader";
import FuzzyPricingOverlay from "../../../../../shared/CustomFuzzyPricingOverlay";
import Resources from "../../../../../config/Resources";
import CustomPricingTable from "../../../../../shared/CustomPricingTable";
import FadedLineBreak from "../../../../../shared/CustomHrTag";

function MediFacialPackages() {
  const isTablet = useMediaQuery("(max-width: 1023px)");
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <MotionWrapper>
      <div className={`mt-3 ${isTablet ? "py-3" : "py-4 mt-4"}`}>
        <motion.div
          variants={FadeInWrapper("left", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`mt-5 ${isMobile ? "px-1" : "px-5"}`}
        >
          <CustomHeader
            heading={"Medi-Facial Packages"}
            showBackButton={true}
            navigateTo={"/services/skin/medi-facial"}
          />
          <div>
            <div
              className={`w-full h-96 md:!h-[650px] xl:!h-screen bg-cover bg-center relative`}
              style={{
                backgroundImage: `url(${!isTablet ? Resources.images.Services.OxyHydra.header2 : Resources.images.Services.Dermafrac.dermafracCard})`,
              }}
            >
              {!isTablet && (
                <div className="absolute inset-0 flex items-center justify-end mr-5 bg-opacity-40">
                  <div className="flex flex-col w-50">
                    <div className="font-extrabold text-3xl">
                      GET AFFORDABLE MEDI-FACIAL TREATMENTS NOW!
                    </div>
                    <Link
                      to={"/book-now"}
                      className="flex items-center font-poppins text-3xl no-underline space-x-3 font-bold text-skyn transition-colors duration-300 ease-in-out hover:!opacity-80 hover:!tracking-widest"
                    >
                      Book Now{" "}
                      <MdKeyboardDoubleArrowRight className="ml-2 text-3xl text-skyn" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
            {isTablet && (
              <div className="flex flex-col items-center bg-coal text-white p-5">
                <div className="font-extrabold text-3xl text-center">
                  GET AFFORDABLE MEDI-FACIAL TREATMENTS NOW!
                </div>
                <Link
                  to={"/book-now"}
                  className="border duration-300 ease-in-out flex font-bold font-poppins hover:!opacity-80 hover:!tracking-widest items-center mt-4 no-underline p-3 rounded-2 space-x-3 text-3xl text-white transition-colors"
                >
                  Book Now{" "}
                  <MdKeyboardDoubleArrowRight className="ml-2 text-3xl text-white" />
                </Link>
              </div>
            )}
            <motion.div
              variants={FadeInWrapper("left", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <FuzzyPricingOverlay
                header={"EXCITING OFFERS - Medi-Facial Packages!"}
                subText={"100% Satisfaction Guaranteed"}
                buttonText={"Book Now"}
                link="/book-now"
              />
            </motion.div>
            <FadedLineBreak />
            <motion.div
              variants={FadeInWrapper("right", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col font-poppins font-medium text-lg text-center text-coal"
            >
              <p>
                At Pure Skyn, we take pride in our commitment to delivering
                exceptional results. Our highly trained professionals use
                state-of-the-art Venus Velocity Diode laser hair removal machine
                to ensure your comfort and satisfaction throughout your hair
                removal journey.
              </p>
              <p>
                So if you are ready to have a satisfactory, long-lasting glow,
                hydrating & brightened face, pamper your skin with a new age
                Medi facial.
              </p>
            </motion.div>
          </div>
          <FadedLineBreak />
          <motion.div
            variants={FadeInWrapper("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`flex flex-col items-center justify-center font-poppins mt-5 ${isMobile ? "p-1" : "p-4"}`}
          >
            <div className="font-extrabold text-4xl">
              MEDI-FACIAL PRIME PACKAGES
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 place-content-center place-items-center gap-4 mt-4">
              <div className="p-2 rounded shadow-lg">
                <img
                  src={Resources.images.Services.Dermafrac.dermaPackage}
                  className="mb-5"
                />
              </div>
              <div className="p-2 rounded shadow-lg">
                <img
                  src={Resources.images.Services.OxyHydra.oxyPackage}
                  className="mb-5"
                />
              </div>
              <div className="p-2 rounded shadow-lg">
                <img
                  src={Resources.images.Services.SkinTightening.skinPackage}
                  className="mb-5"
                />
              </div>
              <div className="p-2 rounded shadow-lg">
                <img
                  src={Resources.images.Services.mediFacialPackage}
                  className="mb-5"
                />
              </div>
            </div>
            <CustomPricingTable pricingContent={mediFacialPrimePackages} />
          </motion.div>
          <FadedLineBreak />
          <motion.div
            variants={FadeInWrapper("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center font-poppins font-medium text-xl text-center text-coal mt-4 gap-4"
          >
            <div className="text-center">
              <p className="font-extrabold text-3xl ">Pure Skyn Expertise</p>
            </div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-4 font-medium text-start gap-4 bg-opacity-40 ">
                <div className="flex items-center flex-col p-2">
                  <img
                    src={Resources.images.Services.SkinTightening.img4}
                    className="mb-5 h-75"
                  />
                  <div className="text-coal text-center">
                    <p className="text-xl font-extrabold">
                      FDA approved machine
                    </p>
                  </div>
                </div>
                <div className="flex flex-col p-2">
                  <img
                    src={Resources.images.Common.dermat}
                    className="mb-5 h-75"
                  />
                  <div className="text-coal text-center">
                    <p className="text-xl font-extrabold">
                      Backed by 10yrs+ exp. dermats
                    </p>
                  </div>
                </div>
                <div className="flex flex-col p-2">
                  <img
                    src={Resources.images.Common.personalisedPlanning}
                    className="mb-5 h-75"
                  />
                  <div className="text-coal text-center">
                    <p className="text-xl font-extrabold">
                      Personalized session planning
                    </p>
                  </div>
                </div>
                <div className="flex items-center flex-col p-2">
                  <img
                    src={Resources.images.Common.serviceAtHome}
                    className="mb-5 h-75"
                  />
                  <div className="text-coal text-center">
                    <p className="text-xl font-extrabold">
                      At your convenience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </MotionWrapper>
  );
}

export default MediFacialPackages;
