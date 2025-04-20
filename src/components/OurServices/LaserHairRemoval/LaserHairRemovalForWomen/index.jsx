import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import Resources from "../../../../config/Resources";
import {
  beforeAfterCarouselContent,
  laserServiceForWomenContent,
} from "../../../../helpers/LaserServices";
import MotionWrapper from "../../../../config/MotionFramer/MotionWrapper";
import FadeInWrapper from "../../../../config/MotionFramer/FadeInWrapper";
import CustomHeader from "../../../../shared/CustomHeader";
import FadedLineBreak from "../../../../shared/CustomHrTag";
import CustomAccordion from "../../../../shared/CustomAccordion";
import { LHRWomenAccordianContent } from "../../../../helpers/AccordianContent";
import BeforeAfterCarousel from "../../BeforeAfterCarousel";

const CommonHeader = lazy(() => import("../../CommonHeader"));

function LaserHairRemovalForWomen({ category, isMobile, isTablet }) {
  const isLaptop = useMediaQuery("(min-width: 1023px)");
  const navigate = useNavigate();

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
          {!category && (
            <CustomHeader
              heading={"Laser Hair Removal For Women At Home"}
              headerClass={`${!category ? "!text-center !text-2xl" : ""}`}
            />
          )}
        </motion.div>
        {category && (
          <div>
            <Suspense fallback={<div>Loading...</div>}>
              <CommonHeader
                imgSrcLaptop={Resources.images.Home.lhrWomen}
                imgSrcTablet={Resources.images.Home.lhrWomenMobile}
                linkTo="/book-now"
                heading="Laser Hair Removal Women At Home"
                breadcrumbs1="Laser Hair Removal"
                route1="/services/laser-hair-removal"
                breadcrumbs2="Women"
                content="Discover the convenience of at-home laser hair removal for
                      women with PureSkyn in India. Our advanced, user-friendly
                      devices provide an effective and safe solution for
                      achieving silky-smooth skin from the comfort of your own
                      home. Designed to target unwanted hair with precision,
                      PureSkyn's innovative technology ensures lasting results
                      while minimizing discomfort. Say goodbye to traditional
                      hair removal methods and embrace the ease of laser hair
                      removal with PureSkyn, empowering you to feel confident
                      and radiant every day. Experience the future of skincare
                      today!"
              />
            </Suspense>
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
                      <img
                        src={item.img}
                        alt={item.header.toLowerCase()}
                        className="rounded-2xl h-75"
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
                      Home Service for Women
                    </div>
                    <FadedLineBreak />
                    <div className="flex flex-col">
                      <ul className="list-disc pl-4 space-y-3 !text-left">
                        <li>
                          <strong>Book a Consultation:</strong> Contact PureSkyn
                          today for a free consultation. Our specialists will
                          assess your skin type, hair growth and treatment goals
                          to design a personalized plan.
                        </li>
                        <li>
                          <strong>Schedule Your Treatment:</strong>
                          Once we've created your personalized treatment plan,
                          book an appointment at a time that works best for you.
                          Our technicians will come to your home fully equipped
                          to perform the treatment.
                        </li>
                        <li>
                          <strong>Enjoy Smooth, Hair-Free Skin:</strong>
                          After just a few sessions, you'll notice a{" "}
                          <strong>significant reduction in hair growth</strong>,
                          leaving you with smooth, silky skin. We'll continue to
                          support you throughout the process to ensure optimal
                          results.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="!text-xl font-bold text-center">
                      The Best Areas for Laser Hair Reduction for Women
                    </div>
                    <FadedLineBreak />
                    <p className="font-semibold text-cello mb-2 text-lg mt-4">
                      Laser hair reduction is effective on various areas of the
                      body including:
                    </p>
                    <div className="flex flex-col">
                      <ul className="list-disc pl-4 space-y-3 !text-left">
                        <li>
                          <strong>Face:</strong> Remove unwanted facial hair
                          from the upper lip, chin and sidelocks with precision.
                        </li>
                        <li>
                          <strong>Bikini Line:</strong> Achieve a clean, smooth
                          bikini line without the pain of waxing.
                        </li>
                        <li>
                          <strong>Underarms:</strong>
                          Get rid of underarm hair without the hassle of shaving
                          or waxing.
                        </li>
                        <li>
                          <strong>Arms and Legs:</strong>
                          Enjoy smooth, hair-free arms and legs with
                          long-lasting results.
                        </li>
                        <li>
                          <strong>Back and Stomach:</strong>
                          Eliminate stubborn back and stomach hair, leaving your
                          skin smoother.
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
                    Ready to experience the benefits of{" "}
                    <strong>laser hair reduction at home for women?</strong>{" "}
                    <br />
                    At <strong>PureSkyn</strong>, we make it easy, safe and
                    convenient for you to achieve smooth, hair-free skin in the
                    comfort of your own home. Book your consultation today and
                    take the first step toward a more permanent hair removal
                    solution.
                  </p>
                </div>
              </motion.div>
            </div>
            {category === "women" && (
              <motion.div
                variants={FadeInWrapper("up", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <FadedLineBreak />
                <BeforeAfterCarousel
                  carouselContent={beforeAfterCarouselContent?.["LHR Female"]}
                />
                <FadedLineBreak />
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
                <div className="text-center text-skyn font-bold text-3xl px-4 mt-4">
                  <p>Frequently Asked Questions(FAQs)</p>
                </div>
                <div
                  className={`flex justify-center items-center ${isTablet ? "p-3" : ""}`}
                >
                  <div
                    className={`mt-4 w-full xl:!w-1/2 ${!isTablet ? "px-5" : ""}`}
                  >
                    <CustomAccordion accordionData={LHRWomenAccordianContent} />
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

export default LaserHairRemovalForWomen;
