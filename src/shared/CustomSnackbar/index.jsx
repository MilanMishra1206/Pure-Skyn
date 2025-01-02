/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useRef } from "react";
import SnackbarIcon from "./SnackbarIcon";
import Resources from "../../config/Resources";

export default function CustomSnackbar({
  open,
  setOpen,
  text,
  subText,
  type,
  duration,
  id,
  idText,
}) {
  const handleClose = () => {
    setOpen(false);
  };
  const textareaRef = useRef < HTMLTextAreaElement > null;
  const copyToClipboard = async () => {
    if (textareaRef.current) {
      await navigator.clipboard.writeText(id);
    }
  };

  useEffect(() => {
    if (open) {
      toast?.[type](
        <div>
          <div className="ml-4 text-sm font-medium text-cello !font-poppins">
            {text}
          </div>
          {subText && (
            <div className=" ml-4 text-xs font-medium text-cello-400 !font-poppins">
              {subText}
            </div>
          )}
          {id && (
            <div className="flex items-center ml-4 text-xs text-kashmirBlue">
              {idText}
              <span className="font-medium !text-cello">
                {id?.length >= 12 ? `${id?.slice(0, 9)}...` : id}
              </span>
              <SnackbarIcon copyToClipboard={copyToClipboard} />
            </div>
          )}
        </div>,
        {
          autoClose: duration || 5000,
          progressStyle:
            type === "success"
              ? { backgroundColor: "#139C72" }
              : type === "warning"
                ? { backgroundColor: "#e3b320" }
                : type === "error"
                  ? { backgroundColor: "#d93b3b" }
                  : undefined,
          onClose: handleClose,
        }
      );
    }
  }, [open]);

  return (
    <div>
      <ToastContainer
        className="!min-w-[24rem]"
        icon={
          type === "success" ? (
            <div>
              <img
                className="!h-10 !min-w-10 !mr-4  !object-cover"
                src={Resources.images.Snackbar.successIcon}
                alt="success"
              />
            </div>
          ) : type === "warning" ? (
            <div>
              <img
                className="!h-10 !min-w-10 !mr-4  !object-cover"
                src={Resources.images.Warning.warning}
                alt="warning"
              />
            </div>
          ) : type === "error" ? (
            <div>
              <img
                className="!h-10 !min-w-10 !mr-4  !object-cover"
                src={Resources.images.Warning.error}
                alt="error"
              />
            </div>
          ) : (
            <div></div>
          )
        }
      />
      <textarea
        ref={textareaRef}
        style={{ position: "absolute", left: "-9999px" }}
        defaultValue={id}
        readOnly
      />
    </div>
  );
}
