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
import { getBookNowFormValidation } from "../../helpers/Login";
import { useAppSnackbar } from "../../config/Context/SnackbarContext";
import DrawCircleText from "../../shared/CustomDrawCircleText";
import FadeInWrapper from "../../config/MotionFramer/FadeInWrapper";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useMutation } from "react-query";
import createNewBooking from "../../services/Booking";
import BookNowDetails from "./BookNowDetails";
import Resources from "../../config/Resources";
import BookNowOptions from "./BookNowOptions";

const CustomLoader = lazy(() => import("../../shared/CustomLoader"));

function BookNow() {
  const isTablet = useMediaQuery("(max-width: 1023px)");
  const isMobile = useMediaQuery("(max-width: 767px)");
  const showSnackbar = useAppSnackbar();
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(0);
  const [stepHeading, setStepHeading] = useState("Choose Options");
  const [treatmentPackage, setTreatmentPackage] = useState("");

  const treatmentList = [
    {
      id: 1,
      treatmentName: "Laser Hair Removal Women",
      imgSrc: Resources.images.Home.lhrWomenHeader,
      label: "lhrWomen",
    },
    {
      id: 2,
      treatmentName: "Laser Hair Removal Men",
      imgSrc: Resources.images.Home.lhrMenHeader,
      label: "lhrMen",
    },
    {
      id: 3,
      treatmentName: "Oxy Hydra Facial",
      imgSrc: Resources.images.Home.oxyhydraHeader,
      label: "oxyHydraFacial",
    },
    {
      id: 4,
      treatmentName: "RF Skin Tightening",
      imgSrc: Resources.images.Home.skinTighteningHeader,
      label: "skinTightening",
    },
    {
      id: 5,
      treatmentName: "Dermafrac Infustion Facial",
      imgSrc: Resources.images.Home.dermafracHeader,
      label: "dermafrac",
    },
    {
      id: 6,
      treatmentName: "Oxygeneo",
      imgSrc: Resources.images.Home.oxyhydraHeader,
      label: "oxygeneo",
    },
  ];

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
    initialValues: {
      name: location.state?.name || "",
      email: location.state?.email || "",
      mobile: location.state?.mobile || "",
      address: "",
      treatmentDate: "",
      timeSlot: "",
      city: location.state?.city || "",
      treatment: location.state?.treatment || "",
      laserOption: "",
    },
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
        treatment: value.treatment,
        laserOption: value.laserOption,
      });
    },
  });

  const getQueryParam = (param) => {
    const params = new URLSearchParams(location.search);
    const value = params.get(param);
    return value ? decodeURIComponent(value) : null;
  };

  const steps = ["Choose Your Treatment", stepHeading, "Book Now"];

  useEffect(() => {
    const treatmentQueryParam = getQueryParam("treatment");
    const laserTypeQueryParam = getQueryParam("laserType");

    if (treatmentQueryParam) {
      formik.setFieldValue("treatment", treatmentQueryParam);
    }
    if (laserTypeQueryParam) {
      formik.setFieldValue("laserOption", laserTypeQueryParam);
    }
  }, [location.search]);

  const laserHairRemovalOptions = [
    {
      label: "Full Body (excluding Bikini) - Women",
      value: "Full Body (excluding Bikini) - Women",
    },
    {
      label: "Full Body (excluding private Parts) - Men",
      value: "Full Body (excluding private Parts) - Men",
    },
    { label: "Face & Neck (4+1 Session)", value: "Face And Neck" },
    {
      label: "Arms + Underarms (4+1 Session)",
      value: "Arms And Underarms",
    },
    {
      label: "Bikini & Buttocks (4+1 Session) - Women",
      value: "Bikini And Buttocks",
    },
    { label: "Chest & Back (4+1 Session)", value: "Chest And Back" },
    { label: "Half Legs", value: "Half Legs" },
    { label: "Full Legs", value: "Full Legs" },
    { label: "Back", value: "Back" },
    { label: "Chest", value: "Chest" },
    { label: "Bikini", value: "Bikini" },
  ];

  const timeSlots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "2:00 PM",
    "4:00 PM",
    "6:00 PM",
  ];

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
      className="text-skyn no-underline font-poppins hover:opacity-80 text-lg"
    >
      Home
    </Link>,
    <Typography key="2" className="text-cello font-poppins text-lg">
      Book
    </Typography>,
  ];

  const handleTreatmentClick = (treatmentName) => {
    setCurrentStep(currentStep + 1);
    if (
      ["Oxy Hydra Facial", "Dermafrac Infustion Facial", "Oxygeneo"].includes(
        treatmentName
      )
    ) {
      setCurrentStep(currentStep + 2);
    }
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
            formik={formik}
            isMobile={isMobile}
            laserHairRemovalOptions={laserHairRemovalOptions}
            timeSlots={timeSlots}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </motion.div>
  );
}

export default BookNow;
