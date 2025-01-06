import { useFormik } from "formik";
import * as yup from "yup";
import CustomHeader from "../../shared/CustomHeader";
import { lazy, Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";
import regex from "../../helpers/Regex";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import FadeInWrapper from "../../config/MotionFramer/FadeInWrapper";

const CustomTextField = lazy(() => import("../../shared/CustomTextField"));

function ChangePassword() {
  const navigate = useNavigate();
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(max-width: 1023px)");

  const passwordFormik = useFormik({
    enableReinitialize: true,
    validateOnMount: true,
    validateOnChange: true,
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
      phoneNumber: "",
      otp: "",
    },
    validationSchema: yup.object().shape({
      currentPassword: yup.string().required("Required"),
      newPassword: yup.string().required("Required"),
      confirmNewPassword: yup
        .string()
        .oneOf([yup.ref("newPassword")], "Passwords Must Match")
        .required("Required"),
      phoneNumber: yup
        .string()
        .matches(regex.mobileNumber, "Enter Valid Phone Number")
        .required("Required"),
      otp: yup
        .string()
        .matches(regex.numeric, "Enter Valid OTP")
        .required("Required"),
    }),
    onSubmit: (value) => {
      console.log("password change --", value);
    },
  });

  const sendOtp = () => {
    // API call to send OTP
    setIsOtpSent(true);
  };

  const changePassword = () => {
    // Function to validate OTP and change password
    window.alert("OTP Changed");
    navigate("/login");
  };

  return (
    <motion.div
      variants={FadeInWrapper("left", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`mt-3 ${isTablet ? "py-3" : ""}`}
    >
      <div className="mt-3 p-5">
        <CustomHeader
          heading="Password Management"
          subHeading={"Change Your Password Here!"}
        />

        <div
          className={`flex flex-col shadow rounded-3xl w-full md:!w-1/2 ${isMobile ? "p-4" : "p-5"}`}
        >
          <form onSubmit={passwordFormik.handleSubmit}>
            <Suspense fallback={<div />}>
              <CustomTextField
                textClassOverride="!text-kashmirBlue"
                type={showCurrentPassword ? "text" : "password"}
                placeholderClasses="placeholder:!opacity-30 !text-licorice"
                className="h-12 rounded-md !bg-transparent"
                placeholder="Enter"
                requiredStar
                labelToShow="Current Password"
                name="currentPassword"
                textFieldColorClass="shadow-insetLight"
                inputClassName="!bg-transparent"
                fieldWidth="w-full !mb-4"
                value={passwordFormik.values?.currentPassword}
                onChange={passwordFormik.handleChange}
                handleBlur={passwordFormik.handleBlur}
                error={passwordFormik.errors.currentPassword}
                touched={passwordFormik.touched.currentPassword}
                iconEnd={showCurrentPassword ? <FaEye /> : <FaEyeSlash />}
                iconOnClick={() => setShowCurrentPassword(!showCurrentPassword)}
              />
            </Suspense>
            <Suspense fallback={<div />}>
              <CustomTextField
                textClassOverride="!text-kashmirBlue"
                type={showNewPassword ? "text" : "password"}
                placeholderClasses="placeholder:!opacity-30 !text-licorice"
                className="h-12 rounded-md !bg-transparent"
                placeholder="Enter"
                requiredStar
                labelToShow="New Password"
                name="newPassword"
                textFieldColorClass="shadow-insetLight"
                inputClassName="!bg-transparent"
                fieldWidth="w-full !mb-4"
                value={passwordFormik.values?.newPassword}
                onChange={passwordFormik.handleChange}
                handleBlur={passwordFormik.handleBlur}
                error={passwordFormik.errors.newPassword}
                touched={passwordFormik.touched.newPassword}
                iconEnd={showNewPassword ? <FaEye /> : <FaEyeSlash />}
                iconOnClick={() => setShowNewPassword(!showNewPassword)}
              />
            </Suspense>
            <Suspense fallback={<div />}>
              <CustomTextField
                textClassOverride="!text-kashmirBlue"
                type={showConfirmNewPassword ? "text" : "password"}
                placeholderClasses="placeholder:!opacity-30 !text-licorice"
                className="h-12 rounded-md !bg-transparent"
                placeholder="Enter"
                requiredStar
                labelToShow="New Password"
                name="confirmNewPassword"
                textFieldColorClass="shadow-insetLight"
                inputClassName="!bg-transparent"
                fieldWidth="w-full !mb-4"
                value={passwordFormik.values?.confirmNewPassword}
                onChange={passwordFormik.handleChange}
                handleBlur={passwordFormik.handleBlur}
                error={passwordFormik.errors.confirmNewPassword}
                touched={passwordFormik.touched.confirmNewPassword}
                iconEnd={showConfirmNewPassword ? <FaEye /> : <FaEyeSlash />}
                iconOnClick={() =>
                  setShowConfirmNewPassword(!showConfirmNewPassword)
                }
              />
            </Suspense>
            <Suspense fallback={<div />}>
              <CustomTextField
                textClassOverride="!text-kashmirBlue"
                placeholderClasses="placeholder:!opacity-30 !text-licorice"
                className="h-12 rounded-md !bg-transparent"
                placeholder="Enter"
                requiredStar
                labelToShow="Phone Number"
                name="phoneNumber"
                maxLength={10}
                regex={regex.numeric}
                textFieldColorClass="shadow-insetLight"
                inputClassName="!bg-transparent"
                fieldWidth="w-full !mb-4"
                value={passwordFormik.values?.phoneNumber}
                onChange={passwordFormik.handleChange}
                handleBlur={passwordFormik.handleBlur}
                error={passwordFormik.errors.phoneNumber}
                touched={passwordFormik.touched.phoneNumber}
              />
            </Suspense>
            {!isOtpSent && (
              <button
                type="submit"
                className="w-full md:!w-1/2 bg-skyn text-white py-2 px-4 rounded-md hover:bg-skyn-dark focus:outline-none transition-all shadow-[3px_3px_0px_#313440] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                onClick={() => sendOtp()}
              >
                Send OTP
              </button>
            )}
            {isOtpSent && (
              <button
                type="submit"
                className="w-full md:!w-1/2 bg-skyn text-white py-2 px-4 rounded-md hover:bg-skyn-dark focus:outline-none transition-all shadow-[3px_3px_0px_#313440] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                onClick={() => changePassword()}
              >
                Change Password
              </button>
            )}
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default ChangePassword;
