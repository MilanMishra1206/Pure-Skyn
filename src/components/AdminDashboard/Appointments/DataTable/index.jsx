import React, { lazy, Suspense, useEffect, useState } from "react";
import {
  TableBody,
  TableRow,
  useMediaQuery,
  Link,
  TableCell,
  Collapse,
} from "@mui/material";
import { MdExpandMore, MdOutlineExpandLess } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosCloseCircle } from "react-icons/io";
import { useMutation } from "react-query";
import * as Yup from "yup";
import CustomTable from "../../../../shared/CustomDashboardTable/CustomTable";
import { headers, mobileHeaders } from "../../../../helpers/Admin";
import {
  convertToIndianTime,
  formatDateMMDDYYYY,
  SERVICE_MAP,
} from "../../../../helpers/LaserServices";
import {
  bookingSessionUpdate,
  sessionStatusUpdate,
} from "../../../../services/Booking";
import { useAppSnackbar } from "../../../../config/Context/SnackbarContext";
import EditSessionModal from "../../../UserProfile/AppointmentDetails/EditSessionModal";
import { useFormik } from "formik";
import ConfirmationModal from "../../../ProductsCart/ConfirmationModal";
import Resources from "../../../../config/Resources";

const CustomLoader = lazy(() => import("../../../../shared/CustomLoader"));

