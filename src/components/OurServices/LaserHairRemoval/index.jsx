import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import { Link, useLocation, useParams } from "react-router-dom";

import Resources from "../../../config/Resources";
import CustomCards from "../../../shared/CustomCards";
import { LHRAccordianContent } from "../../../helpers/AccordianContent";
import MotionWrapper from "../../../config/MotionFramer/MotionWrapper";
import FadeInWrapper from "../../../config/MotionFramer/FadeInWrapper";
import CustomHeader from "../../../shared/CustomHeader";
import CustomAccordion from "../../../shared/CustomAccordion";
import DrawCircleText from "../../../shared/CustomDrawCircleText";
import FadedLineBreak from "../../../shared/CustomHrTag";
import CustomFloatingBookNowButton from "../../../shared/CustomFloatingBookNowButton";

const LaserHairRemovalForMen = lazy(() => import("./LaserHairRemovalForMen"));
const LaserHairRemovalForWomen = lazy(
  () => import("./LaserHairRemovalForWomen")
);

function LaserHairRemoval() {
  const { category } = useParams();
  const { pathname } = useLocation();
  const [treatmentName, setTreatmentName] = useState("");
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(max-width: 1023px)");
  const isLaptop = useMediaQuery("(min-width: 1023px)");

  useEffect(() => {
    sessionStorage.removeItem("currentBookStep");
    sessionStorage.removeItem("treatmentName");
    sessionStorage.removeItem("packageName");
    sessionStorage.removeItem("packagePrice");
    setTreatmentName(
      category === "men" ? "Laser Hair Removal Men" : "Laser Hair Removal Women"
    );
  }, []);

  const services = [
    {
      id: 1,
      title: "Men",
      image: `${Resources.images.Services.LaserHairRemoval.Men.image5}`,
      button: "Read More",
      linkTo: "/services/laser-hair-removal/men",
    },
    {
      id: 2,
      title: "Women",
      image: `${Resources.images.Services.LaserHairRemoval.Women.imageOne}`,
      button: "Read More",
      linkTo: "/services/laser-hair-removal/women",
    },
  ];

  return (
    <MotionWrapper>
      <div className="mt-5">
        {pathname === "/services/laser-hair-removal" && (
          <motion.div
            variants={FadeInWrapper("left", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`mt-5 ${isMobile ? "p-3" : "p-5"} text-justify`}
          >
            <CustomHeader
              heading={"Laser Hair Removal"}
              subHeading={"The Future of Smooth, Hair-Free Skin"}
              showBackButton={true}
              navigateTo={"/services"}
            />
            <section className="mt-4">
              <span className="text-cello font-medium">
                Laser hair removal is a modern, non-invasive solution to
                unwanted body hair. It's the preferred choice for both men and
                women who want to enjoy smooth, hair-free skin without the
                hassle of shaving, waxing, or plucking. By using highly focused
                light to target hair follicles, laser hair removal provides
                long-lasting results, making it the most effective way to
                permanently reduce unwanted hair.
              </span>
              <h4 className="text-kashmirBlue font-bold mt-5">
                How Does Laser Hair Removal Work?
              </h4>
              <p className="text-cello font-medium mt-3">
                Laser hair removal works by emitting light energy that is
                absorbed by the pigment (melanin) in the hair. This energy is
                converted to heat, which damages the hair follicle, inhibiting
                future hair growth. The procedure is highly precise and can be
                performed on various parts of the body, leaving the surrounding
                skin undisturbed.
              </p>
              <FadedLineBreak />
              <h4 className="text-kashmirBlue font-bold">
                Why Choose Laser Hair Removal?
              </h4>
              <ul className="text-cello font-medium list-disc pl-5 mt-3 space-y-3">
                <li>
                  <strong>Long-Term Results:</strong> Unlike shaving or waxing,
                  which provide temporary results, laser hair removal offers a
                  more permanent reduction in hair growth. After a few sessions,
                  most clients experience smooth, hair-free skin for months or
                  even years.
                </li>
                <li>
                  <strong>Precision and Effectiveness:</strong> The laser
                  selectively targets dark, coarse hair while leaving the
                  surrounding skin unharmed, ensuring a smooth and even result.
                </li>
                <li>
                  <strong>Quick and Convenient:</strong> Each session is fast,
                  with small areas like the upper lip taking just a few minutes,
                  and larger areas like the legs or back requiring only 30
                  minutes to an hour.
                </li>
                <li>
                  <strong>Minimal Discomfort:</strong> While laser hair removal
                  might cause mild discomfort during the procedure, many people
                  describe the sensation as similar to a light snap of a rubber
                  band. Modern technology ensures a more comfortable experience
                  with built-in cooling systems.
                </li>
              </ul>
              <FadedLineBreak />
              <h4 className="text-kashmirBlue font-bold">
                Areas of the Body We Treat
              </h4>
              <p className="text-cello font-bold mt-3">
                Laser hair removal can be performed on nearly any area of the
                body, including:
              </p>
              <ul className="text-cello font-medium list-disc pl-5 space-y-3">
                <li>
                  <strong>Face:</strong> Chin, upper lip, jawline, and even the
                  eyebrows.
                </li>
                <li>
                  <strong>Arms and Legs:</strong> Say goodbye to shaving and
                  waxing for smooth, long-lasting results.
                </li>
                <li>
                  <strong>Back and Chest:</strong> Perfect for men and women
                  looking to remove dense or coarse hair.
                </li>
                <li>
                  <strong>Underarms and Bikini Line:</strong> Target sensitive
                  areas with precision for a clean, hair-free finish.
                </li>
                <li>
                  <strong>Intimate Areas::</strong> For both men and women,
                  laser hair removal offers a safe and effective solution for
                  the bikini area.
                </li>
              </ul>
              <FadedLineBreak />
              <h4 className="text-kashmirBlue font-bold">
                What to Expect During the Treatment
              </h4>
              <ul className="list-disc pl-5 text-cello font-medium mt-3 space-y-3">
                <li>
                  <strong>Consultation:</strong> During your first visit, we
                  will assess your skin type, hair color, and the areas you wish
                  to treat to tailor the procedure to your needs.
                </li>
                <li>
                  <strong>Treatment:</strong> The area to be treated will be
                  cleaned, and a cooling gel or device will be applied to the
                  skin. The laser will be gently passed over the area in short
                  pulses.
                </li>
                <li>
                  <strong>Aftercare:</strong> After your treatment, you may
                  experience slight redness or swelling, similar to a mild
                  sunburn, which usually disappears within a few hours. It's
                  essential to avoid sun exposure and follow any aftercare
                  instructions provided by our specialists.
                </li>
              </ul>
              <FadedLineBreak />
              <h4 className="text-kashmirBlue font-bold">
                Is Laser Hair Removal Right for You?
              </h4>
              <p className="text-cello font-medium mt-3">
                Laser hair removal is effective on most skin types and hair
                colors, though it tends to work best on individuals with light
                skin and dark hair. However, advancements in technology have
                made it possible for people with darker skin tones to benefit as
                well. During your consultation, our experts will evaluate your
                skin and hair type to recommend the most suitable approach for
                optimal results.
              </p>
              <FadedLineBreak />
              <h4 className="text-kashmirBlue font-bold">
                Benefits of Laser Hair Removal
              </h4>
              <ul className="list-disc pl-5 text-cello font-medium mt-3 space-y-3">
                <li>
                  <strong>Precision:</strong> Laser targets only the hair
                  follicles, leaving the surrounding skin unaffected.
                </li>
                <li>
                  <strong>Efficiency:</strong> Each pulse of the laser takes
                  only a fraction of a second and can treat multiple hair
                  simultaneously.
                </li>
                <li>
                  <strong>Cost-Effective:</strong> While the initial cost of
                  laser hair removal may be higher than waxing or shaving, the
                  long-term savings are significant due to the permanent
                  reduction of hair growth.
                </li>
              </ul>
            </section>
          </motion.div>
        )}
        <div
          className={`flex flex-col md:!flex-row gap-5 justify-center ${!category ? "md:!grid-cols-2" : ""} mb-5 ${isMobile ? "" : "px-4"}`}
        >
          {(!category || category === "men") && (
            <div>
              <Suspense fallback={<div>Loading...</div>}>
                <LaserHairRemovalForMen
                  category={category}
                  isMobile={isMobile}
                  isTablet={isTablet}
                  isLaptop={isLaptop}
                />
              </Suspense>
              {pathname !== "/services/laser-hair-removal/men" && (
                <div className="flex justify-center">
                  <CustomCards
                    title={services[0].title}
                    imgSrc={services[0].image}
                    linkTo={services[0].linkTo}
                    key={services[0].id}
                  />
                </div>
              )}
            </div>
          )}
          {(!category || category === "women") && (
            <div>
              <Suspense fallback={<div>Loading...</div>}>
                <LaserHairRemovalForWomen
                  category={category}
                  isMobile={isMobile}
                  isTablet={isTablet}
                />
              </Suspense>
              {pathname !== "/services/laser-hair-removal/women" && (
                <div className="flex justify-center">
                  <CustomCards
                    title={services[1].title}
                    imgSrc={services[1].image}
                    linkTo={services[1].linkTo}
                    key={services[1].id}
                  />
                </div>
              )}
            </div>
          )}{" "}
        </div>
        {!category && (
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
          </motion.div>
        )}
        {!category && (
          <motion.div
            variants={FadeInWrapper("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <FadedLineBreak />
            <div className="text-center text-skyn font-bold text-3xl px-4">
              <p>Frequently Asked Questions(FAQs)</p>
            </div>
            <div
              className={`flex justify-center items-center ${isTablet ? "p-3 flex-col" : "flex-row"}`}
            >
              <div className={`mt-4 w-full ${!isTablet ? "px-5" : ""}`}>
                <CustomAccordion accordionData={LHRAccordianContent} />
                <Link
                  to="/faq#Laser Hair Removal"
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
        <CustomFloatingBookNowButton treatmentName={treatmentName} goToStep={1} />
      </div>
    </MotionWrapper>
  );
}

export default LaserHairRemoval;
