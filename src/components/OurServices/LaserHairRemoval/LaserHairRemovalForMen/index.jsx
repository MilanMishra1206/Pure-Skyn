import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";

import Resources from "../../../../config/Resources";
import { laserServiceForMenContent } from "../../../../helpers/LaserServices";
import MotionWrapper from "../../../../config/MotionFramer/MotionWrapper";
import FadeInWrapper from "../../../../config/MotionFramer/FadeInWrapper";
import CustomHeader from "../../../../shared/CustomHeader";
import FadedLineBreak from "../../../../shared/CustomHrTag";
import DrawCircleText from "../../../../shared/CustomDrawCircleText";
import { LHRMenAccordianContent } from "../../../../helpers/AccordianContent";
import CustomAccordion from "../../../../shared/CustomAccordion";

const CommonHeader = lazy(() => import("../../CommonHeader"));

function LaserHairRemovalForMen({ category, isMobile, isTablet, isLaptop }) {
  return (
    <MotionWrapper>
      <div className={`${category ? "mt-5" : "mt-0"}`}>
        <motion.div
          variants={FadeInWrapper("left", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`${category ? "" : "mt-0"} ${isMobile ? "px-3" : "p-3"}`}
        >
          {!category && (
            <CustomHeader
              heading={"Laser Hair Removal For Men"}
              headerClass={`${!category ? "!text-center" : ""}`}
            />
          )}
        </motion.div>
        {category && (
          <div>
            <Suspense fallback={<div>Loading...</div>}>
              <CommonHeader
                isTablet={isTablet}
                imgSrcLaptop={Resources.images.Home.lhrMen}
                imgSrcTablet={Resources.images.Home.lhrMenMobile}
                linkTo="/book-now"
                heading="Laser Hair Removal Men"
                breadcrumbs1="Laser Hair Removal"
                route1="/services/laser-hair-removal"
                breadcrumbs2="Men"
                content="Experience the freedom of smooth skin with PureSkyn's at-home
                  laser hair removal for men in India. Our advanced, easy-to-use
                  devices bring professional-grade hair removal right to your
                  doorstep. Designed for comfort and effectiveness, our laser
                  technology targets hair follicles, providing long-lasting
                  results while minimizing discomfort. Say goodbye to the hassle
                  of shaving and waxing, and embrace a confident, hair-free
                  look. Join countless satisfied customers who have transformed
                  their grooming routine with PureSkyn's reliable and safe
                  at-home solutions. Achieve the skin you desire, all in the
                  comfort of your home!"
              />
            </Suspense>
            <div
              className={`grid grid-cols-1 mt-3 place-items-center ${isMobile ? "p-2" : ""} text-justify`}
            >
              {laserServiceForMenContent.map((item) => (
                <motion.div
                  variants={FadeInWrapper("right", 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  key={item.id}
                  className={`flex flex-col lg:!flex-row items-center ${isMobile ? "px-4 py-2" : "px-5 py-3"}`}
                >
                  {isLaptop && item.id % 2 === 0 && (
                    <div className="flex justify-center w-full lg:!w-1/2 mr-0 lg:!mr-5">
                      <img
                        src={item.img}
                        alt={item.header.toLowerCase()}
                        className="rounded-2xl h-75"
                      />
                    </div>
                  )}
                  <div className="font-poppins w-full lg:!w-1/2 mr-0 lg:!mr-5">
                    <div className="font-extrabold text-skyn text-3xl text-center md:!text-left">
                      {item.header}
                    </div>
                    <FadedLineBreak />
                    {item.subHeader && (
                      <h4 className="font-medium">{item.subHeader}</h4>
                    )}
                    {item.subHeaderTwo && (
                      <h4 className="font-semibold mt-5">
                        {item.subHeaderTwo}
                      </h4>
                    )}
                    <p className="font-medium text-cello">{item.sectionOne}</p>
                    <p className="font-medium text-cello mb-2">
                      {item.sectionTwo}
                    </p>
                  </div>
                  {!isLaptop && (
                    <div className="flex flex-col w-full">
                      <div className="flex justify-center w-full lg:!w-1/2">
                        <img
                          src={item.img}
                          alt={item.header.toLowerCase()}
                          className="rounded-2xl h-75"
                        />
                      </div>
                      <FadedLineBreak />
                    </div>
                  )}
                  {isLaptop && item.id % 2 !== 0 && (
                    <div className="flex justify-center w-full lg:!w-1/2">
                      <img
                        src={item.img}
                        alt={item.header.toLowerCase()}
                        className="rounded-2xl h-75"
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
            {category === "men" && (
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
                <FadedLineBreak />
                <div className="text-center text-skyn font-bold text-3xl px-4">
                  <p>Frequently Asked Questions(FAQs)</p>
                </div>
                <div
                  className={`flex justify-center items-center ${isTablet ? "p-3 flex-col" : "flex-row"}`}
                >
                  <div className={`mt-4 w-full ${!isTablet ? "px-5" : ""}`}>
                    <CustomAccordion accordionData={LHRMenAccordianContent} />
                    <Link
                      to="/faq#Laser Hair Removal Men"
                      className="text-skyn hover:opacity-80 text-xl font-bold"
                    >
                      Show More FAQs
                    </Link>
                  </div>
                  <div
                    className={`flex justify-center items-center ${!isTablet ? "p-5" : ""}`}
                  >
                    <img
                      src={
                        Resources.images.Services.LaserHairRemoval
                          .laserHairRemovalCard
                      }
                      alt="laser-Hair-Removal-Card"
                      className={`rounded-xl shadow mt-4 ${!isMobile ? "h-75" : ""}`}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </MotionWrapper>
  );
}

export default LaserHairRemovalForMen;