function DataTable({ data, totalCount, refetchData, setApplicationData }) {
  const showSnackbar = useAppSnackbar();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [openModal, setOpenModal] = useState(false);
  const [expandedRows, setExpandedRows] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedSessionInfo, setSelectedSessionInfo] = useState(null);
  const [sessionNo, setSessionNo] = useState(1);
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedSessionId, setSelectedSessionId] = useState("");

  useEffect(() => {
    setApplicationData(data);
  }, [data]);

  const handleToggle = (index, e) => {
    e.stopPropagation();
    const newExpandedRows = [...expandedRows];
    newExpandedRows[index] = !newExpandedRows[index];
    setExpandedRows(newExpandedRows);
  };

  const handleOpenModal = (item) => {
    setOpenModal(true);
    setSelectedItem(item);
  };

  useEffect(() => {
    if (data) {
      setSelectedItem(data.find((item) => item.id === selectedItem?.id));
    }
  }, [data]);

  const handleAccordionClick = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const { mutate: handleSessionUpdate, isLoading: updatingBookingSession } =
    useMutation(bookingSessionUpdate, {
      onSuccess: (res) => {
        if (res?.status === "SUCCESS") {
          showSnackbar(res?.message, "success");
          setEditModalOpen(false);
          refetchData();
        } else {
          showSnackbar(res?.message, "error");
        }
      },
      onError: (err) => {
        showSnackbar(err?.message, "error");
      },
    });

  const { mutate: statusUpdate, isLoading: updatingSessionStatus } =
    useMutation(sessionStatusUpdate, {
      onSuccess: (res) => {
        if (res?.status === "SUCCESS") {
          showSnackbar(res?.message, "success");
          setOpenConfirmationModal(false);
          refetchData();
        } else {
          showSnackbar(res?.message, "error");
        }
      },
      onError: (err) => {
        showSnackbar(err?.message, "error");
      },
    });

  const handleEditSession = (session, sessionNumber) => {
    setSelectedSessionInfo(session);
    setSessionNo(sessionNumber);
    setEditModalOpen(true);
  };

  const formik = useFormik({
    initialValues: {
      treatmentDate: "",
      appointmentTime: "",
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

  const confirmUpdate = (sessionId, newStatus) => {
    statusUpdate({ sessionId, newStatus });
  };

  const handleStatusChange = (val, sessionServiceId) => {
    setOpenConfirmationModal(true);
    setSelectedStatus(val);
    setSelectedSessionId(sessionServiceId);
  };

  return (
    <div>
      <Suspense>
        <CustomLoader open={updatingBookingSession || updatingSessionStatus} />
      </Suspense>
      <Suspense fallback={<div />}>
        <CustomTable headCells={isMobile ? mobileHeaders : headers}>
          <TableBody>
            {totalCount > 0 ? (
              data?.map((item, index) => (
                <React.Fragment key={index}>
                  <TableRow
                    key={item.id}
                    className={`cursor-pointer h-14 ${(index + 1) % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
                  >
                    <TableCell className={`font-poppins text-sm text-blue`}>
                      {item?.name || "-"}
                    </TableCell>
                    <TableCell
                      className={`font-poppins text-sm text-blue ${isMobile && "!hidden"}`}
                    >
                      {item?.email || "-"}
                    </TableCell>
                    <TableCell
                      className={`font-poppins text-sm text-blue ${isMobile && "!hidden"}`}
                    >
                      {item?.phone || "-"}
                    </TableCell>
                    <TableCell className={`${isMobile && "!hidden"}`}>
                      <Link
                        className="no-underline text-skyn cursor-pointer hover:!underline hover:opacity-80"
                        onClick={() => handleOpenModal(item)}
                      >
                        {" "}
                        More Info{" "}
                      </Link>
                    </TableCell>
                    <TableCell
                      className={`${isMobile ? "!flex !justify-end space-x-2 h-14" : ""} `}
                    >
                      <div
                        className={`${isMobile ? "bg-aliceBlue-2 min-w-8 h-8 flex justify-center items-center rounded-sm shadow-md" : "!hidden"}`}
                      >
                        {expandedRows[index] ? (
                          <MdOutlineExpandLess
                            className="!text-lg cursor-pointer"
                            onClick={(e) => handleToggle(index, e)}
                          />
                        ) : (
                          <MdExpandMore
                            className="!text-lg cursor-pointer"
                            onClick={(e) => handleToggle(index, e)}
                          />
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableCell
                    colSpan={3}
                    className={`${(!expandedRows[index] || !isMobile) && "!hidden"}`}
                  >
                    <Collapse
                      in={expandedRows[index]}
                      timeout="auto"
                      unmountOnExit
                    >
                      <div className="!flex !flex-col p-2">
                        {headers
                          .filter(
                            (obj) =>
                              !mobileHeaders.some(
                                (mobileCell) => mobileCell.key === obj.key
                              )
                          )
                          ?.map((heading, idx) => (
                            <div
                              key={idx}
                              className="grid grid-cols-1 md:!grid-cols-2 col-auto p-2 items-center"
                            >
                              <p className="!text-cello !text-sm !font-poppins !font-medium">
                                {heading.label}:
                              </p>
                              <p className="!font-poppins !text-sm !text-kashmirBlue break-all">
                                {heading.label !== "Action" &&
                                  item?.[heading.key]}{" "}
                                {heading.label === "Action" && (
                                  <Link
                                    className="no-underline text-skyn cursor-pointer hover:!underline hover:opacity-80"
                                    onClick={() => handleOpenModal(item)}
                                  >
                                    {" "}
                                    More Info{" "}
                                  </Link>
                                )}
                              </p>
                            </div>
                          ))}
                      </div>
                    </Collapse>
                  </TableCell>
                </React.Fragment>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="!text-center !text-base !font-poppins p-4"
                >
                  No Records Found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </CustomTable>
      </Suspense>
      {openModal && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="bg-slate-900/20 backdrop-blur p-3 md:!p-4 fixed inset-0 z-50 md:grid md:place-items-center overflow-scroll"
          >
            <div className="bg-white shadow p-2 md:!p-4 rounded-md font-poppins md:!w-4/5 lg:!w-3/5">
              <div className="flex justify-end">
                <button
                  className="text-2xl text-coal"
                  onClick={() => setOpenModal(false)}
                >
                  <IoIosCloseCircle size={"2rem"} />
                </button>
              </div>
              <div className="text-center text-xl md:!text-2xl font-bold">
                <span className="text-center">Additional Information</span>
              </div>
              <hr />
              {(selectedItem?.addresses?.length === 0 ||
                selectedItem?.addresses === null) &&
                selectedItem?.bookings?.length === 0 && (
                  <div>
                    <p className="text-kashmirBlue font-bold text-xl !text-center mt-5 p-4">
                      No details available for this user!
                    </p>
                  </div>
                )}
              {selectedItem?.addresses?.length > 0 && (
                <div>
                  <p className="font-bold text-xl !text-center mt-5 p-2 bg-skyn text-white rounded">
                    Address Details
                  </p>
                  <div className="grid bg-white rounded-xl shadow-md p-2 md:p-6 border border-gray-200 mt-4">
                    {selectedItem?.addresses?.map((item, index) => (
                      <React.Fragment key={index}>
                        <div className="grid md:grid-cols-2 xl:!grid-cols-3 py-4 px-2 md:!p-4 gap-2 text-sm">
                          <div className="flex flex-col">
                            <p className="text-coal font-medium">Name: </p>
                            <p className="text-kashmirBlue">{item?.fullName}</p>
                          </div>
                          <div className="flex flex-col">
                            <p className="text-coal font-medium">Phone: </p>
                            <p className="text-kashmirBlue">{item?.phone}</p>
                          </div>
                          <div className="flex flex-col">
                            <p className="text-coal font-medium">
                              Address Line 1:{" "}
                            </p>
                            <p className="text-kashmirBlue">
                              {item?.addressLine1}
                            </p>
                          </div>
                          <div className="flex flex-col">
                            <p className="text-coal font-medium">
                              Address Line 2:{" "}
                            </p>
                            <p className="text-kashmirBlue">
                              {item?.addressLine2}
                            </p>
                          </div>
                          <div className="flex flex-col">
                            <p className="text-coal font-medium">City: </p>
                            <p className="text-kashmirBlue">{item?.city}</p>
                          </div>
                          <div className="flex flex-col">
                            <p className="text-coal font-medium">State: </p>
                            <p className="text-kashmirBlue">
                              {item?.state} - {item?.pinCode}
                            </p>
                          </div>
                          <div className="flex flex-col">
                            <p className="text-coal font-medium">Country: </p>
                            <p className="text-kashmirBlue">{item?.country}</p>
                          </div>
                        </div>
                        <hr />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}
              {selectedItem?.bookings?.length > 0 && (
                <div>
                  <p className="font-bold text-xl !text-center mt-5 p-2 bg-skyn text-white rounded">
                    Booking Details
                  </p>
                  <div className="grid mt-4 gap-2">
                    {selectedItem?.bookings
                      ?.slice()
                      .reverse()
                      ?.map((item, index) => {
                        const matchedAddress = selectedItem?.addresses?.find(
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
                              <div className="font-semibold text-base text-denim">
                                Booking #{index + 1} -{" "}
                                {convertToIndianTime(item?.createdAt)}
                              </div>
                              <div className="text-coal">
                                {openAccordion === index ? "▲" : "▼"}
                              </div>
                            </div>
                            {openAccordion === index && (
                              <div className="p-3 bg-gray-50 rounded-b-md space-y-4">
                                <div className="flex flex-col gap-2">
                                  <p className="font-semibold text-denim text-sm">
                                    Booking ID:{" "}
                                    <span className="font-normal text-cello">
                                      {item?.bookingId}
                                    </span>
                                  </p>
                                  <p className="font-semibold text-denim mb-2 mt-2 text-sm">
                                    Status:{" "}
                                    <span className="font-normal text-cello">
                                      {item?.status}
                                    </span>
                                  </p>
                                  <p className="font-semibold text-denim text-sm">
                                    Created At:{" "}
                                    <span className="font-normal text-black">
                                      {new Date(
                                        item?.createdAt
                                      ).toLocaleString()}
                                    </span>
                                  </p>
                                </div>
                                <div className="border p-4 rounded">
                                  <p className="text-lg font-bold text-coal mb-2 border-b pb-1">
                                    User Info
                                  </p>
                                  <div className="grid sm:grid-cols-2 gap-y-3 gap-x-6 text-sm text-gray-700">
                                    <p className="font-medium text-coal">
                                      <span className="font-medium text-cello">
                                        Name:
                                      </span>{" "}
                                      {item?.userInfo.name}
                                    </p>
                                    <p className="font-medium text-coal">
                                      <span className="font-medium text-cello">
                                        Email:
                                      </span>{" "}
                                      {item?.userInfo.email}
                                    </p>
                                    <p className="font-medium text-coal">
                                      <span className="font-medium text-cello">
                                        Mobile:
                                      </span>{" "}
                                      {item?.userInfo.mobile}
                                    </p>
                                    <p className="font-medium text-coal">
                                      <span className="font-medium text-cello">
                                        Address:
                                      </span>{" "}
                                      {matchedAddress?.addressLine1},{" "}
                                      {matchedAddress?.addressLine2}
                                    </p>
                                    <p className="font-medium text-coal">
                                      <span className="font-medium text-cello">
                                        City:
                                      </span>{" "}
                                      {item?.userInfo.city}
                                    </p>
                                    <p className="font-medium text-coal">
                                      <span className="font-medium text-cello">
                                        Pin Code:
                                      </span>{" "}
                                      {matchedAddress?.pinCode}
                                    </p>
                                  </div>
                                </div>
                                <div className="border p-4 rounded">
                                  <p className="text-lg font-bold text-coal mb-2 border-b pb-1 mt-2">
                                    Technician
                                  </p>
                                  <p>{item?.technicianName}</p>
                                </div>
                                <div className="border p-4 rounded">
                                  <p className="text-lg font-bold text-coal mb-2 border-b pb-1 mt-2">
                                    Services Booked
                                  </p>
                                  {item?.servicesBooked.map(
                                    (service, sIndex) => (
                                      <div key={sIndex} className="mb-4 pt-2">
                                        <p className="font-semibold text-denim mb-4">
                                          Service Name:{" "}
                                          <span className="text-coal">
                                            {SERVICE_MAP[
                                              service.subServiceId
                                            ] || "Unknown Service"}
                                          </span>
                                        </p>
                                        <div className="grid xl:!grid-cols-2 gap-4">
                                          {service.sessions.map(
                                            (session, sessIndex) => {
                                              const isPastDate =
                                                session?.treatmentDate &&
                                                new Date() >
                                                  new Date(
                                                    session.treatmentDate
                                                  );
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
                                                    {formatDateMMDDYYYY(
                                                      session?.treatmentDate
                                                    )}
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
                                                      {session?.sessionStatus ??
                                                        "Pending"}
                                                    </span>
                                                  </p>
                                                  {!isPastDate && (
                                                    <div className="flex gap-2 items-center">
                                                      <p className="text-sm">
                                                        <strong>
                                                          Update Status:
                                                        </strong>{" "}
                                                      </p>
                                                      <select
                                                        value={
                                                          session?.sessionStatus
                                                        }
                                                        onChange={(e) =>
                                                          handleStatusChange(
                                                            e.target.value,
                                                            session?.id
                                                          )
                                                        }
                                                        className="border px-4 py-1 rounded text-xs"
                                                      >
                                                        <option value="PENDING">
                                                          PENDING
                                                        </option>
                                                        <option value="ASSIGNED">
                                                          ASSIGNED
                                                        </option>
                                                        <option value="COMPLETED">
                                                          COMPLETED
                                                        </option>
                                                        <option value="CANCELLED">
                                                          CANCELLED
                                                        </option>
                                                      </select>
                                                    </div>
                                                  )}
                                                </div>
                                              );
                                            }
                                          )}
                                        </div>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
          {editModalOpen && (
            <EditSessionModal
              onClose={() => setEditModalOpen(false)}
              handleSave={handleSave}
              formik={formik}
              sessionNo={sessionNo}
            />
          )}
          {openConfirmationModal && (
            <ConfirmationModal
              title={`You are changing the status for the selected service to ${selectedStatus}`}
              handleCancel={() => setOpenConfirmationModal(false)}
              handlePrimaryButtonClick={() =>
                confirmUpdate(selectedSessionId, selectedStatus)
              }
              confirmButtonText="Update"
              imageSrc={Resources.images.Common.Warning}
              confirmButtonColor="!bg-skyn"
            />
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

export default DataTable;
