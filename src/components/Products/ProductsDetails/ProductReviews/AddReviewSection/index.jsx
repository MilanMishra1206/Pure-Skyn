import React, { lazy, Suspense, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Rating } from "@mui/material";
import { useFormik } from "formik";

import { getAddReviewValidation } from "../../../../../helpers/Login";
import { useAppSnackbar } from "../../../../../config/Context/SnackbarContext";

const CustomTextField = lazy(
  () => import("../../../../../shared/CustomTextField")
);

function AddReviewSection() {
  const showSnackbar = useAppSnackbar();
  const [showAddReviewModal, setShowAddReviewModal] = useState(false);

  const reviewFormik = useFormik({
    enableReinitialize: true,
    validateOnMount: true,
    validateOnChange: true,
    initialValues: {
      fullName: "",
      email: "",
      rating: 5,
      description: "",
    },
    validationSchema: getAddReviewValidation,
    onSubmit: (value) => {
      setShowAddReviewModal(false);
      showSnackbar("Thanks for your valuable feedback!", "success");
      reviewFormik.resetForm();
    },
  });

  const handleSubmit = () => {
    if (!reviewFormik.isValid) {
      showSnackbar("Please enter all the required fields!", "error");
      return;
    } else {
      reviewFormik.handleSubmit();
    }
  };

  const handleCancel = () => {
    setShowAddReviewModal(false);
    reviewFormik.resetForm();
  };

  return (
    <div className="flex items-center justify-center">
      <button
        className="w-50 md:!w-full bg-skyn text-white py-2 px-4 rounded-md hover:bg-skyn-dark focus:outline-none focus:ring-2 focus:ring-skyn transition-all shadow-[3px_3px_0px_#313440] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
        onClick={() => setShowAddReviewModal(true)}
      >
        Write a Review
      </button>
      {showAddReviewModal && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="bg-slate-900/20 backdrop-blur p-4 fixed inset-0 z-50 md:grid place-items-center overflow-scroll"
          >
            <motion.div
              initial={{ scale: 0, rotate: "12.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "-12.5deg" }}
              transition={{ duration: 0.45 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-6 rounded-lg w-full max-w-lg"
            >
              <div className="text-skyn text-center font-poppins font-bold text-2xl mb-4">
                Review
              </div>
              <hr />
              <form className="w-full">
                <Suspense fallback={<div />}>
                  <CustomTextField
                    textClassOverride="!text-kashmirBlue"
                    placeholderClasses="placeholder:!opacity-30 !text-licorice"
                    className="h-12 rounded-md !bg-transparent"
                    placeholder="Enter"
                    requiredStar
                    labelToShow="Full Name"
                    name="fullName"
                    textFieldColorClass="shadow-insetLight"
                    inputClassName="!bg-transparent"
                    fieldWidth="w-full !mb-4"
                    value={reviewFormik.values?.fullName}
                    onChange={reviewFormik.handleChange}
                    handleBlur={reviewFormik.handleBlur}
                    error={reviewFormik.errors.fullName}
                    touched={reviewFormik.touched.fullName}
                  />
                </Suspense>
                <Suspense fallback={<div />}>
                  <CustomTextField
                    textClassOverride="!text-kashmirBlue"
                    placeholderClasses="placeholder:!opacity-30 !text-licorice"
                    className="h-12 rounded-md !bg-transparent"
                    placeholder="Enter"
                    requiredStar
                    labelToShow="Email Id"
                    name="email"
                    textFieldColorClass="shadow-insetLight"
                    inputClassName="!bg-transparent"
                    fieldWidth="w-full !mb-4"
                    value={reviewFormik.values?.email}
                    onChange={reviewFormik.handleChange}
                    handleBlur={reviewFormik.handleBlur}
                    error={reviewFormik.errors.email}
                    touched={reviewFormik.touched.email}
                  />
                </Suspense>
                <div className="flex flex-col gap-1 mb-2">
                  <label htmlFor="rating" className="text-kashmirBlue text-sm">
                    Rating<span className="text-bitterSweet">*</span>
                  </label>
                  <Rating
                    name="rating"
                    defaultValue={5}
                    precision={0.5}
                    value={reviewFormik.values?.rating}
                    onChange={reviewFormik.handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description<small className="text-bitterSweet">*</small>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    className={`mt-2 w-full rounded-lg border-gray-200 text-coal outline-none align-top shadow-xs sm:text-sm border p-2 ${
                      reviewFormik.touched.description &&
                      reviewFormik.errors.description
                        ? "!border-red-600"
                        : ""
                    }`}
                    rows="4"
                    placeholder="Write Your Review"
                    value={reviewFormik.values.description}
                    onChange={reviewFormik.handleChange}
                    onBlur={reviewFormik.handleBlur}
                  />
                  {reviewFormik.touched.description &&
                    reviewFormik.errors.description && (
                      <div className="text-bitterSweet text-xs">
                        {reviewFormik.errors.description}
                      </div>
                    )}
                </div>
              </form>
              <div className="flex flex-col md:!flex-row justify-end gap-4 mt-5">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 shadow-md"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="bg-skyn text-white px-4 py-2 rounded-md hover:bg-skyn-dark hover:opacity-80 shadow-md"
                  onClick={handleSubmit}
                >
                  Submit Review
                </button>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

export default AddReviewSection;
