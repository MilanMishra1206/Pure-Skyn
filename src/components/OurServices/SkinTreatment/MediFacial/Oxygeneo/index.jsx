import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import Resources from "../../../../../config/Resources";
import { oxygeneoFaqAccordianContent } from "../../../../../helpers/AccordianContent";
import {
  OxyGeneoContent,
  oxygeneoThreeSteps,
} from "../../../../../helpers/MediFacial";
import FadeInWrapper from "../../../../../config/MotionFramer/FadeInWrapper";
import CustomAccordion from "../../../../../shared/CustomAccordion";
import CustomHeader from "../../../../../shared/CustomHeader";
import FadedLineBreak from "../../../../../shared/CustomHrTag";
import DrawCircleText from "../../../../../shared/CustomDrawCircleText";
import CustomFloatingBookNowButton from "../../../../../shared/CustomFloatingBookNowButton";
import BeforeAfterCarousel from "../../../BeforeAfterCarousel";
import { beforeAfterCarouselContent } from "../../../../../helpers/LaserServices";

const CommonHeader = lazy(() => import("../../../CommonHeader"));

function Oxygeneo({ type }) {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(max-width: 1023px)");

  return (
    <div className={`${type ? "mt-5" : "mt-0"}`}>
      <motion.div
        variants={FadeInWrapper("left", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`${isMobile ? "px-3" : "p-3"}`}
      >
        {!type && (
          <CustomHeader
            heading={"Oxygeneo"}
            headerClass={!type && "!text-xl"}
          />
        )}
      </motion.div>

      {type && (
        <div className="text-justify">
          <Suspense fallback={<div>Loading...</div>}>
            <CommonHeader
              isTablet={isTablet}
              imgSrcLaptop={Resources.images.Home.oxygeneo}
              imgSrcTablet={Resources.images.Home.oxygeneoMobile}
              linkTo="/book-now"
              heading="Oxygeneo"
              breadcrumbs1="Medi Facial"
              route1="/services/skin/medi-facial"
              breadcrumbs2="Oxygeneo"
              content="Experience radiant skin with the Oxygeno treatment at home from PureSkyn in India. This innovative skincare solution combines the power of oxygenation 
              with advanced exfoliation techniques, promoting healthier and rejuvenated skin. Our Oxygeno treatment is designed to enhance blood circulation, reduce fine lines, 
              and improve overall skin texture, all in the comfort of your home. With easy-to-follow instructions and premium-quality products, you can achieve a spa-like experience 
              and unveil your skin's natural glow. Discover the perfect blend of luxury and convenience with PureSkyn's Oxygeno treatment today!"
            />
          </Suspense>
          <motion.div
            variants={FadeInWrapper("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`mt-5 ${isTablet ? "p-4" : ""}`}
          >
            <div className="flex flex-col md:!flex-row lg:!px-5 justify-center items-center font-poppins text-cello">
              <div className={`w-full xl:!w-4/5 lg:!px-5 mb-4`}>
                <p>
                  Throughout your daily routine, your skin takes a lot of abuse
                  with exposure to the elements, which only encourages and
                  accelerates the existing degradation of facial skin caused by
                  the aging process. As a result, you might see fine lines,
                  wrinkles, dark spots, blotchy skin, oversized pores, and an
                  overall dull appearance in your face. While you might use
                  products to combat these effects, you may occasionally desire
                  a deeper, more intense healing experience for your skin, and
                  that is what you'll find with OxyGeneo.
                </p>
                <p>
                  This non-invasive treatment is designed to be a 3-in-1 Super
                  Facial that can be tailored to the specific needs of your skin
                  type. One treatment can yield dramatic results, but you may be
                  compelled to keep coming back for regular rejuvenation with
                  this innovative system.
                </p>
              </div>
              <div
                className={`flex justify-center items-center ${!isMobile ? "ml-4 px-4" : ""}`}
              >
                <img
                  src={Resources.images.Services.OxyGeneo.img2}
                  alt="oxygeneo"
                  className="rounded-xl shadow"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={FadeInWrapper("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center font-poppins font-medium text-xl text-center text-coal mt-5 gap-4"
          >
            <div className="text-3xl text-center">
              <p className="font-bold">Step By Step Process</p>
            </div>
            <div
              className="bg-center bg-cover bg-repeat flex p-5 place-content-center w-full"
              style={{
                backgroundImage: `url(${Resources.images.Common.cardBg2})`,
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-medium text-start mt-4 gap-4 bg-opacity-40">
                {oxygeneoThreeSteps.map((item) => (
                  <div
                    className="flex flex-col rounded-2xl shadow bg-[#143048] text-white p-4 opacity-90"
                    key={item.id}
                  >
                    <div className="text-3xl font-bold text-center">
                      {item.title}
                    </div>
                    <FadedLineBreak />
                    <div className="flex flex-col justify-center items-center gap-5">
                      <img
                        src={item.imgSrc}
                        alt={item.title}
                        className="h-[150px] md:!h-75 rounded md:w-50"
                      />
                      <p className="text-center">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={FadeInWrapper("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`mt-3 ${isTablet ? "p-4" : ""}`}
          >
            <div
              className={`flex ${isTablet ? "flex-col" : "justify-center items-center p-5"} font-poppins text-cello`}
            >
              <div
                className={`flex flex-col ${!isTablet ? "w-75 ml-5 mr-5" : "w-full"} lg:mr-10`}
              >
                {OxyGeneoContent.map((item) => (
                  <div className="mb-5" key={item.id}>
                    <div className="!text-2xl font-bold mb-4">{item.title}</div>
                    <div className="flex">{item.content}</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center items-center">
                <img
                  src={Resources.images.Services.OxyGeneo.img5}
                  alt="oxygeneo"
                  className="rounded-xl shadow w-3/5 lg:!w-auto xl:!w-3/5"
                />
              </div>
            </div>
          </motion.div>
          {type && (
            <motion.div
              variants={FadeInWrapper("left", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <DrawCircleText
                headerText={"Exciting Offers -"}
                serviceName={"Medi-Facial Packages!"}
                buttonText="Check Now"
                link="/services/skin/medi-facial-packages"
              />
            </motion.div>
          )}
          <motion.div
            variants={FadeInWrapper("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="px-4"
          >
            <FadedLineBreak />
            <BeforeAfterCarousel
              carouselContent={beforeAfterCarouselContent.oxygeneo}
            />
            <FadedLineBreak />
            <div className="text-center text-skyn font-bold text-3xl px-4">
              <p>Frequently Asked Questions(FAQs)</p>
            </div>
            <div
              className={`mt-3 flex justify-center items-center ${isTablet ? "p-3 flex-col" : "flex-row"}`}
            >
              <div
                className={`mt-4 w-full xl:!w-1/2 ${!isTablet ? "px-5" : ""}`}
              >
                <CustomAccordion accordionData={oxygeneoFaqAccordianContent} />
                <Link
                  to="/faq#Oxygeneo"
                  className="text-skyn hover:opacity-80 text-xl font-bold"
                >
                  Show More FAQs
                </Link>
              </div>
            </div>
          </motion.div>
          <CustomFloatingBookNowButton treatmentName="Oxygeneo" goToStep={1} />
        </div>
      )}
    </div>
  );
}

export default Oxygeneo;
