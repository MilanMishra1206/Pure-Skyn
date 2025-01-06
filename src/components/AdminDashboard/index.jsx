import { useMediaQuery } from "@mui/material";
import MotionWrapper from "../../config/MotionFramer/MotionWrapper";
import Appointments from "./Appointments";
import { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { AiOutlineSchedule } from "react-icons/ai";
import Schedule from "./Schedule";
import { PiUserList } from "react-icons/pi";
import TechniciansList from "./TechniciansList";
import { AiOutlineUserAdd } from "react-icons/ai";
import AddAdmin from "./AddAdmin";

function AdminDashboard() {
  const isTablet = useMediaQuery("(max-width: 1023px)");
  const isMobile = useMediaQuery("(max-width: 767px)");
  const adminName = "Milan";
  const [selectedSection, setSelectedSection] = useState("appointments");

  const sidebarItems = [
    {
      id: "appointments",
      label: "All Appointments",
      icon: <FaUser size="1.3rem" />,
    },
    {
      id: "schedule",
      label: "Schedule",
      icon: <AiOutlineSchedule size="1.5rem" />,
    },
    {
      id: "technicians",
      label: "Technicians",
      icon: <PiUserList size="1.6rem" />,
    },
    {
      id: "add_admin",
      label: "Add Admin",
      icon: <AiOutlineUserAdd size="1.3rem" />,
    },
  ];

  return (
    <MotionWrapper>
      <div className={`mt-3 ${isTablet ? "py-3" : "py-4 mt-4"}`}>
        <div className={`mt-5 ${isMobile ? "px-4" : "px-5"}`}></div>
      </div>
      <div
        className={`flex flex-col lg:!flex-row mt-3 lg:!space-x-5 space-y-5 md:!space-y-0 mb-5 px-3 lg:!px-5`}
      >
        <div
          className={`flex flex-col shadow rounded font-poppins mb-5 md:ml-5 lg:!ml-0 sm:w-full md:!w-3/5 lg:!w-1/3 xl:!1/5 md:!self-start`}
        >
          <div className="flex flex-col text-xl bg-skyn text-white font-bold p-4 rounded-t-lg">
            <p>Welcome {adminName},</p>
          </div>
          <div className="flex flex-col p-4">
            {sidebarItems.map((item) => (
              <div
                key={item.id}
                className={`flex items-center space-x-2 w-full p-2 rounded cursor-pointer mb-2 ${
                  selectedSection === item.id
                    ? "!bg-slate-300"
                    : "hover:!bg-slate-300"
                }`}
                onClick={() => setSelectedSection(item.id)}
              >
                {item.icon}
                <div className="flex-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
        {selectedSection === "appointments" && (
          <div className="md:m-5 lg:w-full">
            <div className="rounded shadow-lg w-full">
              <div className="text-xl font-poppins font-extrabold bg-skyn text-white p-4 text-center rounded-t-lg">
                <p>Appointment Details</p>
              </div>
              <Appointments isTablet={isTablet} isMobile={isMobile} />
            </div>
          </div>
        )}
        {selectedSection === "schedule" && (
          <div className="md:m-5 lg:w-full">
            <div className="rounded shadow-lg w-full">
              <div className="text-xl font-poppins font-extrabold bg-skyn text-white p-4 text-center rounded-t-lg">
                <p>Schedule</p>
              </div>
              <Schedule isTablet={isTablet} isMobile={isMobile} />
            </div>
          </div>
        )}
        {selectedSection === "technicians" && (
          <div className="md:m-5 lg:w-full">
            <div className="rounded shadow-lg w-full">
              <div className="text-xl font-poppins font-extrabold bg-skyn text-white p-4 text-center rounded-t-lg">
                <p>Technicians</p>
              </div>
              <TechniciansList isTablet={isTablet} isMobile={isMobile} />
            </div>
          </div>
        )}
        {selectedSection === "add_admin" && (
          <div className="md:m-5 lg:w-full">
            <div className="rounded shadow-lg w-full">
              <div className="text-xl font-poppins font-extrabold bg-skyn text-white p-4 text-center rounded-t-lg">
                <p>Admins</p>
              </div>
              <AddAdmin isTablet={isTablet} isMobile={isMobile} />
            </div>
          </div>
        )}
      </div>
    </MotionWrapper>
  );
}

export default AdminDashboard;
