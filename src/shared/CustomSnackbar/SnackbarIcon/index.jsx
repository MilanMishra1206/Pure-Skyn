/* eslint-disable react/jsx-no-useless-fragment */
import { useState } from "react";
import { FaCheckCircle, FaCopy } from "react-icons/fa";

export default function SnackbarIcon(props) {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    props?.copyToClipboard();
    setCopied(true);
  };

  return copied ? (
    <FaCheckCircle className="!text-green-600 m-1 text-sm inline-block align-middle" />
  ) : (
    <FaCopy
      className="inline-block m-1 text-sm align-middle cursor-pointer"
      onClick={copyToClipboard}
    />
  );
}
