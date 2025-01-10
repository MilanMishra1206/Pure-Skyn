import React, { lazy, Suspense } from "react";
import { useFormik } from "formik";
import { signUpInitialValue, getSignUpValidation } from "../../helpers/Login";
import SignUpForm from "./SignupForm";
import Resources from "../../config/Resources";
import { useAppSnackbar } from "../../config/Context/SnackbarContext";
import { useMutation } from "react-query";
import { registerUser } from "../../services/LoginAndRegister";

const CustomLoader = lazy(() => import("../../shared/CustomLoader"));

function SignUpPage() {
  const showSnackbar = useAppSnackbar();

  const { mutate: signupUser, isLoading } = useMutation(registerUser, {
    onSuccess(res) {
      showSnackbar(res.message, "success");
    },
    onError(err) {
      showSnackbar(err.message, "error");
    },
  });

  const formik = useFormik({
    enableReinitialize: true,
    validateOnMount: true,
    validateOnChange: true,
    initialValues: signUpInitialValue,
    validationSchema: getSignUpValidation,
    onSubmit: (value) => {
      signupUser({
        firstName: value.firstName,
        lastName: value.lastName,
        email: value.email,
        password: value.password,
        email: value.email,
      });
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
      <Suspense>
        <CustomLoader open={isLoading} />
      </Suspense>
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center hidden md:block"
        style={{
          backgroundImage: `url(${Resources.images.Login.signupBg})`,
        }}
      />
      <div className="w-full h-full flex flex-col md:flex-row justify-end items-center z-10 relative">
        <div className="hidden md:flex w-full md:w-1/2 p-8 flex-col justify-center items-center">
          <SignUpForm formik={formik} handleSubmit={handleSubmit} />
        </div>
      </div>
      <div className="md:hidden w-full h-full absolute">
        <SignUpForm
          formik={formik}
          handleSubmit={handleSubmit}
          mobileClass="flex flex-col justify-center items-center"
        />
      </div>
    </div>
  );
}

export default SignUpPage;
