import React, { Suspense, useEffect, useState } from "react";
import {
  TableBody,
  TableRow,
  useMediaQuery,
  Link,
  TableCell,
  Collapse,
} from "@mui/material";
import { MdExpandMore, MdOutlineExpandLess } from "react-icons/md";
import CustomTable from "../../../../shared/CustomDashboardTable/CustomTable";
import { headers, mobileHeaders } from "../../../../helpers/Admin";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosCloseCircle } from "react-icons/io";

function DataTable({ data, totalCount }) {
  const [openModal, setOpenModal] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [expandedRows, setExpandedRows] = useState([]);
  const [bookingDetails, setBookingDetails] = useState([]);
  const [addressDetails, setAddressDetails] = useState([]);

  const handleToggle = (index, e) => {
    e.stopPropagation();
    const newExpandedRows = [...expandedRows];
    newExpandedRows[index] = !newExpandedRows[index];
    setExpandedRows(newExpandedRows);
  };

  const handleOpenModal = (item) => {
    setOpenModal(true);
    setAddressDetails(item.addresses);
    setBookingDetails(item.bookings);
  };

  return (
    <div>
      <Suspense fallback={<div />}>
        <CustomTable headCells={isMobile ? mobileHeaders : headers}>
          <TableBody>
            {totalCount > 0 ? (
              data?.map((item, index) => (
                <>
                  <TableRow
                    key={item.id}
                    className={`cursor-pointer h-14 ${(index + 1) % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
                  >
                    <TableCell className="font-poppins text-sm text-blue">
                      {item?.id}
                    </TableCell>
                    <TableCell
                      className={`font-poppins text-sm text-blue ${isMobile && "!hidden"}`}
                    >
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
                            className="!text-lg"
                            onClick={(e) => handleToggle(index, e)}
                          />
                        ) : (
                          <MdExpandMore
                            className="!text-lg"
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
                                  <>
                                    <Link
                                      className="no-underline text-skyn cursor-pointer hover:!underline hover:opacity-80"
                                      onClick={() => handleOpenModal(item)}
                                    >
                                      {" "}
                                      More Info{" "}
                                    </Link>
                                  </>
                                )}
                              </p>
                            </div>
                          ))}
                      </div>
                    </Collapse>
                  </TableCell>
                </>
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
            className="bg-slate-900/20 backdrop-blur p-4 fixed inset-0 z-50 md:grid place-items-center overflow-scroll"
          >
            <div className="bg-white shadow p-4 rounded-md font-poppins w-4/5">
              <div className="flex justify-end">
                <button
                  className="text-2xl text-coal"
                  onClick={() => setOpenModal(false)}
                >
                  <IoIosCloseCircle size={"2rem"} />
                </button>
              </div>
              <div className="text-center text-2xl md:!text-3xl font-bold">
                <span className="text-center">Additional Information</span>
              </div>
              <hr />
              {addressDetails?.length > 0 && (
                <div>
                  <p className="font-bold text-xl md:!text-2xl !text-center mt-5 p-4 bg-skyn text-white rounded">
                    Address Details
                  </p>
                  <div className="grid">
                    {addressDetails?.map((item, index) => (
                      <>
                        <div
                          key={index}
                          className="grid md:grid-cols-2 xl:!grid-cols-3 p-4 gap-2"
                        >
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
                      </>
                    ))}
                  </div>
                </div>
              )}
              <hr />
              {bookingDetails?.length > 0 && (
                <div>
                  <p className="font-bold text-2xl !text-center mt-5 p-4 bg-skyn text-white rounded">
                    Booking Details
                  </p>
                  <div className="grid">
                    {bookingDetails?.map((item, index) => (
                      <div key={index}>{item}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

export default DataTable;
