import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CustomCards from "../../../shared/CustomCards";
import { servicesOffered } from "../../../helpers/LaserServices";
import CustomHomeHeader from "../../../shared/CustomHomeHeader";
import FadeInWrapper from "../../../config/MotionFramer/FadeInWrapper";

function ServicesOffered({ isMobile, isLargeScreen, isLaptop }) {
  return (
    <div>
      <div className="px-4">
        <div className={`${isMobile ? "" : "px-4"}`}>
          <CustomHomeHeader
            heading={"Services Offered - Start Your Skin Journey Today"}
          />
        </div>
      </div>
      <div>
        <div className="px-5 mt-5">
          <div className="flex justify-end px-5">
            <Link
              to="/services"
              className="flex items-center text-skyn font-bold text-xl font-poppins no-underline hover:opacity-80 hover:underline hover:!tracking-widest"
            >
              Explore More
              <MdKeyboardDoubleArrowRight className="text-2xl text-skyn" />
            </Link>
          </div>
        </div>
        <motion.div
          variants={FadeInWrapper("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`grid grid-cols-1 md:!grid-cols-2 xl:!grid-cols-4 ${isLargeScreen ? "p-5" : "p-4"}`}
        >
          <div className="bg-coffee text-white text-center p-4 shadow-lg min-h-96">
            <div className="flex flex-col items-center justify-between h-full">
              <p className="text-xl font-extrabold">
                {servicesOffered[0].title}
              </p>
              <p className="font-semibold">{servicesOffered[0].description}</p>
              <Link
                className="no-underline border p-2 rounded-3xl font-medium w-full md:w-1/2 mt-2 text-white hover:!bg-white hover:!text-skyn transition-colors duration-500"
                to="/services/laser-hair-removal-packages"
              >
                See Prices
              </Link>
            </div>
          </div>
          <img
            src={servicesOffered[0].image}
            alt={servicesOffered[0].title}
            className="shadow-lg object-cover w-full h-96"
          />
          <img
            src={servicesOffered[1].image}
            alt={servicesOffered[1].title}
            className="hidden md:!block xl:!hidden shadow-lg object-cover w-full h-96"
          />
          <div className="bg-lightYellow text-coal text-center p-4 shadow-lg min-h-96">
            <div className="flex flex-col items-center justify-between h-full">
              <p className="text-xl font-extrabold">
                {servicesOffered[1].title}
              </p>
              <p className="font-semibold">{servicesOffered[1].description}</p>
              <Link
                className="no-underline border p-2 rounded-3xl font-medium w-full md:w-1/2 mt-2 border-black hover:!border-white text-coal hover:!bg-white hover:!text-skyn transition-colors duration-500"
                to="/services/laser-hair-removal-packages"
              >
                See Prices
              </Link>
            </div>
          </div>
          <img
            src={servicesOffered[1].image}
            alt={servicesOffered[1].title}
            className="block md:!hidden xl:!block selection:shadow-lg object-cover w-full h-96"
          />
          <img
            src={servicesOffered[2].image}
            alt={servicesOffered[2].title}
            className="hidden xl:!block shadow-lg object-cover w-full h-96"
          />
          <div className="bg-coffee text-white text-center p-4 shadow-lg min-h-96">
            <div className="flex flex-col items-center justify-between h-full">
              <p className="text-xl font-extrabold">
                {servicesOffered[2].title}
              </p>
              <p className="font-semibold">{servicesOffered[2].description}</p>
              <Link
                className="no-underline border p-2 rounded-3xl font-medium w-full md:w-1/2 mt-2 text-white hover:!bg-white hover:!text-skyn transition-colors duration-500"
                to="/services/skin/medi-facial-packages"
              >
                See Prices
              </Link>
            </div>
          </div>
          <img
            src={servicesOffered[2].image}
            alt={servicesOffered[2].title}
            className="block xl:!hidden shadow-lg object-cover w-full h-96"
          />
          <img
            src={servicesOffered[3].image}
            alt={servicesOffered[3].title}
            className="hidden md:!block shadow-lg object-cover w-full h-96"
          />
          <div className="bg-lightYellow text-coal text-center p-4 shadow-lg min-h-96">
            <div className="flex flex-col items-center justify-between h-full">
              <p className="text-xl font-extrabold">
                {servicesOffered[3].title}
              </p>
              <p className="font-semibold">{servicesOffered[3].description}</p>
              <Link
                className="no-underline border p-2 rounded-3xl font-medium w-full md:w-1/2 mt-2 border-black hover:!border-white text-coal hover:!bg-white hover:!text-skyn transition-colors duration-500"
                to="/services/skin/medi-facial-packages"
              >
                See Prices
              </Link>
            </div>
          </div>
          <img
            src={servicesOffered[3].image}
            alt={servicesOffered[3].title}
            className="block md:!hidden shadow-lg object-cover w-full h-96"
          />
          <div className="bg-coffee text-white text-center p-4 shadow-lg min-h-96">
            <div className="flex flex-col items-center justify-between h-full">
              <p className="text-xl font-extrabold">
                {servicesOffered[4].title}
              </p>
              <p className="font-semibold">{servicesOffered[4].description}</p>
              <Link
                className="no-underline border p-2 rounded-3xl font-medium w-full md:w-1/2 mt-2 text-white hover:!bg-white hover:!text-skyn transition-colors duration-500"
                to="/services/skin/medi-facial-packages"
              >
                See Prices
              </Link>
            </div>
          </div>
          <img
            src={servicesOffered[4].image}
            alt={servicesOffered[4].title}
            className="shadow-lg object-cover w-full h-96"
          />
          <img
            src={servicesOffered[5].image}
            alt={servicesOffered[5].title}
            className="hidden md:!block xl:!hidden shadow-lg object-cover w-full h-96"
          />
          <div className="bg-lightYellow text-coal text-center p-4 shadow-lg min-h-96">
            <div className="flex flex-col items-center justify-between h-full">
              <p className="text-xl font-extrabold">
                {servicesOffered[5].title}
              </p>
              <p className="font-semibold">{servicesOffered[5].description}</p>
              <Link
                className="no-underline border p-2 rounded-3xl font-medium w-full md:w-1/2 mt-2 border-black hover:!border-white text-coal hover:!bg-white hover:!text-skyn transition-colors duration-500"
                to="/services/skin/medi-facial-packages"
              >
                See Prices
              </Link>
            </div>
          </div>
          <img
            src={servicesOffered[5].image}
            alt={servicesOffered[5].title}
            className="block md:!hidden xl:!block shadow-lg object-cover w-full h-96"
          />
        </motion.div>
        <div
          className={`grid grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 gap-4 place-items-center ${isLargeScreen ? "mt-5 px-4" : "p-2"}`}
        >
          {servicesOffered.map((item) => (
            <CustomCards
              title={item.title}
              imgSrc={item.imageSrc}
              linkTo={item.linkTo}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesOffered;
