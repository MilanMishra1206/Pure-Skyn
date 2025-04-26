import React, { lazy, Suspense, useState } from "react";
import FadedLineBreak from "../../../shared/CustomHrTag";
import { useQuery } from "react-query";
import { getUserBookings } from "../../../services/Booking";
import { useAppSnackbar } from "../../../config/Context/SnackbarContext";
import { SERVICE_MAP } from "../../../helpers/LaserServices";

const CustomLoader = lazy(() => import("../../../shared/CustomLoader"));

export default function AppointmentDetails({ userProfile }) {
  const showSnackbar = useAppSnackbar();
  const [appointmentDetails, setAppointmentDetails] = useState([]);

  const { isFetching } = useQuery(
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
          console.log(response?.data);
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

  return (
    <div>
      <Suspense>
        <CustomLoader open={isFetching} />
      </Suspense>
      <p className="font-semibold text-cello font-poppins text-xl text-center">
        My Appointments
      </p>
      <FadedLineBreak />
      <div className="grid grid-cols-1 gap-4">
        {appointmentDetails?.map((item, index) => {
          const matchedAddress = userProfile?.addresses?.find(
            (addr) => addr.id === item?.userInfo?.address
          );
          return (
            <div
              key={index}
              className="grid py-4 px-2 md:!p-4 gap-2 text-sm bg-gray-50 rounded-lg shadow-md p-4 mb-6 space-y-2"
            >
              <p className="font-bold text-xl text-center">
                Booking #{index + 1}
              </p>
              <FadedLineBreak />
              <div className="flex flex-col gap-2 p-2">
                <span className="font-semibold text-denim">
                  Booking ID:{" "}
                  <span className="font-bold text-cello">
                    {item?.bookingId}
                  </span>
                </span>
                <span className="font-semibold text-denim">
                  Status:{" "}
                  <span className="font-bold text-cello">{item?.status}</span>
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
                <div className="grid lg:!grid-cols-2 gap-2 mt-4">
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
                    <span className="font-medium text-cello">Pin Code:</span>{" "}
                    {matchedAddress?.pinCode}
                  </span>
                </div>
              </div>
              <div className="border p-4 rounded">
                <h3 className="text-xl font-semibold mb-2">Services Booked</h3>
                {item?.servicesBooked.map((service, sIndex) => (
                  <div key={sIndex} className="mb-4 border-t pt-2">
                    <p className="font-semibold text-denim">
                      Service Name:{" "}
                      <span className="text-coal">
                        {SERVICE_MAP[service.subServiceId] || "Unknown Service"}
                      </span>
                    </p>
                    {service.sessions.map((session, sessIndex) => (
                      <div key={sessIndex} className="ml-4 mt-2">
                        <p className="text-sm">
                          <strong>Date:</strong> {session?.treatmentDate}
                        </p>
                        <p className="text-sm">
                          <strong>Time:</strong> {session?.appointmentTime}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
