import React, { lazy, Suspense } from "react";
import { useFormik } from "formik";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUpInitialValue, getSignUpValidation } from "../../helpers/Login";
import SignUpForm from "./SignupForm";
import Resources from "../../config/Resources";
import { useAppSnackbar } from "../../config/Context/SnackbarContext";
import { registerUser } from "../../services/LoginAndRegister";
import { setUserProfile } from "../../redux/Actions";

const CustomLoader = lazy(() => import("../../shared/CustomLoader"));

function SignUpPage() {
  const navigate = useNavigate();
  const showSnackbar = useAppSnackbar();
  const dispatch = useDispatch();

  const { mutate: signupUser, isLoading } = useMutation(registerUser, {
    onSuccess(res) {
      if (res?.status === "SUCCESS") {
        showSnackbar(res?.message, "success");
        const data = res?.data;
        sessionStorage.setItem("token", data?.token);
        dispatch(
          setUserProfile({
            userId: data?.id,
            email: data?.email,
            name: data?.name,
            phone: data?.phone,
          })
        );
        navigate("/");
      } else {
        showSnackbar(`${res?.message}. Please try again!`, "error");
      }
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
        name: value.name,
        email: value.email,
        password: value.password,
        phone: value.phone,
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
    <div className="md:flex justify-center items-center min-h-screen relative bg-[#FAFAFA]">
      <Suspense>
        <CustomLoader open={isLoading} />
      </Suspense>
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center hidden md:block"
        style={{
          backgroundImage: `url(${Resources.images.Login.signupBg})`,
        }}
      />
      <div className="w-full h-full flex flex-col md:flex-row justify-center lg:!justify-end items-center z-10 relative">
        <div className="hidden md:flex w-full md:w-1/2 flex-col justify-center items-center">
          <SignUpForm formik={formik} handleSubmit={handleSubmit} />
        </div>
      </div>
      <div className="flex md:hidden w-full h-full absolute">
        <SignUpForm
          formik={formik}
          handleSubmit={handleSubmit}
          mobileClass="flex flex-col items-center"
        />
      </div>
    </div>
  );
}

export default SignUpPage;
