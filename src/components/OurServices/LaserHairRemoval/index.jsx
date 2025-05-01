import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Resources from "../../../config/Resources";
import CustomCards from "../../../shared/CustomCards";
import { LHRAccordianContent } from "../../../helpers/AccordianContent";
import MotionWrapper from "../../../config/MotionFramer/MotionWrapper";
import FadeInWrapper from "../../../config/MotionFramer/FadeInWrapper";
import CustomHeader from "../../../shared/CustomHeader";
import CustomAccordion from "../../../shared/CustomAccordion";
import FadedLineBreak from "../../../shared/CustomHrTag";
import CustomFloatingBookNowButton from "../../../shared/CustomFloatingBookNowButton";

const LaserHairRemovalForMen = lazy(() => import("./LaserHairRemovalForMen"));
const LaserHairRemovalForWomen = lazy(
  () => import("./LaserHairRemovalForWomen")
);

function LaserHairRemoval() {
  const { category } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
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
      category === "men"
        ? "Laser Hair Removal Men At Home"
        : "Laser Hair Removal Women At Home"
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
              heading={"Laser Hair Removal At Home With PureSkyn"}
              subHeading={"Smooth, Hair-Free Skin Starts At Home"}
              showBackButton={true}
              navigateTo={"/services"}
            />
            <section className="mt-4">
              <span className="font-medium">
                At <strong>PureSkyn</strong>, we offer the ultimate solution to
                unwanted hair —{" "}
                <strong>professional, non-invasive laser hair removal</strong>{" "}
                done conveniently <strong>at home</strong>. No more razors,
                waxing appointments or painful plucking. Our expert technicians
                use <strong>advanced laser technology</strong> to help you
                achieve <strong>smooth glowing skin</strong> with
                <strong> long-lasting results</strong> — right from the comfort
                and privacy of your own space.
              </span>
              <h4 className="text-xl font-bold mt-5">
                How Does At-Home Laser Hair Removal Work?
              </h4>
              <p className="font-medium mt-3">
                Our <strong>at-home laser hair removal</strong> service uses
                state-of-the-art devices that emit{" "}
                <strong>highly focused light energy</strong>. This light is
                absorbed by the melanin (pigment) in the hair, converting to
                heat that <strong>damages the hair follicle</strong> and slows
                or stops future hair growth. The treatment is{" "}
                <strong>precise and safe</strong>, targeting only the hair
                without harming the surrounding skin.
              </p>
              <FadedLineBreak />
              <h4 className="font-bold text-xl mb-4">
                Why Choose PureSkyn's Laser Hair Removal at Home?
              </h4>
              <p className="font-bold text-lg">Long-Lasting Hair Reduction</p>
              <span>
                Unlike traditional methods like shaving or waxing, laser hair
                removal provides <strong>permanent hair reduction</strong> after
                just a few sessions. Enjoy smooth, hair-free skin for{" "}
                <strong>months — or even years</strong>.
              </span>
              <p className="font-bold text-lg mt-3">
                Precision & Effectiveness{" "}
              </p>
              <span>
                Our lasers target <strong>dark, coarse hair</strong> with
                pinpoint accuracy, leaving your skin smooth, even and untouched
                by irritation or razor burn.
              </span>
              <p className="font-bold text-lg mt-3">
                Fast, Convenient Sessions{" "}
              </p>
              <span>
                Small areas like the upper lip can be treated in minutes, while
                larger areas like legs or back take just 30-60 minutes—all in
                the comfort of your home.
              </span>
              <p className="font-bold text-lg mt-3">Comfortable & Safe</p>
              <span>
                We use modern technology with built-in cooling systems for a
                <strong> comfortable experience</strong>, often described as a
                light snapping sensation. Our licensed professionals ensure
                every session is
                <strong> safe, hygienic and stress-free.</strong>
              </span>
              <FadedLineBreak />
              <h4 className="font-bold text-xl">Areas We Treat </h4>
              <p className="font-bold mt-3 mb-4 text-lg">
                PureSkyn offers{" "}
                <strong>customized laser hair removal treatments</strong> for
                nearly every area of the body, including:
              </p>
              <ul className="font-medium list-disc pl-5 space-y-3">
                <li>
                  <strong>Face:</strong> Chin, upper lip, cheeks, jawline and
                  sidelocks.
                </li>
                <li>
                  <strong>Arms and Legs:</strong> Full or partial treatments for
                  long-lasting smoothness
                </li>
                <li>
                  <strong>Back and Chest:</strong> Ideal for men and women
                  wanting to reduce dense or coarse hair
                </li>
                <li>
                  <strong>Underarms and Bikini Line:</strong> Say goodbye to
                  irritation and ingrowns in these sensitive areas.
                </li>
              </ul>
              <FadedLineBreak />
              <h4 className="font-bold mb-4 text-xl">
                What to Expect During Your PureSkyn Session
              </h4>
              <p className="font-bold text-lg">Consultation</p>
              <span>
                We begin with a personalized consultation to assess your{" "}
                <strong>skin tone, hair type and treatment goals</strong>,
                ensuring the best and safest results.
              </span>
              <p className="font-bold text-lg mt-3">Treatment</p>
              <span>
                The area is cleaned and a cooling gel is applied. The laser is
                then gently passed over the skin in{" "}
                <strong>short, controlled pulses</strong> to effectively target
                hair follicles.
              </span>
              <p className="font-bold text-lg mt-3">Aftercare</p>
              <span>
                You may notice slight redness or swelling (similar to a mild
                sunburn), which fades within a few hours. Our team provides
                complete <strong>aftercare guidance</strong> to ensure your skin
                heals beautifully.
              </span>
              <FadedLineBreak />
              <h4 className="font-bold text-xl">
                Benefits of Choosing PureSkyn
              </h4>
              <ul className="list-disc pl-5 text-cello font-medium mt-3 space-y-3">
                <li>
                  <strong>Precision:</strong> Only hair follicles are
                  affected—your skin remains untouched.
                </li>
                <li>
                  <strong>Speed:</strong> Treat large or small areas quickly.
                </li>
                <li>
                  <strong>Savings:</strong> While upfront costs may be higher
                  than waxing, the long-term results make it a cost-effective
                  beauty investment.
                </li>
                <li>
                  <strong>Convenience:</strong> Enjoy quality treatments from
                  the comfort of your home
                </li>
              </ul>
              <div className="flex flex-col gap-2 font-poppins border-l-8 p-3 mt-4">
                <p className="font-semibold text-xl">
                  Ready to Ditch the Razor?
                </p>
                <p>
                  With{" "}
                  <strong>
                    PureSkyn's expert at-home laser hair removal services,
                  </strong>{" "}
                  getting smooth, radiant skin has never been easier. No travel.
                  No wait times. Just pure, confident skin.
                </p>
              </div>
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
            className="xl:!flex xl:!justify-center xl:!items-center cursor-pointer"
            onClick={() => navigate("/book-now")}
          >
            <img
              src={Resources.images.Common.offerBannerMobile}
              alt="Offer"
              className="md:hidden"
            />
            <img
              src={Resources.images.Common.offerBannerLaptop}
              alt="Offer"
              className="hidden md:!block"
            />
          </motion.div>
        )}
        {!category && (
          <motion.div
            variants={FadeInWrapper("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-4"
          >
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
                <CustomAccordion accordionData={LHRAccordianContent} />
                <Link
                  to="/faq#Laser Hair Removal"
                  className="text-skyn hover:opacity-80 text-xl font-bold cursor-pointer"
                >
                  Show More FAQs
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </MotionWrapper>
  );
}

export default LaserHairRemoval;
