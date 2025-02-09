import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Breadcrumbs, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { allPackageDetails } from "../../../../../helpers/LaserServices";
import MotionWrapper from "../../../../../config/MotionFramer/MotionWrapper";
import FadeInWrapper from "../../../../../config/MotionFramer/FadeInWrapper";
import FuzzyPricingOverlay from "../../../../../shared/CustomFuzzyPricingOverlay";
import Resources from "../../../../../config/Resources";
import CustomPricingTable from "../../../../../shared/CustomPricingTable";
import FadedLineBreak from "../../../../../shared/CustomHrTag";

function MediFacialPackages() {
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
      Medi-Facial Packages
    </Typography>,
  ];

  const createPricingContent = (data) => {
    let pricingContent = [];
    const targetCategories = [
      "skinTightening",
      "oxyhydraFacial",
      "oxygeneo",
      "dermafrac",
    ];
    targetCategories.forEach((category) => {
      const subCategories = data[category];

      Object.values(subCategories).forEach((treatments) => {
        treatments.forEach((treatment) => {
          pricingContent.push({
            label: treatment.label,
            pricing: treatment.price,
            packageName: treatment.name,
            Step3: true,
            isMedifacialPackage: true,
            multiplSessions: treatment.name.includes("(4+1)"),
          });
        });
      });
    });

    return pricingContent;
  };

  const mediFacialPrimePackages = createPricingContent(allPackageDetails);

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
          <div>
            <Breadcrumbs
              separator=">"
              aria-label="breadcrumb"
              className="mb-4 px-1"
            >
              {breadcrumbs}
            </Breadcrumbs>
            <div className="font-bold text-coffee text-4xl xl:!text-6xl mb-4">
              Medi-Facial Packages
            </div>
            <div className="relative">
              {isMobile ? (
                <img
                  src={Resources.images.Services.mediFacialPackageMobile}
                  alt="Medi-facial-packages"
                />
              ) : (
                <img
                  src={Resources.images.Services.mediFacialPackage}
                  alt="Medi-facial-packages"
                />
              )}
            </div>
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
                  src={Resources.images.Home.oxyhydraMoble}
                  className="mb-5"
                />
              </div>
              <div className="p-2 rounded shadow-lg">
                <img
                  src={Resources.images.Home.skinTighteningMobile}
                  className="mb-5"
                />
              </div>
              <div className="p-2 rounded shadow-lg">
                <img
                  src={Resources.images.Home.dermfracMobile}
                  className="mb-5"
                />
              </div>
              <div className="p-2 rounded shadow-lg">
                <img
                  src={Resources.images.Home.oxygeneoMobile}
                  className="mb-5"
                />
              </div>
            </div>
            <CustomPricingTable
              pricingContent={mediFacialPrimePackages}
            />
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
                    className="mb-5 h-56"
                  />
                  <div className="text-coal text-center">
                    <p className="text-xl font-extrabold">
                      FDA approved machine
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center p-2">
                  <img
                    src={Resources.images.Common.dermat}
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
                    src={Resources.images.Common.personalisedPlanning}
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

export default MediFacialPackages;
