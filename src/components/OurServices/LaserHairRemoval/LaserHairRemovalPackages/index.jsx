import { Link } from "react-router-dom";
import { Breadcrumbs, Typography, useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Resources from "../../../../config/Resources";
import {
  fullBodyLaserContent,
  LHRBenefits,
  sessionWiseHairReduction,
} from "../../../../helpers/LaserServices";
import MotionWrapper from "../../../../config/MotionFramer/MotionWrapper";
import FadeInWrapper from "../../../../config/MotionFramer/FadeInWrapper";
import FuzzyPricingOverlay from "../../../../shared/CustomFuzzyPricingOverlay";
import CustomPricingTable from "../../../../shared/CustomPricingTable";
import FadedLineBreak from "../../../../shared/CustomHrTag";
import WomenAndMenTabs from "./WomenAndMenTabs";

function LaserHairRemovalPackages() {
  const isTablet = useMediaQuery("(max-width: 1023px)");
  const isMobile = useMediaQuery("(max-width: 767px)");

  useEffect(() => {
    sessionStorage.removeItem("currentBookStep");
    sessionStorage.removeItem("treatmentName");
    sessionStorage.removeItem("packageName");
    sessionStorage.removeItem("packagePrice");
  }, []);

  const breadcrumbs = [
    <Link
      key="1"
      to="/"
      className="text-skyn no-underline !font-poppins hover:opacity-80 text-lg"
    >
      Home
    </Link>,
    <Typography key="2" className="!text-cello !font-poppins !text-lg">
      Laser Hair Removal Packages
    </Typography>,
  ];

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
          <Breadcrumbs
            separator=">"
            aria-label="breadcrumb"
            className="mb-4 px-1"
          >
            {breadcrumbs}
          </Breadcrumbs>
          <div className="font-bold text-coffee text-4xl xl:!text-6xl mb-4">
            Laser Hair Removal Packages
          </div>
          <div className="relative">
            {isMobile ? (
              <img
                src={Resources.images.Services.lhrPackagesMobile}
                alt="LHR-Packages"
              />
            ) : (
              <img
                src={Resources.images.Services.lhrPackages}
                alt="LHR-Packages"
              />
            )}
          </div>
          <div>
            <motion.div
              variants={FadeInWrapper("right", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col gap-5 mt-5 md:flex-row font-poppins font-medium text-lg text-center text-coal"
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
            <FadedLineBreak />
            <WomenAndMenTabs isMobile={isMobile} />
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
                <div className="font-extrabold text-4xl text-coffee">
                  {item.header}
                </div>
                <img
                  src={item.imgSrc}
                  alt={item.label}
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
                    alt="expertise"
                    className="mb-5 h-56"
                  />
                  <div className="text-coal text-center">
                    <p className="text-xl font-extrabold">
                      FDA approved machine
                    </p>
                  </div>
                </div>
                <div className="flex flex-col p-2 items-center">
                  <img
                    src={Resources.images.Common.dermat}
                    alt="fda-approved-machine"
                    className="mb-5 h-56 w-56"
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
                    alt="experienced-doctor"
                    className="mb-5 h-56"
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
                    alt="service-at-home"
                    className="mb-5 h-56"
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
