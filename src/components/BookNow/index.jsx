import { Button, useMediaQuery } from "@mui/material";
import CustomHeader from "../../shared/CustomHeader";
import { lazy, Suspense, useEffect } from "react";
import { getIn, useFormik } from "formik";
import { getBookNowFormValidation } from "../../helpers/Login";
import { useAppSnackbar } from "../../config/Context/SnackbarContext";
import DrawCircleText from "../../shared/CustomDrawCircleText";
import FadeInWrapper from "../../config/MotionFramer/FadeInWrapper";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import regex from "../../helpers/Regex";
import FadedLineBreak from "../../shared/CustomHrTag";
import { useMutation } from "react-query";
import createNewBooking from "../../services/Booking";
import CustomButton2 from "../../shared/CustomButton2";

const CustomTextField = lazy(() => import("../../shared/CustomTextField"));
const CustomDropdown = lazy(() => import("../../shared/CustomDropdown"));
const CustomDatePicker = lazy(() => import("../../shared/CustomDatePicker"));
const CustomLoader = lazy(() => import("../../shared/CustomLoader"));

function BookNow() {
  const isTablet = useMediaQuery("(max-width: 1023px)");
  const isMobile = useMediaQuery("(max-width: 767px)");
  const showSnackbar = useAppSnackbar();
  const location = useLocation();

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
        <CustomHeader
          heading={"Book Now"}
          subHeading={"Book our best services"}
          showBackButton={true}
        />
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
        <div className={`${isMobile ? "" : "px-4"} rounded shadow-lg mt-4 py-4`}>
          <form className="w-full">
            <div className="rounded-3xl p-8">
              <div className="text-3xl font-poppins text-center font-extrabold mb-5">
                Please Share Booking Details
              </div>
              <FadedLineBreak />
              <div className="grid md:!grid-cols-2 xl:!grid-cols-3 gap-4 md:p-5">
                <Suspense fallback={<div />}>
                  <CustomTextField
                    textClassOverride="!text-kashmirBlue"
                    placeholderClasses="placeholder:!opacity-30 !text-licorice"
                    className="h-12 rounded-md !bg-transparent"
                    placeholder="Enter"
                    requiredStar
                    labelToShow="Name"
                    name="name"
                    textFieldColorClass="shadow-insetLight"
                    inputClassName="!bg-transparent"
                    fieldWidth="w-full !mb-4"
                    value={formik.values?.name}
                    onChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    error={formik.errors.name}
                    touched={formik.touched.name}
                  />
                </Suspense>
                <Suspense fallback={<div />}>
                  <CustomTextField
                    textClassOverride="!text-kashmirBlue"
                    placeholderClasses="placeholder:!opacity-30 !text-licorice"
                    className="h-12 rounded-md !bg-transparent"
                    placeholder="Enter"
                    requiredStar
                    regex={/^[^!#$%^&*()=+{}[\]:;<>,?/~`|"\\ ]*$/}
                    labelToShow="Email ID"
                    name="email"
                    textFieldColorClass="shadow-insetLight"
                    inputClassName="!bg-transparent"
                    fieldWidth="!mb-4"
                    maxLength={50}
                    value={formik.values?.email}
                    onChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    error={formik.errors?.email}
                    touched={formik.touched?.email}
                  />
                </Suspense>
                <Suspense fallback={<div />}>
                  <CustomTextField
                    textClassOverride="!text-kashmirBlue"
                    placeholderClasses="placeholder:!opacity-30 !text-licorice"
                    className="h-12 rounded-md !bg-transparent"
                    placeholder="Enter"
                    requiredStar
                    labelToShow="Mobile Number"
                    name="mobile"
                    maxLength={10}
                    regex={regex.numeric}
                    textFieldColorClass="shadow-insetLight"
                    inputClassName="!bg-transparent"
                    fieldWidth="!mb-4"
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    error={formik.errors.mobile}
                    touched={formik.touched.mobile}
                  />
                </Suspense>
                <Suspense fallback={<div />}>
                  <CustomDropdown
                    textClassOverride="!text-kashmirBlue"
                    classes="!rounded-md !mb-4"
                    requiredStar
                    labelToShow="Select Address"
                    name="address"
                    showIconOutline
                    options={[
                      { label: "Gurgaon", value: "Gurgaon" },
                      {
                        label: "South Delhi",
                        value: "South Delhi",
                      },
                    ]}
                    value={formik.values.address}
                    handleBlur={formik.handleBlur}
                    handleChange={formik.handleChange}
                    errorMessage={getIn(formik.errors, "address")}
                    error={getIn(formik.errors, "address")}
                    touched={getIn(formik.touched, "address")}
                  />
                </Suspense>
                <Suspense fallback={<div />}>
                  <CustomDropdown
                    textClassOverride="!text-kashmirBlue"
                    classes="!rounded-md !mb-4"
                    requiredStar
                    labelToShow="Select City"
                    name="city"
                    showIconOutline
                    options={[
                      { label: "Gurgaon", value: "Gurgaon" },
                      {
                        label: "South Delhi",
                        value: "South Delhi",
                      },
                    ]}
                    value={formik.values.city}
                    handleBlur={formik.handleBlur}
                    handleChange={formik.handleChange}
                    errorMessage={getIn(formik.errors, "city")}
                    error={getIn(formik.errors, "city")}
                    touched={getIn(formik.touched, "city")}
                  />
                </Suspense>
                <Suspense fallback={<div />}>
                  <CustomDropdown
                    textClassOverride="!text-kashmirBlue"
                    classes="!rounded-md !mb-4"
                    requiredStar
                    labelToShow="Select Treatment"
                    name="treatment"
                    showIconOutline
                    options={[
                      {
                        label: "Laser Hair Removal",
                        value: "Laser Hair Removal",
                      },
                      {
                        label: "Oxy Hydra Facial",
                        value: "Oxy Hydra Facial",
                      },
                      {
                        label: "RF Skin Tightening",
                        value: "RF Skin Tightening",
                      },
                      {
                        label: "Dermafrac Infusion Facial",
                        value: "Dermafrac Infusion Facial",
                      },
                      {
                        label: "Oxygeneo",
                        value: "Oxygeneo",
                      },
                    ]}
                    value={formik.values.treatment}
                    handleBlur={formik.handleBlur}
                    handleChange={formik.handleChange}
                    errorMessage={getIn(formik.errors, "treatment")}
                    error={getIn(formik.errors, "treatment")}
                    touched={getIn(formik.touched, "treatment")}
                  />
                </Suspense>
                {formik.values.treatment === "Laser Hair Removal" && (
                  <Suspense fallback={<div />}>
                    <CustomDropdown
                      textClassOverride="!text-kashmirBlue"
                      classes="!rounded-md !mb-4"
                      requiredStar
                      labelToShow="Select Laser Hair Removal Option"
                      name="laserOption"
                      showIconOutline
                      options={laserHairRemovalOptions}
                      value={formik.values.laserOption}
                      handleBlur={formik.handleBlur}
                      handleChange={formik.handleChange}
                      errorMessage={getIn(formik.errors, "laserOption")}
                      error={getIn(formik.errors, "laserOption")}
                      touched={getIn(formik.touched, "laserOption")}
                    />
                  </Suspense>
                )}
                <div className="mb-4">
                  <Suspense fallback={<div />}>
                    <CustomDatePicker
                      label="Treatment Date"
                      name="treatmentDate"
                      textClassToOverride="!text-kashmirBlue"
                      requiredStar
                      disablePast
                      className="w-full rounded-md !bg-transparent shadow-insetLight"
                      fieldWidth="!w-full"
                      setFieldValue={formik.setFieldValue}
                      setFieldTouched={formik.setFieldTouched}
                      value={formik.values.date}
                      error={formik.errors.treatmentDate}
                      touched={formik.touched.treatmentDate}
                      inputClassName="!text-kashmirBlue !font-poppins"
                      onChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                    />
                  </Suspense>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="timeSlot"
                    className="block text-sm font-bold text-cello"
                  >
                    Select Appointment Time
                  </label>
                  <div className="grid grid-cols-2 lg:!grid-cols-3 gap-4 mt-2">
                    {timeSlots.map((slot, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => formik.setFieldValue("timeSlot", slot)}
                        className={`p-2 rounded text-sm font-bold transition-all shadow-md ${
                          formik.values.timeSlot === slot
                            ? "bg-skyn text-white border-skyn"
                            : "bg-white text-gray-700 hover:!bg-gray-100"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                  {formik.errors.timeSlot && formik.touched.timeSlot && (
                    <p className="mt-1 ml-1 text-xs text-bitterSweet">
                      {formik.errors.timeSlot}*
                    </p>
                  )}
                </div>
              </div>
            </div>
          </form>
          <div className="px-4">
            <CustomButton2
              handleSubmit={handleSubmit}
              buttonClass="md:!w-2/5"
            />
          </div>
        </div>
        {/* <img src={Resources.images.Common.bookNowCard2} className={`h-96 w-35`}/> */}
      </div>
    </motion.div>
  );
}

export default BookNow;
