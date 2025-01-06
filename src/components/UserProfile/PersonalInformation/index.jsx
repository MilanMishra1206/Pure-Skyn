import { useFormik } from "formik";
import React, { lazy, Suspense, useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { getPersonalInfoValidationSchema } from "../../../helpers/UserProfile";
import { useAppSnackbar } from "../../../config/Context/SnackbarContext";
import regex from "../../../helpers/Regex";
import FadedLineBreak from "../../../shared/CustomHrTag";

const CustomTextField = lazy(() => import("../../../shared/CustomTextField"));

export default function PersonalInformation({
  fullName: initialFullName,
  phoneNumber: initialPhoneNumber,
  emailAddress: initialEmailAddress,
  gender: initialGender,
}) {
  const showSnackbar = useAppSnackbar();
  const [editMode, setEditMode] = useState(false);
  const [formikInitialValues, serFormikInitialValues] = useState({
    fullName: initialFullName,
    contactNumber: initialPhoneNumber,
    emailAddress: initialEmailAddress,
    gender: initialGender,
  });
  const genders = ["Male", "Female", "Others"];

  const personalInfoFormik = useFormik({
    enableReinitialize: true,
    validateOnMount: true,
    validateOnChange: true,
    initialValues: formikInitialValues,
    validationSchema: getPersonalInfoValidationSchema,
    onSubmit: (value) => {
      console.log("Personal Info Values", value);
      setEditMode(false);
      showSnackbar("Personal Information Updated", "success");
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
      <form>
        <div className="flex items-center gap-4 mb-4 justify-center">
          <span className="font-semibold text-cello font-poppins text-xl">
            Personal Information
          </span>
          <FiEdit3
            className="text-gray-500 cursor-pointer hover:text-gray-800 transition"
            size={20}
            onClick={() => setEditMode(!editMode)}
          />
        </div>
        <FadedLineBreak />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 font-poppins">
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
                  name="fullName"
                  textFieldColorClass="shadow-insetLight"
                  inputClassName="!bg-transparent"
                  fieldWidth="!mb-4"
                  value={personalInfoFormik.values.fullName}
                  onChange={personalInfoFormik.handleChange}
                  handleBlur={personalInfoFormik.handleBlur}
                  error={personalInfoFormik.errors.fullName}
                  touched={personalInfoFormik.touched.fullName}
                />
              </Suspense>
            ) : (
              <div className="flex flex-col">
                <span className="text-black font-medium">Full Name</span>
                <span className="text-kashmirBlue">
                  {" "}
                  {personalInfoFormik.values.fullName}
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
                  name="contactNumber"
                  textFieldColorClass="shadow-insetLight"
                  inputClassName="!bg-transparent"
                  fieldWidth="!mb-4"
                  value={personalInfoFormik.values.contactNumber}
                  onChange={personalInfoFormik.handleChange}
                  handleBlur={personalInfoFormik.handleBlur}
                  error={personalInfoFormik.errors.contactNumber}
                  touched={personalInfoFormik.touched.contactNumber}
                />
              </Suspense>
            ) : (
              <div className="flex flex-col">
                <span className="text-black font-medium">Contact Number</span>
                <span className="text-cello font-poppins">
                  {" "}
                  {personalInfoFormik.values.contactNumber}
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
                  name="emailAddress"
                  textFieldColorClass="shadow-insetLight"
                  inputClassName="!bg-transparent"
                  fieldWidth="!mb-4"
                  maxLength={50}
                  value={personalInfoFormik.values?.emailAddress}
                  onChange={personalInfoFormik.handleChange}
                  handleBlur={personalInfoFormik.handleBlur}
                  error={personalInfoFormik.errors?.emailAddress}
                  touched={personalInfoFormik.touched?.emailAddress}
                />
              </Suspense>
            ) : (
              <div className="flex flex-col">
                {" "}
                <span className="text-black font-medium">Email Id</span>
                <span className="text-cello">
                  {personalInfoFormik.values.emailAddress}
                </span>
              </div>
            )}
          </div>
          <div className="flex flex-col">
            {editMode ? (
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
        </div>
      </form>
      {editMode && (
        <div className="flex gap-4">
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
