import { lazy, Suspense, useState } from "react";
import { useMutation } from "react-query";
import { useFormik } from "formik";
import { Divider } from "@mui/material";
import AdminModal from "./AdminModal";

import {
  getSignUpValidation,
  signUpInitialValue,
} from "../../../helpers/Login";
import { useAppSnackbar } from "../../../config/Context/SnackbarContext";
import { registerAdmin } from "../../../services/LoginAndRegister";

const CustomLoader = lazy(() => import("../../../shared/CustomLoader"));

function AddAdmin() {
  const showSnackbar = useAppSnackbar();
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [adminAdded, setAdminAdded] = useState(false);
  const [newAdminData, setNewAdminData] = useState({});

  const { mutate: signupAdmin, isLoading } = useMutation(registerAdmin, {
    onSuccess(res) {
      if (res?.status !== "ERROR") {
        setNewAdminData(res?.data);
        setAdminAdded(true);
        showSnackbar(res?.message, "success");
      } else {
        showSnackbar(res?.message, "error");
      }
    },
    onError(err) {
      showSnackbar(err?.message, "error");
    },
  });

  const adminFormik = useFormik({
    enableReinitialize: true,
    validateOnMount: true,
    validateOnChange: true,
    initialValues: signUpInitialValue,
    validationSchema: getSignUpValidation,
    onSubmit: (value) => {
      signupAdmin({
        name: value.name,
        email: value.email,
        password: value.password,
        phone: value.phone,
      });
    },
  });

  const handleSubmit = () => {
    if (!adminFormik.isValid) {
      showSnackbar("Please enter all the required fields!", "error");
      return;
    } else {
      adminFormik.handleSubmit();
    }
  };

  const handleCancel = () => {
    setShowAdminModal(false);
    setAdminAdded(false);
    setNewAdminData({});
    adminFormik.resetForm();
  };

  const addAdmin = () => {
    adminFormik.resetForm();
    setShowAdminModal(true);
  };

  return (
    <div className="p-3 md:!p-5">
      <Suspense>
        <CustomLoader open={isLoading} />
      </Suspense>
      <div className="flex flex-col justify-center gap-5 mb-3">
        <p className="text-bitterSweet">
          You can add Admins here, we won't showcase the list of all the admins
          since it contains sensitive information.
        </p>
        <button
          className="w-full md:w-1/4 bg-skyn text-white py-2 px-4 rounded-md hover:bg-skyn-dark focus:outline-none focus:ring-2 focus:ring-skyn transition-all shadow-[3px_3px_0px_#313440] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
          onClick={addAdmin}
        >
          Add Admin
        </button>
      </div>
      <Divider />
      {showAdminModal && (
        <AdminModal
          adminFormik={adminFormik}
          handleSave={handleSubmit}
          handleCancel={handleCancel}
          adminAdded={adminAdded}
          newAdminData={newAdminData}
        />
      )}
    </div>
  );
}

export default AddAdmin;
