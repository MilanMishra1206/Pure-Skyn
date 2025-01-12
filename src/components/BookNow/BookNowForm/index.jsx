import React, { lazy, Suspense } from "react";
import Resources from "../../../config/Resources";
import { getIn, useFormik } from "formik";
import {
  bookNowInitialValues,
  getBookNowValidation,
} from "../../../helpers/Login";
import { useAppSnackbar } from "../../../config/Context/SnackbarContext";
import { useNavigate } from "react-router-dom";
import regex from "../../../helpers/Regex";
import CustomButton2 from "../../../shared/CustomButton2";

const CustomTextField = lazy(() => import("../../../shared/CustomTextField"));
const CustomDropdown = lazy(() => import("../../../shared/CustomDropdown"));

const BookNowForm = () => {
  const showSnackbar = useAppSnackbar();
  const navigate = useNavigate();

  const formik = useFormik({
    enableReinitialize: true,
    validateOnMount: true,
    validateOnChange: true,
    initialValues: bookNowInitialValues,
    validationSchema: getBookNowValidation,
    onSubmit: (value) => {
      const formData = {
        name: formik.values.name,
        email: formik.values.email,
        mobile: formik.values.mobile,
        city: formik.values.city,
        treatment: formik.values.treatment,
      };
      navigate("/book-now", { state: formData });
    },
  });

  const handleFormSubmit = () => {
    if (!formik.isValid) {
      showSnackbar("Please fill all the required fields", "error");
    } else {
      formik.handleSubmit();
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-3xl p-8 h-75">
      <div className="flex justify-center">
        <img
          src={Resources.images.NavBar.branding}
          alt="branding"
          style={{ width: "10rem" }}
        />
      </div>
      <div className="text-lg font-poppins text-kashmirBlue font-bold mb-6 text-center">
        Book Your Appointment Now!
      </div>
      <form className="w-full">
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
      </form>
      <CustomButton2 handleSubmit={handleFormSubmit} />
    </div>
  );
};

export default BookNowForm;
