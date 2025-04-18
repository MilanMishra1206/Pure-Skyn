import { lazy, Suspense } from "react";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Resources from "../../../../../config/Resources";
import { dermaInfusionFacial } from "../../../../../helpers/MediFacial";
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
            heading={"Derma Infusion Facial"}
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
              heading="Derma Infusion Facial at Home by PureSkyn - Professional-Grade Skincare in Your Hands"
              breadcrumbs1="Medi Facial"
              route1="/services/skin/medi-facial"
              breadcrumbs2="Derma Infusion Facial"
              content="Derma Infusion Facial treatment at PureSkyn in India offers a revolutionary at-home skincare solution that combines microneedling and infusion therapy for 
                    radiant, rejuvenated skin. This non-invasive procedure stimulates collagen production and enhances product absorption, delivering potent serums 
                    deep into the skin. Designed for all skin types, Derma helps reduce fine lines, improve texture, and boost hydration, providing visible results 
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
                  Experience the power of Derma Infusion Facial at home with
                  PureSkyn, bringing clinic-quality skin rejuvenation at your
                  doorstep. Our advanced Derma Infusion Facial technology
                  combines microdermabrasion, microneedling and serum infusion
                  to target fine lines, wrinkles, acne scars and dull skin—all
                  from the comfort of your home.
                </p>
                <p className="font-semibold">
                  Why Choose Derma Infusion Facial at Home?
                </p>
                <ul className="list-disc text-left">
                  <li>
                    <strong>Non-Invasive & Painless - </strong> Enjoy
                    professional results without downtime.
                  </li>
                  <li>
                    <strong>Deep Serum Infusion -</strong> Boost collagen and
                    hydration for radiant skin.
                  </li>
                  <li>
                    <strong>Cost-Effective -</strong> Achieve glowing skin
                    without expensive clinic visits.
                  </li>
                  <li>
                    <strong>Convenience -</strong> Transform your skin anytime,
                    anywhere.
                  </li>
                </ul>
              </div>
              <div className="flex justify-center items-center lg:ml-10">
                <img
                  src={Resources.images.Services.Dermafrac.imageOne}
                  alt="derma-infusion-facial"
                  className="rounded-xl shadow w-96"
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
              {!isMobile && (
                <img
                  src={Resources.images.Services.Dermafrac.imageTwo}
                  alt="derma-infusion-facial"
                  className="rounded-xl shadow w-96"
                />
              )}
              <div
                className={`flex flex-col ${!isTablet ? "w-50 ml-5" : "w-full"} lg:ml-10`}
              >
                <p className="text-lg">
                  Join thousands achieving{" "}
                  <strong>smoother, firmer and more youthful skin</strong> with{" "}
                  <strong>PureSkyn's at-home Derma Infusion Facial</strong>{" "}
                  solution. Elevate your skincare routine today!
                </p>
                <p className="font-semibold">
                  Looking for a non-invasive, effective and convenient skin
                  rejuvenation treatment?
                </p>
                <p>
                  <strong>Derma Infusion Facial</strong> Therapy is a
                  revolutionary micro-needling and serum infusion system that
                  delivers visible results with no downtime. And now for the
                  first time in your city, you can enjoy this clinic-grade
                  skincare treatment in the comfort and privacy of your home.
                </p>
                <p>
                  At <strong>PureSkyn</strong>, we bring{" "}
                  <strong>Derma Infusion Facial</strong> treatments to clients
                  who want glowing, younger-looking and healthier skin—without
                  the hassle of travel, waiting rooms or recovery time. Our
                  skilled professionals use certified Derma Infusion Facial
                  technology to provide safe, hygienic and result-oriented
                  sessions right at your doorstep.
                </p>
              </div>
              {isMobile && (
                <div className="flex justify-center items-center">
                  <img
                    src={Resources.images.Services.Dermafrac.imageTwo}
                    alt="derma-infusion-facial"
                    className="rounded-xl shadow w-96"
                  />
                </div>
              )}
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
              <div
                className={`flex flex-col ${!isTablet ? "w-50 ml-5" : "w-full"} lg:ml-10`}
              >
                <div className="!text-xl font-semibold">
                  What is Derma infusion Facial?
                </div>
                <p className="mt-4">
                  <strong>Derma Infusion Facial Infusion</strong> is an advanced{" "}
                  <strong>micro-channeling</strong> treatment that combines{" "}
                  <strong>micro-needling, serum infusion</strong> and{" "}
                  <strong>LED therapy</strong> into one powerful session. This
                  3-in-1 system targets multiple skin concerns while stimulating
                  natural collagen production and enhancing serum absorption by
                  over 80%.
                </p>
                <p>
                  Unlike traditional micro-needling, Derma Infusion Facial is a
                  <strong> no-pain, no-downtime</strong> treatment that is safe
                  for all skin types and tones. It uses precise vacuum-assisted
                  rollers to create controlled micro-channels while
                  simultaneously infusing medical- grade serums deep into the
                  skin for maximum effectiveness.
                </p>
                <p className="font-semibold mt-2 mb-2">
                  Benefits of Derma Infusion Facial Treatment
                </p>
                <ul className="list-disc text-left">
                  <li>Non-invasive & pain-free.</li>
                  <li>Suitable for all skin types.</li>
                  <li>No downtime or recovery period.</li>
                  <li>Visibly improves skin texture and tone.</li>
                  <li>Reduces fine lines, wrinkles & pigmentation.</li>
                  <li>Fades acne scars and blemishes.</li>
                  <li>Treats dehydrated or dull skin.</li>
                  <li>Boosts collagen production naturally.</li>
                  <li>Ideal for face, neck, décolletage and even hands.</li>
                </ul>
              </div>
              <div className="flex justify-center items-center ml-10">
                <img
                  src={Resources.images.Services.Dermafrac.img6}
                  alt="derma-infusion-facial"
                  className="rounded-xl shadow w-96"
                />
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
              className={`font-poppins text-cello ${isTablet ? "flex justify-center items-center" : ""}`}
            >
              <div className="flex flex-col ml-0 xl:!ml-5">
                <div className="!text-2xl font-bold mb-2">
                  How Does Derma Infusion Facial Works - The Science Behind the
                  Glow
                </div>
                <div
                  className="bg-center bg-cover bg-repeat flex lg:px-5 place-content-center w-full"
                  style={{
                    backgroundImage: `url(${Resources.images.Common.cardBg2})`,
                  }}
                >
                  <div className="grid grid-cols-1 md:!grid-cols-3 gap-5 mt-5">
                    {dermaInfusionFacial.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col rounded-2xl shadow bg-[#143048] text-white p-4 opacity-90"
                      >
                        <div className="text-xl font-bold text-center">
                          {item.title}
                        </div>
                        <FadedLineBreak />
                        <p className="text-center text-lg">{item?.content}</p>
                        {item?.list?.length > 0 && (
                          <ul className="list-disc text-left">
                            {item?.list.map((listContent) => (
                              <li key={listContent.id}>
                                <strong>{listContent.label}</strong> -{" "}
                                {listContent.content}
                              </li>
                            ))}
                          </ul>
                        )}
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
              {!isMobile && (
                <img
                  src={Resources.images.Services.Dermafrac.imageThree}
                  alt="derma-infusion-facial"
                  className="rounded-xl shadow w-96"
                />
              )}
              <div
                className={`flex flex-col ${!isTablet ? "w-50 ml-5" : "w-full"} lg:ml-10`}
              >
                <div className="!text-2xl font-bold">
                  Who Can Benefit From Derma Infusion Facial?
                </div>
                <div className="flex flex-col mt-4">
                  <p>
                    Derma Infusion Facial Infusion Therapy is ideal for
                    individuals looking to treat:
                  </p>
                  <ul className="list-disc pl-4 mt-4">
                    <li>Premature aging and fine lines.</li>
                    <li>Sun damage and pigmentation.</li>
                    <li>Acne scars and enlarged pores.</li>
                    <li>Dry, dull, or uneven skin tone.</li>
                    <li>Skin laxity and early signs of aging.</li>
                    <li>Rosacea and sensitive skin conditions.</li>
                  </ul>
                </div>
                <p>
                  Whether you're in your 20s wanting to maintain your glow or in
                  your 40s and beyond looking for rejuvenation, Derma Infusion
                  Facial adapts to your skincare needs.
                </p>
              </div>
              {isMobile && (
                <div className="flex justify-center items-center">
                  <img
                    src={Resources.images.Services.Dermafrac.imageThree}
                    alt="derma-infusion-facial"
                    className="rounded-xl shadow w-96"
                  />
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2 font-poppins border-l-8 p-3 mb-6">
              <p className="font-semibold text-xl">
                Why Choose PureSkyn for At-Home Derma Infusion Facial?
              </p>
              <ul className="list-disc pl-4 mt-4">
                <li>Certified Equipment & Licensed Experts.</li>
                <li>Hospital-grade hygiene & safety protocols.</li>
                <li>Customized treatments based on your skin.</li>
                <li>Time-saving & travel-free experience.</li>
                <li>Affordable packages with visible results.</li>
              </ul>
              <p>
                We make professional skin care accessible, personal and
                luxurious — all at your convenience.
              </p>
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
              carouselContent={
                beforeAfterCarouselContent?.["Derma Infusion Facial"]
              }
            />
            <FadedLineBreak />
            <div className="text-center text-skyn font-bold text-3xl px-4">
              <p>Frequently Asked Questions(FAQs)</p>
            </div>
            <div
              className={`mt-3 flex justify-center items-center ${isTablet ? "p-3" : ""}`}
            >
              <div
                className={`mt-4 w-full xl:!w-1/2 !text-left ${!isTablet ? "p-5" : ""}`}
              >
                <CustomAccordion accordionData={dermoFracAccordianContent} />
                <Link
                  to="/faq#Derma Infusion Facial"
                  className="text-skyn hover:opacity-80 text-xl font-bold"
                >
                  Show More FAQs
                </Link>
              </div>
            </div>
          </motion.div>
          <CustomFloatingBookNowButton
            treatmentName="Derma Infusion Facial"
            goToStep={1}
          />
        </div>
      )}
    </div>
  );
}

export default DermafracInfusionFacial;
