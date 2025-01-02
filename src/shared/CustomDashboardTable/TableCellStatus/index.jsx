import { TableCell } from "@mui/material";
import { useEffect, useState } from "react";

function TableCellStatus({ status, className }) {
  const [statusColor, setStatusColor] = useState("");
  useEffect(() => {
    if (
      status === "Complete" ||
      status === "Completed" ||
      status === "Active"
    ) {
      setStatusColor("!text-freeSpeechAquamarine !bg-freeSpeechAquamarine");
    } else if (
      status === "Overdue" ||
      status === "Rescheduled" ||
      status === "Inactive"
    ) {
      setStatusColor("!text-lightningYellow !bg-lightningYellow");
    } else if (status === "Cancelled") {
      setStatusColor("!text-bitterSweet !bg-bitterSweet");
    } else if (status === "Scheduled") {
      setStatusColor("!text-denim !bg-denim");
    }
  }, [status]);
  return (
    <TableCell className={className}>
      <p
        className={`!font-poppins py-2 px-3 !text-xs !text-center rounded-full ${statusColor}  !bg-opacity-25`}
      >
        {status === null ? "-" : status}
      </p>
    </TableCell>
  );
}

export default TableCellStatus;
