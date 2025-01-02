import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import CustomCheckBox from "../../../shared/CustomCheckbox";

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
      selectedSlots: [],
    },
    validationSchema: Yup.object({
      selectedSlots: Yup.array()
        .min(1, "Please select at least one time slot")
        .required("Please select time slots"),
    }),
    onSubmit: (values) => {
      console.log("Selected Time Slots:", values.selectedSlots);
    },
  });

  const technicianFormik = useFormik({
    initialValues: {
      selectedTechnicians: [],
    },
    validationSchema: Yup.object({
      selectedTechnicians: Yup.array()
        .min(1, "Please select at least one technician")
        .required("Please select technicians"),
    }),
    onSubmit: (values) => {
      console.log("Selected Technicians:", values.selectedTechnicians);
    },
  });

  return (
    <div className="p-3 md:!p-5 font-poppins">
      <h2 className="text-lg font-medium">Schedule Available Slots</h2>
      <form onSubmit={slotFormik.handleSubmit}>
        <p className="text-sm mt-2 mb-4">
          <span className="font-bold text-sm">Note: </span>
          <span>Please select the available time slots for today</span>
        </p>
        <div>
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
          {slotFormik.errors.selectedSlots &&
            slotFormik.touched.selectedSlots && (
              <p className="text-red-500 text-xs">
                {slotFormik.errors.selectedSlots}
              </p>
            )}
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
          <span>Please select the technicians available for today</span>
        </p>
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
            {technicianFormik.errors.selectedTechnicians &&
              technicianFormik.touched.selectedTechnicians && (
                <p className="text-red-500 text-xs">
                  {technicianFormik.errors.selectedTechnicians}
                </p>
              )}
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
    </div>
  );
}

export default Schedule;
