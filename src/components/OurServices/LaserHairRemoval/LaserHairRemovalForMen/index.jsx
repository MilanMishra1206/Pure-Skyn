import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Resources from "../../../../config/Resources";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { laserServiceForMenContent } from "../../../../helpers/LaserServices";
import MotionWrapper from "../../../../config/MotionFramer/MotionWrapper";
import { motion } from "framer-motion";
import FadeInWrapper from "../../../../config/MotionFramer/FadeInWrapper";
import CustomHeader from "../../../../shared/CustomHeader";

function LaserHairRemovalForMen({ category, isMobile }) {
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
            heading={"Laser Hair Removal For Men"}
            showBackButton={category}
            navigateTo={"/services/laser-hair-removal"}
          />
        </motion.div>
        {category && (
          <div>
            <div
              className="w-full h-72 bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${!isMobile ? Resources.images.Services.LaserHairRemoval.Men.headerMen : Resources.images.Services.LaserHairRemoval.Men.headerMenMobile})`,
              }}
            >
              {!isMobile && (
                <div className="absolute inset-0 flex items-center justify-end mr-5 bg-opacity-40">
                  <div className="flex flex-col w-50">
                    <div className="font-extrabold text-3xl">
                      GET AFFORDABLE LASER HAIR REMOVAL NOW!
                    </div>
                    <Link
                      to={"/book-now?treatment=Laser Hair Removal"}
                      className="flex items-center font-poppins text-3xl no-underline space-x-3 font-bold text-skyn transition-colors duration-300 ease-in-out hover:!opacity-80 hover:!tracking-widest"
                    >
                      Book Now{" "}
                      <MdKeyboardDoubleArrowRight className="ml-2 text-3xl text-skyn" />
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
              className={`grid grid-cols-1 mt-3 place-items-center ${isMobile ? "p-2" : ""}`}
            >
              {laserServiceForMenContent.map((item) => (
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
                    <div className="font-extrabold text-skyn text-3xl">
                      {item.header}
                    </div>
                    <hr className="border-t-4 my-4 w-50" />
                    {item.subHeader && (
                      <h4 className="font-medium">{item.subHeader}</h4>
                    )}
                    {item.subHeaderTwo && (
                      <h4 className="font-semibold mt-5">
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
                      <hr className="border-t-4 my-4" />
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

export default LaserHairRemovalForMen;
