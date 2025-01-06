import React from "react";
import FadedLineBreak from "../../../shared/CustomHrTag";

export default function AppointmentDetails({ appointmentDetails }) {
  return (
    <div>
      {" "}
      <p className="font-semibold text-cello font-poppins text-xl text-center">
        My Appointments
      </p>
      <FadedLineBreak />
      <div className="grid grid-cols-1 gap-4">
        {appointmentDetails.map((appointment) => (
          <div key={appointment.id} className="flex flex-col">
            <span className="text-black">{appointment.treatmentName}</span>
            <span className="text-kashmirBlue">{appointment.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
