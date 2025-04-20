import { lazy, Suspense } from "react";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Resources from "../../../../../config/Resources";
import { oxyHydraAccordianContent } from "../../../../../helpers/AccordianContent";
import FadeInWrapper from "../../../../../config/MotionFramer/FadeInWrapper";
import CustomAccordion from "../../../../../shared/CustomAccordion";
import CustomHeader from "../../../../../shared/CustomHeader";
import FadedLineBreak from "../../../../../shared/CustomHrTag";
import DrawCircleText from "../../../../../shared/CustomDrawCircleText";
import CustomFloatingBookNowButton from "../../../../../shared/CustomFloatingBookNowButton";
import BeforeAfterCarousel from "../../../BeforeAfterCarousel";
import { beforeAfterCarouselContent } from "../../../../../helpers/LaserServices";

const CommonHeader = lazy(() => import("../../../CommonHeader"));

function OxyHydra({ type }) {
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
            heading={"Oxy Hydra Facial"}
            headerClass={!type && "!text-xl"}
          />
        )}
      </motion.div>
      {type && (
        <div className="text-justify">
          <Suspense fallback={<div>Loading...</div>}>
            <CommonHeader
              imgSrcLaptop={Resources.images.Home.oxyhydra}
              imgSrcTablet={Resources.images.Home.oxyhydraMoble}
              linkTo="/book-now"
              heading="Oxyhydra Facial At home"
              breadcrumbs1="Medi Facial"
              route1="/services/skin/medi-facial"
              breadcrumbs2="Oxy Hydra Facial"
              content="Experience radiant skin with the Oxy Hydra Facial at PureSkyn, India's premier destination for at-home skincare treatments. 
              Our Oxy Hydra Facial combines the power of oxygen and hydrating serums to deeply cleanse, exfoliate, and rejuvenate your skin, 
              all from the comfort of your home. This advanced treatment enhances hydration, boosts collagen production, and reduces the appearance 
              of fine lines, leaving your skin feeling fresh, revitalized, and glowing. Indulge in a spa-like experience tailored to your unique skin needs, 
              and unveil your natural beauty with PureSkyn. Your journey to healthier skin begins here!"
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
              className={`flex ${isMobile ? "flex-col" : "flex-row justify-center items-center"} font-poppins text-cello`}
            >
              {!isMobile && (
                <div className="flex justify-center items-center">
                  <img
                    src={Resources.images.Services.OxyHydra.img4}
                    alt="oxy-hydra"
                    className="rounded-xl shadow w-80 h-96 ml-10 mr-10"
                  />
                </div>
              )}
              <div className={`${!isMobile ? "w-50 mr-5" : "w-full"}`}>
                <p className="font-bold text-xl">
                  Oxy Hydra Facial at Home with PureSkyn: Rejuvenate Your Skin
                  in the Comfort of Your Home
                </p>
                <p>
                  At <strong>PureSkyn</strong>, we bring the luxury of
                  professional skincare right to your doorstep with our Oxy
                  Hydra Facial at home services. This advanced facial treatment
                  uses cutting- edge technology to hydrate, rejuvenate and
                  refresh your skin, all while addressing common skin concerns
                  like dryness, fine lines and uneven skin tone. Skip the spa
                  visit and enjoy a radiant, glowing complexion without leaving
                  the comfort of your home.
                </p>
              </div>
              {isMobile && (
                <div className="flex justify-center items-center">
                  <img
                    src={Resources.images.Services.OxyHydra.img4}
                    alt="oxy-hydra"
                    className="rounded-xl shadow mt-4"
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
            className={`mt-5 ${isTablet ? "p-4" : ""}`}
          >
            <div
              className={`flex ${isMobile ? "flex-col" : "justify-center items-center"} font-poppins text-cello`}
            >
              <div
                className={`flex flex-col ${!isMobile ? "w-50 mr-5" : "w-full"}`}
              >
                <div className="!text-2xl font-bold">
                  Why Choose PureSkyn for Oxy Hydra Facial at Home?
                </div>
                <div>
                  <ul className="list-disc mt-4">
                    <li>
                      <strong>Convenience at Your Doorstep:</strong> Forget the
                      hassle of booking salon appointments or waiting in line.
                      With <strong>PureSkyn</strong>, you can enjoy a
                      professional <strong>Oxy Hydra Facial </strong> right in
                      the comfort of your own home.
                    </li>
                    <li>
                      <strong>Expert Skincare Professionals:</strong> Our
                      licensed and experienced skincare specialists are trained
                      to deliver exceptional results. We ensure that each
                      treatment is personalized to your skin type and concerns
                      so you get the best possible outcome.
                    </li>
                    <li>
                      <strong>Safe & Effective:</strong> We use the latest Oxy
                      Hydra Facial technology to deeply cleanse, exfoliate,
                      hydrate and revitalize your skin, making it suitable for
                      all skin types including sensitive skin.
                    </li>
                    <li>
                      <strong>Instant Glow:</strong> With this treatment, you'll
                      notice immediate results—radiant, refreshed skin with a
                      youthful glow that lasts.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src={Resources.images.Services.OxyHydra.img1}
                  alt="oxy-hydra"
                  className={`rounded-xl shadow ${isMobile ? "mt-4" : "h-96 ml-5"} lg:ml-10`}
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={FadeInWrapper("left", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`mt-5 ${isTablet ? "p-4" : ""}`}
          >
            <div
              className={`flex ${isMobile ? "flex-col" : "justify-center items-center"} font-poppins text-cello`}
            >
              {!isMobile && (
                <div className="flex justify-center items-center">
                  <img
                    src={Resources.images.Services.OxyHydra.oxyPackage}
                    alt="oxy-hydra"
                    className="w-80 rounded-xl shadow h-96 ml-5 lg:ml-10 mr-10"
                  />
                </div>
              )}
              <div
                className={`flex flex-col ${!isMobile ? "w-50 mr-5" : "w-full"}`}
              >
                <div className="!text-2xl font-bold">
                  What is an Oxy Hydra Facial?
                </div>
                <p className="mt-4">
                  An <strong>Oxy Hydra Facial</strong> is a non-invasive facial
                  treatment that combines oxygen infusion and hydradermabrasion
                  to cleanse, exfoliate and hydrate the skin. It involves using
                  a unique device that delivers oxygen and a series of hydrating
                  serums directly into your skin. This process helps to:
                </p>
                <div>
                  <ul className="list-disc">
                    <li>
                      <strong>Remove dead skin cells</strong> and impurities
                      from your pores.
                    </li>
                    <li>
                      <strong>Boost hydration</strong> by infusing your skin
                      with essential moisture.
                    </li>
                    <li>
                      <strong>Reduce the appearance of fine lines</strong> and
                      wrinkles, promoting a more youthful look.
                    </li>
                    <li>
                      <strong>Improve skin tone and texture,</strong> leaving
                      your skin smoother and brighter.
                    </li>
                  </ul>
                </div>
              </div>
              {isMobile && (
                <div className="flex justify-center items-center">
                  <img
                    src={Resources.images.Services.OxyHydra.oxyPackage}
                    alt="oxy-hydra"
                    className={`w-80 rounded-xl shadow mt-4 lg:ml-10`}
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
              className={`grid grid-cols-1 md:grid-cols-2 gap-5 ${isTablet ? "" : "p-5"} font-poppins text-cello`}
            >
              <div className="flex flex-col">
                <div className="!text-xl font-bold text-center">
                  Benefits of Oxy Hydra Facial at Home
                </div>
                <FadedLineBreak />
                <div className="flex flex-col">
                  <ul className="list-disc pl-4 space-y-3 !text-left">
                    <li>
                      <strong>Hydration Boost:</strong>
                      The oxygen infusion and hydrating serums provide intense
                      moisture to your skin, making it look plump, healthy and
                      hydrated.
                    </li>
                    <li>
                      <strong>Brightens & Revitalizes:</strong>
                      The treatment helps to brighten dull skin, giving it a
                      healthy glowing appearance. Perfect for those with uneven
                      skin tone or pigmentation.
                    </li>
                    <li>
                      <strong>Anti-Aging Effects:</strong>
                      The Oxy Hydra Facial can reduce the appearance of fine
                      lines and wrinkles, giving your skin a more youthful
                      rejuvenated look.
                    </li>
                    <li>
                      <strong>Gentle Yet Effective:</strong>
                      This treatment is non-invasive, gentle and suitable for
                      all skin types. Unlike harsher treatments, there's no
                      downtime so you can enjoy beautiful skin with zero
                      recovery time.
                    </li>
                    <li>
                      <strong>Customized for Your Skin:</strong>
                      At PureSkyn, we offer personalized Oxy Hydra Facials based
                      on your unique skin concerns—whether it's dryness, acne or
                      signs of aging, we've got you covered.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="!text-xl font-bold text-center">
                  How Does the Oxy Hydra Facial at Home Work?
                </div>
                <FadedLineBreak />
                <div className="flex flex-col">
                  <ul className="list-disc pl-4 space-y-3 !text-left">
                    <li>
                      <strong>Cleansing:</strong> We start by thoroughly
                      cleansing your skin to remove any makeup, dirt or oils
                      preparing it for the next steps.
                    </li>
                    <li>
                      <strong>Exfoliation:</strong>Using gentle exfoliation, we
                      remove dead skin cells, leaving your skin soft and ready
                      to absorb the hydrating serums.
                    </li>
                    <li>
                      <strong>Oxygen Infusion:</strong>
                      We apply an oxygen-based serum that helps to hydrate and
                      revitalize the skin, boosting collagen production and
                      improving overall skin texture.
                    </li>
                    <li>
                      <strong>Hydration:</strong>
                      The treatment concludes with a series of hydrating serums
                      tailored for your skin's specific needs leaving your skin
                      nourished, rejuvenated and glowing.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="!text-xl font-bold text-center">
                  Is Oxy Hydra Facial Right for You?
                </div>
                <FadedLineBreak />
                <p className="mt-2 mb-2">
                  Oxy Hydra Facial is suitable for all skin types from dry and
                  sensitive to oily and acne- prone skin. If you're looking for
                  a treatment that can:
                </p>
                <ul className="list-disc pl-4 space-y-3 !text-left">
                  <li>Hydrate and nourish dry skin.</li>
                  <li>Minimize fine lines and wrinkles.</li>
                  <li>Improve skin texture and clarity.</li>
                  <li>Brighten dull, uneven skin tone.</li>
                  <li>Detoxify and cleanse the skin.</li>
                </ul>
                <p className="mt-2 mb-2">
                  Then the <strong>Oxy Hydra Facial</strong> at home is perfect
                  for you! Whether you have a special event coming up or just
                  want to give your skin a regular rejuvenating treatment,{" "}
                  <strong>PureSkyn</strong> can help.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="!text-xl font-bold text-center">
                  Why Choose Oxy Hydra Facial Over Other Facials?
                </div>
                <FadedLineBreak />
                <div className="flex flex-col">
                  <ul className="list-disc pl-4 space-y-3 !text-left">
                    <li>
                      <strong>Instant Results:</strong> Unlike traditional
                      facials, the Oxy Hydra Facial provides instant visible
                      results with glowing, hydrated and rejuvenated skin after
                      just one session.
                    </li>
                    <li>
                      <strong>No Downtime:</strong> There's no recovery time
                      required, so you can continue with your day immediately
                      after the treatment.
                    </li>
                    <li>
                      <strong>Non-Invasive and Safe:</strong> The treatment is
                      gentle and non-invasive, making it safe for even the most
                      sensitive skin types.
                    </li>
                    <li>
                      <strong>Long-Lasting Effects:</strong> Regular treatments
                      can maintain smooth youthful skin keeping your complexion
                      looking vibrant and fresh.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src={Resources.images.Services.Dermafrac.imageThree}
                  alt="oxy-hydra"
                  className="rounded-xl shadow ml-4"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="!text-2xl font-bold text-center">
                  How to Book Your Oxy Hydra Facial at Home with PureSkyn
                </div>
                <FadedLineBreak />
                <div className="flex flex-col">
                  <ul className="list-disc pl-4 space-y-3 !text-left">
                    <li>
                      <strong>Consultation:</strong> Contact{" "}
                      <strong>PureSkyn</strong> to book a free consultation. Our
                      experts will assess your skin type and concerns to create
                      a personalized treatment plan.
                    </li>
                    <li>
                      <strong>Schedule Your Appointment:</strong> Once your plan
                      is ready, book your treatment at a time that suits you.
                      We'll come to your home fully equipped with all the tools
                      and products needed to perform the treatment.
                    </li>
                    <li>
                      <strong>Enjoy Glowing Skin:</strong> After the treatment,
                      enjoy immediate results—hydrated, smooth and glowing skin!
                      We'll also provide post-treatment care recommendations to
                      ensure your skin remains in top condition.
                    </li>
                  </ul>
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
              className={`${isTablet ? "" : "px-3"} font-poppins text-cello mb-5`}
            >
              <p className="text-lg border-l-8 p-3">
                Book Your Oxy Hydra Facial at Home Today! <br />
                Ready to experience the ultimate{" "}
                <strong>Oxy Hydra Facial</strong> in the comfort of your home?
                Let <strong>PureSkyn</strong> help you for the best.
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
              carouselContent={beforeAfterCarouselContent?.["Oxyhydra Facial"]}
            />
            <FadedLineBreak />
            <div className="text-center text-skyn font-bold text-3xl px-4">
              <p>Frequently Asked Questions(FAQs)</p>
            </div>
            <div
              className={`flex justify-center items-center ${isTablet ? "p-3" : ""}`}
            >
              <div
                className={`mt-4 w-full xl:!w-1/2 ${!isTablet ? "px-5" : ""}`}
              >
                <CustomAccordion accordionData={oxyHydraAccordianContent} />
                <Link
                  to="/faq#Oxy Hydra Facial"
                  className="text-skyn hover:opacity-80 text-xl font-bold cursor-pointer"
                >
                  Show More FAQs
                </Link>
              </div>
            </div>
          </motion.div>
          <CustomFloatingBookNowButton
            treatmentName="Oxy Hydra Facial"
            goToStep={1}
          />
        </div>
      )}
    </div>
  );
}

export default OxyHydra;
