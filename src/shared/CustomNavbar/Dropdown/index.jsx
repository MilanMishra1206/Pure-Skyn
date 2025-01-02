import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const Dropdown = ({ header, items, FlyoutContent, href = "#" }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <Link to={href} className="relative text-white no-underline">
        <div className="flex items-center">
          {header}
          {!open && (
            <MdOutlineKeyboardArrowDown className="text-white text-2xl cursor-pointer active:outline-none" />
          )}
          {open && (
            <MdOutlineKeyboardArrowUp className="text-white text-2xl cursor-pointer active:outline-none" />
          )}
        </div>
        <span
          style={{
            transform: open ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-skyn transition-transform duration-300 ease-out"
        />
      </Link>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent items={items} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
