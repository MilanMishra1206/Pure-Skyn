import React, { lazy, Suspense } from "react";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import CustomCheckBox from "../../../shared/CustomCheckbox";
import FadeInWrapper from "../../../config/MotionFramer/FadeInWrapper";

const CustomDatePicker = lazy(() => import("../../../shared/CustomDatePicker"));

const timeSlots = [
  { label: "10:00 AM", value: "10:00 AM" },
  { label: "11:00 AM", value: "11:00 AM" },
  { label: "12:00 PM", value: "12:00 PM" },
  { label: "2:00 PM", value: "2:00 PM" },
  { label: "4:00 PM", value: "4:00 PM" },
  { label: "6:00 PM", value: "6:00 PM" },
];

const technicians = ["Milan Mishra", "John Doe", "Sara Khan", "Anil Singh"];

function Schedule() {
  const slotFormik = useFormik({
    initialValues: {
      date: "",
      selectedSlots: [],
    },
    onSubmit: (values) => {
      console.log("Selected Date:", values.date);
      console.log("Selected Time Slots:", values.selectedSlots);
    },
  });

  const technicianFormik = useFormik({
    initialValues: {
      date: "",
      selectedTechnicians: [],
    },
    onSubmit: (values) => {
      console.log("Selected Date:", values.date);
      console.log("Selected Technicians:", values.selectedTechnicians);
    },
  });

  return (
    <motion.div
      variants={FadeInWrapper("left", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="p-3 md:!p-5 font-poppins"
    >
      <h2 className="text-lg font-medium">Schedule Available Slots</h2>
      <form onSubmit={slotFormik.handleSubmit}>
        <p className="text-sm mt-2 mb-4">
          <span className="font-bold text-sm">Note: </span>
          <span>
            Please select the <strong>non-available</strong> time slots
          </span>
        </p>
        <div>
          <div className="mb-4">
            <Suspense fallback={<div />}>
              <CustomDatePicker
                label="Date"
                name="slotFormik.date"
                textClassToOverride="!text-kashmirBlue"
                disablePast
                className="w-full rounded-md !bg-transparent shadow-insetLight"
                fieldWidth="!w-64"
                setFieldValue={slotFormik.setFieldValue}
                setFieldTouched={slotFormik.setFieldTouched}
                value={slotFormik.values.date}
                error={slotFormik.errors.date}
                touched={slotFormik.touched.date}
                inputClassName="!text-kashmirBlue !font-poppins"
                onChange={slotFormik.handleChange}
                handleBlur={slotFormik.handleBlur}
              />
            </Suspense>
          </div>
          {timeSlots.map((slot) => (
            <div key={slot.value} className="flex items-center space-x-2">
              <CustomCheckBox
                label={slot.label}
                checked={slotFormik.values.selectedSlots.includes(slot.value)}
                handleChange={(e) => {
                  const { checked } = e.target;
                  if (checked) {
                    slotFormik.setFieldValue("selectedSlots", [
                      ...slotFormik.values.selectedSlots,
                      slot.value,
                    ]);
                  } else {
                    slotFormik.setFieldValue(
                      "selectedSlots",
                      slotFormik.values.selectedSlots.filter(
                        (val) => val !== slot.value
                      )
                    );
                  }
                }}
                checkBoxClasses="text-gray-700"
                labelClasses="!text-lg"
                size="small"
              />
            </div>
          ))}
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="w-auto bg-skyn text-white py-2 px-4 rounded-md hover:bg-skyn-dark focus:outline-none focus:ring-2 focus:ring-skyn transition-all shadow-[3px_3px_0px_#313440] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
          >
            Submit Time Slots
          </button>
        </div>
      </form>

      <hr className="my-5" />

      <h2 className="text-lg font-medium">Select Technicians' Availability</h2>
      <form onSubmit={technicianFormik.handleSubmit}>
        <p className="text-sm mt-2 mb-4">
          <span className="font-bold text-sm">Note: </span>
          <span>
            Please select the <strong>non-available</strong> technicians
          </span>
        </p>
        <div className="mb-4">
          <Suspense fallback={<div />}>
            <CustomDatePicker
              label="Date"
              name="technicianFormik.date"
              textClassToOverride="!text-kashmirBlue"
              disablePast
              className="w-full rounded-md !bg-transparent shadow-insetLight"
              fieldWidth="!w-64"
              setFieldValue={technicianFormik.setFieldValue}
              setFieldTouched={technicianFormik.setFieldTouched}
              value={technicianFormik.values.date}
              error={technicianFormik.errors.date}
              touched={technicianFormik.touched.date}
              inputClassName="!text-kashmirBlue !font-poppins"
              onChange={technicianFormik.handleChange}
              handleBlur={technicianFormik.handleBlur}
            />
          </Suspense>
        </div>
        {technicians.map((tech) => (
          <div key={tech}>
            <div className="flex items-center space-x-2">
              <CustomCheckBox
                label={tech}
                checked={technicianFormik.values.selectedTechnicians.includes(
                  tech
                )}
                handleChange={(e) => {
                  const { checked } = e.target;
                  if (checked) {
                    technicianFormik.setFieldValue("selectedTechnicians", [
                      ...technicianFormik.values.selectedTechnicians,
                      tech,
                    ]);
                  } else {
                    technicianFormik.setFieldValue(
                      "selectedTechnicians",
                      technicianFormik.values.selectedTechnicians.filter(
                        (val) => val !== tech
                      )
                    );
                  }
                }}
                checkBoxClasses="text-gray-700"
                labelClasses="!text-lg"
                size="small"
              />
            </div>
          </div>
        ))}
        <div className="mt-4">
          <button
            type="submit"
            className="w-auto bg-skyn text-white py-2 px-4 rounded-md hover:bg-skyn-dark focus:outline-none focus:ring-2 focus:ring-skyn transition-all shadow-[3px_3px_0px_#313440] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
          >
            Submit Technicians' Availability
          </button>
        </div>
      </form>
    </motion.div>
  );
}

export default Schedule;
