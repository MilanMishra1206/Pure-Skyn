import { useFormik } from "formik";
import { lazy, Suspense, useEffect, useState } from "react";
import { Breadcrumbs, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import BookNowDetails from "../BookNowDetails";
import { getBookNowFormValidation } from "../../../helpers/Login";
import { createNewBooking } from "../../../services/Booking";
import { useAppSnackbar } from "../../../config/Context/SnackbarContext";
import FadeInWrapper from "../../../config/MotionFramer/FadeInWrapper";
import DrawCircleText from "../../../shared/CustomDrawCircleText";

const CustomLoader = lazy(() => import("../../../shared/CustomLoader"));

function ServicesCart() {
  const showSnackbar = useAppSnackbar();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(max-width: 1023px)");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checked, setChecked] = useState(true);
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    treatmentDate: "",
    timeSlot: "",
    city: "",
  });

  const storedTimeSlots = sessionStorage.getItem("availableTimeSlots");
  const timeSlots = storedTimeSlots ? JSON.parse(storedTimeSlots) : [];

  const formik = useFormik({
    enableReinitialize: true,
    validateOnMount: true,
    validateOnChange: true,
    initialValues,
    validationSchema: getBookNowFormValidation,
    onSubmit: (value) => {
      createNewBooking({
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

  const navigateToBookNow = () => {
    navigate("/book-now");
    sessionStorage.removeItem("currentBookStep");
    sessionStorage.removeItem("treatmentName");
  };

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
      to="/book-now"
      onClick={navigateToBookNow}
      className="text-skyn no-underline !font-poppins hover:opacity-80 text-lg"
    >
      Book Now
    </Link>,
    <Typography key="3" className="!text-cello !font-poppins !text-lg">
      Services Cart
    </Typography>,
  ];

  return (
    <motion.div
      variants={FadeInWrapper("left", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`mt-3 ${isTablet ? "py-3" : "py-4 mt-4"}`}
    >
      <Suspense>
        <CustomLoader open={false} />
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
        <BookNowDetails
          isLoggedIn={isLoggedIn}
          formik={formik}
          isMobile={isMobile}
          timeSlots={timeSlots}
          handleSubmit={handleSubmit}
          checked={checked}
          setChecked={setChecked}
        />
      </div>
    </motion.div>
  );
}

export default ServicesCart;
