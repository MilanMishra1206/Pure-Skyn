import { AnimatePresence, motion } from "framer-motion";
import { lazy, Suspense } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useMutation } from "react-query";

import LoginForm from "../../Login/LoginForm";
import { getLoginValidation, loginInitialValues } from "../../../helpers/Login";
import { useAppSnackbar } from "../../../config/Context/SnackbarContext";
import { loginUser } from "../../../services/LoginAndRegister";
import { setUserProfile } from "../../../redux/Actions";

const CustomLoader = lazy(() => import("../../../shared/CustomLoader"));

function LoginModal({ setOpenLoginModal, setChecked }) {
  const showSnackbar = useAppSnackbar();
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
            gender: data?.gender,
          })
        );
        setOpenLoginModal(false);
        setChecked(true);
      } else {
        showSnackbar(`${res?.message}. Please try again!`, "error");
      }
    },
    onError() {
      showSnackbar("Sign-In Failed! Please try again.", "error");
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
    <AnimatePresence>
      <Suspense fallback={<div />}>
        <CustomLoader open={isLoading} />
      </Suspense>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45 }}
        className="bg-slate-900/20 backdrop-blur p-4 fixed inset-0 z-50 md:grid place-items-center overflow-scroll"
      >
        <LoginForm
          formik={formik}
          handleSubmit={handleSubmit}
          isModal={true}
          setOpenLoginModal={setOpenLoginModal}
          mobileClass="!rounded-3xl"
        />
      </motion.div>
    </AnimatePresence>
  );
}

export default LoginModal;
