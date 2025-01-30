import { motion } from "framer-motion";
import FadeInWrapper from "../../../config/MotionFramer/FadeInWrapper";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Breadcrumbs, Typography } from "@mui/material";

function CommonHeader({
  isTablet,
  imgSrcTablet,
  imgSrcLaptop,
  heading,
  content,
  linkTo,
  breadcrumbs1,
  route1,
  breadcrumbs2,
}) {
  const breadcrumbs = [
    <Link
      key="1"
      to="/"
      className="text-skyn no-underline font-poppins hover:opacity-80 text-lg"
    >
      Home
    </Link>,
    <Link
      key="2"
      to={route1}
      className="text-skyn no-underline font-poppins hover:opacity-80 text-lg"
    >
      {breadcrumbs1}
    </Link>,
    <Typography key="3" className="text-cello font-poppins text-lg">
      {breadcrumbs2}
    </Typography>,
  ];
  return (
    <>
      <Breadcrumbs separator=">" aria-label="breadcrumb" className="mb-4 px-1">
        {breadcrumbs}
      </Breadcrumbs>
      {!isTablet && (
        <>
          <div className="relative">
            <img src={imgSrcLaptop} alt={heading} />
          </div>
          <motion.div
            variants={FadeInWrapper("left", 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="absolute inset-0 flex mt-[150px] xl:!mt-[180px] bg-opacity-40 lg:mr-22"
          >
            <div className="flex flex-col gap-4 lg:!gap-5 w-50 p-5">
              <div className="text-coffee font-extrabold text-4xl xl:!text-6xl">
                {heading.toUpperCase()}
              </div>
              <div>
                <p className="font-bold text-coal text-justify text-sm xl:!text-lg xl:mt-[20px]">
                  {content}
                </p>
              </div>
              <Link
                to={linkTo}
                onClick={() => {
                  sessionStorage.setItem("treatmentName", heading);
                  sessionStorage.setItem("currentBookStep", 1);
                }}
                className="flex justify-center rounded-3 shadow-sm hover:!shadow-2xl xl:mt-[30px] bg-coffee text-white font-bold font-poppins items-center no-underline p-3 rounded-xl space-x-3  xl:text-xl w-full xl:!w-1/3"
              >
                Book Now{" "}
                <MdKeyboardDoubleArrowRight
                  size="1.5rem"
                  className="ml-2 text-white"
                />
              </Link>
            </div>
          </motion.div>
        </>
      )}
      {isTablet && (
        <div className="flex flex-col bg-[#FFF9EA]">
          <div>
            <div className="text-coffee font-extrabold text-center text-3xl md:!text-5xl xl:!text-6xl p-4">
              {heading.toUpperCase()}
            </div>
            <img src={imgSrcTablet} alt="laser-hair-removal-men" />
          </div>
          <motion.div
            variants={FadeInWrapper("left", 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="p-4"
          >
            <div className="flex flex-col gap-4 lg:!gap-5 my-4">
              <div>
                <p className="font-bold text-cello text-justify md:!text-xl xl:mt-[20px]">
                  {content}
                </p>
              </div>
              <Link
                to={linkTo}
                onClick={() => {
                  sessionStorage.setItem("treatmentName", heading);
                  sessionStorage.setItem("currentBookStep", 1);
                }}
                className="flex justify-center rounded-3 shadow-sm hover:!shadow-2xl xl:mt-[30px] bg-coffee text-white font-bold font-poppins items-center no-underline p-3 rounded-xl space-x-3  xl:text-xl w-full md:!w-1/3"
              >
                Book Now{" "}
                <MdKeyboardDoubleArrowRight
                  size="1.5rem"
                  className="ml-2 text-white"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default CommonHeader;
