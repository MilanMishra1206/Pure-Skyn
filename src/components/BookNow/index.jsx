import {
  Box,
  Breadcrumbs,
  Step,
  StepLabel,
  Stepper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaCartPlus } from "react-icons/fa";
import DrawCircleText from "../../shared/CustomDrawCircleText";
import FadeInWrapper from "../../config/MotionFramer/FadeInWrapper";
import BookNowDetails from "./BookNowDetails";
import BookNowOptions from "./BookNowOptions";
import { treatmentList } from "../../helpers/LaserServices";
import Resources from "../../config/Resources";

function BookNow() {
  const isTablet = useMediaQuery("(max-width: 1023px)");
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [currentStep, setCurrentStep] = useState(0);
  const [stepHeading, setStepHeading] = useState("Choose Options");
  const [treatmentPackage, setTreatmentPackage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const steps = ["Choose Your Treatment", "Choose Your Package", "Book Now"];
  const servicesCart = useSelector((state) => state.servicesCart.services);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [sessionStorage.getItem("token")]);

  useEffect(() => {
    const currentBookStep = JSON.parse(
      sessionStorage.getItem("currentBookStep")
    );
    const treatmentName = sessionStorage.getItem("treatmentName");
    if (sessionStorage.getItem("currentBookStep")) {
      setCurrentStep(currentBookStep);
      setStepHeading(treatmentName || "Choose Your Services");
    }
  }, [sessionStorage.getItem("currentStep")]);

  const breadcrumbs = [
    <Link
      key="1"
      to="/"
      className="text-skyn no-underline !font-poppins hover:opacity-80 text-lg"
    >
      Home
    </Link>,
    <Typography key="2" className="!text-cello !font-poppins !text-lg">
      Book
    </Typography>,
  ];

  const handleTreatmentClick = (treatmentName) => {
    setCurrentStep(currentStep + 1);
    setStepHeading(treatmentName);
    sessionStorage.setItem("treatmentName", treatmentName);
  };

  const handleStepClick = (currentStep, stepIndex) => {
    if (currentStep === stepIndex || stepIndex > currentStep) {
      return;
    }
    if (currentStep === 1) {
      setCurrentStep(0);
      sessionStorage.removeItem("treatmentName");
      sessionStorage.setItem("currentBookStep", 0);
      setStepHeading("Choose Option");
    } else if (currentStep === 2) {
      if (stepIndex === 0) {
        setCurrentStep(0);
        sessionStorage.removeItem("treatmentName");
        sessionStorage.setItem("currentBookStep", 0);
        setStepHeading("Choose Option");
      } else {
        setCurrentStep(1);
        sessionStorage.setItem("currentBookStep", 1);
      }
    }
  };

  const handleBookServices = () => {
    setCurrentStep(0);
    sessionStorage.removeItem("treatmentName");
    sessionStorage.setItem("currentBookStep", 0);
  };

  return (
    <motion.div
      variants={FadeInWrapper("left", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`mt-3 ${isTablet ? "py-3" : "py-4 mt-4"}`}
    >
      <div className={`mt-5 ${isMobile ? "px-4" : "px-5"}`}>
        <Breadcrumbs
          separator=">"
          aria-label="breadcrumb"
          className="mb-4 px-1"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <motion.div
          variants={FadeInWrapper("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <img
            src={Resources.images.Common.fiftyPercentAfterServiceBanner}
            alt="50% After Service Banner"
            className="hidden md:!block"
          />
          <img
            src={Resources.images.Common.fiftyPercentAfterServiceBannerMobile}
            alt="50% After Service Banner"
            className="block md:!hidden"
          />
        </motion.div>
        <div className="mt-5">
          <Box sx={{ width: "100%" }}>
            <Stepper activeStep={currentStep} alternativeLabel>
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel
                    onClick={() => handleStepClick(currentStep, index)}
                    sx={{
                      cursor: index <= currentStep ? "pointer" : "default",
                      color:
                        index <= currentStep
                          ? "primary.main"
                          : "text.secondary",
                    }}
                  >
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </div>
        {currentStep === 0 && (
          <motion.div
            variants={FadeInWrapper("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 xl:!grid-cols-3 gap-5 py-5 place-items-center"
          >
            {treatmentList.map((item) => (
              <div
                key={item.id}
                className="cursor-pointer hover:scale-105 duration-500 w-full lg:!w-96"
                onClick={() => handleTreatmentClick(item.treatmentName)}
              >
                <img
                  src={item.imgSrc}
                  className="w-full h-full object-cover shadow-lg rounded-t-md"
                  alt={item.treatmentName}
                />
                <div className="bottom-0 left-0 w-full p-3 md:!p-4 bg-coffee bg-opacity-60 backdrop-blur-md rounded-b-lg text-center">
                  <span className="font-poppins text-white font-bold md:!text-xl">
                    {item.treatmentName}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        )}
        {currentStep === 1 && (
          <BookNowOptions
            heading={stepHeading}
            setTreatmentPackage={setTreatmentPackage}
            treatmentPackage={treatmentPackage}
            setCurrentStep={setCurrentStep}
            servicesCart={servicesCart}
          />
        )}
        {currentStep === 2 && (
          <>
            {servicesCart.length > 0 ? (
              <BookNowDetails isLoggedIn={isLoggedIn} />
            ) : (
              <div className="flex flex-col items-center justify-center px-2 md:!px-5 pb-5">
                <img
                  src={Resources.images.Common.emptyCart}
                  className="h-52 md:!h-96"
                  alt="Empty Cart"
                />
                <p className="text-xl font-bold text-center text-coal">
                  No Services Added. Let's add some! ⚡
                </p>
                <button
                  className="flex gap-2 items-center justify-center rounded-3xl font-medium px-4 active:!bg-white active:!text-skyn bg-skyn text-white hover:!opacity-80 active:!border-none transition duration-500 py-2 mt-4"
                  onClick={handleBookServices}
                >
                  <FaCartPlus size="1.2rem" />
                  Book Services
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
}

export default BookNow;
