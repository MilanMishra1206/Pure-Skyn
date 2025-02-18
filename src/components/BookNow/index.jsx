import {
  Box,
  Breadcrumbs,
  Step,
  StepLabel,
  Stepper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { lazy, Suspense, useEffect, useState } from "react";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import { getBookNowFormValidation } from "../../helpers/Login";
import { useAppSnackbar } from "../../config/Context/SnackbarContext";
import DrawCircleText from "../../shared/CustomDrawCircleText";
import FadeInWrapper from "../../config/MotionFramer/FadeInWrapper";
import { createNewBooking } from "../../services/Booking";
import BookNowDetails from "./BookNowDetails";
import BookNowOptions from "./BookNowOptions";
import { treatmentList } from "../../helpers/LaserServices";

const CustomLoader = lazy(() => import("../../shared/CustomLoader"));

function BookNow() {
  const isTablet = useMediaQuery("(max-width: 1023px)");
  const isMobile = useMediaQuery("(max-width: 767px)");
  const showSnackbar = useAppSnackbar();
  const [currentStep, setCurrentStep] = useState(0);
  const [stepHeading, setStepHeading] = useState("Choose Options");
  const [treatmentPackage, setTreatmentPackage] = useState("");
  const [checked, setChecked] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    treatmentDate: "",
    timeSlot: "",
    city: "",
  });

  const steps = ["Choose Your Treatment", stepHeading, "Book Now"];
  const storedTimeSlots = sessionStorage.getItem("availableTimeSlots");
  const timeSlots = storedTimeSlots ? JSON.parse(storedTimeSlots) : [];

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      setChecked(true);
    } else {
      setIsLoggedIn(false);
      setChecked(false);
    }
  }, []);

  useEffect(() => {
    checked
      ? setInitialValues({
          name: "Milan Mishra",
          email: "milanmishra11@gmaal.com",
          mobile: "8769261422",
          address: "Malibu Town",
          city: "Gurgaon",
        })
      : setInitialValues({
          name: "",
          email: "",
          mobile: "",
          address: "",
          city: "",
        });
  }, [checked]);

  useEffect(() => {
    const currentBookStep = JSON.parse(
      sessionStorage.getItem("currentBookStep")
    );
    const treatmentName = sessionStorage.getItem("treatmentName");
    if (sessionStorage.getItem("currentBookStep")) {
      setCurrentStep(currentBookStep);
      setStepHeading(treatmentName || "Services");
    }
  }, [sessionStorage.getItem("currentStep")]);

  const { mutate: createBooking, isLoading } = useMutation(createNewBooking, {
    onSuccess(res) {
      if (res?.isError) {
        showSnackbar(res?.message, "success");
      } else {
        showSnackbar(res?.message, "error");
      }
    },
    onError(error) {
      showSnackbar(error?.message, "error");
    },
  });

  const formik = useFormik({
    enableReinitialize: true,
    validateOnMount: true,
    validateOnChange: true,
    initialValues,
    validationSchema: getBookNowFormValidation,
    onSubmit: (value) => {
      createBooking({
        userId: "A12",
        serviceId: "LHR",
        name: value.name,
        email: value.email,
        mobile: value.mobile,
        address: value.address,
        treatmentDate: value.treatmentDate,
        timeSlot: value.treatment,
        pinCode: "342001", //to be fetched from Address API
      });
    },
  });

  const handleSubmit = () => {
    if (!formik.isValid) {
      showSnackbar("Please fill all the required fields", "error");
    } else {
      formik.handleSubmit();
    }
  };

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
      setStepHeading("Choose Option");
    } else if (currentStep === 2) {
      setCurrentStep(1);
    }
  };

  return (
    <motion.div
      variants={FadeInWrapper("left", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`mt-3 ${isTablet ? "py-3" : "py-4 mt-4"}`}
    >
      <Suspense>
        <CustomLoader open={isLoading} />
      </Suspense>
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
          <DrawCircleText
            headerText={"Exciting Offers"}
            serviceName={"On All Our Services"}
            subText={"Pay 50% after the service!!"}
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
            className="grid md:grid-cols-2 xl:!grid-cols-3 gap-5 py-5"
          >
            {treatmentList.map((item) => (
              <div
                key={item.id}
                className="cursor-pointer hover:scale-105 duration-500 relative"
                onClick={() => handleTreatmentClick(item.treatmentName)}
              >
                <img
                  src={item.imgSrc}
                  className="w-full h-full object-cover shadow-lg rounded-lg"
                  alt={item.treatmentName}
                />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-coffee bg-opacity-60 backdrop-blur-md rounded-b-lg  text-center">
                  <span className="font-poppins text-white font-bold text-xl">
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
          />
        )}
        {currentStep === 2 && (
          <BookNowDetails
            isLoggedIn={isLoggedIn}
            formik={formik}
            isMobile={isMobile}
            timeSlots={timeSlots}
            handleSubmit={handleSubmit}
            checked={checked}
            setChecked={setChecked}
          />
        )}
      </div>
    </motion.div>
  );
}

export default BookNow;
