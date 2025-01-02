/* eslint-disable no-unused-expressions */
import { Box, Modal } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import Resources from "../../config/Resources";

function TermsAndConditions({
  open,
  setOpen,
  onCloseButton,
  modalClasses,
  icon,
  title,
  content,
  buttonText,
  isButtonDisabled,
  buttonClasses,
  antiButtonText,
  onAgree,
  onDisAgree,
}) {
  return (
    <Modal
      open={open}
      aria-labelledby="upload-documents-title"
      aria-describedby="upload-documents-description"
      className="!outline-none !flex !items-center !justify-center backdrop-blur-sm !z-40"
    >
      <Box
        className={`md:!w-52/100 lg:!w-1/3 !bg-white p-7 !outline-none relative rounded-xl ${modalClasses}`}
      >
        {onCloseButton && <button
          type="button"
          onClick={() => {
            setOpen(false);
            onCloseButton ? onCloseButton() : "";
          }}
          className=" !bg-aliceBlue-2 shadow-crossButtonShadow p-2 absolute -top-2 -right-2 rounded-[4px]"
        >
          <AiOutlineClose className="text-kashmirBlue" />
        </button>}
        <div className="flex justify-center flex-col">
          {icon && (
            <img
              src={
                icon === "information"
                  ? Resources.images.Warning.information
                  : icon === "warning"
                    ? Resources.images.Warning.warning
                    : icon === "error"
                      ? Resources.images.Warning.error
                      : ""
              }
              className="w-full !h-12 flex justify-center"
              alt={
                icon === "information"
                  ? "information"
                  : icon === "error"
                    ? "error"
                    : "warning"
              }
            />
          )}
          <p className="text-cello font-semibold text-xl font-poppins text-center mt-8">
            {title}
          </p>
          {content && (
            <div>{content}</div>
          )}
          <div className="flex space-x-2 justify-center mt-8">
            {buttonText && (
              <button
                type="button"
                className={`text-white !py-2 !px-6 !rounded-[10px] bg-skyn hover:!opacity-80 ${buttonClasses}`}
                onClick={() => onAgree()}
                disabled={isButtonDisabled ? true : false}
              >
                {buttonText}
              </button>
            )}
            {antiButtonText && (
              <button
                type="button"
                className={`bg-aliceBlue-2 text-kashmirBlue !py-2 px-6 !rounded-[10px]`}
                onClick={() => onDisAgree()}
              >
                {antiButtonText}
              </button>
            )}
          </div>
        </div>
      </Box>
    </Modal>
  );
}

export default TermsAndConditions;
