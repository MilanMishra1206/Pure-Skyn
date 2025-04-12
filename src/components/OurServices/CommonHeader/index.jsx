import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Breadcrumbs, Typography, useMediaQuery } from "@mui/material";
import FadeInWrapper from "../../../config/MotionFramer/FadeInWrapper";

function CommonHeader({
  imgSrcTablet,
  imgSrcLaptop,
  heading,
  content,
  linkTo,
  breadcrumbs1,
  route1,
  breadcrumbs2,
}) {
  const isLargestScreen = useMediaQuery("(min-width: 1570px)");
  const isLaptopScreen = useMediaQuery(
    "(min-width: 1024px) and (max-width: 1579px)"
  );
  const isTablet = useMediaQuery("(max-width: 1023px)");
  const breadcrumbs = [
    <Link
      key="1"
      to="/"
      className="text-skyn no-underline !font-poppins hover:opacity-80 text-lg"
    >
      Home
    </Link>,
    <Link
      key="2"
      to={route1}
      className="text-skyn no-underline !font-poppins hover:!opacity-80 !text-lg"
    >
      {breadcrumbs1}
    </Link>,
    <Typography key="3" className="!text-cello !font-poppins !text-lg">
      {breadcrumbs2}
    </Typography>,
  ];
  return (
    <>
      <Breadcrumbs separator=">" aria-label="breadcrumb" className="mb-4 px-1">
        {breadcrumbs}
      </Breadcrumbs>
      {isLaptopScreen && (
        <>
          <div className="relative">
            <img src={imgSrcLaptop} alt={heading} className="h-100" />
          </div>
          <motion.div
            variants={FadeInWrapper("left", 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="absolute inset-0 mt-[150px] xl:!mt-[170px] bg-opacity-40 lg:mr-22"
          >
            <div className="flex flex-col justify-around lg:h-10 xl:!h-[550px] lg:mt-2 xl:!mt-0 w-50 p-4 xl:!p-5 gap-2 xl:!gap-5 ml-6 xl:!pb-6">
              {heading && (
                <div className="text-coffee font-extrabold text-2xl xl:!text-3xl mt-4 xl:!mt-0">
                  {heading.toUpperCase()}
                </div>
              )}
              <div>
                <p className="font-bold text-coal text-justify text-sm xl:!text-base xl:mt-[20px]">
                  {content}
                </p>
              </div>
              {linkTo && (
                <Link
                  to={linkTo}
                  onClick={() => {
                    sessionStorage.setItem("treatmentName", heading);
                    sessionStorage.setItem("currentBookStep", 1);
                  }}
                  className="flex justify-center rounded-3 mb-2 shadow-sm hover:!shadow-2xl xl:mt-[30px] bg-coffee text-white font-bold font-poppins items-center no-underline p-2 rounded-xl space-x-3  xl:text-xl w-full xl:!w-1/3"
                >
                  Book Now{" "}
                  <MdKeyboardDoubleArrowRight
                    size="1.5rem"
                    className="ml-2 text-white"
                  />
                </Link>
              )}
            </div>
          </motion.div>
        </>
      )}
      {isTablet && (
        <div className="flex flex-col bg-[#FFF9EA]">
          <div>
            <div className="text-coffee font-extrabold text-center md:!text-left text-3xl md:!text-5xl xl:!text-6xl p-4">
              {heading.toUpperCase()}
            </div>
            <div className="flex items-start justify-center">
              <img
                src={imgSrcTablet}
                alt="laser-hair-removal-men"
                className="md:!h-96"
              />
            </div>
          </div>
          <motion.div
            variants={FadeInWrapper("left", 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="p-4"
          >
            <div className="flex flex-col gap-4 lg:!gap-5 my-4">
              <p className="font-bold text-cello text-justify md:!text-xl xl:mt-[20px]">
                {content}
              </p>
              <Link
                to={linkTo}
                onClick={() => {
                  sessionStorage.setItem("treatmentName", heading);
                  sessionStorage.setItem("currentBookStep", 1);
                }}
                className="flex justify-center rounded-3 shadow-sm hover:!shadow-2xl xl:mt-[30px] bg-coffee text-white font-bold font-poppins items-center no-underline p-3 rounded-xl space-x-3  xl:text-xl w-full md:!w-2/3"
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
      {isLargestScreen && (
        <div className="flex">
          <div className="flex flex-col bg-[#FFF9EA]">
            <div className="w-75">
              <div className="text-coffee font-extrabold text-left text-5xl p-4">
                {heading.toUpperCase()}
              </div>

              <motion.div
                variants={FadeInWrapper("left", 0.7)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex gap-4 p-4"
              >
                <div className="flex flex-col gap-4 lg:!gap-5 my-4">
                  <p className="font-bold text-cello text-justify md:!text-xl xl:mt-[20px]">
                    {content}
                  </p>
                  <Link
                    to={linkTo}
                    onClick={() => {
                      sessionStorage.setItem("treatmentName", heading);
                      sessionStorage.setItem("currentBookStep", 1);
                    }}
                    className="flex justify-center rounded-3 shadow-sm hover:!shadow-2xl xl:mt-[30px] bg-coffee text-white font-bold font-poppins items-center no-underline p-3 rounded-xl space-x-3  xl:text-xl w-full md:!w-2/3"
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
          </div>
          <div className="flex items-center justify-center bg-[#FFF9EA]">
            <img src={imgSrcTablet} alt="laser-hair-removal-men" />
          </div>
        </div>
      )}
    </>
  );
}

export default CommonHeader;
