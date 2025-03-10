import { FormControl, MenuItem, Select } from "@mui/material";
import classNames from "classnames";
import { useState } from "react";
import "tailwindcss/tailwind.css";

function CustomDropdown({
  size,
  labelToShow,
  name,
  id,
  value,
  options,
  placeholder,
  showOuterShadow,
  placeHolderClasses,
  textClassOverride,
  requiredStar,
  classes,
  selectClasses,
  labelClasses,
  errorMessage,
  error,
  touched,
  disabled,
  handleBlur,
  handleChange,
}) {
  const [open, setOpen] = useState(false);
  const toggleSelect = () => {
    if (!disabled) {
      setOpen((o) => !o);
    }
  };

  return (
    <FormControl fullWidth className={classes}>
      {labelToShow && (
        <p
          className={classNames("text-sm font-medium pb-1", textClassOverride)}
        >
          {labelToShow}
          {requiredStar && <span className="text-bitterSweet">*</span>}
        </p>
      )}
      <Select
        name={name}
        id={id}
        size={size || "medium"}
        displayEmpty
        className={`${selectClasses} ${disabled && "bg-solitude-1"} !w-auto overflow-x-auto`}
        value={value}
        // placeholder={placeholder || "Select"}
        onChange={handleChange}
        open={open}
        onBlur={handleBlur}
        onClick={toggleSelect}
        disabled={disabled}
        inputProps={{
          classes: {
            select: "!text-xs !py-14px !pl-3",
            placeholder: "!opacity-30 !text-matterhorn",
          },
        }}
        renderValue={(selected) => {
          const selectedOption = options.find((opt) => opt.value === selected);
          return (
            <div className="max-w-40 md:!max-w-full font-poppins text-sm overflow-hidden text-ellipsis whitespace-nowrap">
              {selectedOption?.label || "Select"}
            </div>
          );
        }}
        MenuProps={{
          PaperProps: {
            style: {
              maxWidth: "90%",
              width: "auto",
              overflow: "auto",
            },
          },
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
        }}
        sx={{
          borderRadius: "6px",
          boxShadow: showOuterShadow
            ? "0px 6px 12px #185EC414;"
            : "inset 3px 3px 4px #00000014, inset -3px -3px 4px #FFFFFFE6",
          ".MuiOutlinedInput-notchedOutline": {
            border: !(error && touched) ? 0 : "1px solid #FF6262",
          },
          "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            border: !(error && touched) ? 0 : "1px solid #FF6262",
          },
          "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              border: !(error && touched) ? 0 : "1px solid #FF6262",
            },
          "& .MuiInputBase-input.Mui-disabled": {
            opacity: 10,
            WebkitTextFillColor: "rgba(0, 0, 0, 0.93)",
          },
        }}
      >
        <MenuItem disabled value="">
          <div
            className={
              placeHolderClasses ||
              "!opacity-30 !text-matterhorn !font-poppins !text-sm"
            }
          >
            {placeholder || "Select"}
          </div>
        </MenuItem>
        {options?.map(
          (option) =>
            !option?.isHidden && (
              <MenuItem
                key={option.value}
                value={option.value}
                disabled={option.disable || false}
              >
                <div
                  className={`flex items-center !text-sm !font-poppins ${labelClasses}`}
                >
                  {option.label}
                  {option.count >= 0 && (
                    <p className="flex !items-center !justify-center !h-6 !min-w-6 mx-1 text-xs font-medium text-white bg-denim rounded-full shadow-resultFoundShadow">
                      {option?.count}
                    </p>
                  )}
                </div>
              </MenuItem>
            )
        )}
      </Select>
      {error && touched && (
        <div className="mt-1 ml-1 text-xs text-bitterSweet">{errorMessage}</div>
      )}
    </FormControl>
  );
}

export default CustomDropdown;
