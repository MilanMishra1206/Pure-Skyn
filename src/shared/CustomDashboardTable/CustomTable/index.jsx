import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import CustomCheckBox from "../../CustomCheckbox";

function CustomTable({
  headCells,
  children,
  tableContainerClasses,
  headClass,
  tableScrollbarWidth,
}) {
  const [pinnedStyles, setPinnedStyles] = useState({});
  const headRef = useRef(null);

  useEffect(() => {
    if (headRef.current) {
      const pinnedOffsets = {};
      let offset = -18;
      headCells.forEach((cell, index) => {
        const th = headRef.current?.querySelectorAll("th")[index];
        if (th && cell.pinned) {
          pinnedOffsets[cell.key] = { left: `${offset + 18}px` };
          offset += th.offsetWidth;
        }
      });
      setPinnedStyles(pinnedOffsets);
    }
  }, [headCells]);

  return (
    <TableContainer
      component={Paper}
      sx={
        tableScrollbarWidth
          ? {
              "&::-webkit-scrollbar": {
                height: `${tableScrollbarWidth}px`,
              },
              "&::-webkit-scrollbar-track": {
                background: "#f1f1f1",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#888",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#555",
              },
            }
          : {}
      }
      className={`shadow-lg !rounded-2xl ${tableContainerClasses}`}
    >
      <Table aria-label="simple table" size="small">
        <TableHead ref={headRef} className="bg-solitude-1 h-14 sticky top-0">
          <TableRow>
            {headCells.map(
              ({
                key,
                label,
                checkboxSelection,
                onCheckBoxSelection,
                markAll,
                setMarkAll,
                className,
                pinned,
                left,
                sortIcon,
                onClickSortIcon,
              }) => (
                <TableCell
                  key={key}
                  style={pinned ? pinnedStyles[key] : {}}
                  className={`!text-cello !text-sm  !font-poppins !font-medium ${className} ${headClass} ${
                    pinned ? `static md:!sticky z-10 bg-[#ecf2fb] ${left}` : ""
                  }`}
                >
                  {checkboxSelection || sortIcon ? (
                    <span className="flex items-center justify-start">
                      {checkboxSelection && (
                        <CustomCheckBox
                          checked={markAll}
                          checkBoxClasses="!p-0"
                          handleChange={(e) => {
                            setMarkAll((prev) => !prev);
                            onCheckBoxSelection(e);
                          }}
                        />
                      )}
                      {label}
                      {sortIcon ? (
                        <p className="mx-1" onClick={onClickSortIcon}>
                          {sortIcon}
                        </p>
                      ) : (
                        ""
                      )}
                    </span>
                  ) : (
                    label
                  )}
                </TableCell>
              )
            )}
          </TableRow>
        </TableHead>
        {React.Children.map(children, (child) =>
          React.isValidElement(child) && typeof child.type === "function"
            ? React.cloneElement(child, {
                pinnedStyle: pinnedStyles[child.props.columnKey],
              })
            : child
        )}
      </Table>
    </TableContainer>
  );
}

export default CustomTable;
