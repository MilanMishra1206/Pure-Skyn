import React, { lazy, Suspense, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import CustomModal from "../../../shared/CustomModal";
import regex from "../../../helpers/Regex";
import Resources from "../../../config/Resources";
import FadeInWrapper from "../../../config/MotionFramer/FadeInWrapper";
import TermsAndConditions from "../TermsAndConditions";

const CustomTextField = lazy(() => import("../../../shared/CustomTextField"));

function SignUpForm({ formik, handleSubmit, mobileClass }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={FadeInWrapper("up", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`w-full max-w-md mx-auto bg-[#FFFFFF] md:shadow-lg md:rounded-3xl px-4 py-6 ${mobileClass}`}
    >
      <div className="flex justify-center p-4">
        <img
          src={Resources.images.Common.newLogoWhite}
          alt="branding"
          className="w-4/5 md:!w-3/5"
        />
      </div>
      <h2 className="font-extrabold font-poppins text-2xl mb-4 text-center text-kashmirBlue">
        Create an Account
      </h2>
      <form className="w-full">
        <div className="flex gap-2">
          <Suspense fallback={<div />}>
            <CustomTextField
              textClassOverride="!text-kashmirBlue"
              placeholderClasses="placeholder:!opacity-30 !text-licorice"
              className="h-12 rounded-md !bg-transparent"
              placeholder="Enter"
              requiredStar
              labelToShow="Full Name"
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
        </div>
        <div className="flex gap-2">
          <Suspense fallback={<div />}>
            <CustomTextField
              textClassOverride="!text-kashmirBlue"
              placeholderClasses="placeholder:!opacity-30 !text-licorice"
              className="h-12 rounded-md !bg-transparent"
              placeholder="Enter"
              requiredStar
              labelToShow="Contact Number"
              name="phone"
              maxLength={10}
              regex={regex.numeric}
              textFieldColorClass="shadow-insetLight"
              inputClassName="!bg-transparent"
              fieldWidth="w-full !mb-4"
              value={formik.values?.phone}
              onChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              error={formik.errors.phone}
              touched={formik.touched.phone}
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
              value={formik.values?.email}
              onChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              error={formik.errors.email}
              touched={formik.touched.email}
            />
          </Suspense>
        </div>
        <div className="flex gap-2">
          <Suspense fallback={<div />}>
            <CustomTextField
              textClassOverride="!text-kashmirBlue"
              type={showPassword ? "text" : "password"}
              placeholderClasses="placeholder:!opacity-30 !text-licorice"
              className="h-12 rounded-md !bg-transparent"
              placeholder="Enter"
              requiredStar
              labelToShow="Password"
              name="password"
              textFieldColorClass="shadow-insetLight"
              inputClassName="!bg-transparent"
              fieldWidth="w-full !mb-4"
              value={formik.values?.password}
              onChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              error={formik.errors.password}
              touched={formik.touched.password}
              iconEnd={showPassword ? <FaEye /> : <FaEyeSlash />}
              iconOnClick={() => setShowPassword(!showPassword)}
            />
          </Suspense>
          <Suspense fallback={<div />}>
            <CustomTextField
              textClassOverride="!text-kashmirBlue"
              type={showConfirmPassword ? "text" : "password"}
              placeholderClasses="placeholder:!opacity-30 !text-licorice"
              className="h-12 rounded-md !bg-transparent"
              placeholder="Enter"
              requiredStar
              labelToShow="Confirm Password"
              name="confirmPassword"
              textFieldColorClass="shadow-insetLight"
              inputClassName="!bg-transparent"
              fieldWidth="w-full !mb-4"
              value={formik.values?.confirmPassword}
              onChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              error={formik.errors.confirmPassword}
              touched={formik.touched.confirmPassword}
              iconEnd={showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
              iconOnClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          </Suspense>
        </div>
        <div className="mt-4">
          <p>
            By signing-up you agree to our{" "}
            <span
              onClick={() => setIsOpen(true)}
              className="text-skyn hover:opacity-80 cursor-pointer underline"
            >
              Terms & Conditions
            </span>
          </p>
        </div>
      </form>
      <button
        type="button"
        className="w-full bg-skyn text-white mt-4 py-2 px-4 rounded-md hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-skyn shadow-lg"
        onClick={handleSubmit}
      >
        Sign Up
      </button>
      <div className="mt-4 text-center">
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-skyn hover:opacity-80 underline">
            Sign-In
          </Link>
        </p>
      </div>
      <div className="mt-4 text-center">
        <p>
          Go to{" "}
          <Link to="/" className="underline text-skyn hover:!opacity-80">
            Dashboard
          </Link>
        </p>
      </div>
      {isOpen && (
        <CustomModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          buttonText={"I Agree"}
          classes="!px-3 !text-justify"
        >
          <TermsAndConditions />
        </CustomModal>
      )}
    </motion.div>
  );
}

export default SignUpForm;
