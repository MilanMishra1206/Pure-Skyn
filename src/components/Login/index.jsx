import React from "react";
import Resources from "../../config/Resources";
import { useFormik } from "formik";
import { getLoginValidation, loginInitialValues } from "../../helpers/Login";
import LoginForm from "./LoginForm";
import { useAppSnackbar } from "../../config/Context/SnackbarContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const showSnackbar = useAppSnackbar();
  const navigate = useNavigate();

  const formik = useFormik({
    enableReinitialize: true,
    validateOnMount: true,
    validateOnChange: true,
    initialValues: loginInitialValues,
    validationSchema: getLoginValidation,
    onSubmit: (value) => {
      console.log("values", value);
      navigate("/");
      showSnackbar("Logged-in successfully!", "success");
    },
  });

  const handleSubmit = () => {
    if (!formik.isValid) {
      showSnackbar("Please fill all the required details!", "error");
    } else {
      formik.handleSubmit();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen relative">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center hidden md:block"
        style={{
          backgroundImage: `url(${Resources.images.Login.loginBg})`,
        }}
      />
      <div className="w-full h-full flex flex-col md:flex-row justify-end items-center z-10 relative">
        <div className="hidden md:flex w-full md:w-1/2 p-8 flex-col justify-center items-center">
          <LoginForm formik={formik} handleSubmit={handleSubmit} />
        </div>
      </div>
      <div className="md:hidden w-full h-full absolute flex">
        <LoginForm
          formik={formik}
          handleSubmit={handleSubmit}
          mobileClass="flex flex-col justify-center items-center"
        />
      </div>
    </div>
  );
}

export default LoginPage;
