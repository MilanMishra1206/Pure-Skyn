import { lazy, Suspense, useState } from "react";
import { getIn } from "formik";
import { Link } from "react-router-dom";
import FadedLineBreak from "../../../../shared/CustomHrTag";
import regex from "../../../../helpers/Regex";
import LoginModal from "../../LoginModal";

const CustomTextField = lazy(
  () => import("../../../../shared/CustomTextField")
);
const CustomDropdown = lazy(() => import("../../../../shared/CustomDropdown"));
const CustomDatePicker = lazy(
  () => import("../../../../shared/CustomDatePicker")
);
const CustomCheckBox = lazy(() => import("../../../../shared/CustomCheckbox"));

function BookNowForm({
  isLoggedIn,
  formik,
  timeSlots,
  handleSubmit,
  treatmentName,
  checked,
  setChecked,
}) {
  const [openLoginModal, setOpenLoginModal] = useState(false);

  return (
    <>
      <form className="w-full">
        <div className="rounded-3xl p-8">
          <div className="text-3xl font-poppins text-center font-extrabold mb-5">
            Please Share Booking Details
            <br />
            <span className="text-coffee !text-2xl">{treatmentName}</span>
          </div>
          <FadedLineBreak />
          <div className="text-left text-lg md:p-5 ml-2 mb-4 md:!mb-0">
            {isLoggedIn ? (
              <CustomCheckBox
                checked={checked}
                checkBoxClasses="!p-0"
                label="Booking for self?"
                labelClasses="!ml-2"
                handleChange={(e) => {
                  setChecked((prev) => !prev);
                }}
              />
            ) : (
              <p className="text-sm font-bold">
                <button
                  className="text-[#175EC3] hover:opacity-80"
                  onClick={() => setOpenLoginModal(true)}
                >
                  Login
                </button>{" "}
                to fetch your details
              </p>
            )}
          </div>
          <div className="grid md:grid-cols-2 lg:!grid-cols-3 gap-4 md:p-5">
            <Suspense fallback={<div />}>
              <CustomTextField
                textClassOverride="!text-kashmirBlue"
                placeholderClasses="placeholder:!opacity-30 !text-licorice"
                className="h-12 rounded-md !bg-transparent"
                placeholder="Enter"
                requiredStar
                labelToShow="Name"
                name="name"
                textFieldColorClass="shadow-insetLight"
                inputClassName="!bg-transparent"
                fieldWidth="w-full !mb-4"
                value={formik.values?.name}
                onChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                error={formik.errors.name}
                touched={formik.touched.name}
              />
            </Suspense>
            <Suspense fallback={<div />}>
              <CustomTextField
                textClassOverride="!text-kashmirBlue"
                placeholderClasses="placeholder:!opacity-30 !text-licorice"
                className="h-12 rounded-md !bg-transparent"
                placeholder="Enter"
                requiredStar
                regex={/^[^!#$%^&*()=+{}[\]:;<>,?/~`|"\\ ]*$/}
                labelToShow="Email ID"
                name="email"
                textFieldColorClass="shadow-insetLight"
                inputClassName="!bg-transparent"
                fieldWidth="!mb-4"
                maxLength={50}
                value={formik.values?.email}
                onChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                error={formik.errors?.email}
                touched={formik.touched?.email}
              />
            </Suspense>
            <Suspense fallback={<div />}>
              <CustomTextField
                textClassOverride="!text-kashmirBlue"
                placeholderClasses="placeholder:!opacity-30 !text-licorice"
                className="h-12 rounded-md !bg-transparent"
                placeholder="Enter"
                requiredStar
                labelToShow="Mobile Number"
                name="mobile"
                maxLength={10}
                regex={regex.numeric}
                textFieldColorClass="shadow-insetLight"
                inputClassName="!bg-transparent"
                fieldWidth="!mb-4"
                value={formik.values.mobile}
                onChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                error={formik.errors.mobile}
                touched={formik.touched.mobile}
              />
            </Suspense>
            <Suspense fallback={<div />}>
              <div>
                <CustomDropdown
                  textClassOverride="!text-kashmirBlue"
                  classes="!rounded-md !mb-4"
                  requiredStar
                  labelToShow="Select Address"
                  name="address"
                  showIconOutline
                  options={[
                    { label: "Malibu Town", value: "Malibu Town" },
                    {
                      label: "South Delhi",
                      value: "South Delhi",
                    },
                  ]}
                  value={formik.values.address}
                  handleBlur={formik.handleBlur}
                  handleChange={formik.handleChange}
                  errorMessage={getIn(formik.errors, "address")}
                  error={getIn(formik.errors, "address")}
                  touched={getIn(formik.touched, "address")}
                />
                <div>
                  <Link
                    className="text-sm underline text-skyn hover:opacity-80"
                    to="/user-profile#Address"
                  >
                    Add Address
                  </Link>
                </div>
              </div>
            </Suspense>
            <Suspense fallback={<div />}>
              <CustomDropdown
                textClassOverride="!text-kashmirBlue"
                classes="!rounded-md !mb-4"
                requiredStar
                labelToShow="Select City"
                name="city"
                showIconOutline
                options={[
                  { label: "Gurgaon", value: "Gurgaon" },
                  {
                    label: "South Delhi",
                    value: "South Delhi",
                  },
                ]}
                value={formik.values.city}
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                errorMessage={getIn(formik.errors, "city")}
                error={getIn(formik.errors, "city")}
                touched={getIn(formik.touched, "city")}
              />
            </Suspense>
            <div className="mb-4">
              <Suspense fallback={<div />}>
                <CustomDatePicker
                  label="Treatment Date"
                  name="treatmentDate"
                  textClassToOverride="!text-kashmirBlue"
                  requiredStar
                  disablePast
                  className="w-full rounded-md !bg-transparent shadow-insetLight"
                  fieldWidth="!w-full"
                  setFieldValue={formik.setFieldValue}
                  setFieldTouched={formik.setFieldTouched}
                  value={formik.values.date}
                  error={formik.errors.treatmentDate}
                  touched={formik.touched.treatmentDate}
                  inputClassName="!text-kashmirBlue !font-poppins"
                  onChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                />
              </Suspense>
            </div>
            <div className="mb-4">
              <label
                htmlFor="timeSlot"
                className="block text-sm font-bold text-cello"
              >
                Select Appointment Time
              </label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {timeSlots.map((slot, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => formik.setFieldValue("timeSlot", slot)}
                    className={`p-2 rounded text-sm font-bold transition-all shadow-md ${
                      formik.values.timeSlot === slot
                        ? "bg-skyn text-white border-skyn"
                        : "bg-white text-gray-700 hover:!bg-gray-100"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
              {formik.errors.timeSlot && formik.touched.timeSlot && (
                <p className="mt-1 ml-1 text-xs text-bitterSweet">
                  {formik.errors.timeSlot}*
                </p>
              )}
            </div>
          </div>
        </div>
      </form>
      {openLoginModal && <LoginModal setOpenLoginModal={setOpenLoginModal} />}
    </>
  );
}

export default BookNowForm;
