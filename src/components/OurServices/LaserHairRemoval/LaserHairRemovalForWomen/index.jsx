import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Resources from "../../../../config/Resources";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { laserServiceForWomenContent } from "../../../../helpers/LaserServices";
import MotionWrapper from "../../../../config/MotionFramer/MotionWrapper";
import { motion } from "framer-motion";
import FadeInWrapper from "../../../../config/MotionFramer/FadeInWrapper";
import CustomHeader from "../../../../shared/CustomHeader";
import FadedLineBreak from "../../../../shared/CustomHrTag";

function LaserHairRemovalForWomen({ category, isMobile }) {
  const isLaptop = useMediaQuery("(min-width: 1023px)");

  return (
    <MotionWrapper>
      <div className={`${category ? "mt-5" : "mt-0"}`}>
        <motion.div
          variants={FadeInWrapper("left", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`${category ? "mt-5" : "mt-0"} ${isMobile ? "px-3" : "p-3"}`}
        >
          <CustomHeader
            heading={"Laser Hair Removal For Women"}
            showBackButton={category}
            navigateTo={"/services/laser-hair-removal"}
            headerClass={`${!category ? "!text-center" : ""}`}
          />
        </motion.div>
        {category && (
          <div>
            <div
              className={`w-full h-[30rem] bg-cover ${isMobile ? "" : "bg-center"} relative`}
              style={{
                backgroundImage: `url(${!isMobile ? Resources.images.Services.LaserHairRemoval.Women.headerWomen : Resources.images.Services.LaserHairRemoval.Women.headerWomen})`,
              }}
            >
              {!isMobile && (
                <div className="absolute inset-0 flex items-center justify-end bg-opacity-40">
                  <div className="flex flex-col w-50 p-5">
                    <div className="font-extrabold text-3xl">
                      GET AFFORDABLE LASER HAIR REMOVAL NOW!
                    </div>
                    <Link
                      to={"/book-now?treatment=Laser Hair Removal"}
                      className="flex items-center font-poppins text-3xl no-underline space-x-3 font-bold text-white transition-colors duration-300 ease-in-out hover:!opacity-80 hover:!tracking-widest"
                    >
                      Book Now{" "}
                      <MdKeyboardDoubleArrowRight className="ml-2 text-3xl text-white" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
            {isMobile && (
              <div className="flex flex-col items-center bg-coal text-white p-5">
                <div className="font-extrabold text-3xl text-center">
                  GET AFFORDABLE LASER HAIR REMOVAL NOW!
                </div>
                <Link
                  to={"/book-now?treatment=Laser Hair Removal"}
                  className="border duration-300 ease-in-out flex font-bold font-poppins hover:!opacity-80 hover:!tracking-widest items-center mt-4 no-underline p-3 rounded-2 space-x-3 text-3xl text-white transition-colors"
                >
                  Book Now{" "}
                  <MdKeyboardDoubleArrowRight className="ml-2 text-3xl text-white" />
                </Link>
              </div>
            )}
            <div
              className={`grid grid-cols-1 mt-3 place-items-center ${isMobile ? "p-2" : ""} text-justify`}
            >
              {laserServiceForWomenContent.map((item) => (
                <motion.div
                  variants={FadeInWrapper("right", 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  key={item.id}
                  className={`flex flex-col lg:!flex-row items-center ${isMobile ? "px-4 py-2" : "px-5 py-3"}`}
                >
                  {isLaptop && item.id % 2 === 0 && (
                    <div className="flex justify-center w-full lg:!w-1/2 mr-0 lg:!mr-5">
                      <img src={item.img} className="rounded-2xl h-75" />
                    </div>
                  )}
                  <div className="font-poppins w-full lg:!w-1/2 mr-0 lg:!mr-5">
                    <div className="font-extrabold text-skyn text-3xl text-center md:!text-left">
                      {item.header}
                    </div>
                    <FadedLineBreak />
                    {item.subHeader && (
                      <h4 className="font-medium">{item.subHeader}</h4>
                    )}
                    {item.subHeaderTwo && (
                      <h4 className="font-semibold mt-5 !text-left">
                        {item.subHeaderTwo}
                      </h4>
                    )}
                    <p className="font-medium text-cello">{item.sectionOne}</p>
                    <p className="font-medium text-cello">{item.sectionTwo}</p>
                  </div>
                  {!isLaptop && (
                    <div className="flex flex-col w-full">
                      <div className="flex justify-center w-full lg:!w-1/2">
                        <img src={item.img} className="rounded-2xl h-75" />
                      </div>
                      <FadedLineBreak />
                    </div>
                  )}
                  {isLaptop && item.id % 2 !== 0 && (
                    <div className="flex justify-center w-full lg:!w-1/2">
                      <img src={item.img} className="rounded-2xl h-75" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </MotionWrapper>
  );
}

export default LaserHairRemovalForWomen;
