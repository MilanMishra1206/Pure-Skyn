import { lazy, Suspense, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useParams } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import Resources from "../../../../config/Resources";
import { mediFacialAccordianContent } from "../../../../helpers/AccordianContent";
import { useRouteStatus } from "../../../../config/Context/RouteContext";
import FadeInWrapper from "../../../../config/MotionFramer/FadeInWrapper";
import CustomLoader from "../../../../shared/CustomLoader";
import CustomHeader from "../../../../shared/CustomHeader";
import CustomCards from "../../../../shared/CustomCards";
import CustomAccordion from "../../../../shared/CustomAccordion";
import DrawCircleText from "../../../../shared/CustomDrawCircleText";
import FadedLineBreak from "../../../../shared/CustomHrTag";

const DermafracInfusionFacial = lazy(() => import("./DermafracInfusionFacial"));
const Oxygeneo = lazy(() => import("./Oxygeneo"));
const OxyHydra = lazy(() => import("./OxyHydra"));
const SkinTightening = lazy(() => import("./SkinTightening"));

function MediFacial() {
  useEffect(() => {
    sessionStorage.removeItem("currentBookStep");
    sessionStorage.removeItem("treatmentName");
    sessionStorage.removeItem("packageName");
    sessionStorage.removeItem("packagePrice");
  }, []);

  const { type } = useParams();
  const { pathname } = useLocation();
  const { isMedifacialPage } = useRouteStatus();

  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(max-width: 1023px)");
  const isLaptop = useMediaQuery("(min-width: 1024px)");

  const mediFacialServices = [
    {
      id: 1,
      title: "Oxy Hydra Facial",
      image: `${Resources.images.Services.OxyHydra.img4}`,
      linkTo: "oxy-hydra-facial",
    },
    {
      id: 2,
      title: "RF Skin Tightening",
      image: `${Resources.images.Services.SkinTightening.img7}`,
      linkTo: "skin-tightening",
    },
    {
      id: 3,
      title: "Derma Infusion Facial",
      image: `${Resources.images.Services.Dermafrac.img6}`,
      linkTo: "derma-infusion-facial",
    },
    {
      id: 4,
      title: "Oxygeneo",
      image: `${Resources.images.Services.OxyGeneo.img6}`,
      linkTo: "oxygeneo",
    },
  ];
  return (
    <div className="mt-5">
      {!type && (
        <motion.div
          variants={FadeInWrapper("left", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`mt-5 ${isMobile ? "p-3" : "p-5"}`}
        >
          <CustomHeader
            heading="Medi-Facial at Home by PureSkyn"
            subHeading="Advanced Skincare & Amazing Results All From the Comfort of Home."
            showBackButton
            navigateTo="/services"
          />
          <section className="mt-4">
            <div className="flex flex-col justify-center items-center md:!flex-row space-x-2 text-justify">
              <div className="lg:mr-10 space-y-3">
                <p className="font-medium">
                  Who doesn't want <strong>glowing, radiant skin?</strong> In
                  India, facials have long been a go-to beauty ritual, with
                  salon services available everywhere—from high-end malls to
                  local parlors. But here's the truth:{" "}
                  <strong>traditional salon facials often fall short</strong>{" "}
                  when it comes to delivering real, lasting skin benefits.
                </p>
                <p className="font-medium">
                  At <strong>PureSkyn</strong>, we bring you something far more
                  effective — <strong>Medi-facials at home</strong>. Backed by
                  science and designed by skin experts, our Medi-facials go
                  beyond surface-level pampering to{" "}
                  <strong>repair, rejuvenate and transform your skin</strong>{" "}
                  from within.
                </p>
                {isTablet && (
                  <div className="flex justify-center mt-4 mb-4 lg:!mt-0 lg:!mb-0">
                    <img
                      src={Resources.images.Services.mediFacial}
                      alt="Medi Facial"
                      className="h-96 rounded shadow-lg"
                    />
                  </div>
                )}
                <p className="font-bold text-xl mt-5 mb-2">
                  What Is a Medi-Facial?
                </p>
                <p>
                  A <strong>Medi-facial (Medical Facial)</strong> is a{" "}
                  <strong>dermatologist-approved skincare treatment</strong>{" "}
                  tailored to your unique skin type and concerns. Medi-facials
                  are customized using{" "}
                  <strong>clinically-tested, skin-friendly ingredients</strong>{" "}
                  to treat a wide range of skin issues including acne,
                  pigmentation, dullness and early signs of aging.
                </p>
              </div>
              {isLaptop && (
                <img
                  src={Resources.images.Services.mediFacial}
                  alt="Medi Facial"
                  className="h-96 rounded shadow-lg"
                />
              )}
            </div>
            <FadedLineBreak />
            <h4 className="font-bold text-xl">How Does a Medi-Facial Work?</h4>
            <p className="font-medium mt-3 text-justify">
              During your{" "}
              <strong>at-home Medi-facial session with PureSkyn</strong>, our
              certified skincare specialist begins by analyzing your skin type,
              texture and condition. Based on this assessment, we tailor the
              treatment using{" "}
              <strong>natural, safe and effective ingredients</strong>—combined
              with <strong>advanced technologies</strong> like:
            </p>
            <ul className="font-medium list-disc pl-5 mt-4">
              <li>Oxyhaydra Facial</li>
              <li>Oxygeneo Facial </li>
              <li>Derma Infusion facial</li>
              <li>RF Skin Tightening</li>
            </ul>
            <p className="font-medium mt-4">
              These techniques allow active ingredients to{" "}
              <strong>
                penetrate deep into the skin layers, promoting cell renewal,
                collagen production and deep hydration
              </strong>{" "}
              — with <strong>no harsh chemicals</strong> or side effects.
            </p>
            <FadedLineBreak />
            <h4 className="font-bold text-xl">
              Why Choose a Medi-Facial Over a Regular Facial?
            </h4>
            <p className="mt-3 text-justify">
              Unlike regular salon facials, PureSkyn's{" "}
              <strong>Medi-facials are results-driven</strong>, offering{" "}
              <strong>visible improvements</strong> from just one session.
              Here's what sets us apart:
            </p>
            <p className="font-semibold text-xl mt-4">
              Benefits of Medi-Facials at Home with PureSkyn
            </p>
            <ul className="font-medium list-disc pl-5 mt-4 space-y-2">
              <li>
                Deeply <strong>hydrates and nourishes</strong> the skin.
              </li>
              <li>
                <strong>Stimulates collagen and elastin</strong> for anti-aging
                benefits.
              </li>
              <li>
                <strong>Detoxifies and purifies</strong> clogged pores.
              </li>
              <li>
                <strong>Removes blackheads and whiteheads</strong> painlessly.
              </li>
              <li>
                <strong>Brightens dull, tired skin</strong> with an instant
                glow.
              </li>
              <li>
                Helps <strong>repair sun-damaged and pigmented skin.</strong>
              </li>
              <li>
                <strong>Reduces acne, scars, fine lines,</strong> and uneven
                texture.
              </li>
              <li>
                <strong>Improves skin tone and tightness</strong> over time.
              </li>
              <li>
                Suitable for <strong>all genders, ages and skin types.</strong>
              </li>
              <li>
                No downtime, no irritation, just{" "}
                <strong>pure skincare benefits.</strong>
              </li>
            </ul>
            <FadedLineBreak />
            <h4 className="font-bold text-xl">
              Who Can Benefit from a Medi-Facial?
            </h4>
            <p className="font-medium mt-3 mb-3">
              Medi-facials are effective for a wide range of skin concerns,
              including:
            </p>
            <ul className="font-medium list-disc pl-5 space-y-3">
              <li>Sun damage and pigmentation.</li>
              <li>Acne and post-acne scarring.</li>
              <li>Wrinkles, fine lines and early aging.</li>
              <li>Blackheads, whiteheads.</li>
              <li>Dull or uneven skin tone.</li>
              <li>Dehydrated, flaky skin.</li>
              <li>Sensitive or irritated skin.</li>
            </ul>
            <FadedLineBreak />
            <h4 className="font-bold text-xl">
              Why Choose PureSkyn for Medi-Facials at Home?
            </h4>
            <p className="mt-4 mb-2">
              At PureSkyn, we combine <strong>clinical expertise</strong> with
              the <strong>comfort of home service</strong>. Here's why thousands
              trust us with their skin:
            </p>
            <ul className="list-disc pl-5 font-medium mt-3 space-y-3">
              <li>
                <strong>Expert-led sessions</strong> by trained skincare
                professionals.
              </li>
              <li>
                <strong>No downtime or irritation.</strong>
              </li>
              <li>
                Products and techniques are{" "}
                <strong>personalized to your skin.</strong>
              </li>
              <li>
                Safe, hygienic, and <strong>fully sanitized equipment.</strong>
              </li>
              <li>
                Treatments conducted at{" "}
                <strong>your convenience, in your home.</strong>
              </li>
            </ul>
            <div className="border-l-8 mt-4">
              <p className="text-xl font-bold mt-3 px-3 py-1">
                Ready to Glow with PureSkyn?
              </p>
              <p className="font-medium px-3 py-1">
                Treat your skin to the{" "}
                <strong>next generation of facial care</strong>. Whether you're
                preparing for a big event, refreshing your routine or targeting
                a specific skin concern —{" "}
                <strong>PureSkyn's at-home Medi-facial services</strong> are
                designed to help you <strong>look and feel your best.</strong>
              </p>
            </div>
          </section>
        </motion.div>
      )}
      {!type && (
        <motion.div
          variants={FadeInWrapper("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <DrawCircleText
            headerText={"Exciting Offers -"}
            serviceName={"Medi-Facial Packages!"}
            buttonText="Check Now"
            link="/book-now"
          />
        </motion.div>
      )}
      <div
        className={`grid lg:gap-5 justify-center ${!type ? "md:!grid-cols-2 xl:!grid-cols-4" : ""} mb-5 ${isMobile ? "" : "px-4"}`}
      >
        {(!type || type === "oxy-hydra-facial") && (
          <div className="flex flex-col items-center">
            <Suspense fallback={<CustomLoader open={true} />}>
              <OxyHydra type={type} />
            </Suspense>
            {pathname !== "/services/skin/medi-facial/oxy-hydra-facial" && (
              <div className="flex justify-center">
                <CustomCards
                  title={mediFacialServices[0].title}
                  imgSrc={mediFacialServices[0].image}
                  linkTo={mediFacialServices[0].linkTo}
                  key={mediFacialServices[0].id}
                />
              </div>
            )}
          </div>
        )}
        {(!type || type === "skin-tightening") && (
          <div className="flex flex-col items-center">
            <Suspense fallback={<CustomLoader open={true} />}>
              <SkinTightening type={type} />
            </Suspense>
            {pathname !== "/services/skin/medi-facial/skin-tightening" && (
              <div className="flex justify-center">
                <CustomCards
                  title={mediFacialServices[1].title}
                  imgSrc={mediFacialServices[1].image}
                  linkTo={mediFacialServices[1].linkTo}
                  key={mediFacialServices[1].id}
                />
              </div>
            )}
          </div>
        )}
        {(!type || type === "derma-infusion-facial") && (
          <div className="flex flex-col items-center">
            <Suspense fallback={<CustomLoader open={true} />}>
              <DermafracInfusionFacial type={type} />
            </Suspense>
            {pathname !==
              "/services/skin/medi-facial/derma-infusion-facial" && (
              <div className="flex justify-center">
                <CustomCards
                  title={mediFacialServices[2].title}
                  imgSrc={mediFacialServices[2].image}
                  linkTo={mediFacialServices[2].linkTo}
                  key={mediFacialServices[2].id}
                />
              </div>
            )}
          </div>
        )}
        {(!type || type === "oxygeneo") && (
          <div className="flex flex-col items-center">
            <Suspense fallback={<CustomLoader open={true} />}>
              <Oxygeneo type={type} />
            </Suspense>
            {pathname !== "/services/skin/medi-facial/oxygeneo" && (
              <div className="flex justify-center">
                <CustomCards
                  title={mediFacialServices[3].title}
                  imgSrc={mediFacialServices[3].image}
                  linkTo={mediFacialServices[3].linkTo}
                  key={mediFacialServices[3].id}
                />
              </div>
            )}
          </div>
        )}
      </div>
      {isMedifacialPage && (
        <motion.div
          variants={FadeInWrapper("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {" "}
          <FadedLineBreak />
          <div className="text-center text-skyn font-bold text-3xl px-4">
            <p>Frequently Asked Questions(FAQs)</p>
          </div>
          <div
            className={`flex justify-center items-center ${isTablet ? "p-3" : ""}`}
          >
            <div
              className={`mt-4 w-full xl:!w-1/2 ${!isTablet ? "px-5" : ""} mb-4 mt-4`}
            >
              <CustomAccordion accordionData={mediFacialAccordianContent} />
              <Link
                to="/faq#Medi Facial"
                className="text-skyn hover:opacity-80 text-xl font-bold cursor-pointer"
              >
                Show More FAQs
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default MediFacial;
