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
      title: "Dermafrac Infusion Facial",
      image: `${Resources.images.Services.Dermafrac.img6}`,
      linkTo: "dermafrac-infusion-facial",
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
            heading={"Medi Facial"}
            showBackButton={true}
            navigateTo={"/services"}
          />
          <section className="mt-4">
            <div className="flex flex-col justify-center items-center md:!flex-row space-x-2 text-justify">
              <div className="lg:mr-10">
                <p className="text-cello font-medium">
                  Who doesn't want glowing skin? And to meet that need, Indians
                  are very much fond of facials. Spa facials are now available
                  everywhere from malls to our neighborhood. But are these
                  facials really doing good to your skin?
                </p>
                <p className="text-cello font-medium">
                  Women include facials for their skincare regime but turns out
                  these salon facials ain't giving effective results. This is
                  because they are unsupervised by medical professionals and use
                  the same products for every skin type. The salon facials
                  provide temporary pampering to the skin. The face mask used
                  sits on the skin layer, which means it doesn't penetrate the
                  skin where healing & repairing is required.
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
                <p className="text-cello font-medium">
                  So now you must be wondering about the solution, right? You
                  don't have to worry much. Medi-facial is the rescue to this
                  problem! Medi facial or Medical Facial is designed under the
                  supervision of dermatologists and is customizable as per your
                  skin type. This new age treatment uses skin-friendly
                  ingredients & has medically proven skin benefits in the long
                  run.
                </p>
                <p className="text-cello font-medium">
                  Instead of harsh exfoliation or chemical peels like
                  traditional facials, Medi facials use natural & prescribed
                  ingredients for exfoliation which work deep into the skin
                  cells. The Medi-facial not only combat skin issues like acne,
                  scar, sull skin, etc, but also improves skin texture, tone, &
                  increases collagen production which results in anti-aging.
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
            <hr className="my-4 border-blue-gray-50 px-8" />
            <h4 className="text-kashmirBlue font-bold text-xl">
              How is Medi-facial customizable?
            </h4>
            <p className="text-cello font-medium mt-3 text-justify">
              When you visit a medical professional, they initially analyze your
              skin type & the skin conditions that need to be treated. Based on
              the report, they prescribe the natural ingredients required as per
              your skin type and hence commence the facial. The overall
              procedure rejuvenates & hydrates your skin thoroughly. You would
              witness the results even from one Medi-facial. In addition to the
              face massage, skin specialists would cover other areas of the neck
              & shoulders as well for massage, making you feel relaxed &
              pampered.
            </p>
            <hr className="my-4 border-blue-gray-50 px-8" />
            <h4 className="text-kashmirBlue font-bold text-xl">
              Why Medi-facial?
            </h4>
            <p className="text-cello font-medium mt-3 text-justify">
              Even now if you are not fully convinced, let's have a look at the
              following benefits provided by Medi facial to your skin.
            </p>
            <ul className="text-cello font-medium list-disc pl-5">
              <li>Hydrates the skin deeply</li>
              <li>Stimulates blood circulation</li>
              <li>Relaxes facial muscles</li>
              <li>Removes blackheads & whiteheads</li>
              <li>Boost collagen & elastin production</li>
              <li>Adds instant glow</li>
              <li>Rejuvenates the skin</li>
              <li>Detoxify skin cells</li>
              <li>Unblocks & purifies pores</li>
            </ul>
            <p className="text-kashmirBlue font-medium mt-3 border-l-8 p-3">
              Along with these, it is also beneficial for repairing sun-damaged
              skin, deep moisturization, tightening of the skin, slowing down
              skin aging, works best for wrinkles & fines, makes the skin less
              oily, makes skin soft & supple, improves tone & texture and what
              not! Would a regular facial do that?
            </p>
            <hr className="my-4 border-blue-gray-50 px-8" />
            <h4 className="text-kashmirBlue font-bold text-xl">
              Medifacials can be altered as per the patient's individual skin
              concerns including:
            </h4>
            <p className="text-cello font-bold mt-3">
              Laser hair removal can be performed on nearly any area of the
              body, including:
            </p>
            <ul className="text-cello font-medium list-disc pl-5">
              <li>Sun-damaged skin</li>
              <li>Acne</li>
              <li>Wrinkles and fine lines</li>
              <li>Pigmentation</li>
              <li>Comedones (blackheads, whiteheads)</li>
              <li>Dull or sallow skin</li>
              <li>Dehydrated skin</li>
              <li>Broken capillaries</li>
            </ul>
            <p className="text-kashmirBlue font-medium mt-3 border-l-8 p-3">
              Considering the growing popularity & concern for skincare, Medi
              facial should definitely be considered not only as a facial but
              medicated treatment to heal your skin. Whether you should switch
              to a medical facial over a regular facial or not?
            </p>
            <hr className="my-4 border-blue-gray-50 px-8" />
            <h4 className="text-kashmirBlue font-bold text-xl">
              Read on the following points to understand why medi facial is
              better than regular facial.
            </h4>
            <ul className="list-disc pl-5 text-cello font-medium mt-3">
              <li>
                It is being supervised by professional & trained dermatologists
              </li>
              <li>It has no downtime & side effects</li>
              <li>No harsh chemicals are used</li>
              <li>Suitable for all skin type & age</li>
              <li>Causes no internal damage to the skin</li>
              <li>Long-lasting glow & results</li>
              <li>Unique formulation for skin conditions & skin type</li>
              <li>
                Natural, well-researched & scientifically approved products are
                used
              </li>
              <li>Hydrates skin & makes it soft & supple</li>
              <li>Restores collagen & tightens the skin</li>
            </ul>
            <div className="border-l-8">
              <p className="text-cello font-medium mt-3 px-3 py-1">
                Simply, a medical facial gives corrective, natural, and
                guaranteed results that are not temporary. Regular facial limits
                the age group. As earlier, people in their 30s & 40s, especially
                women, adopted these facial . With Medi-facial, no matter if you
                are in your 20s or you are a man or woman, you can go for it
                without having second thoughts.
              </p>
              <p className="text-cello font-medium px-3 py-1">
                It is suitable because it uses microdermabrasion, peels, photo
                rejuvenation, LED Therapy, or a combination of these and also
                includes laser devices. All these therapies target the root
                cause of the skin condition that repairs, nourishes & balances
                the skin well.
              </p>
              <p className="text-cello font-medium px-3 py-1">
                So if you are ready to have a satisfactory, long-lasting glow,
                hydrating & brightened face, pamper your skin with a new age
                Medi facial.
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
            link="/services/skin/medi-facial-packages"
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
        {(!type || type === "dermafrac-infusion-facial") && (
          <div className="flex flex-col items-center">
            <Suspense fallback={<CustomLoader open={true} />}>
              <DermafracInfusionFacial type={type} />
            </Suspense>
            {pathname !==
              "/services/skin/medi-facial/dermafrac-infusion-facial" && (
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
          <div className="px-4">
            <hr className="border-t-4 my-4" />
          </div>
          <div className="text-center text-skyn font-bold text-3xl px-4">
            <p>Frequently Asked Questions(FAQs)</p>
          </div>
          <div
            className={`flex justify-center items-center ${isTablet ? "p-3 flex-col" : "flex-row"}`}
          >
            <div className={`mt-4 w-full ${!isTablet ? "px-5" : ""}`}>
              <CustomAccordion accordionData={mediFacialAccordianContent} />
              <Link
                to="/faq#Medi Facial"
                className="text-skyn hover:opacity-80 text-xl font-bold"
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
