import Resources from "../../../../../config/Resources";
import { Box, Fab, useMediaQuery } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { oxygeneoFaq } from "../../../../../helpers/AccordianContent";
import { OxyGeneoContent } from "../../../../../helpers/MediFacial";
import { motion } from "framer-motion";
import FadeInWrapper from "../../../../../config/MotionFramer/FadeInWrapper";
import CustomAccordian from "../../../../../shared/CustomAccordian";
import CustomHeader from "../../../../../shared/CustomHeader";

function Oxygeneo() {
  const { type } = useParams();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(max-width: 1023px)");

  return (
    <div className="mt-5">
      <motion.div
        variants={FadeInWrapper("left", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`mt-5 ${isMobile ? "px-3" : "p-3"}`}
      >
        <CustomHeader
          heading={"Oxygeneo"}
          showBackButton={type}
          navigateTo={"/services/skin/medi-facial"}
        />
      </motion.div>
      {type && (
        <div className="text-justify">
          <motion.div
            variants={FadeInWrapper("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`w-full ${isTablet ? "h-96" : "h-screen"} bg-cover bg-center relative`}
            style={{
              backgroundImage: `url(${!isMobile ? Resources.images.Services.OxyGeneo.header : Resources.images.Services.OxyGeneo.img1})`,
            }}
          >
            {!isMobile && (
              <div className="absolute inset-0 flex items-center justify-end mr-5 bg-opacity-40">
                <div className="flex flex-col w-50">
                  <div className="font-extrabold text-3xl">
                    Oxygeneo Facial at Your Home
                  </div>
                  <Link
                    to={"/book-now?treatment=OxygeneoFacial"}
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
                Oxygeneo Facial at Your Home
              </div>
              <Link
                to={"/book-now?treatment=OxygeneoFacial"}
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
            <div className="flex flex-col lg:!px-5 justify-center items-center font-poppins text-lg text-cello">
              <div className={`w-full xl:!w-4/5 lg:!px-5 mb-4`}>
                <p>
                  Throughout your daily routine, your skin takes a lot of abuse
                  with exposure to the elements, which only encourages and
                  accelerates the existing degradation of facial skin caused by
                  the aging process. As a result, you might see fine lines,
                  wrinkles, dark spots, blotchy skin, oversized pores, and an
                  overall dull appearance in your face. While you might use
                  products to combat these effects, you may occasionally desire
                  a deeper, more intense healing experience for your skin, and
                  that is what you'll find with OxyGeneo. This non-invasive
                  treatment is designed to be a 3-in-1 Super Facial that can be
                  tailored to the specific needs of your skin type. One
                  treatment can yield dramatic results, but you may be compelled
                  to keep coming back for regular rejuvenation with this
                  innovative system.
                </p>
              </div>
              <div
                className={`flex justify-center items-center ${!isMobile ? "ml-4 px-4" : ""}`}
              >
                <img
                  src={Resources.images.Services.OxyGeneo.img2}
                  alt="oxygeneo"
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
            className={`mt-5 ${isTablet ? "px-4" : "px-5"}`}
          >
            <div className="flex justify-center items-center font-poppins">
              <img
                src={Resources.images.Services.OxyGeneo.img3}
                alt="oxygeneo"
                className="rounded-xl shadow h-screen"
              />
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
              className={`flex ${isTablet ? "flex-col" : "justify-center items-center p-5"} font-poppins text-lg text-cello`}
            >
              <div
                className={`flex flex-col ${!isTablet ? "w-75 ml-5 mr-5" : "w-full"} lg:mr-10`}
              >
                {OxyGeneoContent.map((item) => (
                  <div className="mb-5" key={item.id}>
                    <div className="!text-2xl font-bold mb-4">{item.title}</div>
                    <div className="flex">{item.content}</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center items-center">
                <img
                  src={Resources.images.Services.OxyGeneo.img5}
                  alt="oxygeneo"
                  className="rounded-xl shadow w-3/5 lg:!w-auto xl:!w-3/5"
                />
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
            <hr className="border-t-4 my-4" />
            <div className="flex items-center justify-center text-skyn font-bold text-3xl px-4">
              <p>Frequently Asked Questions(FAQs)</p>
            </div>
            <div
              className={`mt-3 flex justify-center items-center ${isTablet ? "p-3 flex-col" : "flex-row"}`}
            >
              <div
                className={`mt-4 w-full xl:!w-1/2 ${!isTablet ? "px-5" : ""}`}
              >
                <CustomAccordian accordionData={oxygeneoFaq} />
                <Link
                  to="/faq#Oxygeneo"
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
                  alt="oxygeneo"
                  className="rounded-xl shadow w-4/5"
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
            <Link to="/book-now?treatment=OxygeneoFacial">
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

export default Oxygeneo;
