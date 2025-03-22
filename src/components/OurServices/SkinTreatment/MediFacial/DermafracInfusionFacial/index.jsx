import { lazy, Suspense } from "react";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Resources from "../../../../../config/Resources";
import { dermaFracMicroneedling } from "../../../../../helpers/MediFacial";
import { dermoFracAccordianContent } from "../../../../../helpers/AccordianContent";
import FadeInWrapper from "../../../../../config/MotionFramer/FadeInWrapper";
import CustomAccordion from "../../../../../shared/CustomAccordion";
import CustomHeader from "../../../../../shared/CustomHeader";
import FadedLineBreak from "../../../../../shared/CustomHrTag";
import DrawCircleText from "../../../../../shared/CustomDrawCircleText";
import CustomFloatingBookNowButton from "../../../../../shared/CustomFloatingBookNowButton";
import BeforeAfterCarousel from "../../../BeforeAfterCarousel";
import { beforeAfterCarouselContent } from "../../../../../helpers/LaserServices";

const CommonHeader = lazy(() => import("../../../CommonHeader"));

function DermafracInfusionFacial({ type }) {
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
            heading={"Dermafrac Infusion Facial"}
            showBackButton={type}
            navigateTo={"/services/skin/medi-facial"}
            headerClass={!type && "!text-xl"}
          />
        )}
      </motion.div>
      {type && (
        <div className="text-justify">
          <Suspense fallback={<div>Loading...</div>}>
            <CommonHeader
              isTablet={isTablet}
              imgSrcLaptop={Resources.images.Home.dermfrac}
              imgSrcTablet={Resources.images.Home.dermfracMobile}
              linkTo="/book-now"
              heading="Dermafrac Infusion Facial"
              breadcrumbs1="Medi Facial"
              route1="/services/skin/medi-facial"
              breadcrumbs2="Dermafrac"
              content="DermaFrac treatment at PureSkyn in India offers a revolutionary at-home skincare solution that combines microneedling and infusion therapy for 
                    radiant, rejuvenated skin. This non-invasive procedure stimulates collagen production and enhances product absorption, delivering potent serums 
                    deep into the skin. Designed for all skin types, DermaFrac helps reduce fine lines, improve texture, and boost hydration, providing visible results 
                    from the comfort of your home. Experience the luxury of professional skincare with the convenience of at-home treatments, and unlock 
                    your skin's true potential with PureSkyn."
            />
          </Suspense>
          <motion.div
            variants={FadeInWrapper("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`mt-3 ${isTablet ? "p-4" : ""}`}
          >
            <div
              className={`flex ${isTablet ? "flex-col" : "flex-row justify-center items-center"} font-poppins text-cello mt-5`}
            >
              <div className={`${!isTablet ? "w-50" : "w-full"}`}>
                <p>
                  DermaFrac™ is a unique and innovative microneedling system
                  small channels into the skin while, at the same time, infusing
                  active topical solutions. It is an advanced rejuvenation
                  technology which helps in improving various skin concerns
                  including sun spots, pigmentation, open pores, mild acne
                  scarring and marks, fine lines, wrinkles and dry and
                  dehydrated skin.
                </p>
                <p>
                  The micro needles are designed in such a way so as to create
                  tiny-channels that penetrate just below the outer layers of
                  the skin but just above the nerve endings and capillaries.
                  DermaFrac uses vacuum so that the microneedles penetrate to a
                  proper depth. These channels then provide pathways for
                  different active solutions - which are pulled into the target
                  layers of the skin.
                </p>
                <p>
                  It has proven to be more effective than lasers or chemical
                  peeling treatments, with no down time and at a significantly
                  lower cost.
                </p>
              </div>
              <div className="flex justify-center items-center lg:ml-10">
                <img
                  src={Resources.images.Services.Dermafrac.imageOne}
                  alt="dermafrac-infusion-facial"
                  className="rounded-xl shadow"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={FadeInWrapper("left", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`mt-3 ${isTablet ? "p-4" : ""}`}
          >
            <div
              className={`flex ${isTablet ? "flex-col" : "justify-center items-center p-5"} font-poppins text-cello`}
            >
              {!isTablet && (
                <img
                  src={Resources.images.Services.Dermafrac.imageTwo}
                  alt="dermafrac-infusion-facial"
                  className="rounded-xl shadow"
                />
              )}
              <div
                className={`flex flex-col ${!isTablet ? "w-50 ml-5" : "w-full"} lg:ml-10`}
              >
                <div className="!text-2xl font-bold">
                  What conditions does Dermafrac treatment solve?
                </div>
                <div className="flex flex-col">
                  <p>
                    Dermafrac is a very safe and effective treatment for various
                    skin types. With this technology, we have treated and
                    improved different skin conditions such as:
                  </p>
                  <ul className="list-disc pl-4 !text-left">
                    <li>Congested oily skin</li>
                    <li>Scars</li>
                    <li>Stretch marks</li>
                    <li>Skin dehydration</li>
                    <li>Superficial fine lines and wrinkles</li>
                    <li>Pigmentation, Sun spots and Uneven skin tone</li>
                  </ul>
                </div>
              </div>
              {isTablet && (
                <div className="flex justify-center items-center">
                  <img
                    src={Resources.images.Services.Dermafrac.imageTwo}
                    alt="dermafrac-infusion-facial"
                    className="rounded-xl shadow"
                  />
                </div>
              )}
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
              className={`font-poppins text-cello ${isTablet ? "flex justify-center items-center" : ""}`}
            >
              <div className="flex flex-col ml-0 xl:!ml-5">
                <div className="!text-2xl font-bold mb-2">
                  How Does DermaFrac Microneedling Work?
                </div>
                <p>
                  The major key to this treatment is the revolutionary vacuum
                  technology that lifts skin right into the hundreds of
                  microneedles in this device. After microchannels are created
                  in the skin, specialty serums are applied to assist in healing
                  and to encourage specific results. At our clinic, we offer
                  four different serum formulas, including:
                </p>
                <div
                  className="bg-center bg-cover bg-repeat flex lg:px-5 place-content-center w-full"
                  style={{
                    backgroundImage: `url(${Resources.images.Common.cardBg2})`,
                  }}
                >
                  <div className="grid grid-cols-1 md:!grid-cols-2 xl:!grid-cols-4 gap-5 mt-5">
                    {dermaFracMicroneedling.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col rounded-2xl shadow bg-[#143048] text-white p-4 opacity-90"
                      >
                        <div className="text-xl font-bold text-center">
                          {item.title}
                        </div>
                        <FadedLineBreak />
                        <p className="text-center">{item.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={FadeInWrapper("left", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`mt-3 ${isTablet ? "p-4" : ""}`}
          >
            <div
              className={`flex ${isTablet ? "flex-col" : "justify-center items-center p-5"} font-poppins text-cello`}
            >
              {!isTablet && (
                <img
                  src={Resources.images.Services.Dermafrac.imageThree}
                  alt="dermafrac-infusion-facial"
                  className="rounded-xl shadow"
                />
              )}
              <div
                className={`flex flex-col ${!isTablet ? "w-50 ml-5" : "w-full"} lg:ml-10`}
              >
                <div className="!text-2xl font-bold">
                  What Can You Use This Treatment For?
                </div>
                <div className="flex flex-col mt-4">
                  <p>
                    In general, microneedling treatments are highly versatile
                    and can be used to treat most skin concerns, with the
                    exception of active acne pustules. Microneedling is an
                    all-rounder skin rejuvenating treatment that is appropriate
                    for promoting skin health and resolving age-related
                    concerns. Some specific concerns that this treatment can
                    help with include:
                  </p>
                  <ul className="list-disc pl-4 mt-4">
                    <li>Acne scarring</li>
                    <li>Shallow scarring</li>
                    <li>Fine lines and wrinkles</li>
                    <li>Skin laxity</li>
                    <li>Enlarged pores</li>
                    <li>Dry or rough skin</li>
                    <li>Oily skin</li>
                    <li>Pigmentation concerns</li>
                    <li>Stretch marks</li>
                  </ul>
                </div>
              </div>
              {isTablet && (
                <div className="flex justify-center items-center">
                  <img
                    src={Resources.images.Services.Dermafrac.imageThree}
                    alt="dermafrac-infusion-facial"
                    className="rounded-xl shadow"
                  />
                </div>
              )}
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
          >
            <FadedLineBreak />
            <BeforeAfterCarousel
                  carouselContent={beforeAfterCarouselContent.dermafrac}
                />
                <FadedLineBreak />
            <div className="text-center text-skyn font-bold text-3xl px-4">
              <p>Frequently Asked Questions(FAQs)</p>
            </div>
            <div
              className={`mt-3 flex justify-center items-center ${isTablet ? "p-3 flex-col" : "flex-row"}`}
            >
              <div
                className={`mt-4 w-full lg:!w-1/2 !text-left ${!isTablet ? "p-5" : ""}`}
              >
                <CustomAccordion accordionData={dermoFracAccordianContent} />
                <Link
                  to="/faq#Dermafrac Infusion Facial"
                  className="text-skyn hover:opacity-80 text-xl font-bold"
                >
                  Show More FAQs
                </Link>
              </div>
            </div>
          </motion.div>
          <CustomFloatingBookNowButton treatmentName="Dermafrac Infusion Facial" goToStep={1}/>
        </div>
      )}
    </div>
  );
}

export default DermafracInfusionFacial;
