import React from "react";
import { useFormik } from "formik";
import { signUpInitialValue, getSignUpValidation } from "../../helpers/Login";
import SignUpForm from "./SignupForm";
import Resources from "../../config/Resources";
import { useAppSnackbar } from "../../config/Context/SnackbarContext";

function SignUpPage() {
  const showSnackbar = useAppSnackbar();
  const formik = useFormik({
    enableReinitialize: true,
    validateOnMount: true,
    validateOnChange: true,
    initialValues: signUpInitialValue,
    validationSchema: getSignUpValidation,
    onSubmit: (value) => {
      console.log(value);
      showSnackbar("Successfully Signed-up!", "success");
    },
  });

  const handleSubmit = () => {
    if (!formik.isValid) {
      showSnackbar("Please enter all the required fields!", "error");
      return;
    } else {
      formik.handleSubmit();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen relative">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center hidden md:block"
        style={{
          backgroundImage: `url(${Resources.images.Login.signupBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="w-full h-full flex flex-col md:flex-row justify-end items-center z-10 relative">
        <div className="hidden md:flex w-full md:w-1/2 p-8 flex-col justify-center items-center">
          <SignUpForm formik={formik} handleSubmit={handleSubmit} />
        </div>
      </div>
      <div
        className="md:hidden w-full h-full bg-cover bg-center absolute top-0 left-0 mt-5"
        style={{
          backgroundImage: `url(${Resources.images.Login.mobileBg})`,
        }}
      >
        <SignUpForm formik={formik} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default SignUpPage;
