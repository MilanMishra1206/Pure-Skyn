import React, { lazy, Suspense, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import Resources from "../../../config/Resources";
import FadeInWrapper from "../../../config/MotionFramer/FadeInWrapper";
import { IoIosCloseCircle } from "react-icons/io";

const CustomTextField = lazy(() => import("../../../shared/CustomTextField"));

function LoginForm({
  formik,
  handleSubmit,
  mobileClass,
  isModal = false,
  setOpenLoginModal,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <motion.div
      variants={FadeInWrapper("up", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`w-full max-w-md mx-auto bg-[#FAFAFA] md:shadow-lg md:rounded-3xl p-8 ${mobileClass}`}
    >
      {isModal && (
        <div className="flex justify-end">
          <button
            className="text-2xl text-coal"
            onClick={() => setOpenLoginModal(false)}
          >
            <IoIosCloseCircle size={"2rem"} />
          </button>
        </div>
      )}
      <div className="flex justify-center">
        <img
          src={Resources.images.NavBar.logo1}
          alt="branding"
          style={{ width: "10rem" }}
        />
      </div>
      <div className="text-3xl font-poppins text-kashmirBlue font-extrabold mb-6 text-center">
        LOGIN
      </div>
      <form className="w-full">
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
      </form>
      <div className="">
        <p>
          <Link
            to="/change-password"
            className="underline text-skyn hover:!opacity-80 text-sm"
          >
            Forgot Password?
          </Link>
        </p>
      </div>
      <button
        type="button"
        onClick={handleSubmit}
        className="mt-4 w-full bg-skyn text-white py-2 px-4 rounded-md hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-skyn shadow-lg"
      >
        Login
      </button>
      <div className="mt-4 text-center">
        <p>
          Don't have an account?{" "}
          <Link to="/sign-up" className="underline text-skyn hover:!opacity-80">
            Sign up
          </Link>
        </p>
      </div>
      {!isModal && (
        <div className="mt-4 text-center">
          <p>
            Go to{" "}
            <Link to="/" className="underline text-skyn hover:!opacity-80">
              Dashboard
            </Link>
          </p>
        </div>
      )}
    </motion.div>
  );
}

export default LoginForm;
