import React, { lazy, Suspense } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

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

export default function EditSessionModal({
  open,
  onClose,
  formik,
  handleSave,
  sessionNo,
}) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle className="text-center font-bold text-cello p-4">
        <span className="font-bold">Edit Session - {sessionNo}</span>
      </DialogTitle>

      <DialogContent>
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
            Select Appointment Time <span className="text-bitterSweet">*</span>
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
          {formik.errors.appointmentTime && formik.touched.appointmentTime && (
            <p className="mt-1 ml-1 text-xs text-bitterSweet">
              {formik.errors.appointmentTime}*
            </p>
          )}
        </div>
      </DialogContent>

      <DialogActions className="flex justify-end gap-2 p-4">
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 shadow-md"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleSave}
          className="bg-skyn text-white px-4 py-2 rounded-md hover:opacity-85 shadow-md"
        >
          Save
        </button>
      </DialogActions>
    </Dialog>
  );
}
