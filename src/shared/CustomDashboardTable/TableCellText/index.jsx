import { TableCell } from "@mui/material";

function TableCellText({ text, className, textClasses, ...rest }) {
  return (
    <TableCell
      className={`!font-poppins !text-sm text-kashmirBlue ${className}`}
      {...rest}
    >
      <p className={textClasses}>{text === null ? "-" : text}</p>
    </TableCell>
  );
}

export default TableCellText;
