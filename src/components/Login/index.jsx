import React, { lazy, Suspense } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import Resources from "../../config/Resources";
import { getLoginValidation, loginInitialValues } from "../../helpers/Login";
import LoginForm from "./LoginForm";
import { useAppSnackbar } from "../../config/Context/SnackbarContext";
import { loginAdmin, loginUser } from "../../services/LoginAndRegister";
import {
  setServicesOnLogin,
  setUserAddress,
  setUserProfile,
} from "../../redux/Actions";
import { getUserAddress } from "../../services/Users";
import { getServiceCart } from "../../services/ServiceCart";

const CustomLoader = lazy(() => import("../../shared/CustomLoader"));

function LoginPage({ isAdminPage = false }) {
  const showSnackbar = useAppSnackbar();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mutate: getUserAddresses } = useMutation(getUserAddress, {
    onSuccess(res) {
      if (res?.status === "SUCCESS") {
        dispatch(
          setUserAddress({
            addresses: res?.data,
          })
        );
      } else {
        showSnackbar(res.message, "error");
      }
    },
    onError(err) {
      showSnackbar(err.message, "error");
    },
  });

  const {
    mutate: getServiceCartDetails,
    isLoading: fetchingServiceCartDetails,
  } = useMutation(getServiceCart, {
    onSuccess: (res) => {
      if (res?.status === "SUCCESS") {
        dispatch(setServicesOnLogin(res?.data[0].packageDetails));
      } else {
        dispatch(setServicesOnLogin([]));
      }
    },
    onError: () => {
      dispatch(setServicesOnLogin([]));
    },
  });

  const { mutate: loginUsers, isLoading } = useMutation(loginUser, {
    onSuccess(res) {
      if (res?.status === "SUCCESS") {
        const data = res?.data;
        const { id, email, name, phone, gender, role } = data;
        showSnackbar(res?.message, "success");
        sessionStorage.setItem("token", data?.token);
        dispatch(
          setUserProfile({
            userId: id,
            email,
            name,
            phone,
            gender,
            isAdmin: role === "ROLE_ADMIN" ? true : false,
          })
        );
        getUserAddresses({ userId: id });
        getServiceCartDetails({ userId: id });
        navigate("/");
      } else {
        showSnackbar(`${res?.message}. Please try again!`, "error");
      }
    },
    onError(error) {
      showSnackbar(error, "error");
    },
  });

  const { mutate: loginAdminUsers, isLoading: isLoadingAdminUser } =
    useMutation(loginAdmin, {
      onSuccess(res) {
        if (res?.status === "SUCCESS") {
          const data = res?.data;
          const { id, email, name, phone, gender, role } = data;
          showSnackbar(res?.message, "success");
          sessionStorage.setItem("token", data?.token);
          dispatch(
            setUserProfile({
              userId: id,
              email,
              name,
              phone,
              gender,
              isAdmin: role === "ROLE_ADMIN" ? true : false,
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
      if (isAdminPage) {
        loginAdminUsers({
          email: value.email.toLowerCase(),
          password: value.password,
        });
      } else {
        loginUsers({
          email: value.email.toLowerCase(),
          password: value.password,
        });
      }
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
        <CustomLoader
          open={isLoading || fetchingServiceCartDetails || isLoadingAdminUser}
        />
      </Suspense>
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center hidden md:block"
        style={{
          backgroundImage: `url(${Resources.images.Login.loginBg})`,
        }}
      />
      <div className="w-full h-full flex flex-col md:flex-row justify-end items-center z-10 relative">
        <div className="hidden md:flex w-full md:w-1/2 p-8 flex-col justify-center items-center">
          <LoginForm
            formik={formik}
            handleSubmit={handleSubmit}
            isAdminPage={isAdminPage}
          />
        </div>
      </div>
      <div className="md:hidden w-full h-full absolute flex">
        <LoginForm
          formik={formik}
          handleSubmit={handleSubmit}
          mobileClass="flex flex-col items-center"
          isAdminPage={isAdminPage}
        />
      </div>
    </div>
  );
}

export default LoginPage;
