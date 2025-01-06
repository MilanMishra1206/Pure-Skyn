import React, { lazy, Suspense, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import CustomModal from "../../../shared/CustomModal";
import regex from "../../../helpers/Regex";
import Resources from "../../../config/Resources";
import { motion } from "framer-motion";
import FadeInWrapper from "../../../config/MotionFramer/FadeInWrapper";

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
      className={`w-full max-w-md mx-auto bg-[#FAFAFA] shadow-lg rounded-3xl p-8 ${mobileClass}`}
    >
      <div className="flex justify-center mb-3">
        <img
          src={Resources.images.NavBar.logo1}
          alt="branding"
          style={{ width: "10rem" }}
        />
      </div>
      <h2 className="font-extrabold font-poppins mb-6 text-center text-kashmirBlue text-3xl">
        Create an Account
      </h2>
      <form className="w-full">
        <Suspense fallback={<div />}>
          <CustomTextField
            textClassOverride="!text-kashmirBlue"
            placeholderClasses="placeholder:!opacity-30 !text-licorice"
            className="h-12 rounded-md !bg-transparent"
            placeholder="Enter"
            requiredStar
            labelToShow="First Name"
            name="firstName"
            textFieldColorClass="shadow-insetLight"
            inputClassName="!bg-transparent"
            fieldWidth="w-full !mb-4"
            value={formik.values?.firstName}
            onChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            error={formik.errors.firstName}
            touched={formik.touched.firstName}
          />
        </Suspense>
        <Suspense fallback={<div />}>
          <CustomTextField
            textClassOverride="!text-kashmirBlue"
            placeholderClasses="placeholder:!opacity-30 !text-licorice"
            className="h-12 rounded-md !bg-transparent"
            placeholder="Enter"
            requiredStar
            labelToShow="Last Name"
            name="lastName"
            textFieldColorClass="shadow-insetLight"
            inputClassName="!bg-transparent"
            fieldWidth="w-full !mb-4"
            value={formik.values?.lastName}
            onChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            error={formik.errors.lastName}
            touched={formik.touched.lastName}
          />
        </Suspense>
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
            Login
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
        <CustomModal isOpen={isOpen} setIsOpen={setIsOpen} buttonText={"Okay"}>
          <div className="mt-5">
            <h3 className="text-coal text-center font-bold md:text-1xl text-md font-poppins">
              Terms & Conditions
            </h3>
            <div className="pt-3 ml-4 text-coal font-poppins text-justify">
              <div>
                For the purpose of procuring business for Pure Skyn, Pure Skyn
                may be required to furnish confidential information, materials,
                documents and policies regarding their various products which
                inter- alia may contain innovative products and further Pure
                Skyn may also be required to furnish various details regarding
                marketing, pricing etc. in respect of such products. Considering
                the confidentiality to be maintained the Agent has expressly
                agreed to maintain complete confidentiality of all such
                confidential information, documents, policies, etc. as may be
                submitted to them by Pure Skyn.
              </div>
              <div className="mt-3">
                The term "Confidential Information" does not include information
                which
                <ol className="!pl-0 mt-2 mb-2">
                  <li>i. is already in the Agent's possession or</li>
                  <li>
                    ii. becomes generally available to the public other than as
                    a result of a disclosure by Agent or Agent's officers,
                    employees, Agents, advisors, or representatives of such
                    advisors or
                  </li>
                  <li>
                    iii. becomes available to Agent on a non-confidential basis
                    from a source other than Pure Skyn provided such source is
                    not known by Agent to be bound by a confidentiality
                    agreement with or other obligation of secrecy to Pure Skyn
                    or another party.
                  </li>
                  <li>
                    ii. becomes generally available to the public other than as
                    a result of a disclosure by Agent or Agent's officers,
                    employees, Agents, advisors, or representatives of such
                    advisors or
                  </li>
                  <li>
                    iii. becomes available to Agent on a non-confidential basis
                    from a source other than Pure Skyn provided such source is
                    not known by Agent to be bound by a confidentiality
                    agreement with or other obligation of secrecy to Pure Skyn
                    or another party.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </CustomModal>
      )}
    </motion.div>
  );
}

export default SignUpForm;
