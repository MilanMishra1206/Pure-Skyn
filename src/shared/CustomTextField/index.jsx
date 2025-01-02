/* eslint-disable no-undef */
import "tailwindcss/tailwind.css";
import { memo } from "react";
import TextField from "@mui/material/TextField";
import classNames from "classnames";
import { IconButton, InputAdornment } from "@mui/material";

function CustomTextField({
  className,
  inputClassName,
  onChange,
  value,
  name,
  touched,
  error,
  handleBlur,
  requiredStar,
  disabledField,
  maxLength,
  autoComplete,
  placeholder,
  labelToShow,
  textClassOverride,
  placeholderClasses,
  textFieldColorClass,
  fieldWidth,
  icon,
  iconEnd,
  type,
  multiline,
  rows,
  regex,
  textTransform,
  iconOnClick,
}) {
  return (
    <div className={`flex flex-col ${fieldWidth}`}>
      {labelToShow && (
        <div className="flex flex-row justify-between">
          <p
            className={classNames(
              "text-sm font-medium pb-1",
              textClassOverride
            )}
          >
            {labelToShow}
            {requiredStar && <span className="text-bitterSweet">*</span>}
          </p>
        </div>
      )}
      <div className={`${className}`}>
        <div
          className={`rounded-lg h-12 border ${textFieldColorClass} ${
            disabledField && "!bg-solitude-1"
          } !flex !items-center
           ${error && touched && "!border !border-bitterSweet"}`}
        >
          <TextField
            fullWidth
            rows={rows}
            multiline={multiline}
            disabled={disabledField}
            required={requiredStar}
            variant="filled"
            placeholder={placeholder}
            onBlur={handleBlur}
            type={type}
            InputProps={{
              startAdornment: icon && (
                <InputAdornment position="start" className="!mt-0">
                  <IconButton
                    className="!text-lg !px-0 !py-0"
                    onClick={iconOnClick}
                  >
                    {icon}
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: iconEnd && (
                <InputAdornment position="end" className="!mt-0">
                  <IconButton
                    className="!text-lg !px-0 !py-0"
                    onClick={iconOnClick}
                  >
                    {iconEnd}
                  </IconButton>
                </InputAdornment>
              ),
              classes: {
                input: `!text-sm !h-full !font-poppins !py-0 !pl-0   ${placeholderClasses}`,
                root: `!rounded-lg !pl-3 !w-[96.5%] ${inputClassName} `,
                disabled: `!bg-transparent ${disabledField && "!bg-solitude-1"}`,
              },
              disableUnderline: true,
            }}
            InputLabelProps={{
              classes: {
                root: "!text-sm !text-licorice",
                shrink: "!text-licorice !text-xs",
              },
            }}
            sx={{
              "& .MuiInputBase-input.Mui-disabled": {
                opacity: 10,
                WebkitTextFillColor: "rgba(0, 0, 0, 0.93)",
              },
            }}
            inputProps={{
              maxLength,
              autoComplete,
            }}
            onChange={(event) => {
              if (
                textTransform &&
                textTransform?.toLowerCase() === "uppercase"
              ) {
                event.target.value = event.target.value
                  .toString()
                  .toUpperCase();
              }
              if (/[<>]/.test(event.target.value)) {
                return;
              }
              if (regex && !regex.test(event.target.value)) {
                return;
              } else if (maxLength && event.target.value.length > maxLength) {
                return;
              }
              if (type === "number") {
                if (
                  Number(event.target.value) ||
                  Number(event.target.value) === 0
                ) {
                  const newValue = parseFloat(event.target.value) || 0;
                  event.target.value = Math.max(newValue, 0);
                  if (
                    event.target.value.length === 1 &&
                    event.target.value === "0"
                  ) {
                    event.target.value = "";
                  }
                  onChange(event);
                } else {
                  event.target.value = "";
                  onChange(event);
                }
              } else {
                onChange(event);
              }
            }}
            value={value}
            name={name}
          />
        </div>
      </div>
      {touched && error && (
        <p className="mt-1 ml-1 text-xs text-bitterSweet">{error}</p>
      )}
    </div>
  );
}

export default memo(CustomTextField);
