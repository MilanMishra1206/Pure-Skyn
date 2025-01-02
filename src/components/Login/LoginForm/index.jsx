import React, { lazy, Suspense, useState } from "react";
import { Link } from "react-router-dom";
import Resources from "../../../config/Resources";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const CustomTextField = lazy(() => import("../../../shared/CustomTextField"));

function LoginForm({ formik, handleSubmit }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto bg-[#FAFAFA] shadow-lg rounded-3xl p-8">
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
            name="emailAddress"
            textFieldColorClass="shadow-insetLight"
            inputClassName="!bg-transparent"
            fieldWidth="w-full !mb-4"
            value={formik.values?.emailAddress}
            onChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            error={formik.errors.emailAddress}
            touched={formik.touched.emailAddress}
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
      <button
        type="button"
        onClick={handleSubmit}
        className="mt-4 w-full bg-skyn text-white py-2 px-4 rounded-md hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-skyn"
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
      <div className="mt-4 text-center">
        <p>
          Go to{" "}
          <Link to="/" className="underline text-skyn hover:!opacity-80">
            Dashboard
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
