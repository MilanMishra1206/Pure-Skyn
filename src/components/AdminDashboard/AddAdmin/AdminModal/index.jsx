import { AnimatePresence, motion } from "framer-motion";
import { lazy, Suspense, useState } from "react";
import regex from "../../../../helpers/Regex";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import FadedLineBreak from "../../../../shared/CustomHrTag";

const CustomTextField = lazy(
  () => import("../../../../shared/CustomTextField")
);

function AdminModal({
  adminFormik,
  handleSave,
  handleCancel,
  editingAdminIndex,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45 }}
        className="bg-slate-900/20 backdrop-blur p-4 fixed inset-0 z-50 md:grid place-items-center overflow-scroll"
      >
        <motion.div
          initial={{ scale: 0, rotate: "12.5deg" }}
          animate={{ scale: 1, rotate: "0deg" }}
          exit={{ scale: 0, rotate: "-12.5deg" }}
          transition={{ duration: 0.45 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white p-6 rounded-lg w-full max-w-lg"
        >
          <div className="text-center font-poppins font-bold text-2xl mb-4">
            Admin Details
          </div>
          <FadedLineBreak />
          <form className="w-full">
            <div className="flex flex-col md:flex-row md:gap-4">
              <Suspense fallback={<div />}>
                <CustomTextField
                  textClassOverride="!text-kashmirBlue"
                  placeholderClasses="placeholder:!opacity-30 !text-licorice"
                  className="h-12 rounded-md !bg-transparent"
                  placeholder="Enter"
                  requiredStar
                  labelToShow="First Name"
                  name="firstName"
                  textFieldColorClass="shadow-insetLight"
                  inputClassName="!bg-transparent"
                  fieldWidth="w-full !mb-4"
                  value={adminFormik.values?.firstName}
                  onChange={adminFormik.handleChange}
                  handleBlur={adminFormik.handleBlur}
                  error={adminFormik.errors.firstName}
                  touched={adminFormik.touched.firstName}
                />
              </Suspense>
              <Suspense fallback={<div />}>
                <CustomTextField
                  textClassOverride="!text-kashmirBlue"
                  placeholderClasses="placeholder:!opacity-30 !text-licorice"
                  className="h-12 rounded-md !bg-transparent"
                  placeholder="Enter"
                  requiredStar
                  labelToShow="Last Name"
                  name="lastName"
                  textFieldColorClass="shadow-insetLight"
                  inputClassName="!bg-transparent"
                  fieldWidth="w-full !mb-4"
                  value={adminFormik.values?.lastName}
                  onChange={adminFormik.handleChange}
                  handleBlur={adminFormik.handleBlur}
                  error={adminFormik.errors.lastName}
                  touched={adminFormik.touched.lastName}
                />
              </Suspense>
            </div>
            <div className="flex flex-col md:flex-row md:gap-4">
              <Suspense fallback={<div />}>
                <CustomTextField
                  textClassOverride="!text-kashmirBlue"
                  placeholderClasses="placeholder:!opacity-30 !text-licorice"
                  className="h-12 rounded-md !bg-transparent"
                  placeholder="Enter"
                  requiredStar
                  labelToShow="Contact Number"
                  name="phone"
                  maxLength={10}
                  regex={regex.numeric}
                  textFieldColorClass="shadow-insetLight"
                  inputClassName="!bg-transparent"
                  fieldWidth="w-full !mb-4"
                  value={adminFormik.values?.phone}
                  onChange={adminFormik.handleChange}
                  handleBlur={adminFormik.handleBlur}
                  error={adminFormik.errors.phone}
                  touched={adminFormik.touched.phone}
                />
              </Suspense>
              <Suspense fallback={<div />}>
                <CustomTextField
                  textClassOverride="!text-kashmirBlue"
                  placeholderClasses="placeholder:!opacity-30 !text-licorice"
                  className="h-12 rounded-md !bg-transparent"
                  placeholder="Enter"
                  requiredStar
                  labelToShow="Email Id"
                  name="email"
                  textFieldColorClass="shadow-insetLight"
                  inputClassName="!bg-transparent"
                  fieldWidth="w-full !mb-4"
                  value={adminFormik.values?.email}
                  onChange={adminFormik.handleChange}
                  handleBlur={adminFormik.handleBlur}
                  error={adminFormik.errors.email}
                  touched={adminFormik.touched.email}
                />
              </Suspense>
            </div>
            <div className="flex flex-col md:flex-row md:gap-4">
              <Suspense fallback={<div />}>
                <CustomTextField
                  textClassOverride="!text-kashmirBlue"
                  type={showPassword ? "text" : "password"}
                  placeholderClasses="placeholder:!opacity-30 !text-licorice"
                  className="h-12 rounded-md !bg-transparent"
                  placeholder="Enter"
                  requiredStar
                  labelToShow="Password"
                  name="password"
                  textFieldColorClass="shadow-insetLight"
                  inputClassName="!bg-transparent"
                  fieldWidth="w-full !mb-4"
                  value={adminFormik.values?.password}
                  onChange={adminFormik.handleChange}
                  handleBlur={adminFormik.handleBlur}
                  error={adminFormik.errors.password}
                  touched={adminFormik.touched.password}
                  iconEnd={showPassword ? <FaEye /> : <FaEyeSlash />}
                  iconOnClick={() => setShowPassword(!showPassword)}
                />
              </Suspense>
              <Suspense fallback={<div />}>
                <CustomTextField
                  textClassOverride="!text-kashmirBlue"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholderClasses="placeholder:!opacity-30 !text-licorice"
                  className="h-12 rounded-md !bg-transparent"
                  placeholder="Enter"
                  requiredStar
                  labelToShow="Confirm Password"
                  name="confirmPassword"
                  textFieldColorClass="shadow-insetLight"
                  inputClassName="!bg-transparent"
                  fieldWidth="w-full !mb-4"
                  value={adminFormik.values?.confirmPassword}
                  onChange={adminFormik.handleChange}
                  handleBlur={adminFormik.handleBlur}
                  error={adminFormik.errors.confirmPassword}
                  touched={adminFormik.touched.confirmPassword}
                  iconEnd={showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                  iconOnClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                />
              </Suspense>
            </div>
          </form>
          <div className="flex flex-col md:!flex-row justify-end gap-4 mt-5">
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 shadow-md"
            >
              Cancel
            </button>
            <button
              type="button"
              className="bg-skyn text-white px-4 py-2 rounded-md hover:bg-skyn-dark hover:opacity-80 shadow-md"
              onClick={handleSave}
            >
              {editingAdminIndex !== null ? "Save Changes" : "Add Admin"}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default AdminModal;
