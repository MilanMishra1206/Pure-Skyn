import { useFormik } from "formik";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { getPersonalInfoValidationSchema } from "../../../helpers/UserProfile";
import { useAppSnackbar } from "../../../config/Context/SnackbarContext";
import { regex } from "../../../helpers/Regex";
import FadedLineBreak from "../../../shared/CustomHrTag";
import { useMutation } from "react-query";
import { updateUserDetails } from "../../../services/Users";
import { setUserProfile } from "../../../redux/Actions";

const CustomTextField = lazy(() => import("../../../shared/CustomTextField"));
const CustomLoader = lazy(() => import("../../../shared/CustomLoader"));

export default function PersonalInformation({ userProfile }) {
  const showSnackbar = useAppSnackbar();
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [profileMessage, setProfileMessage] = useState("");
  const [formikInitialValues, setFormikInitialValues] = useState({
    name: userProfile?.name || "",
    phone: userProfile?.phone || "",
    email: userProfile?.email || "",
    gender: userProfile?.gender || "",
  });

  const genders = ["Male", "Female", "Others"];

  useEffect(() => {
    const isAnyFieldEmpty = Object.values(formikInitialValues).some(
      (value) => value === ""
    );

    if (isAnyFieldEmpty) {
      setProfileMessage("Please update your profile!");
    } else {
      setProfileMessage("");
    }
  }, [formikInitialValues]);

  const { mutate: updateDetails, isLoading } = useMutation(updateUserDetails, {
    onSuccess(res) {
      const data = res?.data;
      if (res?.status === "SUCCESS") {
        setEditMode(false);
        showSnackbar(res?.message, "success");
        dispatch(
          setUserProfile({
            userId: data?.id,
            email: data?.email,
            name: data?.name,
            phone: data?.phone,
            gender: data?.gender,
          })
        );
        setFormikInitialValues({
          name: data?.name,
          phone: data?.phone,
          email: data?.email,
          gender: data?.gender,
        });
      } else {
        setEditMode(true);
        showSnackbar(res?.message, "error");
      }
    },
    onError(err) {
      setEditMode(true);
      showSnackbar(err?.message, "error");
    },
  });

  const personalInfoFormik = useFormik({
    enableReinitialize: true,
    validateOnMount: true,
    validateOnChange: true,
    initialValues: {
      name: userProfile?.name || "",
      phone: userProfile?.phone || "",
      email: userProfile?.email || "",
      gender: userProfile?.gender || "",
    },
    validationSchema: getPersonalInfoValidationSchema,
    onSubmit: (value) => {
      const reqBody = {
        id: userProfile?.userId || "",
        ...value,
      };
      updateDetails({ reqBody });
    },
  });

  const handleUpdate = () => {
    if (!personalInfoFormik.isValid) {
      showSnackbar("Please fill required details!", "error");
    } else {
      personalInfoFormik.handleSubmit();
    }
  };

  const handleCancel = () => {
    if (!personalInfoFormik.isValid) {
      showSnackbar("Please fill required details!", "error");
    } else {
      setEditMode(false);
      personalInfoFormik.setValues(formikInitialValues);
    }
  };

  return (
    <div className="w-full">
      <Suspense fallback={<div>Loading...</div>}>
        <CustomLoader open={isLoading} />
      </Suspense>
      {profileMessage && (
        <div className="py-2 px-4">
          <small className="text-bitterSweet">
            <strong className="!text-black">Note: </strong>
            {profileMessage}
          </small>
        </div>
      )}
      <form>
        <div className="flex items-center gap-4 mb-4 justify-center mt-4">
          <span className="font-semibold text-cello font-poppins text-lg md:!text-xl">
            Personal Information
          </span>
          <FiEdit3
            className="text-gray-500 cursor-pointer hover:text-gray-800 transition"
            size={20}
            onClick={() => setEditMode(!editMode)}
          />
        </div>
        <FadedLineBreak />
        <div className="grid lg:!grid-cols-3 gap-3 font-poppins p-4">
          <div>
            {editMode ? (
              <Suspense fallback={<div />}>
                <CustomTextField
                  textClassOverride="!text-kashmirBlue"
                  placeholderClasses="placeholder:!opacity-30 !text-licorice"
                  className="h-12 rounded-md !bg-transparent"
                  placeholder="Enter"
                  requiredStar
                  labelToShow="Full Name"
                  name="name"
                  textFieldColorClass="shadow-insetLight"
                  inputClassName="!bg-transparent"
                  fieldWidth="!mb-4"
                  value={personalInfoFormik.values.name}
                  onChange={personalInfoFormik.handleChange}
                  handleBlur={personalInfoFormik.handleBlur}
                  error={personalInfoFormik.errors.name}
                  touched={personalInfoFormik.touched.name}
                />
              </Suspense>
            ) : (
              <div className="flex flex-col">
                <span className="text-black font-medium">Full Name</span>
                <span className="text-kashmirBlue">
                  {" "}
                  {personalInfoFormik.values.name}
                </span>
              </div>
            )}
          </div>
          <div>
            {editMode ? (
              <Suspense fallback={<div />}>
                <CustomTextField
                  textClassOverride="!text-cello"
                  placeholderClasses="placeholder:!opacity-30 !text-licorice"
                  className="h-12 rounded-md !bg-transparent"
                  placeholder="Enter"
                  requiredStar
                  labelToShow="Contact Number"
                  maxLength={10}
                  regex={regex.numeric}
                  name="phone"
                  textFieldColorClass="shadow-insetLight"
                  inputClassName="!bg-transparent"
                  fieldWidth="!mb-4"
                  value={personalInfoFormik.values.phone}
                  onChange={personalInfoFormik.handleChange}
                  handleBlur={personalInfoFormik.handleBlur}
                  error={personalInfoFormik.errors.phone}
                  touched={personalInfoFormik.touched.phone}
                />
              </Suspense>
            ) : (
              <div className="flex flex-col">
                <span className="text-black font-medium">Phone</span>
                <span className="text-cello font-poppins">
                  {" "}
                  {personalInfoFormik.values.phone}
                </span>
              </div>
            )}
          </div>
          <div className="flex flex-col">
            {editMode ? (
              <>
                <span className="text-sm font-medium pb-1 !text-cello">
                  Gender<small className="text-bitterSweet">*</small>
                </span>
                <div className="grid grid-cols-1 gap-2">
                  {genders.map((gender, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`py-2 lg:px-4 rounded-lg text-sm font-medium transition-all border ${
                        personalInfoFormik.values.gender === gender
                          ? "bg-skyn text-white border-skyn shadow-md"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                      }`}
                      onClick={() =>
                        personalInfoFormik.setFieldValue("gender", gender)
                      }
                    >
                      {gender}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="flex flex-col">
                {" "}
                <span className="text-black font-medium">Gender</span>
                <span className="text-cello">
                  {personalInfoFormik.values.gender}
                </span>
              </div>
            )}
          </div>
          <div>
            {editMode ? (
              <Suspense fallback={<div />}>
                <CustomTextField
                  textClassOverride="!text-cello"
                  placeholderClasses="placeholder:!opacity-30 !text-licorice"
                  className="h-12 rounded-md !bg-transparent"
                  placeholder="Enter"
                  requiredStar
                  regex={/^[^!#$%^&*()=+{}[\]:;<>,?/~`|"\\ ]*$/}
                  labelToShow="Email Id"
                  name="email"
                  textFieldColorClass="shadow-insetLight"
                  inputClassName="!bg-transparent"
                  fieldWidth="!mb-4"
                  maxLength={50}
                  value={personalInfoFormik.values?.email}
                  onChange={personalInfoFormik.handleChange}
                  handleBlur={personalInfoFormik.handleBlur}
                  error={personalInfoFormik.errors?.email}
                  touched={personalInfoFormik.touched?.email}
                />
              </Suspense>
            ) : (
              <div className="flex flex-col">
                {" "}
                <span className="text-black font-medium">Email Id</span>
                <span className="text-cello">
                  {personalInfoFormik.values.email}
                </span>
              </div>
            )}
          </div>
        </div>
      </form>
      {editMode && (
        <div className="flex gap-5">
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              className="bg-aliceBlue-2 text-cello py-2 px-6 rounded-lg font-medium hover:opacity-80 transition-all"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              className="bg-skyn text-white py-2 px-6 rounded-lg font-medium hover:opacity-80 transition-all"
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
