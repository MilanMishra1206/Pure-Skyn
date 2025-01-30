import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

import Resources from "../../../../config/Resources";
import {
  fullBodyLaserContent,
  laserHairMenPackage,
  laserHairWomenPackage,
  laserServicePackages,
  LHRAreaImg,
  LHRBenefits,
  LHRPrimePackageImg,
  LHRPrimePackages,
  LHRRemovalArea,
  sessionWiseHairReduction,
} from "../../../../helpers/LaserServices";
import MotionWrapper from "../../../../config/MotionFramer/MotionWrapper";
import { motion } from "framer-motion";
import FadeInWrapper from "../../../../config/MotionFramer/FadeInWrapper";
import CustomHeader from "../../../../shared/CustomHeader";
import FuzzyPricingOverlay from "../../../../shared/CustomFuzzyPricingOverlay";
import DrawCircleText from "../../../../shared/CustomDrawCircleText";
import CustomPricingTable from "../../../../shared/CustomPricingTable";
import FadedLineBreak from "../../../../shared/CustomHrTag";
import CustomButton2 from "../../../../shared/CustomButton2";
import { useEffect } from "react";

function LaserHairRemovalPackages() {
  const isTablet = useMediaQuery("(max-width: 1023px)");
  const isMobile = useMediaQuery("(max-width: 767px)");
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.removeItem("currentBookStep");
    sessionStorage.removeItem("treatmentName");
    sessionStorage.removeItem("packageName");
    sessionStorage.removeItem("packagePrice");
  }, []);

  const handleBookNowClick = (laserOption) => {
    navigate(`/book-now`);
  };

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
            heading={"Laser Hair Removal Packages"}
            showBackButton={true}
            navigateTo={"/services/laser-hair-removal"}
          />
          <div>
            <div
              className="w-full h-96 bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${!isTablet ? Resources.images.Common.bookNowBanner : Resources.images.Services.LaserHairRemoval.laserHairRemovalCard})`,
              }}
            >
              {!isTablet && (
                <div className="absolute inset-0 flex items-center justify-end mr-5 bg-opacity-40">
                  <div className="flex flex-col w-50">
                    <div className="font-extrabold text-3xl">
                      GET AFFORDABLE LASER HAIR REMOVAL NOW!
                    </div>
                    <button
                      className="flex items-center font-poppins text-3xl no-underline space-x-3 font-bold text-skyn transition-colors duration-300 ease-in-out hover:!opacity-80 hover:!tracking-widest"
                      onClick={() => navigate("/book-now")}
                    >
                      Book Now{" "}
                      <MdKeyboardDoubleArrowRight className="ml-2 text-3xl text-skyn" />
                    </button>
                  </div>
                </div>
              )}
            </div>
            {isTablet && (
              <div className="flex flex-col items-center bg-coal text-white p-5">
                <div className="font-extrabold text-3xl text-center">
                  GET AFFORDABLE LASER HAIR REMOVAL NOW!
                </div>
                <Link
                  to={"/book-now?treatment=Laser Hair Removal"}
                  className="border duration-300 ease-in-out flex font-bold font-poppins hover:!opacity-80 hover:!tracking-widest items-center mt-4 no-underline p-3 rounded-2 space-x-3 text-3xl text-white transition-colors"
                >
                  Book Now{" "}
                  <MdKeyboardDoubleArrowRight className="ml-2 text-3xl text-white" />
                </Link>
              </div>
            )}
            <motion.div
              variants={FadeInWrapper("up", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <DrawCircleText
                headerText={"70% OFF -"}
                serviceName={"Laser Hair Removal Packages!"}
              />
            </motion.div>
            <FadedLineBreak />
            <motion.div
              variants={FadeInWrapper("right", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col gap-5 md:flex-row font-poppins font-medium text-lg text-center text-coal"
            >
              <p>
                At Pure Skyn, we take pride in our commitment to delivering
                exceptional results. Our highly trained professionals use
                state-of-the-art Venus Velocity Diode laser hair removal machine
                to ensure your comfort and satisfaction throughout your hair
                removal journey.
              </p>
              <p>
                Don't miss out on the chance to experience the freedom and
                confidence that comes with smooth, hair-free skin. Our laser
                hair removal packages are a limited-time offer, so act now to
                secure your spot. Say goodbye to unwanted hair and hello to a
                lifetime of effortless beauty.
              </p>
            </motion.div>
            <FadedLineBreak />
            <motion.div
              variants={FadeInWrapper("up", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`flex flex-col items-center justify-center font-poppins mt-5 ${isMobile ? "p-1" : "p-4"}`}
            >
              <p className="font-bold text-center text-3xl mb-5 mt-3">
                Book Your Package Today!!
              </p>
              <p className="font-bold text-center text-4xl mb-5 mt-3 text-coffee">
                Laser Hair Removal For Women
              </p>
              <motion.div
                variants={FadeInWrapper("left", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:!grid-cols-4 xl:!grid-cols-5 gap-4"
              >
                {laserHairWomenPackage.map((item) => (
                  <div key={item.id}>
                    <div className="relative overflow-hidden rounded-sm shadow-lg group cursor-pointer h-56 place-items-center">
                      <img
                        src={item.imgSrc}
                        className="transition-transform group-hover:scale-110 duration-500 h-52 object-cover p-3"
                        alt={item.packageName}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
              <CustomPricingTable
                pricingContent={laserHairWomenPackage}
                treatmentName="Laser Hair Removal Women"
              />
            </motion.div>
            <motion.div
              variants={FadeInWrapper("up", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`flex flex-col items-center justify-center font-poppins ${isMobile ? "p-1" : "p-4"}`}
            >
              <p className="font-bold text-center text-4xl mb-5 mt-3 text-coffee">
                Laser Hair Removal For Men
              </p>
              <motion.div
                variants={FadeInWrapper("left", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:!grid-cols-4 xl:!grid-cols-5 gap-4"
              >
                {laserHairMenPackage.map((item) => (
                  <div key={item.id}>
                    <div className="relative overflow-hidden rounded-sm shadow-lg group cursor-pointer h-56 place-items-center">
                      <img
                        src={item.imgSrc}
                        className="transition-transform group-hover:scale-110 duration-500 h-52 object-cover p-3"
                        alt={item.packageName}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
              <CustomPricingTable
                pricingContent={laserHairMenPackage}
                treatmentName="Laser Hair Removal Men"
              />
            </motion.div>
          </div>
          <motion.div
            variants={FadeInWrapper("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center font-poppins font-medium text-xl text-center text-coal mt-5 gap-4"
          >
            <div className="text-3xl text-center">
              <p className="font-medium">The Benefits of the</p>
              <p className="font-extrabold">LHR services at Pure Skyn</p>
            </div>
            <div
              className="bg-center bg-cover bg-repeat flex p-5 place-content-center w-full"
              style={{
                backgroundImage: `url(${Resources.images.Common.cardBg2})`,
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 xl:!grid-cols-4 font-medium text-start mt-4 gap-4 bg-opacity-40">
                {LHRBenefits.map((item) => (
                  <div
                    className="shadow p-4 w-64 bg-[#143048] text-white text-center rounded-xl"
                    key={item.id}
                  >
                    <p>
                      <strong>{item.mainText}</strong>
                    </p>
                    <FadedLineBreak />
                    <p>{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
            <FuzzyPricingOverlay
              header={" Laser Hair Removal Discounted Packages"}
              subText={
                "Don't miss out on this opportunity to flaunt smooth, hair-free skin all year round. Take advantage of our limited-time offer and book your Laser Hair Removal Discounted Package today."
              }
              buttonText={"Book Your Session"}
              link="/book-now"
            />
          </motion.div>
          <motion.div
            variants={FadeInWrapper("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-5"
          >
            {fullBodyLaserContent.map((item) => (
              <div
                key={item.id}
                className={`flex flex-col items-center justify-center font-poppins ${isMobile ? "p-1" : "p-4"}`}
              >
                <div className="font-extrabold text-4xl">{item.header}</div>
                <img
                  src={item.imgSrc}
                  className={`${isTablet ? "" : "w-3/5"}`}
                />
                <CustomPricingTable
                  pricingContent={item.pricingContent}
                  treatmentName={item.label}
                />
              </div>
            ))}
          </motion.div>
          <FadedLineBreak />
          <motion.div
            variants={FadeInWrapper("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center font-poppins font-medium text-xl text-center text-coal mt-5 gap-4"
          >
            <div className="text-center">
              <p className="font-extrabold text-3xl ">
                Session wise hair reduction
              </p>
              <p className="font-medium">
                Expected hair growth as per number of sessions taken
              </p>
            </div>
            <div
              className="bg-center bg-cover bg-repeat flex place-content-center w-full"
              style={{
                backgroundImage: `url(${Resources.images.Common.cardBg2})`,
              }}
            >
              <div className="grid grid-cols-1 lg:!grid-cols-2 xl:!grid-cols-3 font-medium text-start mt-4 gap-4 bg-opacity-40">
                {sessionWiseHairReduction.map((item) => (
                  <div
                    className="shadow p-4 w-96 bg-[#143048] text-white text-center rounded-xl"
                    key={item.id}
                  >
                    <p>
                      <strong>{item.mainText}</strong>
                    </p>
                    <FadedLineBreak />
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.content,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <FadedLineBreak />
          <motion.div
            variants={FadeInWrapper("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center font-poppins font-medium text-xl text-center text-coal mt-5 gap-4"
          >
            <div className="text-center">
              <p className="font-extrabold text-3xl ">Pure Skyn Expertise</p>
            </div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-4 font-medium text-start mt-4 gap-4 bg-opacity-40 ">
                <div className="flex items-center flex-col p-2">
                  <img
                    src={Resources.images.Services.LaserHairRemoval.machine}
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
                    src={Resources.images.Common.personalDr}
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

export default LaserHairRemovalPackages;
