import React, { lazy, Suspense, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Box, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FadedLineBreak from "../../../../shared/CustomHrTag";
import { useFormik } from "formik";
import { getAddReviewValidation } from "../../../../helpers/Login";
import { useAppSnackbar } from "../../../../config/Context/SnackbarContext";
import { CustomRevealHeading } from "../../../../shared/CustomRevealHeading";

const CustomTextField = lazy(
  () => import("../../../../shared/CustomTextField")
);

export const ProductReviews = ({ reviewContent }) => {
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const ratingArr = reviewContent.map((item) => item.rating);
    const sum = ratingArr.reduce((acc, num) => acc + num, 0);
    const average = sum / ratingArr.length;
    setAverageRating(average);
  }, [reviewContent]);

  return (
    <div className="py-12 text-zinc-50 cursor-pointer">
      <div className="flex flex-col md:!flex-row md:gap-2 justify-center mb-4">
        <CustomRevealHeading heading="Customer" />
        <CustomRevealHeading heading="Reviews" />
      </div>
      <div className="flex flex-col md:!flex-row justify-between items-center mx-auto max-w-4xl">
        <div className="flex items-center gap-2">
          <span className="text-5xl text-skyn font-bold">
            {averageRating.toFixed(1)}
          </span>
          <div className="flex flex-col gap-1">
            <Box
              sx={{
                width: 200,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="text-feedback"
                value={+averageRating.toFixed(1)}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
            </Box>
            <p className="text-coal">Based on {reviewContent.length} reviews</p>
          </div>
        </div>
        <AddReviewBlock />
      </div>
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense md:!grid-cols-12 gap-4"
      >
        <ReviewBlock reviewContent={reviewContent} />
      </motion.div>
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={`col-span-4 p-6 font-poppins ${className}`}
      {...rest}
    />
  );
};

const ReviewBlock = ({ reviewContent }) => (
  <>
    {reviewContent?.map((item) => (
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-coal md:col-span-4 rounded-lg border"
        key={item.id}
      >
        <p className="font-bold">{item.name}</p>
        <p className="text-aliceBlue-1 text-sm">{item.date}</p>
        <Box
          sx={{
            width: 200,
            display: "flex",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <Rating
            name="text-feedback"
            value={item.rating}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          <Box sx={{ ml: 2 }}>{item.rating}</Box>
        </Box>
        <p className="grid place-content-center text-sm !text-white mt-4">
          {item.review}
        </p>
      </Block>
    ))}
  </>
);

const AddReviewBlock = () => {
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
      console.log("Reviews", value);
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
    <Block className="col-span-12 md:col-span-9">
      <button
        className="w-full bg-skyn text-white py-2 px-4 rounded-md hover:bg-skyn-dark focus:outline-none focus:ring-2 focus:ring-skyn transition-all shadow-[3px_3px_0px_#313440] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
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
              <FadedLineBreak />
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
                <Suspense fallback={<div />}>
                  <CustomTextField
                    textClassOverride="!text-kashmirBlue"
                    placeholderClasses="placeholder:!opacity-30 !text-licorice"
                    className="h-12 rounded-md !bg-transparent"
                    placeholder="Enter"
                    requiredStar
                    labelToShow="Description"
                    name="description"
                    textFieldColorClass="shadow-insetLight"
                    inputClassName="!bg-transparent"
                    fieldWidth="w-full !mb-4"
                    value={reviewFormik.values?.description}
                    onChange={reviewFormik.handleChange}
                    handleBlur={reviewFormik.handleBlur}
                    error={reviewFormik.errors.description}
                    touched={reviewFormik.touched.description}
                    multiline
                  />
                </Suspense>
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
    </Block>
  );
};
