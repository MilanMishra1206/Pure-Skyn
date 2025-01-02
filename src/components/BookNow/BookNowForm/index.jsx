import React from "react";
import Resources from "../../../config/Resources";
import { useFormik } from "formik";
import {
  bookNowInitialValues,
  getBookNowValidation,
} from "../../../helpers/Login";
import { useAppSnackbar } from "../../../config/Context/SnackbarContext";
import { useNavigate } from "react-router-dom";

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
      navigate(`/book-now?treatment=${value.treatment}`);
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
    <div className="w-full max-w-sm mx-auto bg-white shadow-lg rounded-3xl p-8 h-75">
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
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-kashmirBlue"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-skyn"
            placeholder="Enter your name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.errors.name && formik.touched.name && (
            <p className="mt-1 ml-1 text-xs text-bitterSweet">
              {formik.errors.name}*
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-kashmirBlue"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-skyn"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.errors.email && formik.touched.email && (
            <p className="mt-1 ml-1 text-xs text-bitterSweet">
              {formik.errors.email}*
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="mobile"
            className="block text-sm font-medium text-kashmirBlue"
          >
            Mobile Number
          </label>
          <input
            id="mobile"
            name="mobile"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-skyn"
            placeholder="Enter your mobile"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            maxLength={10}
            required
          />
          {formik.errors.mobile && formik.touched.mobile && (
            <p className="mt-1 ml-1 text-xs text-bitterSweet">
              {formik.errors.mobile}*
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-kashmirBlue"
          >
            Select City
          </label>
          <select
            id="city"
            name="city"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-skyn"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          >
            <option value="">Select a city</option>
            <option value="Gurgaon">Gurgaon</option>
            <option value="South Delhi">South Delhi</option>
          </select>
          {formik.errors.city && formik.touched.city && (
            <p className="mt-1 ml-1 text-xs text-bitterSweet">
              {formik.errors.city}*
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="treatment"
            className="block text-sm font-medium text-kashmirBlue"
          >
            Select Treatment
          </label>
          <select
            id="treatment"
            name="treatment"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-skyn"
            value={formik.values.treatment}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          >
            <option value="" className="text-kashmirBlue">
              Select a treatment
            </option>
            <option value="Laser Hair Removal">Laser Hair Removal</option>
            <option value="Oxy Hydra Facial">Oxy Hydra Facial</option>
            <option value="RF Skin Tightening">RF Skin Tightening</option>
            <option value="Dermafrac Infusion">
              Dermafrac Infusion Facial
            </option>
            <option value="OxygeneoFacial">Oxygeneo</option>
          </select>
          {formik.errors.treatment && formik.touched.treatment && (
            <p className="mt-1 ml-1 text-xs text-bitterSweet">
              {formik.errors.treatment}*
            </p>
          )}
        </div>
      </form>
      <button
        className="w-full bg-skyn text-white py-2 px-4 rounded-md hover:bg-skyn-dark focus:outline-none focus:ring-2 focus:ring-skyn transition-all shadow-[3px_3px_0px_#313440] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
        onClick={() => handleFormSubmit()}
      >
        Book Now
      </button>
    </div>
  );
};

export default BookNowForm;
