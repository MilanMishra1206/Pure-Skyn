import React, { lazy, Suspense } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import Resources from "../../config/Resources";
import { getLoginValidation, loginInitialValues } from "../../helpers/Login";
import LoginForm from "./LoginForm";
import { useAppSnackbar } from "../../config/Context/SnackbarContext";
import { loginUser } from "../../services/LoginAndRegister";
import { useDispatch } from "react-redux";
import { setUserProfile } from "../../redux/Actions";

const CustomLoader = lazy(() => import("../../shared/CustomLoader"));

function LoginPage() {
  const showSnackbar = useAppSnackbar();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mutate: loginUsers, isLoading } = useMutation(loginUser, {
    onSuccess(res) {
      if (res?.status === "SUCCESS") {
        const data = res?.data;
        showSnackbar(res?.message, "success");
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
    onError(error) {
      showSnackbar(error, "error");
    },
  });

  const formik = useFormik({
    enableReinitialize: true,
    validateOnMount: true,
    validateOnChange: true,
    initialValues: loginInitialValues,
    validationSchema: getLoginValidation,
    onSubmit: (value) => {
      loginUsers({
        email: value.email,
        password: value.password,
      });
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
    <div className="md:flex md:justify-center md:items-center min-h-screen relative bg-[#FAFAFA]">
      <Suspense>
        <CustomLoader open={isLoading} />
      </Suspense>
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
          mobileClass="flex flex-col items-center"
        />
      </div>
    </div>
  );
}

export default LoginPage;
