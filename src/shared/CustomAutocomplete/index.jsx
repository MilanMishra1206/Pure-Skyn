import { Chip, FormControl, TextField } from "@mui/material";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import classNames from "classnames";
import { useEffect, useState, useRef } from "react";
import "tailwindcss/tailwind.css";
import CustomCheckBox from "../CustomCheckbox";
import { MdClose } from "react-icons/md";
import Resources from "../../config/Resources";

function AutoComplete({
  size,
  label,
  name,
  id,
  value = null,
  options = [],
  placeholder,
  showOuterShadow,
  textClassOverride,
  requiredStar,
  classes,
  errorMessage,
  error,
  touched,
  disabled,
  handleBlur,
  handleChange,
  setSearchValue,
  searchValue = "",
  isLoading,
  multiple = false,
  textOnSelectAll,
  showSelectAll,
  trimTextLength,
  disableOptionsOnSelectAll,
  selectAllByDefault = false,
  chipClassName = "",
  optionLabelClasses,
  showRemove,
  showIconOutline,
}) {
  const [open, setOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(multiple ? [] : null);
  const [inputValue, setInputValue] = useState(searchValue); // Local input state

  useEffect(() => {
    if (!selectAllByDefault) {
      setSelectedOptions(
        multiple
          ? value?.map((item) => ({
              label: options.find((option) => option.value === item)?.label,
              value: item,
            })) || []
          : options.find((option) => option.value === value) || null
      );
    }
  }, [options, value, multiple, selectAllByDefault]);
  const toggleSelect = () => {
    if (!disabled) {
      setOpen((o) => !o);
    }
  };
  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue); // Update local state
    setSearchValue?.(newInputValue); // Update external state if provided
  };

  const handleSelectAllToggle = () => {
    if (options.length === selectedOptions.length) {
      setSelectedOptions([]);
      handleChange({ target: { name, value: [] } });
    } else {
      setSelectedOptions([...options]);
      handleChange({
        target: { name, value: options.map((option) => option.value) },
      });
    }
  };

  const trimmedLength = trimTextLength || 25;

  return (
    <FormControl fullWidth className={classes}>
      {label && (
        <p
          className={classNames("text-xs font-medium pb-1", textClassOverride)}
        >
          {label}
          {requiredStar && <span className="text-bitterSweet">*</span>}
        </p>
      )}
      <Autocomplete
        multiple={multiple}
        options={options}
        value={selectedOptions}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        open={open}
        onChange={(event, newValue) => {
          if (multiple) {
            setSelectedOptions(newValue);
            handleChange({
              target: { name, value: newValue.map((option) => option.value) },
            });
          } else {
            setSelectedOptions(newValue);
            handleChange({ target: { name, value: newValue?.value } });
          }
        }}
        disableCloseOnSelect={multiple}
        disabled={disabled}
        onClose={() => setInputValue("")}
        renderTags={(tagValue) =>
          multiple &&
          showSelectAll &&
          selectedOptions.length === options.length ? (
            <Chip
              title={textOnSelectAll}
              label={textOnSelectAll}
              variant="filled"
              onDelete={handleSelectAllToggle}
            />
          ) : (
            <div className="flex items-center">
              {tagValue.slice(0, 1)?.map((option) => (
                <Chip
                  className={chipClassName}
                  label={
                    option.label.length > trimmedLength
                      ? `${option.label.slice(0, trimmedLength - 3)}...`
                      : option.label
                  }
                  variant="outlined"
                  key={option.value}
                />
              ))}
              {tagValue.length > 1 && ` + ${tagValue.length - 1}`}
            </div>
          )
        }
        renderOption={(props, option, { selected }) => (
          <li
            {...props}
            className={`${props.className} ${
              multiple &&
              disableOptionsOnSelectAll &&
              selectedOptions.length === options.length &&
              selected &&
              "pointer-events-none opacity-50"
            } ${optionLabelClasses}`}
            key={option.value}
          >
            {multiple && <CustomCheckBox checked={selected} />}
            {option.label}
          </li>
        )}
        filterOptions={(menuItems, params) => {
          const filtered = createFilterOptions()(menuItems, params);
          const optionName =
            options.length === selectedOptions.length
              ? "Unselect All"
              : "Select All";

          return showSelectAll && filtered.length > 0
            ? [{ label: optionName, value: optionName }, ...filtered]
            : filtered;
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            name={name}
            id={id}
            size={size || "medium"}
            placeholder={placeholder || "Select"}
            error={error && touched}
            disabled={disabled}
            onClick={toggleSelect}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <div className="flex items-center">
                  {showRemove && (multiple ? value.length > 0 : value) ? (
                    <MdClose
                      className="cursor-pointer !mr-2 !text-sm"
                      onClick={() =>
                        handleChange({
                          target: { name, value: multiple ? [] : "" },
                        })
                      }
                    />
                  ) : showIconOutline ? (
                    <div
                      className={`p-2 mr-2 rounded shadow bg-aliceBlue-2 !cursor-pointer`}
                    >
                      <img
                        className="!min-w-3 !h-2"
                        src={Resources.images.Common.dropdownIcon}
                        alt="dropdown icon"
                      />
                    </div>
                  ) : (
                    <div className="p-2 mr-2 !cursor-pointer">
                      <img
                        className="!min-w-3 !h-2"
                        src={Resources.images.Common.dropdownIcon}
                        alt="dropdown icon"
                      />
                    </div>
                  )}
                </div>
              ),
            }}
            sx={{
              borderRadius: "6px",
              boxShadow: showOuterShadow
                ? "0px 6px 12px #185EC414;"
                : "inset 3px 3px 4px #00000014, inset -3px -3px 4px #FFFFFFE6",
              "& .MuiOutlinedInput-notchedOutline": {
                border: !(error && touched) ? 0 : "1px solid #FF6262",
              },
              "& css-mh9hao-MuiFormControl-root-MuiTextField-root": {
                border: 0, // Remove border when Autocomplete options open
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                border: !(error && touched) ? 0 : "1px solid #FF6262",
              },
              "&..MuiAutocomplete-hasPopupIcon .MuiOutlinedInput-notchedOutline":
                {
                  border: "none",
                },
              "& .MuiInputBase-input.Mui-disabled": {
                opacity: 10,
                WebkitTextFillColor: "rgba(0, 0, 0, 0.93)",
              },
            }}
          />
        )}
        noOptionsText={isLoading ? "Loading..." : "No options"}
        sx={{
          "& .MuiAutocomplete-inputRoot": {
            paddingRight: "0px !important", // Remove padding-right for dropdown icon
          },
        }}
      />
      {error && touched && (
        <div className="mt-1 ml-1 text-xs text-bitterSweet">{errorMessage}</div>
      )}
    </FormControl>
  );
}

export default AutoComplete;
