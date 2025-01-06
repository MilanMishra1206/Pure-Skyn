import Resources from "../../../../../config/Resources";
import { Box, Fab, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { OxyHydraAccordianContent } from "../../../../../helpers/AccordianContent";
import { motion } from "framer-motion";
import FadeInWrapper from "../../../../../config/MotionFramer/FadeInWrapper";
import CustomAccordian from "../../../../../shared/CustomAccordian";
import CustomHeader from "../../../../../shared/CustomHeader";
import FadedLineBreak from "../../../../../shared/CustomHrTag";
import DrawCircleText from "../../../../../shared/CustomDrawCircleText";

function OxyHydra({ type }) {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(max-width: 1023px)");

  return (
    <div className="mt-4">
      <motion.div
        variants={FadeInWrapper("left", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`${isMobile ? "px-3" : "p-3"}`}
      >
        <CustomHeader
          heading={"Oxy Hydra Facial"}
          showBackButton={type}
          navigateTo={"/services/skin/medi-facial"}
          headerClass={!type && "!text-2xl"}
        />
      </motion.div>
      {type && (
        <div className="text-justify">
          <motion.div
            variants={FadeInWrapper("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full h-[30rem] bg-cover bg-center relative"
            style={{
              backgroundImage: `url(${!isMobile ? Resources.images.Services.OxyHydra.header : Resources.images.Services.OxyHydra.oxyHydraCard})`,
            }}
          >
            {!isMobile && (
              <div className="absolute inset-0 flex items-center justify-end mr-5 bg-opacity-40">
                <div className="flex flex-col w-50">
                  <div className="font-extrabold text-3xl">
                    Hydrafacial Treatment at Your Home
                  </div>
                  <Link
                    to={"/book-now?treatment=Oxy Hydra Facial"}
                    className="flex items-center font-poppins text-3xl no-underline space-x-3 font-bold text-skyn transition-colors duration-300 ease-in-out hover:!opacity-80 hover:!tracking-widest"
                  >
                    Book Now{" "}
                    <MdKeyboardDoubleArrowRight className="ml-2 text-3xl text-skyn" />
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
          {isMobile && (
            <motion.div
              variants={FadeInWrapper("up", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col items-center bg-coal text-white p-5"
            >
              <div className="font-extrabold text-3xl text-center">
                Hydrafacial Treatment at Your Home
              </div>
              <Link
                to={"/book-now?treatment=Oxy Hydra Facial"}
                className="border duration-300 ease-in-out flex font-bold font-poppins hover:!opacity-80 hover:!tracking-widest items-center mt-4 no-underline p-3 rounded-2 space-x-3 text-3xl text-white transition-colors"
              >
                Book Now{" "}
                <MdKeyboardDoubleArrowRight className="ml-2 text-3xl text-white" />
              </Link>
            </motion.div>
          )}
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
              <div className={`${!isMobile ? "w-50 mr-5" : "w-full"}`}>
                <p>
                  Hydra Facial in Delhi is a well-known and most demanding
                  procedure. The procedure has got fame in the society because
                  of its enormous benefits. Nowadays, people are behind the
                  white and fair skin whitening in Delhi. So, they are looking
                  for ways that can provide them with their desired skin color.
                  Your skin color may be affected for any reason.
                </p>
                <p>
                  The cause can be heredity, genetics, environmental effects,
                  side effects of medicine, etc. Hence, whatever the reason is,
                  Pure Skyn is the best cosmetic & Hydra Facial and provides you
                  the treatment with optimal results.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src={Resources.images.Services.OxyHydra.img4}
                  alt="oxy-hydra"
                  className={`rounded-xl shadow ${isMobile ? "mt-4" : "w-80 h-96 ml-5"} lg:ml-10`}
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
              <div
                className={`flex flex-col ${!isMobile ? "w-50 mr-5" : "w-full"}`}
              >
                <div className="!text-2xl font-bold">Evaluations</div>
                <div className="flex flex-col">
                  <p>
                    To get Hydra Facial At Home , it is necessary to get a prior
                    valuation. So, we make the initial session compulsory for
                    all. In this session, Pure Skyn is the best plastic and
                    cosmetic surgeon takes a medical history. Further, he
                    assesses skin tone and skin texture in addition to know the
                    demands of the patient and other important aspects. After
                    that evaluation, Pure Skyn is the best cosmetic & plastic
                    surgeon in Delhi tells the patient if he or she can get
                    optimal results or not.
                  </p>
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
                  AIMS OF OXY HYDRA FACIAL TREATMENT
                </div>
                <FadedLineBreak />
                <div className="flex flex-col">
                  <ul className="list-disc pl-4 space-y-3">
                    <li>
                      <strong>Introduction to Hydrafacial</strong>:
                      Understanding the Core Objectives of the Treatment
                    </li>
                    <li>
                      <strong>Holistic Approach of Hydrafacial</strong>:
                      Targeting Skin Health from Multiple Angles
                    </li>
                    <li>
                      <strong>The Therapeutic Goals of Hydrafacial</strong>:
                      What to Expect from Your Skin Renewal Journey
                    </li>
                  </ul>
                </div>
                {/* <Divider orientation="vertical" flexItem className="!border-r-2 !ml-4 !mr-1"/> */}
              </div>
              <div className="flex flex-col">
                <div className="!text-xl font-bold text-center">
                  BENEFITS OF OXY HYDRA FACIAL
                </div>
                <FadedLineBreak />
                <div className="flex flex-col">
                  <ul className="list-disc pl-4 space-y-3">
                    <li>
                      <strong>Maximizing Skin Health</strong>: Key Benefits of
                      Opting for HydraFacial in Delhi
                    </li>
                    <li>
                      <strong>Transformative Results</strong>: How HydraFacial
                      Can Revitalize Your Skin
                    </li>
                    <li>
                      <strong>Customized Skincare with HydraFacial</strong>:
                      Tailoring Treatment to Individual Skin Needs
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="!text-xl font-bold text-center">
                  UNDERSTANDING OF HAVING OXY HYDRA FACIAL
                </div>
                <FadedLineBreak />
                <ul className="list-disc pl-4 space-y-3">
                  <li>
                    <strong>General Price Range</strong>: In Delhi, the cost of
                    a HydraFacial treatment typically ranges between PKR 5,000
                    to PKR 30,000. This variation in price is influenced by the
                    comprehensiveness of the treatment and the reputation of the
                    clinic.
                  </li>
                  <li>
                    <strong>All-Inclusive Costing</strong>: At most reputable
                    clinics like Pure Skyn, this pricing includes the full
                    spectrum of the HydraFacial procedure. It's important to
                    understand that lower-priced options might not offer the
                    complete treatment, potentially excluding crucial steps.
                  </li>
                  <li>
                    <strong>Customized Skincare with HydraFacial</strong>:
                    Tailoring Treatment to Individual Skin Needs
                  </li>
                </ul>
              </div>
              <div className="flex flex-col">
                <div className="!text-xl font-bold text-center">
                  IMPORTANCE OF CHOOSING A RELIABLE CLINIC
                </div>
                <FadedLineBreak />
                <div className="flex flex-col">
                  <ul className="list-disc pl-4 space-y-3">
                    <li>
                      <strong>Quality and Safety at Pure Skyn</strong>: When
                      considering a HydraFacial, it's crucial to opt for a
                      trusted provider like Pure Skyn. They are known for
                      delivering high-quality treatments, ensuring each step of
                      the procedure is meticulously carried out.
                    </li>
                    <li>
                      <strong>Risks of Budget Options</strong>: Cheaper
                      alternatives might seem appealing, but they can come with
                      risks. There have been instances where substandard
                      treatments have led to adverse reactions like burns and
                      blisters. Pure Skyn stands apart by prioritizing client
                      safety and using state-of-the-art technology.
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
                  Pure Skyn'S COMMITMENT TO EXCELENCE
                </div>
                <FadedLineBreak />
                <div className="flex flex-col">
                  <ul className="list-disc pl-4 space-y-3">
                    <li>
                      <strong>Premium Service</strong>: Pure Skyn in Delhi
                      distinguishes itself by offering top-tier HydraFacial
                      treatments. They focus on delivering a holistic
                      experience, ensuring clients receive the full benefits of
                      the procedure.
                    </li>
                    <li>
                      <strong>Expertise and Care</strong>: The team of
                      professionals at Pure Skyn is trained in the latest
                      skincare techniques, ensuring each HydraFacial session is
                      both effective and relaxing.
                    </li>
                    <li>
                      <strong>Customized Treatments</strong>: Understanding that
                      each skin type is unique, Pure Skyn tailors the
                      HydraFacial to meet individual skin needs, enhancing the
                      overall effectiveness of the treatment.
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
                In summary, while the cost of a HydraFacial in Delhi varies,
                choosing a reputable clinic like Pure Skyn ensures a
                comprehensive, safe, and effective treatment. The investment in
                a quality HydraFacial at a trusted clinic not only safeguards
                your skin but also guarantees you are receiving the full range
                of benefits this advanced skincare treatment has to offer.
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
            <div className="flex items-center justify-center text-skyn font-bold text-3xl px-4">
              <p>Frequently Asked Questions(FAQs)</p>
            </div>
            <div
              className={`flex justify-center items-center ${isTablet ? "p-3 flex-col" : "flex-row"}`}
            >
              <div
                className={`mt-4 w-full lg:!w-1/2 ${!isTablet ? "px-5" : ""}`}
              >
                <CustomAccordian accordionData={OxyHydraAccordianContent} />
                <Link
                  to="/faq#Oxy Hydra Facial"
                  className="text-skyn hover:opacity-80 text-xl font-bold"
                >
                  Show More FAQs
                </Link>
              </div>
              <div
                className={`mt-4 flex justify-center items-center ${!isTablet ? "px-5" : ""}`}
              >
                <img
                  src={Resources.images.Services.Dermafrac.imageFour}
                  alt="oxy-hydra"
                  className="rounded-xl shadow"
                />
              </div>
            </div>
          </motion.div>
          <Box
            sx={{
              position: "sticky",
              bottom: "16px",
              right: "16px",
              zIndex: 49,
              display: "flex",
              justifyContent: "end",
              padding: "1rem",
            }}
          >
            <Link to="/book-now?treatment=Oxy Hydra Facial">
              <Fab
                variant="extended"
                size="large"
                color="warning"
                aria-label="Book Now"
                className="!bg-skyn"
                sx={{
                  fontSize: "22px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                  backgroundColor: "none",
                }}
              >
                Book Now
              </Fab>
            </Link>
          </Box>
        </div>
      )}
    </div>
  );
}

export default OxyHydra;
