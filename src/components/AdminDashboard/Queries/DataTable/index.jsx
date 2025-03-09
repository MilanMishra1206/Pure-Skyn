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
import { useMutation } from "react-query";

import CustomTable from "../../../../shared/CustomDashboardTable/CustomTable";
import {
  headersForQueries,
  mobileHeadersForQueries,
  queryStatusValues,
} from "../../../../helpers/Admin";
import { updateQueryStatus } from "../../../../services/Query";
import { useAppSnackbar } from "../../../../config/Context/SnackbarContext";

const CustomLoader = lazy(() => import("../../../../shared/CustomLoader"));
const CustomDropdown = lazy(() => import("../../../../shared/CustomDropdown"));

function DataTable({ data, totalCount, refetch }) {
  const showSnackbar = useAppSnackbar();
  const [queryStatus, setQueryStatus] = useState("");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [expandedRows, setExpandedRows] = useState([]);

  const handleToggle = (index, e) => {
    e.stopPropagation();
    const newExpandedRows = [...expandedRows];
    newExpandedRows[index] = !newExpandedRows[index];
    setExpandedRows(newExpandedRows);
  };

  const handleQueryStatus = (status) => {
    setQueryStatus(status);
  };

  const { mutate: updateStatus, isLoading: isUpdatingStatus } = useMutation(
    updateQueryStatus,
    {
      onSuccess: (res) => {
        if (res?.status === "SUCCESS") {
          showSnackbar(res?.message, "success");
          refetch();
        } else {
          showSnackbar(res?.message, "error");
        }
      },
      onError: (err) => {
        showSnackbar(err?.message, "success");
      },
    }
  );

  const handleStatusUpdate = (queryId) => {
    updateStatus({ queryId, status: queryStatus });
  };

  return (
    <div>
      <Suspense fallback={<div />}>
        <CustomLoader open={isUpdatingStatus} />
        <CustomTable
          headCells={isMobile ? mobileHeadersForQueries : headersForQueries}
        >
          <TableBody>
            {totalCount > 0 ? (
              data?.map((item, index) => (
                <React.Fragment key={index}>
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
                      {item?.phone || "-"}
                    </TableCell>
                    <TableCell
                      className={`font-poppins text-sm text-blue ${isMobile && "!hidden"}`}
                    >
                      {item?.serviceId || "-"}
                    </TableCell>
                    <TableCell
                      className={`font-poppins text-sm text-blue ${isMobile && "!hidden"}`}
                    >
                      {item?.queryStatus || "-"}
                    </TableCell>
                    {item.queryStatus === "ADDRESSED" && (
                      <TableCell
                        className={`font-poppins text-sm text-blue ${isMobile && "!hidden"}`}
                      >
                        NA
                      </TableCell>
                    )}
                    {item.queryStatus !== "ADDRESSED" && (
                      <>
                        <TableCell className={`${isMobile && "!hidden"}`}>
                          <Suspense fallback={<div />}>
                            <div className="flex flex-col lg:!flex-row gap-2">
                              <CustomDropdown
                                textClassOverride="!text-kashmirBlue"
                                classes="!rounded-md !mb-4"
                                requiredStar
                                name="status"
                                showIconOutline
                                options={queryStatusValues}
                                value={queryStatus}
                                handleChange={(e) =>
                                  handleQueryStatus(e.target.value)
                                }
                              />
                            </div>
                          </Suspense>
                        </TableCell>
                        <TableCell className={`${isMobile && "!hidden"}`}>
                          <button
                            className="w-full bg-skyn text-white px-4 py-2 mb-4 rounded-md hover:bg-skyn-dark focus:outline-none focus:ring-2 focus:ring-skyn transition-all shadow-[3px_3px_0px_#313440] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                            onClick={() => handleStatusUpdate(item?.id)}
                          >
                            Submit
                          </button>
                        </TableCell>
                      </>
                    )}
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
                        {headersForQueries
                          .filter(
                            (obj) =>
                              !mobileHeadersForQueries.some(
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
                                {heading.label !== "Update Status" &&
                                  item?.[heading.key]}{" "}
                                {heading.label === "Update Status" &&
                                  (item.queryStatus !== "ADDRESSED" ? (
                                    <>
                                      <Suspense fallback={<div />}>
                                        <div className="flex flex-col lg:!flex-row gap-2">
                                          <CustomDropdown
                                            textClassOverride="!text-kashmirBlue"
                                            classes="!rounded-md !mb-4"
                                            requiredStar
                                            name="status"
                                            showIconOutline
                                            options={queryStatusValues}
                                            value={queryStatus}
                                            handleChange={(e) =>
                                              handleQueryStatus(e.target.value)
                                            }
                                          />

                                          <button
                                            className="w-full bg-skyn text-white py-2 px-4 rounded-md hover:bg-skyn-dark focus:outline-none focus:ring-2 focus:ring-skyn transition-all shadow-[3px_3px_0px_#313440] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                                            onClick={handleStatusUpdate}
                                          >
                                            Submit
                                          </button>
                                        </div>
                                      </Suspense>
                                    </>
                                  ) : (
                                    "NA"
                                  ))}
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
    </div>
  );
}

export default DataTable;
