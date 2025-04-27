import React, { lazy, Suspense, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useFormik } from "formik";
import * as Yup from "yup";
import FadedLineBreak from "../../../shared/CustomHrTag";
import {
  bookingSessionUpdate,
  getUserBookings,
} from "../../../services/Booking";
import { useAppSnackbar } from "../../../config/Context/SnackbarContext";
import {
  convertToIndianTime,
  formatDateMMDDYYYY,
  SERVICE_MAP,
} from "../../../helpers/LaserServices";
import EditSessionModal from "./EditSessionModal";

const CustomLoader = lazy(() => import("../../../shared/CustomLoader"));

export default function AppointmentDetails({ userProfile }) {
  const showSnackbar = useAppSnackbar();
  const [appointmentDetails, setAppointmentDetails] = useState([]);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedSessionInfo, setSelectedSessionInfo] = useState(null);
  const [sessionNo, setSessionNo] = useState(1);

  const { isFetching, refetch } = useQuery(
    ["getUserBookings"],
    () => getUserBookings({ userId: userProfile?.userId || "" }),
    {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      onSuccess: (response) => {
        if (response?.status === "SUCCESS") {
          setAppointmentDetails(response?.data);
        } else {
          showSnackbar(response?.message, "error");
        }
      },
      onError: () => {
        showSnackbar(
          "Something went wrong! Please try again after sometime",
          "error"
        );
      },
    }
  );

  const { mutate: handleSessionUpdate, isLoading: updatingBookingSession } =
    useMutation(bookingSessionUpdate, {
      onSuccess: (res) => {
        if (res?.status === "SUCCESS") {
          showSnackbar(res?.message, "success");
          setEditModalOpen(false);
          refetch();
        } else {
          showSnackbar(res?.message, "error");
        }
      },
      onError: (err) => {
        showSnackbar(err?.message, "error");
      },
    });

  const handleAccordionClick = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const formik = useFormik({
    initialValues: {
      treatmentDate: selectedSessionInfo?.treatmentDate || "",
      appointmentTime: selectedSessionInfo?.appointmentTime || "",
    },
    validationSchema: Yup.object({
      treatmentDate: Yup.string().required("Date is required"),
      appointmentTime: Yup.string().required("Time slot is required"),
    }),
    onSubmit: (values) => {
      handleSaveSession(values);
    },
  });

  const handleEditSession = (session, sessionNumber) => {
    setSelectedSessionInfo(session);
    setSessionNo(sessionNumber);
    setEditModalOpen(true);
  };

  const handleSave = () => {
    formik.handleSubmit();
  };

  const handleSaveSession = (values) => {
    const { appointmentTime, treatmentDate } = values;
    const [day, month, year] = treatmentDate?.split("/");
    const formattedDate = `${year}-${month}-${day}`;
    const formattedTimeISO = new Date(
      `${formattedDate} ${appointmentTime}`
    ).toISOString();
    const payload = {
      id: selectedSessionInfo?.id,
      appointmentTime: formattedTimeISO,
      treatmentDate: formattedDate,
    };
    handleSessionUpdate({ reqBody: payload });
  };

  return (
    <div>
      <Suspense>
        <CustomLoader open={isFetching || updatingBookingSession} />
      </Suspense>
      <p className="font-semibold text-cello font-poppins text-xl text-center mt-4">
        My Appointments
      </p>
      <FadedLineBreak />
      <div className="grid gap-4 px-2">
        {appointmentDetails?.map((item, index) => {
          const matchedAddress = userProfile?.addresses?.find(
            (addr) => addr.id === item?.userInfo?.address
          );
          return (
            <div key={index} className="border rounded-md shadow-md">
              <div
                onClick={() => handleAccordionClick(index)}
                className="cursor-pointer flex justify-between items-center bg-gray-100 px-3 py-2 md:!px-4 md:!py-4 rounded-t-md"
              >
                <div className="font-bold text-coal">
                  Booking #{index + 1} -{" "}
                  {new Date(item?.createdAt).toLocaleString()}
                </div>
                <div className="text-lg text-coal">
                  {openAccordion === index ? "▲" : "▼"}
                </div>
              </div>

              {openAccordion === index && (
                <div className="p-3 bg-gray-50 rounded-b-md space-y-4">
                  <div className="flex flex-col gap-2">
                    <span className="font-semibold text-denim">
                      Status:{" "}
                      <span className="font-bold text-cello">
                        {item?.status}
                      </span>
                    </span>
                    <span className="font-semibold text-denim">
                      Created At:{" "}
                      <span className="font-bold text-black">
                        {new Date(item?.createdAt).toLocaleString()}
                      </span>
                    </span>
                  </div>
                  <div className="border p-4 rounded">
                    <p className="text-xl font-semibold mb-2">User Info</p>
                    <hr />
                    <div className="grid lg:grid-cols-2 gap-2 mt-4">
                      <span className="font-medium text-coal">
                        <span className="font-medium text-cello">Name:</span>{" "}
                        {item?.userInfo.name}
                      </span>
                      <span className="font-medium text-coal">
                        <span className="font-medium text-cello">Email:</span>{" "}
                        {item?.userInfo.email}
                      </span>
                      <span className="font-medium text-coal">
                        <span className="font-medium text-cello">Mobile:</span>{" "}
                        {item?.userInfo.mobile}
                      </span>
                      <span className="font-medium text-coal">
                        <span className="font-medium text-cello">Address:</span>{" "}
                        {matchedAddress?.addressLine1},{" "}
                        {matchedAddress?.addressLine2}
                      </span>
                      <span className="font-medium text-coal">
                        <span className="font-medium text-cello">City:</span>{" "}
                        {item?.userInfo.city}
                      </span>
                      <span className="font-medium text-coal">
                        <span className="font-medium text-cello">
                          Pin Code:
                        </span>{" "}
                        {matchedAddress?.pinCode}
                      </span>
                    </div>
                  </div>
                  <div className="border p-3 md:!p-4 rounded">
                    <h5 className="font-semibold mb-2">Services Booked</h5>
                    {item?.servicesBooked.map((service, sIndex) => (
                      <div key={sIndex} className="mb-4 border-t pt-2">
                        <p className="font-semibold text-denim">
                          Service Name:{" "}
                          <span className="text-coal">
                            {SERVICE_MAP[service.subServiceId] ||
                              "Unknown Service"}
                          </span>
                        </p>
                        {service.sessions.map((session, sessIndex) => (
                          <div
                            className="bg-slate-100 border-b-4 flex flex-col p-4 rounded-lg"
                            key={sessIndex}
                          >
                            <div className="flex justify-between items-center">
                              <p className="font-bold text-lg">
                                Session - {sessIndex + 1}
                              </p>
                              <button
                                onClick={() =>
                                  handleEditSession(session, sessIndex + 1)
                                }
                                className="text-sm text-skyn underline"
                              >
                                Edit
                              </button>
                            </div>
                            <p className="text-sm">
                              <strong>Date:</strong>{" "}
                              {formatDateMMDDYYYY(session?.treatmentDate)}
                            </p>
                            <p className="text-sm">
                              <strong>Time:</strong>{" "}
                              {convertToIndianTime(session?.appointmentTime)}
                            </p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <EditSessionModal
        open={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        handleSave={handleSave}
        formik={formik}
        sessionNo={sessionNo}
      />
    </div>
  );
}
