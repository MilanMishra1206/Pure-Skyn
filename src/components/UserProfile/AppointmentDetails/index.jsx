import React, { lazy, Suspense, useEffect, useState } from "react";
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
          setEditModalOpen(false);
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

  const handleEditSession = (session, sessionNumber) => {
    setSelectedSessionInfo(session);
    setSessionNo(sessionNumber);
    setEditModalOpen(true);
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
      const { appointmentTime, treatmentDate } = values;
      const [day, month, year] = treatmentDate?.split("/");
      const formattedDate = `${year}-${month}-${day}`;

      const payload = {
        id: selectedSessionInfo?.id,
        appointmentTime,
        treatmentDate: formattedDate,
      };
      handleSessionUpdate({ reqBody: payload });
    },
  });

  const handleSave = () => {
    formik.handleSubmit();
  };

  useEffect(() => {
    if (selectedSessionInfo) {
      formik.setValues({
        treatmentDate: selectedSessionInfo?.treatmentDate || "",
        appointmentTime: selectedSessionInfo?.appointmentTime || "",
      });
    }
  }, [selectedSessionInfo]);

  return (
    <div>
      <Suspense>
        <CustomLoader open={isFetching || updatingBookingSession} />
      </Suspense>
      <p className="font-semibold text-cello font-poppins text-xl text-center mt-4">
        My Appointments
      </p>
      <FadedLineBreak />
      {!isFetching && appointmentDetails?.length === 0 && (
        <p className="text-center text-lg text-red-500 mt-8">
          No Appointments Found!!
        </p>
      )}
      {appointmentDetails?.length !== 0 && (
        <div className="grid gap-4 px-2">
          {appointmentDetails?.map((item, index) => {
            const matchedAddress = userProfile?.addresses?.find(
              (addr) => addr.id === item?.userInfo?.address
            );
            return (
              <div
                key={index}
                className="rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div
                  onClick={() => handleAccordionClick(index)}
                  className="cursor-pointer flex justify-between items-center bg-gradient-to-r from-gray-100 to-white px-4 py-4 hover:bg-gray-200 transition-all"
                >
                  <div className="font-semibold text-base md:text-lg text-denim">
                    Booking #{index + 1} -{" "}
                    {convertToIndianTime(item?.createdAt)}
                  </div>
                  <div className="text-xl text-cello">
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
                      <p className="text-lg font-bold text-coal mb-2 border-b pb-1">
                        User Info
                      </p>
                      <div className="grid sm:grid-cols-2 gap-y-3 gap-x-6 text-sm text-gray-700">
                        <span className="font-medium text-coal">
                          <span className="font-medium text-cello">Name:</span>{" "}
                          {item?.userInfo.name}
                        </span>
                        <span className="font-medium text-coal">
                          <span className="font-medium text-cello">Email:</span>{" "}
                          {item?.userInfo.email}
                        </span>
                        <span className="font-medium text-coal">
                          <span className="font-medium text-cello">
                            Mobile:
                          </span>{" "}
                          {item?.userInfo.mobile}
                        </span>
                        <span className="font-medium text-coal">
                          <span className="font-medium text-cello">
                            Address:
                          </span>{" "}
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
                      <p className="text-lg font-bold text-coal mb-2 border-b pb-1 mt-2">
                        Services Booked
                      </p>
                      {item?.servicesBooked.map((service, sIndex) => (
                        <div key={sIndex} className="mb-4 pt-2">
                          <p className="font-semibold text-denim mb-4">
                            Service Name:{" "}
                            <span className="text-coal">
                              {SERVICE_MAP[service.subServiceId] ||
                                "Unknown Service"}
                            </span>
                          </p>
                          <div className="grid xl:!grid-cols-2 gap-4">
                            {service.sessions.map((session, sessIndex) => {
                              const isPastDate =
                                session?.treatmentDate &&
                                new Date() > new Date(session.treatmentDate);
                              return (
                                <div
                                  className="bg-sky-50 border-l-4 border-skyn px-4 py-3 rounded-lg space-y-2"
                                  key={sessIndex}
                                >
                                  <div className="flex justify-between items-center">
                                    <p className="font-semibold text-md text-coal">
                                      Session - {sessIndex + 1}
                                    </p>
                                    {!isPastDate && (
                                      <button
                                        onClick={() =>
                                          handleEditSession(
                                            session,
                                            sessIndex + 1
                                          )
                                        }
                                        className="text-sm text-skyn underline"
                                      >
                                        Edit
                                      </button>
                                    )}
                                  </div>
                                  <p className="text-sm">
                                    <strong>Date:</strong>{" "}
                                    {formatDateMMDDYYYY(session?.treatmentDate)}
                                  </p>
                                  <p className="text-sm">
                                    <strong>Time:</strong>{" "}
                                    {session?.appointmentTime}
                                  </p>
                                  <p className="text-sm">
                                    <strong>Status:</strong>{" "}
                                    <span
                                      className={
                                        session?.sessionStatus?.toLowerCase() ===
                                        "completed"
                                          ? "text-green-600"
                                          : session?.sessionStatus?.toLowerCase() ===
                                              "cancelled"
                                            ? "text-red-600"
                                            : "text-yellow-600"
                                      }
                                    >
                                      {session?.sessionStatus ?? "Pending"}
                                    </span>
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
      {editModalOpen && (
        <EditSessionModal
          onClose={() => setEditModalOpen(false)}
          handleSave={handleSave}
          formik={formik}
          sessionNo={sessionNo}
        />
      )}
    </div>
  );
}
