import { memo, useState } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import classNames from "classnames";

function CustomDatePicker({
  className,
  inputClassName,
  label,
  name,
  setFieldValue,
  touched,
  error,
  setFieldTouched,
  requiredStar,
  disableField,
  disableFuture,
  shouldDisableDate,
  minDate,
  textClassToOverride,
  value,
  fieldWidth,
  disablePast,
  icon,
}) {
  const [isIvalidDate, setIsInvalidDate] = useState(false);

  // Calculate tomorrow's date
  const tomorrow = dayjs().add(1, "day");

  // Calculate 15 days from tomorrow
  const fifteenDaysFromTomorrow = tomorrow.add(15, "day");

  // Disable today's date and dates 15 days from tomorrow
  const shouldDisableCustomDate = (date) => {
    return (
      dayjs(date).isBefore(tomorrow, "day") || // Disable today
      dayjs(date).isAfter(fifteenDaysFromTomorrow, "day") // Disable beyond 15 days
    );
  };

  return (
    <div className={`${fieldWidth} flex flex-col`}>
      <p
        className={classNames("text-sm font-medium pb-1", textClassToOverride)}
      >
        {label}
        {requiredStar && <span className="text-bitterSweet">*</span>}
      </p>
      <div
        className={`${className} ${error && touched && "!border !border-bitterSweet"} border`}
      >
        <div className="rounded-lg ">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              closeOnSelect
              disabled={disableField}
              disableFuture={disableFuture}
              disablePast={disablePast}
              shouldDisableDate={(date) => {
                return (
                  shouldDisableCustomDate(date) || (shouldDisableDate && shouldDisableDate(date))
                );
              }}
              className={`${disableField && "bg-solitude-1 rounded-lg !shadow-insetLight"}`}
              onOpen={() => setFieldTouched(name, true)}
              format="DD/MM/YYYY"
              value={dayjs(value, "DD/MM/YYYY")}
              slots={icon ? { openPickerIcon: icon } : {}}
              onChange={(fieldValue) => {
                if (
                  (disablePast &&
                    dayjs(fieldValue).isBefore(
                      dayjs(new Date()).subtract(1, "day")
                    )) ||
                  (disableFuture &&
                    dayjs(fieldValue).isAfter(dayjs(new Date())))
                ) {
                  setIsInvalidDate(true);
                  setFieldValue(name, "");
                } else {
                  setIsInvalidDate(false);
                  setFieldValue(
                    name,
                    fieldValue ? dayjs(fieldValue).format("DD/MM/YYYY") : ""
                  );
                }
              }}
              sx={{
                "& .MuiInputBase-input.Mui-disabled": {
                  opacity: 10,
                  WebkitTextFillColor: "rgba(0, 0, 0, 0.93)",
                },
              }}
              name={name}
              minDate={minDate}
              slotProps={{
                inputAdornment: {
                  classes: {
                    root: `!mr-0.5 !z-10 !p-3 !bg-transparent`,
                  },
                },
                actionBar: {
                  actions: !["Invalid Date", ""].includes(value || "")
                    ? ["clear"]
                    : [],
                },
                textField: {
                  variant: "filled",
                  disabled: disableField,
                  placeholder: "DD/MM/YYYY",
                  onBlur: () => setFieldTouched(name, true),
                  fullWidth: true,
                  InputProps: {
                    disableUnderline: true,
                    classes: {
                      input: `!text-sm !cursor-pointer !leading-5 !font-medium !rounded-lg !bg-transparent !py-4 !font-montserrat ${inputClassName}`,
                      root: "!mt-0",
                      adornedEnd: "!bg-transparent !rounded-lg !mr-1",
                      disabled: "!bg-gray-200 !text-disabled",
                    },
                  },
                  InputLabelProps: {
                    classes: {
                      root: " !text-sm !leading-5 !font-medium !text-platinumGranite !pt-0.5 !pb-0.5 !font-montserrat",
                      shrink: "!text-purpleComet !text-xs",
                    },
                  },
                },
              }}
            />
          </LocalizationProvider>
        </div>
      </div>
      {touched && isIvalidDate ? (
        <p className="mt-1 text-xs text-bitterSweet">Invalid Date</p>
      ) : (
        touched &&
        error && <p className="mt-1 text-xs text-bitterSweet">{error}</p>
      )}
    </div>
  );
}

export default memo(CustomDatePicker);
