import { Link, useNavigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import Resources from "../../../../config/Resources";
import {
  beforeAfterCarouselContent,
  laserServiceForMenContent,
} from "../../../../helpers/LaserServices";
import MotionWrapper from "../../../../config/MotionFramer/MotionWrapper";
import FadeInWrapper from "../../../../config/MotionFramer/FadeInWrapper";
import CustomHeader from "../../../../shared/CustomHeader";
import FadedLineBreak from "../../../../shared/CustomHrTag";
import { LHRMenAccordianContent } from "../../../../helpers/AccordianContent";
import CustomAccordion from "../../../../shared/CustomAccordion";
import BeforeAfterCarousel from "../../BeforeAfterCarousel";

const CommonHeader = lazy(() => import("../../CommonHeader"));

function LaserHairRemovalForMen({ category, isMobile, isTablet, isLaptop }) {
  const navigate = useNavigate();
  return (
    <MotionWrapper>
      <div className={`${category ? "mt-5" : "mt-0"}`}>
        <motion.div
          variants={FadeInWrapper("left", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`${category ? "" : "mt-0"} ${isMobile ? "px-3" : "p-3"}`}
        >
          {!category && (
            <CustomHeader
              heading={"Laser Hair Removal For Men At Home"}
              headerClass={!category && "!text-2xl"}
            />
          )}
        </motion.div>
        {category && (
          <div>
            <Suspense fallback={<div>Loading...</div>}>
              <CommonHeader
                imgSrcLaptop={Resources.images.Home.lhrMen}
                imgSrcTablet={Resources.images.Home.lhrMenMobile}
                linkTo="/book-now"
                heading="Laser Hair Removal Men At Home"
                breadcrumbs1="Laser Hair Removal"
                route1="/services/laser-hair-removal"
                breadcrumbs2="Men"
                content="Experience the freedom of smooth skin with PureSkyn's at-home
                  laser hair removal for men in India. Our advanced, easy-to-use
                  devices bring professional-grade hair removal right to your
                  doorstep. Designed for comfort and effectiveness, our laser
                  technology targets hair follicles, providing long-lasting
                  results while minimizing discomfort. Say goodbye to the hassle
                  of shaving and waxing, and embrace a confident, hair-free
                  look. Join countless satisfied customers who have transformed
                  their grooming routine with PureSkyn's reliable and safe
                  at-home solutions. Achieve the skin you desire, all in the
                  comfort of your home!"
              />
            </Suspense>
            <div
              className={`grid grid-cols-1 mt-3 place-items-center ${isMobile ? "p-2" : ""} text-justify`}
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
                      <img
                        src={item.img}
                        alt={item.header.toLowerCase()}
                        className="rounded-2xl h-75 w-75"
                      />
                    </div>
                  )}
                  <div className="font-poppins w-full lg:!w-1/2 mr-0 lg:!mr-5">
                    <div className="font-extrabold text-skyn text-3xl text-center md:!text-left">
                      {item.header}
                    </div>
                    <FadedLineBreak />
                    {item?.subHeader && (
                      <h4 className="font-medium">{item.subHeader}</h4>
                    )}
                    {item?.subHeaderTwo && (
                      <h4 className="font-semibold mt-5">
                        {item.subHeaderTwo}
                      </h4>
                    )}
                    {item?.sectionOne && (
                      <p className="font-medium text-cello mt-2">
                        {item.sectionOne}
                      </p>
                    )}
                    {item?.sectionTwo && (
                      <p className="font-medium text-cello mb-2">
                        {item.sectionTwo}
                      </p>
                    )}
                    {item?.listHeader && (
                      <p className="font-semibold text-cello mb-2 text-lg mt-4">
                        {item.listHeader}
                      </p>
                    )}
                    {item?.listContent?.length > 0 && (
                      <ul className="list-disc ml-5">
                        {item?.listContent.map((list) => (
                          <li key={list.id}>
                            <strong>{list.label}</strong> {list.content}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {!isLaptop && (
                    <div className="flex flex-col w-full">
                      <div className="flex justify-center w-full lg:!w-1/2">
                        <img
                          src={item.img}
                          alt={item.header.toLowerCase()}
                          className="rounded-2xl h-75"
                        />
                      </div>
                      <FadedLineBreak />
                    </div>
                  )}
                  {isLaptop && item.id % 2 !== 0 && (
                    <div className="flex justify-center w-full lg:!w-1/2">
                      <img
                        src={item.img}
                        alt={item.header.toLowerCase()}
                        className="rounded-2xl h-75"
                      />
                    </div>
                  )}
                </motion.div>
              ))}
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
                      How to Get Started with PureSkyn's Laser Hair Reduction at
                      Home Service for Men
                    </div>
                    <FadedLineBreak />
                    <div className="flex flex-col">
                      <ul className="list-disc pl-4 space-y-3 !text-left">
                        <li>
                          <strong>Schedule a Free Consultation:</strong> Start
                          by scheduling a free consultation with
                          <strong> PureSkyn</strong>. Our experts will evaluate
                          your hair type, skin tone and specific needs to create
                          a customized treatment plan.
                        </li>
                        <li>
                          <strong>Book Your Treatment:</strong>
                          Once we've crafted the ideal plan for you, simply book
                          a time that works for your schedule. Our technician
                          will arrive at your home fully equipped to provide the
                          laser hair reduction treatment.
                        </li>
                        <li>
                          <strong>Enjoy Smooth, Hair-Free Skin:</strong>
                          After a few sessions, you'll notice a significant
                          reduction in hair growth, leaving you with smooth,
                          refreshed skin. We'll also provide ongoing support to
                          ensure your results are long-lasting.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="!text-xl font-bold text-center">
                      The Best Areas for Laser Hair Reduction for Men
                    </div>
                    <FadedLineBreak />
                    <p className="font-semibold text-cello mb-2 text-lg mt-4">
                      Laser hair reduction is perfect for a variety of areas on
                      the male body, including:
                    </p>
                    <div className="flex flex-col">
                      <ul className="list-disc pl-4 space-y-3 !text-left">
                        <li>
                          <strong>Back:</strong> Target unwanted back hair with
                          precision and ease.
                        </li>
                        <li>
                          <strong>Chest and Stomach:</strong> Achieve a clean,
                          polished look without the constant hassle of shaving
                          or waxing.
                        </li>
                        <li>
                          <strong>Arms and Legs:</strong>
                          Maintain a smooth, hair-free appearance with minimal
                          maintenance.
                        </li>
                        <li>
                          <strong>Beard Area:</strong>
                          Reduce excessive beard growth or shape your beard with
                          precision.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 font-poppins border-l-8 p-3">
                  <p className="font-semibold text-xl">
                    Book Your Laser Hair Reduction Appointment Today!
                  </p>
                  <p>
                    Ready to take the next step towards smooth, hair-free skin?{" "}
                    <br />
                    With{" "}
                    <strong>
                      PureSkyn's laser hair reduction at home for men,{" "}
                    </strong>
                    you can enjoy professional results without even leaving your
                    house. Contact us today to schedule your consultation and
                    let us help you achieve the smooth, hair-free look you've
                    always wanted!
                  </p>
                </div>
              </motion.div>
            </div>
            {category === "men" && (
              <motion.div
                variants={FadeInWrapper("up", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div
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
                </div>
                <FadedLineBreak />
                <BeforeAfterCarousel
                  carouselContent={beforeAfterCarouselContent?.["Laser Hair Removal"]}
                />
                <FadedLineBreak />
                <div className="text-center text-skyn font-bold text-3xl px-4 mt-4">
                  <p>Frequently Asked Questions(FAQs)</p>
                </div>
                <div
                  className={`flex justify-center items-center ${isTablet ? "p-3 flex-col" : "flex-row"}`}
                >
                  <div
                    className={`mt-4 w-full xl:!w-1/2 ${!isTablet ? "px-5" : ""}`}
                  >
                    <CustomAccordion accordionData={LHRMenAccordianContent} />
                    <Link
                      to="/faq#Laser Hair Removal Men"
                      className="text-skyn hover:opacity-80 text-xl font-bold cursor-pointer"
                    >
                      Show More FAQs
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </MotionWrapper>
  );
}

export default LaserHairRemovalForMen;
