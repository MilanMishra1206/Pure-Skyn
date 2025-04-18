import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import Resources from "../../../../../config/Resources";
import { skinTighteningFaqAccordianContent } from "../../../../../helpers/AccordianContent";
import FadeInWrapper from "../../../../../config/MotionFramer/FadeInWrapper";
import CustomAccordion from "../../../../../shared/CustomAccordion";
import CustomHeader from "../../../../../shared/CustomHeader";
import FadedLineBreak from "../../../../../shared/CustomHrTag";
import DrawCircleText from "../../../../../shared/CustomDrawCircleText";
import CustomFloatingBookNowButton from "../../../../../shared/CustomFloatingBookNowButton";
import BeforeAfterCarousel from "../../../BeforeAfterCarousel";
import { beforeAfterCarouselContent } from "../../../../../helpers/LaserServices";
import { skinTighteningThreeSteps } from "../../../../../helpers/MediFacial";

const CommonHeader = lazy(() => import("../../../CommonHeader"));

function SkinTightening({ type }) {
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
            heading={"RF Skin Tightening"}
            headerClass={!type && "!text-xl !text-left"}
          />
        )}
      </motion.div>
      {type && (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <CommonHeader
              imgSrcLaptop={Resources.images.Home.skinTightening}
              imgSrcTablet={Resources.images.Home.skinTighteningMobile}
              linkTo="/Book-now"
              heading="At-Home RF Skin Tightening Treatment by PureSkyn"
              breadcrumbs1="Medi Facial"
              route1="/services/skin/medi-facial"
              breadcrumbs2="Skin Tightening"
              content="Get professional-grade skin tightening treatments from the comfort of your own home with PureSkyn's advanced Radio Frequency (RF) treatment. Our expertly trained therapists will visit you at your home to administer a personalized RF skin tightening session, tailored to your specific skin concerns and needs.
                     This non-invasive, pain-free treatment uses controlled RF energy to stimulate collagen production, tighten loose skin, and improve skin texture. It's ideal for addressing signs of aging, sagging skin, fine lines, and wrinkles. With consistent treatments, you can achieve:"
            />
          </Suspense>
          <motion.div
            variants={FadeInWrapper("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`mt-5 ${isTablet ? "p-4" : ""}`}
          >
            <div
              className={`grid grid-cols-1 md:!grid-cols-2 lg:ml-5 lg:p-5 font-poppins text-cello`}
            >
              <div className={`${!isTablet ? "ml-5" : "w-full"}`}>
                <div className="text-2xl font-bold mb-4">
                  What is HIFU Facial
                </div>
                <div className="text-justify">
                  <p>
                    Looking for a non-invasive way to lift, firm and rejuvenate
                    your skin—without stepping foot in a clinic? With{" "}
                    <strong>PureSkyn's </strong>
                    professional{" "}
                    <strong>
                      RF (Radio Frequency) skin tightening at home
                    </strong>
                    , you can enjoy.our advanced RF technology which helps
                    tighten sagging skin, reduce wrinkles and restore youthful
                    firmness—all without surgery or downtime.
                  </p>
                  <p className="font-semibold">What is RF Skin Tightening?</p>
                  <p>
                    <strong>Radio Frequency (RF) skin tightening</strong> is a
                    safe, non-invasive cosmetic procedure that uses controlled
                    heat energy to stimulate collagen and elastin production
                    deep within the skins which results? Smoother, tighter, more
                    youthful-looking skin over time.
                  </p>
                  <p>
                    Whether you're looking to{" "}
                    <strong>
                      contour your jawline, lift your cheeks, smooth fine lines
                      or tighten loose skin on the body
                    </strong>
                    , RF treatment offers a proven solution with visible
                    results.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center mt-4 md:!mt-0">
                <img
                  src={Resources.images.Services.SkinTightening.img1}
                  alt="skin-tightening"
                  className={`rounded-xl shadow ${isMobile ? "" : "h-96 ml-5"}`}
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={FadeInWrapper("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center font-poppins font-medium text-xl text-center text-coal mt-5 gap-4 mb-4"
          >
            <div className="text-3xl text-center px-2">
              <p className="font-bold">How RF Skin Tightening Works</p>
              <p className="text-xl">
                At PureSkyn, we use the latest in RF technology to safely
                deliver results through a 3-step process:
              </p>
            </div>
            <div
              className="bg-center bg-cover bg-repeat flex p-5 place-content-center w-full"
              style={{
                backgroundImage: `url(${Resources.images.Common.cardBg2})`,
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 font-medium text-start mt-4 gap-4 bg-opacity-40">
                {skinTighteningThreeSteps.map((item) => (
                  <div
                    className="flex flex-col rounded-2xl shadow bg-[#143048] text-white p-4 opacity-90"
                    key={item.id}
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
          </motion.div>
          <motion.div
            variants={FadeInWrapper("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col md:!flex-row items-center justify-center"
          >
            {!isMobile && (
              <div
                className={`flex justify-center items-center ${!isTablet ? "px-5" : "mt-4"}`}
              >
                <img
                  src={Resources.images.Services.SkinTightening.img7}
                  alt="skin-tightening"
                  className="rounded-xl shadow h-96 md:!h-80 lg:!h-96 w-80"
                />
              </div>
            )}
            <div className="flex flex-col px-4">
              <p className="font-bold text-2xl text-center">
                Benefits of RF Skin Tightening at Home with PureSkyn
              </p>
              <FadedLineBreak classes="!my-2" />
              <ul className="list-disc pl-4 space-y-4 text-left">
                <li>
                  <strong>Non-Invasive & Painless</strong> - No needles, no
                  surgery and no recovery time.
                </li>
                <li>
                  <strong>Safe for All Skin Types</strong> - Suitable for both
                  men and women.
                </li>
                <li>
                  <strong>Full-Body Versatility</strong> - Ideal for treating
                  the <strong>face, neck, arms, thighs, abdomen</strong> and
                  more.
                </li>
                <li>
                  <strong>Convenient & Comfortable</strong> - Enjoy expert
                  skincare services in your own space.
                </li>
                <li>
                  <strong>Long-Lasting Effects</strong> - Results continue to
                  improve with consistent sessions and proper maintenance.
                </li>
              </ul>
            </div>
            {isMobile && (
              <div
                className={`flex justify-center items-center ${!isTablet ? "px-5" : "mt-4"}`}
              >
                <img
                  src={Resources.images.Services.SkinTightening.img7}
                  alt="skin-tightening"
                  className="rounded-xl shadow h-96 w-80"
                />
              </div>
            )}
          </motion.div>
          <motion.div
            variants={FadeInWrapper("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col md:!flex-row items-center justify-center mt-5 mb-5"
          >
            <div className="flex flex-col px-4">
              <p className="font-bold text-2xl text-center">
                Things to Know Before Your RF Treatment
              </p>
              <FadedLineBreak classes="!my-2" />
              <ul className="list-disc pl-4 space-y-4">
                <li>
                  <strong>Results May Vary</strong> - Age, skin condition and
                  lifestyle can affect outcomes.
                </li>
                <li>
                  <strong>Multiple Sessions Recommended</strong> - For best
                  results, a series of treatments is often suggested.
                </li>
                <li>
                  <strong>Maintenance Is Key</strong> - Occasional maintenance
                  sessions help prolong your results.
                </li>
              </ul>
            </div>
            <div
              className={`flex justify-center items-center ${!isTablet ? "px-5" : "mt-4"}`}
            >
              <img
                src={Resources.images.Services.SkinTightening.img6}
                alt="skin-tightening"
                className="rounded-xl shadow w-96"
              />
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
            <div className="px-4">
              <FadedLineBreak />
              <BeforeAfterCarousel
                carouselContent={
                  beforeAfterCarouselContent?.["RF Skin Tightening"]
                }
              />
              <FadedLineBreak />
            </div>
            <div className="text-center text-skyn font-bold text-3xl px-4">
              <p>Frequently Asked Questions(FAQs)</p>
            </div>
            <div
              className={`mt-3 flex justify-center items-center ${isTablet ? "p-3 " : ""}`}
            >
              <div
                className={`mt-4 w-full xl:!w-1/2 ${!isTablet ? "px-5" : ""}`}
              >
                <CustomAccordion
                  accordionData={skinTighteningFaqAccordianContent}
                />
                <Link
                  to="/faq#RF Skin Tightening"
                  className="text-skyn hover:opacity-80 text-xl font-bold"
                >
                  Show More FAQs
                </Link>
              </div>
            </div>
          </motion.div>
          <CustomFloatingBookNowButton
            treatmentName="RF Skin Tightening"
            goToStep={1}
          />
        </div>
      )}
    </div>
  );
}

export default SkinTightening;
