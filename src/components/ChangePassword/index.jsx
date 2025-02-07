import { useFormik } from "formik";
import * as yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { lazy, Suspense, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import CustomHeader from "../../shared/CustomHeader";
import FadeInWrapper from "../../config/MotionFramer/FadeInWrapper";
import {
  changePassword,
  requestChangePassword,
} from "../../services/LoginAndRegister";
import { useAppSnackbar } from "../../config/Context/SnackbarContext";

const CustomTextField = lazy(() => import("../../shared/CustomTextField"));
const CustomLoader = lazy(() => import("../../shared/CustomLoader"));

function ChangePassword() {
  const showSnackbar = useAppSnackbar();
  const navigate = useNavigate();
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const token = query.get("token");

  const [isLinkSent, setIsLinkSent] = useState(false);
  const [email, setEmail] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(max-width: 1023px)");

  const { mutate: reqPasswordChange, isSending } = useMutation(
    requestChangePassword,
    {
      onSuccess(res) {
        if (res?.status === "ERROR") {
          showSnackbar(`${res?.message}. Please try again!`, "error");
        } else {
          setIsLinkSent(true);
          showSnackbar(`${res?.message}`, "success");
        }
      },
      onError(error) {
        showSnackbar(error, "error");
      },
    }
  );

  const { mutate: changeUserPassword, isLoading } = useMutation(
    changePassword,
    {
      onSuccess(res) {
        if (res?.status === "ERROR") {
          showSnackbar(`${res?.message}. Please try again!`, "error");
        } else {
          showSnackbar(res?.message, "success");
          navigate("/logout");
        }
      },
      onError(error) {
        showSnackbar(error, "error");
      },
    }
  );

  const passwordFormik = useFormik({
    enableReinitialize: true,
    validateOnMount: true,
    validateOnChange: true,
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema: yup.object().shape({
      oldPassword: yup.string().required("Required"),
      newPassword: yup.string().required("Required"),
      confirmNewPassword: yup
        .string()
        .oneOf([yup.ref("newPassword")], "Passwords Must Match")
        .required("Required"),
    }),
    onSubmit: (value) => {
      changeUserPassword({
        token,
        oldPassword: value.oldPassword,
        newPassword: value.newPassword,
      });
    },
  });

  const requestPasswordChange = () => {
    reqPasswordChange({
      email,
    });
  };

  return (
    <motion.div
      variants={FadeInWrapper("left", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`mt-3 ${isTablet ? "py-3" : ""}`}
    >
      <Suspense fallback={<div />}>
        <CustomLoader open={isSending || isLoading} />
      </Suspense>
      <div className="mt-3 p-5">
        <CustomHeader
          heading="Password Management"
          subHeading={"Change Your Password Here!"}
        />
        <div
          className={`flex flex-col shadow rounded-3xl w-full md:!w-1/2 ${isMobile ? "p-4" : "p-5"}`}
        >
          {!isLinkSent && token && (
            <form>
              <Suspense fallback={<div />}>
                <CustomTextField
                  textClassOverride="!text-kashmirBlue"
                  type={showCurrentPassword ? "text" : "password"}
                  placeholderClasses="placeholder:!opacity-30 !text-licorice"
                  className="h-12 rounded-md !bg-transparent"
                  placeholder="Enter"
                  requiredStar
                  labelToShow="Current Password"
                  name="oldPassword"
                  textFieldColorClass="shadow-insetLight"
                  inputClassName="!bg-transparent"
                  fieldWidth="w-full !mb-4"
                  value={passwordFormik.values?.oldPassword}
                  onChange={passwordFormik.handleChange}
                  handleBlur={passwordFormik.handleBlur}
                  error={passwordFormik.errors.oldPassword}
                  touched={passwordFormik.touched.oldPassword}
                  iconEnd={showCurrentPassword ? <FaEye /> : <FaEyeSlash />}
                  iconOnClick={() =>
                    setShowCurrentPassword(!showCurrentPassword)
                  }
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
                  labelToShow="Confirm New Password"
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
              <button
                type="submit"
                className="w-full xl:!w-1/2 bg-skyn text-white py-2 px-4 rounded-md hover:bg-skyn-dark focus:outline-none transition-all shadow-[3px_3px_0px_#313440] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                onClick={() => passwordFormik.handleSubmit()}
              >
                Change Password
              </button>
            </form>
          )}
          {!isLinkSent && !token && (
            <>
              <Suspense fallback={<div />}>
                <CustomTextField
                  textClassOverride="!text-kashmirBlue"
                  placeholderClasses="placeholder:!opacity-30 !text-licorice"
                  className="h-12 rounded-md !bg-transparent"
                  placeholder="Enter"
                  requiredStar
                  labelToShow="Enter Your Email"
                  name="email"
                  textFieldColorClass="shadow-insetLight"
                  inputClassName="!bg-transparent"
                  fieldWidth="w-full !mb-4"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Suspense>
              <button
                type="submit"
                className="w-full xl:!w-1/2 mt-4 bg-skyn text-white py-2 px-4 rounded-md hover:bg-skyn-dark focus:outline-none transition-all shadow-[3px_3px_0px_#313440] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                onClick={requestPasswordChange}
              >
                Request Password Change
              </button>
            </>
          )}
          {isLinkSent && !token && (
            <>
              <p className="font-bold text-center text-emerald-900 text-xl">
                Reset link is sent to your email. Please check.
              </p>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ChangePassword;
