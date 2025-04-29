import { AnimatePresence, motion } from "framer-motion";
import { lazy, Suspense } from "react";

const CustomDatePicker = lazy(
  () => import("../../../../shared/CustomDatePicker")
);

const appointmentTimes = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

function EditSessionModal({ onClose, formik, handleSave, sessionNo }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="backdrop-blur bg-slate-900/20 fixed flex inset-0 items-center justify-center overflow-scroll p-4 z-50"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-8 rounded-lg w-full max-w-lg"
        >
          <div className="text-center font-bold text-cello p-4">
            <span className="font-bold">Edit Session - {sessionNo}</span>
          </div>
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
                value={formik.values.treatmentDate}
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
              htmlFor="appointmentTime"
              className="text-sm font-medium pb-1 !text-kashmirBlue"
            >
              Select Appointment Time{" "}
              <span className="text-bitterSweet">*</span>
            </label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {appointmentTimes.map((slot, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => formik.setFieldValue("appointmentTime", slot)}
                  className={`p-2 rounded text-sm font-bold transition-all shadow-md ${
                    formik.values.appointmentTime === slot
                      ? "bg-skyn text-white border-skyn"
                      : "bg-white text-gray-700 hover:!bg-gray-100"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
            {formik.errors.appointmentTime &&
              formik.touched.appointmentTime && (
                <p className="mt-1 ml-1 text-xs text-bitterSweet">
                  {formik.errors.appointmentTime}*
                </p>
              )}
          </div>
          <div className="flex flex-col md:!flex-row justify-center gap-2 mt-12">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 shadow-md w-full md:!w-50"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="bg-skyn text-white px-4 py-2 rounded-md hover:opacity-85 shadow-md w-full md:!w-50"
            >
              Save
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default EditSessionModal;
