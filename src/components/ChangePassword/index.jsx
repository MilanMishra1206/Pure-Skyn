import { useFormik } from "formik";
import * as yup from "yup";
import CustomHeader from "../../shared/CustomHeader";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import regex from "../../helpers/Regex";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useMediaQuery } from "@mui/material";

function ChangePassword() {
  const navigate = useNavigate();
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
  const isMobile = useMediaQuery("(max-width: 767px)");

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
    <div className={`mt-5 font-poppins ${isMobile ? "p-2": "p-5"}`}>
      <div className="mt-3 p-5">
        <CustomHeader
          heading="Password Management"
          subHeading={"Change Your Password Here!"}
        />
      </div>
      <div className={`flex flex-col shadow rounded-3xl w-full md:!w-55/100 ${isMobile ? "p-4": "p-5"}`}>
        <form onSubmit={passwordFormik.handleSubmit}>
          <div className="mb-4 relative">
            <label
              htmlFor="currentPassword"
              className="block text-sm font-medium text-kashmirBlue"
            >
              Current Password
            </label>
            <div className="flex justify-center items-center">
              <input
                type={showCurrentPassword ? "text" : "password"}
                id="currentPassword"
                name="currentPassword"
                value={passwordFormik.values.currentPassword}
                onChange={passwordFormik.handleChange}
                onBlur={passwordFormik.handleBlur}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-skyn"
                placeholder="Enter"
                required
              />
              <div
                className="absolute right-3 cursor-pointer"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              >
                {showCurrentPassword ? (
                  <FaEyeSlash size={20} className="text-gray-500" />
                ) : (
                  <FaEye size={20} className="text-gray-500" />
                )}
              </div>
            </div>
            {passwordFormik.errors.currentPassword &&
              passwordFormik.touched.currentPassword && (
                <p className="mt-1 ml-1 text-xs text-bitterSweet">
                  {passwordFormik.errors.currentPassword}*
                </p>
              )}
          </div>

          <div className="mb-4 relative">
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-kashmirBlue"
            >
              New Password
            </label>
            <div className="flex justify-center items-center">
              <input
                type={showNewPassword ? "text" : "password"}
                id="newPassword"
                name="newPassword"
                value={passwordFormik.values.newPassword}
                onChange={passwordFormik.handleChange}
                onBlur={passwordFormik.handleBlur}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-skyn"
                placeholder="Enter"
                required
              />
              <div
                className="absolute right-3 cursor-pointer"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? (
                  <FaEyeSlash size={20} className="text-gray-500" />
                ) : (
                  <FaEye size={20} className="text-gray-500" />
                )}
              </div>
            </div>
            {passwordFormik.errors.newPassword &&
              passwordFormik.touched.newPassword && (
                <p className="mt-1 ml-1 text-xs text-bitterSweet">
                  {passwordFormik.errors.newPassword}*
                </p>
              )}
          </div>

          <div className="mb-4 relative">
            <label
              htmlFor="confirmNewPassword"
              className="block text-sm font-medium text-kashmirBlue"
            >
              Confirm New Password
            </label>
            <div className="flex justify-center items-center">
              <input
                type={showConfirmNewPassword ? "text" : "password"}
                id="confirmNewPassword"
                name="confirmNewPassword"
                value={passwordFormik.values.confirmNewPassword}
                onChange={passwordFormik.handleChange}
                onBlur={passwordFormik.handleBlur}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-skyn"
                placeholder="Enter"
                required
              />
              <div
                className="absolute right-3 cursor-pointer"
                onClick={() =>
                  setShowConfirmNewPassword(!showConfirmNewPassword)
                }
              >
                {showConfirmNewPassword ? (
                  <FaEyeSlash size={20} className="text-gray-500" />
                ) : (
                  <FaEye size={20} className="text-gray-500" />
                )}
              </div>
            </div>
            {passwordFormik.errors.confirmNewPassword &&
              passwordFormik.touched.confirmNewPassword && (
                <p className="mt-1 ml-1 text-xs text-bitterSweet">
                  {passwordFormik.errors.confirmNewPassword}*
                </p>
              )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-kashmirBlue"
            >
              Enter Your Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              maxLength={10}
              value={passwordFormik.values.phoneNumber}
              onChange={passwordFormik.handleChange}
              onBlur={passwordFormik.handleBlur}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-skyn"
              placeholder="Enter"
              required
            />
            {passwordFormik.errors.phoneNumber &&
              passwordFormik.touched.phoneNumber && (
                <p className="mt-1 ml-1 text-xs text-bitterSweet">
                  {passwordFormik.errors.phoneNumber}*
                </p>
              )}
          </div>

          {!isOtpSent && (
            <button
              type="submit"
              className="w-full lg:!w-2/4 mt-3 bg-skyn text-white py-2 px-4 rounded-md hover:bg-skyn-dark focus:outline-none focus:ring-2 focus:ring-skyn"
              onClick={() => sendOtp()}
            >
              Send OTP
            </button>
          )}
          {isOtpSent && (
            <button
              type="submit"
              className="w-full lg:!w-2/4 mt-3 bg-skyn text-white py-2 px-4 rounded-md hover:bg-skyn-dark focus:outline-none focus:ring-
              focus:ring-2 focus:ring-skyn"
              onClick={() => changePassword()}
            >
              Change Password
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
