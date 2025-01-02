import React from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

function CustomCheckBox({
  checked,
  handleChange,
  checkBoxClasses,
  label,
  labelClasses,
  size,
}) {
  return (
    <FormGroup className="!inline-block !m-0">
      <FormControlLabel
        className=""
        control={
          <Checkbox
            size={size}
            checked={checked}
            onChange={handleChange}
            className={checkBoxClasses}
            icon={
              <MdCheckBoxOutlineBlank className="text-xl shadow-insetLight rounded shadow-lg border-2" />
            }
            sx={{ color: "transparent" }}
          />
        }
        label={<p className={labelClasses}>{label}</p>}
      />
    </FormGroup>
  );
}

export default CustomCheckBox;
