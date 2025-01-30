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
            headerClass={!type && "!text-2xl !text-left"}
          />
        )}
      </motion.div>
      {type && (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <CommonHeader
              isTablet={isTablet}
              imgSrcLaptop={Resources.images.Home.skinTightening}
              imgSrcTablet={Resources.images.Home.skinTighteningMobile}
              linkTo="/Book-now"
              heading="RF Skin Tightening"
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
                <p>
                  At Pure Skyn, we offer HIFU, considered the best
                  skin-tightening solution that transforms your ageing & sagging
                  skin. It's a non-invasive, quick 8-minute procedure that lets
                  you enjoy it for 18 months!
                </p>
                <p>
                  HIFU stands for High-Intensity Focused Ultrasound. It's a
                  state-of-the-art skin tightening procedure. It's painless.
                  HIFU uses non-surgical techniques to send ultrasonic waves
                  deep into your skin to remove fat cells. This encourages the
                  body to mend itself and manufacture collagen.
                </p>
                <p>
                  Looking for a safe, non-surgical way to reduce fat and improve
                  skin texture? Consider Pure Skyn's ultrasound-based HIFU laser
                  treatment! This tightening procedure is excellent for
                  facelifts, body contouring, and targeted skin tightening.
                  Plus, it stimulates cell regeneration for firmer, tighter
                  skin.
                </p>
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
            variants={FadeInWrapper("left", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`mt-3 ${isTablet ? "p-4" : ""}`}
          >
            <div
              className={`flex ${isTablet ? "flex-col" : "ml-3 p-5"} font-poppins text-cello`}
            >
              <div className={`flex flex-col ${!isTablet ? "" : "w-full"}`}>
                <div className="!text-2xl font-bold mb-4">
                  How does HIFU facial work?
                </div>
                <p>
                  A HIFU facial mainly stimulates collagen and elastin growth to
                  tighten your sagging and wrinkled skin. The HIFU machine
                  transfers ultrasound waves that penetrate deep within your
                  skin layers, diminish fat skin cells, and initiate the body's
                  repair function. This ultimately boosts your collagen
                  production & rewards you with firm & youthful skin!
                </p>
                <div className={`flex ${isMobile ? "flex-col" : "flex-row"}`}>
                  <img
                    src={Resources.images.Services.SkinTightening.img4}
                    alt="skin-tightening-instrument"
                    className={`${isMobile ? "w-full" : "w-1/2"}`}
                  />
                  <div className="flex flex-col justify-center">
                    <div className="!text-xl font-bold mb-4">Hifu/Fus</div>
                    <p>
                      HIFU offers the non-invasive alternative to thae surgical
                      face lift while improving the fine lines, wrinkles,
                      décolleté etc. It is the best skin treatment for face
                      contouring also. HIFU uses the ultrasound waves to safely
                      lift & tighten the skin. It penetrates deep into the
                      dermal layers at high temperature and also protects the
                      skin. During the procedure, thermal heat is created within
                      the skin tissue that creates the tiny wounds and cellular
                      friction. This promotes the healing mechanism of the skin
                      and also enhances the collagen production, giving skin a
                      tight and lifted effect.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={FadeInWrapper("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col md:!flex-row px-5"
          >
            <div
              className={`flex justify-center items-center ${!isTablet ? "px-5" : "mt-4"}`}
            >
              <img
                src={Resources.images.Services.SkinTightening.img5}
                alt="skin-tightening"
                className="rounded-xl shadow"
              />
            </div>
            <div
              className={`flex justify-center items-center ${!isTablet ? "px-5" : "mt-4"}`}
            >
              <img
                src={Resources.images.Services.SkinTightening.img6}
                alt="skin-tightening"
                className="rounded-xl shadow"
              />
            </div>
          </motion.div>
          <motion.div
            variants={FadeInWrapper("left", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`mt-3 ${isTablet ? "p-4" : ""}`}
          >
            <div className={`${isTablet ? "" : "p-5"} font-poppins text-cello`}>
              <div className="flex flex-col">
                <div className="!text-2xl font-bold">
                  HIFU facial before and after Precautions
                </div>
                <p>
                  Here are some measures to follow before and after your HIFU
                  therapy:-
                </p>
                <div className="grid grid-cols-1 md:!grid-cols-2 mt-4">
                  <div className="flex flex-col px-4">
                    <div className="font-bold text-xl mb-4">
                      Before Treatment
                    </div>
                    <ul className="list-disc pl-4">
                      <li>
                        Avoid getting the procedure if you are sunburned or have
                        recently tanned.
                      </li>
                      <li>
                        Avoid using strong chemicals or bleaches on the skin.
                      </li>
                      <li>
                        Inform your Pure Skyn skin specialist if you are on
                        antibiotics; some may generate a strong reaction.
                      </li>
                      <li>
                        Inform your Pure Skyn skin specialist if you have a
                        history of developing cold sores.
                      </li>
                      <li>Avoid getting the procedure if you have a fever.</li>
                    </ul>
                  </div>
                  <div className="flex flex-col px-4">
                    <div className="font-bold text-xl mb-4">
                      After Treatment
                    </div>
                    <ul className="list-disc pl-4">
                      <li>
                        You may experience mild discomfort during & post the
                        procedure for a few hours.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={FadeInWrapper("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="px-4"
          >
            <FadedLineBreak />
          </motion.div>
          <motion.div
            variants={FadeInWrapper("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`mt-3 ${isTablet ? "p-4" : ""}`}
          >
            <div className={`${isTablet ? "" : "p-5"} font-poppins text-cello`}>
              <div className="text-2xl font-bold mb-4">
                Why choose Pure Skyn for a HIFU procedure?
              </div>
              <p>
                The HIFU procedure at Pure Skyn, directed & conducted by our
                Pure Skyn skin experts, involves using the KFDA-approved Double
                Gold HIFU machine, a start-of-the-art device used for body
                contouring, face lifting, & skin tightening.
              </p>
              <p>
                This world-class HIFU machine is the fastest device used for
                HIFU treatments across the world that delivers safe, accurate,
                and almost painless skin tightening within a mere 8 minutes!
                This incredibly fast-acting HIFU machine used at Pure Skyn
                ensures a quick procedure that provides effects that last you up
                to 18 months!
              </p>
              <p>
                At Pure Skyn, we prioritise your long-term skin health and
                well-being. Owing to that, we optimise our anti-ageing
                treatments by using best-in-class devices for face & body
                contouring, skin tightening & lifting for quick and long-lasting
                results that can be effortlessly maintained!
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
            <div className="px-4">
              <FadedLineBreak />
            </div>
            <div className="text-center text-skyn font-bold text-3xl px-4">
              <p>Frequently Asked Questions(FAQs)</p>
            </div>
            <div
              className={`mt-3 flex justify-center items-center ${isTablet ? "p-3 flex-col" : "flex-row"}`}
            >
              <div
                className={`mt-4 w-full lg:!w-1/2 ${!isTablet ? "px-5" : ""}`}
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
              <div
                className={`flex justify-center items-center ${!isTablet ? "px-5" : "mt-4"}`}
              >
                <img
                  src={Resources.images.Services.SkinTightening.img3}
                  alt="skin-tightening"
                  className="rounded-xl shadow w-4/5"
                />
              </div>
            </div>
          </motion.div>
          <CustomFloatingBookNowButton treatmentName="RF Skin Tightening" goToStep={1}/>
        </div>
      )}
    </div>
  );
}

export default SkinTightening;
