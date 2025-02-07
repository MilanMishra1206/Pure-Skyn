import React, { Suspense, useState } from "react";
import {
  TableBody,
  TableRow,
  useMediaQuery,
  Link,
  TableCell,
  Collapse,
} from "@mui/material";
import { MdExpandMore, MdOutlineExpandLess } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import TableCellText from "../../../../shared/CustomDashboardTable/CustomTable";
import CustomTable from "../../../../shared/CustomDashboardTable/CustomTable";
import { headers, mobileHeaders } from "../../../../helpers/Admin";

function DataTable({ data, totalCount }) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [expandedRows, setExpandedRows] = useState([]);
  const navigate = useNavigate();

  const handleToggle = (index, e) => {
    e.stopPropagation();
    const newExpandedRows = [...expandedRows];
    newExpandedRows[index] = !newExpandedRows[index];
    setExpandedRows(newExpandedRows);
  };

  return (
    <div>
      <Suspense fallback={<div />}>
        <CustomTable headCells={isMobile ? mobileHeaders : headers}>
          <TableBody>
            {totalCount > 0 ? (
              data.map((item, index) => (
                <>
                  <TableRow
                    key={item.userId}
                    className={`cursor-pointer h-14 ${(index + 1) % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
                  >
                    <TableCell className="font-poppins text-sm text-blue">
                      <Link
                        onClick={() => navigate(`/application/${item.userId}`)}
                        underline="always"
                      >
                        {item?.id}
                      </Link>
                    </TableCell>
                    <TableCellText
                      text={item?.firstName + item?.lastName}
                      className={`${isMobile && "!hidden"}`}
                    />
                    <TableCellText
                      text={item?.email}
                      className={`${isMobile && "!hidden"}`}
                    />
                    <TableCellText
                      text={item?.phone}
                      className={`${isMobile && "!hidden"}`}
                    />
                    {/* <TableCellText
                      text={item?.appointmentName}
                      className={`${isMobile && "!hidden"}`}
                    />
                    <TableCellText
                      text={item?.price}
                      className={`${isMobile && "!hidden"}`}
                    />
                    <TableCellText
                      text={item?.technicianAssigned}
                      className={`${isMobile && "!hidden"}`}
                    />
                    <TableCellText
                      text={item?.technicianAssigned}
                      className={`${isMobile && "!hidden"}`}
                    />
                    <TableCellText
                      text={item?.appointmentSlot}
                      className={`${isMobile && "!hidden"} min-w-[125px]`}
                    /> */}
                    <TableCell className={`${isMobile && "!hidden"}`}>
                      <> - </>
                    </TableCell>
                    <TableCell
                      className={`${isMobile ? "!flex !justify-end" : ""} space-x-2 h-14`}
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
                          ?.map((heading) => (
                            <div
                              key={heading.key}
                              className="grid grid-cols-1 md:!grid-cols-2 col-auto p-2 items-center"
                            >
                              <p className="!text-cello !text-sm !font-poppins !font-medium">
                                {heading.label}:
                              </p>
                              <p className="!font-poppins !text-sm !text-kashmirBlue break-all">
                                {heading.label !== "Action" &&
                                  item?.[heading.key]}{" "}
                                {heading.label === "Action" && <> - </>}
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
    </div>
  );
}

export default DataTable;
