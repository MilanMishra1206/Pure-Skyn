import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import Resources from "../../../../config/Resources";
import {
  beforeAfterCarouselContent,
  laserServiceForWomenContent,
} from "../../../../helpers/LaserServices";
import MotionWrapper from "../../../../config/MotionFramer/MotionWrapper";
import FadeInWrapper from "../../../../config/MotionFramer/FadeInWrapper";
import CustomHeader from "../../../../shared/CustomHeader";
import FadedLineBreak from "../../../../shared/CustomHrTag";
import CustomAccordion from "../../../../shared/CustomAccordion";
import { LHRWomenAccordianContent } from "../../../../helpers/AccordianContent";
import DrawCircleText from "../../../../shared/CustomDrawCircleText";
import BeforeAfterCarousel from "../../BeforeAfterCarousel";

const CommonHeader = lazy(() => import("../../CommonHeader"));

function LaserHairRemovalForWomen({ category, isMobile, isTablet }) {
  const isLaptop = useMediaQuery("(min-width: 1023px)");

  return (
    <MotionWrapper>
      <div className={`${category ? "mt-5" : "mt-0"}`}>
        <motion.div
          variants={FadeInWrapper("left", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`${category ? "mt-5" : "mt-0"} ${isMobile ? "px-3" : "p-3"}`}
        >
          {!category && (
            <CustomHeader
              heading={"Laser Hair Removal For Women"}
              headerClass={`${!category ? "!text-center" : ""}`}
            />
          )}
        </motion.div>
        {category && (
          <div>
            <Suspense fallback={<div>Loading...</div>}>
              <CommonHeader
                isTablet={isTablet}
                imgSrcLaptop={Resources.images.Home.lhrWomen}
                imgSrcTablet={Resources.images.Home.lhrWomenMobile}
                linkTo="/book-now"
                heading="Laser Hair Removal Women"
                breadcrumbs1="Laser Hair Removal"
                route1="/services/laser-hair-removal"
                breadcrumbs2="Women"
                content="Discover the convenience of at-home laser hair removal for
                      women with PureSkyn in India. Our advanced, user-friendly
                      devices provide an effective and safe solution for
                      achieving silky-smooth skin from the comfort of your own
                      home. Designed to target unwanted hair with precision,
                      PureSkyn's innovative technology ensures lasting results
                      while minimizing discomfort. Say goodbye to traditional
                      hair removal methods and embrace the ease of laser hair
                      removal with PureSkyn, empowering you to feel confident
                      and radiant every day. Experience the future of skincare
                      today!"
              />
            </Suspense>
            <div
              className={`grid grid-cols-1 mt-3 place-items-center ${isMobile ? "p-2" : ""} text-justify`}
            >
              {laserServiceForWomenContent.map((item) => (
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
                      <h4 className="font-semibold mt-5 !text-left">
                        {item.subHeaderTwo}
                      </h4>
                    )}
                    <p className="font-medium text-cello">{item.sectionOne}</p>
                    <p className="font-medium text-cello">{item.sectionTwo}</p>
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
            {category === "women" && (
              <motion.div
                variants={FadeInWrapper("up", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <FadedLineBreak />
                <BeforeAfterCarousel
                  carouselContent={beforeAfterCarouselContent.lhrFemale}
                />
                <FadedLineBreak />
                <div className="xl:!flex xl:!justify-center xl:!items-center">
                  <img src={Resources.images.Common.offerBanner} alt="Offer" />
                </div>
                <div className="text-center text-skyn font-bold text-3xl px-4">
                  <p>Frequently Asked Questions(FAQs)</p>
                </div>
                <div
                  className={`flex justify-center items-center ${isTablet ? "p-3 flex-col" : "flex-row"}`}
                >
                  <div className={`mt-4 w-full ${!isTablet ? "px-5" : ""}`}>
                    <CustomAccordion accordionData={LHRWomenAccordianContent} />
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

export default LaserHairRemovalForWomen;
